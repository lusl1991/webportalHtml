import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouter } from './app.router';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpUtilsService } from '../utils/httputils.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent
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

  ],
  providers: [HttpUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
