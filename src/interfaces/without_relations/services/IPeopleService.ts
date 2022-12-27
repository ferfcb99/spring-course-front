export interface IPeopleService<T>{

    getAll(): T[];
	
    getById(id: number): T;

    deleteById(id: number): T;

    createOrUpdate(entity: T): T;
	
    createOrUpdateList(entities: T[]): T[];

}