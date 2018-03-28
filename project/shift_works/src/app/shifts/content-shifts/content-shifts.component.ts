import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShiftsService} from '../../shared/services/shifts.service';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../../shared/services/http.service';
import {FakeService} from '../../shared/services/fake.service';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {ITabTypes} from '../../shared/interfaces/types.interface';
import {IShiftsSorted} from '../../shared/interfaces/shift.interface';


@Component({
    selector: 'app-content-shifts',
    templateUrl: './content-shifts.component.html',
    styleUrls: ['./content-shifts.component.scss']
})
export class ContentShiftsComponent implements OnInit, OnDestroy {

    /**
     * Variable of tab
     * @type {ITabTypes}
     * @memberof ContentShiftsComponent
     */

    public tab: ITabTypes = 'upcoming';

    /**
     * Variable of sortShifts
     * @type {Array<IShiftsSorted>}
     * @memberof ContentShiftsComponent
     */

    public sortShifts: Array<IShiftsSorted>;

    /**
     * Variable of ngUnsubscribe
     * @type {Subject<void>}
     * @memberof ContentShiftsComponent
     */

    private ngUnsubscribe: Subject<void> = new Subject<void>();

    /**
     * Creates an instance of ContentShiftsComponent
     * @param {HttpClient} http
     * @param {ShiftsService} shiftsService
     * @param {HttpService} httpService
     * @param {FakeService} fakeService
     * @param {LocalStorageService} localStorage
     * @param {Router} router
     * @memberof ContentShiftsComponent
     */

    constructor(public http: HttpClient,
                public shiftsService: ShiftsService,
                public httpService: HttpService,
                public fakeService: FakeService,
                public router: Router,
                public localStorage: LocalStorageService) {
    }

    /**
     * Method ngOnInit
     * @returns {void}
     * @memberof ContentShiftsComponent
     */

    ngOnInit(): void {
        this.shiftsService.dataTab$.takeUntil(this.ngUnsubscribe).subscribe(this.dataFlowObserver.bind(this));
        this.tab = this.localStorage.retrieve('tab');

        if (this.httpService.dataOfShifts$ === undefined) {
            this.httpService.getShifts(this.tab);
        }

        this.httpService.dataOfShifts$.takeUntil(this.ngUnsubscribe).subscribe();
        this.getShifts();
    }

    /**
     * Method ngOnDestroy
     * @returns {void}
     * @memberof ContentShiftsComponent
     */

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    /**
     * Method of geting event from tab flow
     * @returns {void}
     * @memberof ContentShiftsComponent
     */

    dataFlowObserver(eventData: ITabTypes): void {
        console.log('dataTab$', eventData);
        this.tab = eventData;
        this.localStorage.store('tab', this.tab);
    }

    /**
     * Method for get Shifts
     * @returns {void}
     * @memberof ContentShiftsComponent
     */

    getShifts() {
        this.sortShifts = this.shiftsService.sortShifts(this.httpService.dataOfShifts$['array']);
    }

    /**
     * Method for add new request
     * @returns {void}
     * @memberof ContentShiftsComponent
     */

    addNewMyRequest() {
        console.log('ALL SAVE');
        this.router.navigate(['/shifts', 'new']);
    }
}
