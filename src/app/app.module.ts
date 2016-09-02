import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { Route} from './app.routes';
import { HttpModule } from '@angular/http';
import {TeamService} from './team.service';
import { MatchsComponent } from './matchs/matchs.component';
import { TeamsComponent } from './teams/teams.component';
import { AppComponent }  from './app.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';



@NgModule({
  imports: [ BrowserModule, Route,HttpModule,SimpleNotificationsModule, ModalModule.forRoot(),
    BootstrapModalModule],
  declarations: [ AppComponent, MatchsComponent, TeamsComponent],
//  directives:[RouterLink, RouterOutlet],
 providers:[TeamService,  { provide: 'Window',  useValue: window }],
  bootstrap: [ AppComponent ]
})
export class AppModule {


 }