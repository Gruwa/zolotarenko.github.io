import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {MainService} from '../../../shared/services/index';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss']
})
export class HelloPageComponent {

  /**
   * Creates an instance of HelloPageComponent.
   * @param {TranslateService} translate
   * @param {Router} router
   * @param {LocalStorageService} storage
   * @param {MainService} mainService
   * @param {ToastsManager} toast
   * @param {ViewContainerRef} vcr
   * @memberof HelloPageComponent
   */

  constructor(
    public toast: ToastsManager, vcr: ViewContainerRef,
    public translate: TranslateService,
    private storage: LocalStorageService,
    public router: Router,
    public mainService: MainService
  ) {
    this.toast.setRootViewContainerRef(vcr);
  }

  /**
   * Method for button hello Angular
   * @returns {void}
   * @memberof HelloPageComponent
   */

  helloAngular(): void {
    this.toast.success('Hello Ang');
    if (this.storage.retrieve('language') === 'ru') {
      this.storage.store('language', 'en');
    } else {
      this.storage.store('language', 'ru');
    }
  }

}
