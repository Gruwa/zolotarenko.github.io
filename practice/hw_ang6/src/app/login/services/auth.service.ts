import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITabTypesShifts} from '../../shared/interfaces/types.interface';
import {AuthGuardService} from './auth-guard.service';
import {FlowService} from '../../shared/services/flow.service';
import {DataService} from '../../shared/services/data.service';
import {Observable} from 'rxjs';
import {HttpService} from '../../shared/services/http.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

/**
 * Auth Service
 */

@Injectable()
export class AuthService {

  /**
   * Variable of tab
   * @type {ITabTypesShifts}
   * @memberof AuthService
   */

  public tab: ITabTypesShifts = 'upcoming';

  /**
   * Creates an instance of HttpService
   * @param {HttpClient} http
   * @param {AuthGuardService} authGuardService
   * @param {FlowService} flowService
   * @param {DataService} dataService
   * @param {ToastrService} toastr
   * @param {HttpService} httpService
   * @param {Router} router
   * @memberof AuthService
   */

  constructor(private http: HttpClient,
              private authGuardService: AuthGuardService,
              private flowService: FlowService,
              private dataService: DataService,
              private toastr: ToastrService,
              private httpService: HttpService,
              private router: Router,
              private localStorage: LocalStorageService) {
  }

  /**
   * Method for put shifts in flow
   * @param {object} body
   * @returns {void}
   * @memberof AuthService
   */

  public onLogin(body: object): void {
    this.onLoginRequest(body).subscribe((resp) => {
      this.toastr.success(this.dataService.httpSuccessResponse['login']);
      this.localStorage.store('user', body['Username']); // TODO - change wen will fix with data object
      this.httpService.getRestaurants();
      this.flowService.dataSmallSpinner$.next(true);
      this.router.navigate(['/login/schedule']);
    });
    console.log('!!!!!AuthService - GET LOGIN!!!!!'); // TODO - DELETE when will be ready auth
  }

  /**
   * Method for get shifts
   * @param {object} body
   * @returns {Observable<object>}
   * @memberof AuthService
   */

  public onLoginRequest(body: object): Observable<object> {
    return this.http.post(this.dataService.BASEURL + '/login', body);
  }
}
