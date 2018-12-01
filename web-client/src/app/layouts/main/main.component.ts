import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { Principal } from '../../shared'

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private principal: Principal
  ) {
    translateService.setDefaultLang('en')
  }

  ngOnInit() {
    this.principal.identity().then((u) => {
      this.translateService.use(u.langKey || 'en')
    })
  }
}
