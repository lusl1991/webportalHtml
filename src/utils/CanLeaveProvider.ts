/**
 * 退出登录路由
 */
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../app/login/user';
import { HomeComponent } from '../app/home/home.component';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class CanLeaveProvider implements CanDeactivate<HomeComponent> {
  constructor (
    private confirmSrv: NzModalService,
    private router: Router
  ) {}
 
  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Observable((observer) => {
      this.confirmSrv.confirm({
        title: '确认要离开吗？',
        content: '你已经填写了部分表单离开会放弃已经填写的内容。',
        okText: '离开',
        cancelText: '取消',
        maskClosable: false,
        onOk: () => {
          observer.next(true);
          observer.complete();
          this.router.navigate(['login']);
        },
        onCancel: () => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}