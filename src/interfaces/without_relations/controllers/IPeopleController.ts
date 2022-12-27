import { Observable } from "rxjs";
import { Response } from "src/publics/Response.dto";


export interface IPeopleController<T>{

    getAll(): Observable<Response<T[]>>;
	
    getById(id: number): Observable<Response<T>>;

    /*
	ResponseEntity<Response<T>> deleteById(Long id);
	
	ResponseEntity<Response<T>> createOrUpdate(T entity);
	
	ResponseEntity<Response<List<T>>> createOrUpdateList(List<T> entities);
*/

}