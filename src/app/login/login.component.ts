import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
import { ActivatedRoute, Router } from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/login/reset.css','../../assets/css/login/style.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  @Input() user : User;

  constructor(
    public loginService : LoginService,
    public router : Router,
    private aRoute : ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = new User('admin','123456');
  }

  get userInfo() {
    return JSON.stringify(this.user);
  }

  /** 
   * 登录 
   */  
  login() {  
      this.loginService  
        .login(this.user)  
        .then(result => {  
          if(result.success){
            this.router.navigate(['home',{'account':this.user.account}],{relativeTo:this.aRoute.root});
          }else{
            alert(result.message);
          }
        });  
  }

  refresh(obj) {
    //document.getElementsByClassName('captcha')[0].setAttribute( 'src', encodeURI("http://localhost:18080/webportal/captcha/getCaptchaCode?"+new Date()));
    $(".captcha").attr('src',encodeURI("http://localhost:18080/webportal/captcha/getCaptchaCode?"+new Date()));//利用jquery方式
  }

}
