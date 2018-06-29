export interface EntityService {
	get(uuid: string);
	getAll();
	delete(uuid: string);
	update(uuid: string);
}
