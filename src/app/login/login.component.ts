import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from '../../environments/environment';

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
    this.refresh();
  }

  /**
   * 获取已登录的用户信息
   */
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

  /**
   * 获取图片验证码
   */
  refresh() {
    /**
     * 方法一：原生js对象
     */
    //document.getElementsByClassName('captcha')[0].setAttribute( 'src', encodeURI( environment.apiBase + "captcha/getCaptchaCode?"+new Date()));

    /**
     * 方法二：引入jquery插件
     */
    $(".captcha").attr('src',encodeURI( environment.apiBase + "captcha/getCaptchaCode?"+new Date()));//利用jquery方式
  }

}
