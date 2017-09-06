import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes'; 
import { AppComponent } from './app.component';
import { Error404Component } from './error/404.component';
import {
    UsersComponent,
    UserComponent,
    UserInformationComponent
} from './users';
import {
    UsersService,
    EventRouteActivatorService
} from './shared';
 
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserInformationComponent,
        Error404Component
    ],
    providers: [
        UsersService,
        EventRouteActivatorService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }