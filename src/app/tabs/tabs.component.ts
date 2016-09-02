import { Component, OnInit, ViewChild } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_DIRECTIVES, MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';

import {NgModel} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/common';

import { Team } from '../model/team';


const TEAMS: Team[] = [
  { id_team: 11, name: 'Mr. Nice' }

];

@Component({
  moduleId: module.id,
  selector: 'ng-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css'],
  directives: [TAB_DIRECTIVES, NgModel,FORM_DIRECTIVES,MODAL_DIRECTIVES, CORE_DIRECTIVES ],
   viewProviders:[BS_VIEW_PROVIDERS]
})
export class TabsComponent implements OnInit {

	
	public tabs:Array<any> = [
    {title: 'Dynamic Title 1', template: '<div *ngFor="let team of teams">{{team.name}}</div>', active:true},
    {title: 'Dynamic Title 2', content: '{{teams.length}}Dynamic content 2'},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3'}
  ];

 public teams :Array<Team> = TEAMS;

  constructor() {
  
  console.log(this.teams.length);
  
   }



  ngOnInit() {
  
  let newTeam = new Team(25,'Ouizz');
  
  this.teams.push(newTeam);
  
  }
  
  addTeam(){
  
  
  
  this.teams.push({id_team:20,name:'okokok'});
  this.teams[0].name="ok";
  
  }
  
  deleteTeam(team:Team){
  	
  	
  	let  key : number =this.teams.indexOf(team);
  	
  	if(key===-1) return;
  	
  	console.log(key);
 	this.teams.splice(key, 1);
  	
  
  	
  
  }

}
