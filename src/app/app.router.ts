/**
 * 导入我们的路由模块RouterModule以获取路由的支持
 * 然后导入了Routes,这是一个路由的配置数组，我们需要使用它来配置我们的路由
 */
import {RouterModule,Routes} from "@angular/router";

/**
 * 导入NgModule装饰器
 */
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/**
 * 导入路由守卫
 */
import { CanActivateProvider } from '../utils/canactivateprovider';
import { CanLeaveProvider } from '../utils/canleaveprovider';

const routes:Routes=[
  { 
    path: '',
    redirectTo:"login",
    pathMatch: 'full',
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateProvider]
  },
  { 
    path: 'logout',
    component: HomeComponent,
    canDeactivate: [CanLeaveProvider]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouter {}

//export const AppRouter = RouterModule.forRoot(routes);