import { Observable } from "rxjs";
import { Response } from "src/publics/Response.dto";


export interface IPeopleController<T>{

    getAll(): Observable<Response<T[]>>;
	
    getById(id: number): Observable<Response<T>>;
    
    deleteById(id:number):Observable<Response<T>>;

	createOrUpdate(entity:T):Observable<Response<T>>;

    createOrUpdateList (entities:T[]):Observable<Response<T[]>>;

}