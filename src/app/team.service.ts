import { Injectable, Inject } from '@angular/core';
import { Team } from './model/team';
import {WebSQLService} from './web-sql.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TeamService extends WebSQLService{
window;
dbName="frisbee";
tableName='teams';
dbDescription="Bdd de l'appli de Frisbee Championship";

protected primaryKey='id_team';

  constructor(@Inject('Window') window: Window) {
  super(window);
  this.window=window;
  this.setDb();
  if(this.webSQLEnable) {
  this.createTables();


 
  }
  }

  
  
  private createTables():void{
  
let  createTeamTable='CREATE TABLE IF NOT EXISTS `teams` (`id_team` INTEGERS PRIMARY KEY AUTOINCREMENT, `name` TEXT,`poule` TEXT,`id_tournament` INTEGER)';

this.executeTransaction(createTeamTable).then((data)=>{


},(error)=>{

this.sqlErrorMessage(error.result.message+' code '+error.result.code);
});

  
  
  
  }
  
  getTeams():void{
  
  this.loadAll();
 

  
  
  
  }
  
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  

}
