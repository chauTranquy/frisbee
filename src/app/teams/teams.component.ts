import { Component, OnInit,AfterViewInit, Inject, forwardRef  } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../team.service';
import { Observable } from 'rxjs/Observable';
import {AppComponent }  from '../app.component';

@Component({
  moduleId: module.id,
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css'],
  providers:[TeamService]

})
export class TeamsComponent implements OnInit  {

	  teams :Team[];
  dbEnable:boolean=false;
	dbName:string;
	dbErrors:string[]=[];
    public content: string = "just content";
    public type: string = "success";
    numTeams:number=0;
    
    teamsLoaded:boolean=false;
    
    records$:Observable<Team[]>;


  constructor(protected teamService:TeamService) {
  	 this.records$ = this.teamService.records$;  
  	 this.teamService.records$.subscribe((res)=>this.numTeams=res.length);
	 this.teamService.loadAll();
	 
  
   }

  ngOnInit() {

console.log(this);


  
  }

  
  addTeam():void{

let newTeam=new Team(null, "ok");

	this.teamService.add(newTeam);

}
  
  

}
