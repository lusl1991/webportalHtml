/**
 * 权限路由
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { User } from '../app/login/user';

@Injectable()
export class CanActivateProvider implements CanActivate {
    accout:string;

  	constructor(
        private router: Router
  	) { }
  
  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        this.accout = route.paramMap.get("account");
  		if(this.accout == null){
            alert("用户尚未登录");
            this.router.navigate(['login']);
        }
        return true;
  	}
}
