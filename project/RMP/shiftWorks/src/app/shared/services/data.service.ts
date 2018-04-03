import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {HttpService} from './http.service';
import {FakeService} from './fake.service';
import {LocalStorageService} from 'ngx-webstorage';
import {
  IShift,
  IShiftsSorted
} from '../interfaces/shift.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  /**
   * Created flow of tabs
   * @type {Subject<any>}
   * @memberof DataService
   */

  public dataTab$ = new Subject<any>();

  /**
   * Created flow of login
   * @memberof ShiftsService
   */

  public dataLogin$: Observable<object>;

  /**
   * Created flow of tabs
   * @type {Subject<any>}
   * @memberof DataService
   */

  public dataShifts$: Observable<object>;

  /**
   * Creates an instance of dataGroupRestaurant$
   * @memberof DataService
   */

  public dataGroupRestaurant$: Observable<object>;

  /**
   * Creates an instance of DataService
   * @memberof DataService
   */

  constructor() {
  }

}
