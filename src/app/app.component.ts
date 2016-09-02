import { Component, OnInit, ViewChild, Output, EventEmitter,ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Team } from './model/team';
import {NotificationsService, SimpleNotificationsComponent} from "angular2-notifications"
import {PushNotificationService} from "./push-notification.service"
import {TeamService} from './team.service';
import { Observable } from 'rxjs/Observable';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { TeamsComponent } from './teams/teams.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[TeamService, NotificationsService],
 // declarations:[TeamsComponent],
  directives:[TeamsComponent,RouterLink, RouterOutlet]
  
})
export class AppComponent implements OnInit {
  title = 'Yes man';
  dbEnable:boolean=false;
	dbName:string;
  records$:Observable<Team[]>;
  numItems:number;
  modalMessage:string="";
  num:number;
 
	public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: false,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: "visible",
        rtl: false,
        animate: "scale",
        position: ["right", "bottom"]
    };
  
 
    
    
  constructor(private teamService: TeamService, private _service: NotificationsService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
  	
  	
  	overlay.defaultViewContainer = vcRef;
  	
  	
  	this.teamService.sqlErrorMessage$.subscribe(
  	obj =>{
  		

  	if(obj.type=='alert')this._service.error('Erreur SQL', obj.message, {timeOut: 0, clickToClose: true});
  	if(obj.type=='success')this._service.success('Youppie', obj.message);
  		  	
  	
  	});
 
  
   }
  
  ngOnInit() : void{
  
  this.dbEnable=this.teamService.webSQLEnable;
  this.dbName=this.teamService.dbName;
 this.records$ = this.teamService.records$;  

    
  
  }
  
  deleteTeam(id:number) : void{
  
  this.modal.confirm()
    .titleHtml('Suppression d\'une &eacute;quipe')
    .body('Voulez-vous vraiment supprimer cette &eacute;quipe ?')
    .okBtn('Oui')
    .showClose(true)
    .cancelBtn('Annuler')
    .open()
   .catch(err => alert("ERROR")) // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(result => this.teamService.delete(id)) // if were here ok was clicked.
            .catch() // if were here it was cancelled (click or non block click)
 
  
  }
  
  



   
  
}
