import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    //ng2-translate国际化服务相关的配置
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');
		const browserLang = this.translate.getBrowserLang();
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

}
