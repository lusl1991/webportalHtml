import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRouter } from './app.router';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpUtilsService } from '../utils/httputils.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Ng2Echarts } from 'ng2-echarts';
import { EchartUtils } from '../utils/EchartUtils';

import { CanActivateProvider } from '../utils/canactivateprovider';
import { CanLeaveProvider } from '../utils/canleaveprovider';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent,
    Ng2Echarts
],
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule,
    FormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    HttpUtilsService,
    CanActivateProvider,
    CanLeaveProvider,
    EchartUtils
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
