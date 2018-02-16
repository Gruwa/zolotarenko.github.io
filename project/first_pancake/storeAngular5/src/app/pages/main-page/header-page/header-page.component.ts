import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService, MainService} from '../../../shared/services/index';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  public menuFocus: boolean = false;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public mainService: MainService,
    public authService: AuthService,
    public localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate(['/main']);
  }

  changeLanguage(lang: string) {
    this.mainService.setLanguage(lang);
  }

  closeSideBar() {
    this.mainService.changePositionSideBar();
  }

  LogOut() {
    this.authService.onLogOut();
  }
}
