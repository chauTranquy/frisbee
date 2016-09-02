import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WebSQLService {

protected primaryKey:string;

protected _records$:Subject<any[]>;

public dataStore: {  // This is where we will store our data in memory
    records: any[]
  };


private sqlErrorMessageSource = new Subject<any>();

sqlErrorMessage$ = this.sqlErrorMessageSource.asObservable();

	isLoaded:boolean=false;
	webSQLEnable:boolean=false;
	window;
	dbName:string="";
	tableName:string;
	dbVersion:number=0.1;
	dbDescription:string="A Simple Database";
	dbSize:number=1024*1024;
	dbObj;
	
	
  constructor(@Inject('Window') window: Window) { 
  this.window=window;
  this.checkDBConnection();
  this.dataStore={records:[]};
  this._records$=<Subject<any>> new Subject();
  
  
  }
  
  
  checkDBConnection():any{
  
  this.webSQLEnable=this.window.openDatabase&&typeof this.window.openDatabase==="function";
  
  }
  
	setDb():void{
	
	if(this.dbName.length>0&&this.webSQLEnable) this.dbObj=this.window.openDatabase(this.dbName, this.dbVersion, this.dbDescription, this.dbSize);
	}
	
	executeTransaction(sql:string, parameters?:Array<any>):any{
	
	parameters=parameters||[];
	
	let me = this;
	
	return new Promise((resolve, reject) =>
        {
            me.dbObj.transaction(function(tx)
            {
                tx.executeSql(sql, parameters, (t, r) => resolve({ 
            transaction: t, 
            result: r
        }), (t, e)=>reject({transaction: t, 
            result: e}));
            });
        });    
	

	}

	sqlErrorMessage(message:string, type?:string){
		type=type ||'error';
		this.sqlErrorMessageSource.next({message:message,type:type});
	
	}
	
	  
  
  get records$() {
    return this._records$.asObservable();
  }
	

get numOfItems(){
	return this.dataStore.records.length;

}
	
	loadAll():any{
	
	
	if(this.isLoaded) this._records$.next(this.dataStore.records);
	else{
	let sql='select * from '+this.tableName;
	this.dataStore.records=[];
	this.executeTransaction(sql).then(
	(data)=>{
	let test=Object.keys(data.result.rows).map((key)=>{ return data.result.rows[key]});;
	this.isLoaded=true;
	for(let i=0; i<data.result.rows.length;i++)this.dataStore.records.push(data.result.rows[i]);
	    this._records$.next(this.dataStore.records);
	
	return data.result;},(error)=>{this.sqlErrorMessage(error.result.message+' code '+error.result.code);});
	}
	}
	
	add(fieldsObject):any{
	
	let fields:Array<string>=[];
	let values:Array<any>=[];
	let points:Array<string>=[];
	
	for(let key in fieldsObject){
		
		if(key!==this.primaryKey){
		fields.push(key);
		values.push(''+fieldsObject[key]+'');
		points.push('?');
		
	};
	};
	
	let sql="insert into "+this.tableName+' ('+fields.join(',')+') values ('+points.join(',')+')';
	this.executeTransaction(sql, values).then(
	(data)=>{
	fieldsObject[this.primaryKey]=data.result.insertId;
	this.dataStore.records.push(fieldsObject);
    this._records$.next(this.dataStore.records);
	
	this.sqlErrorMessage('Enregistrement créé','success');
	
	return data.result;},(error)=>{this.sqlErrorMessage(error.result.message+' code '+error.result.code);});
	
		
	
	}
	
	
	
	delete(id:number){
	
	
	let sql= "delete from "+this.tableName+' where '+this.primaryKey+'= ?';
	
	this.executeTransaction(sql, [id]).then(
	(data)=>{
	
		this.dataStore.records.forEach((object, i)=>{
		
		if(object[this.primaryKey] === id) this.dataStore.records.splice(i, 1);
		
		});
		
		this._records$.next(this.dataStore.records);
	
	this.sqlErrorMessage('Enregistrement supprimé','success');
		},(error)=>{this.sqlErrorMessage(error.result.message+' code '+error.result.code);});
	
	}
	
	
	
}
