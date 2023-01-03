import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/entities/without_relations/People.dto';
import { IPeopleController } from 'src/interfaces/without_relations/controllers/IPeopleController';
import { Response } from "src/publics/Response.dto";


@Injectable({
  providedIn: 'root'
})
export class PeopleService implements IPeopleController<People>{

  host: string = "http://localhost:8084/";
  baseApi: string = "api/v1/";
  controllerName: string = "people-controller"

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Response<People[]>>{
    return this.httpClient.get<Response<People[]>>(`${this.host}${this.baseApi}${this.controllerName}/getAll`);
  }
	
  getById(id: number): Observable<Response<People>>{
    return this.httpClient.get<Response<People>>(`${this.host}${this.baseApi}${this.controllerName}/getById/`);
  }
  
  deleteById(id:number):Observable<Response<People>>{
    return this.httpClient.delete<Response<People>>(`${this.host}${this.baseApi}${this.controllerName}/deleteById/${id}`);
  }

  createOrUpdate(entity: People):Observable<Response<People>>{
    return this.httpClient.get<Response<People>>(`${this.host}${this.baseApi}${this.controllerName}/getAll`);
  }

  createOrUpdateList (entities:People[]):Observable<Response<People[]>>{
    return this.httpClient.get<Response<People[]>>(`${this.host}${this.baseApi}${this.controllerName}/getAll`);
  }


}
