import { Injectable, Inject } from '@angular/core';
import { Team } from './model/team';
import {WebSQLService} from './web-sql.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TeamService {
window;

  constructor(private http: Http, @Inject('Window') window: Window) {
  this.window=window;
  console.log(window['openDatabase'], this.window);
  
  
  }
  
  
  getTeams():Promise<Team[]>{
  
 return this.http.get('/teams.json').toPromise()
               .then(response =>{console.log(response); return response.json().data||{};})
               .catch(this.handleError);

  
  
  
  }
  
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  

}
