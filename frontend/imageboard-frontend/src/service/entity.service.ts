import { Injectable } from '@angular/core';

@Injectable()
export abstract class EntityService {

	constructor() {}

	abstract get(uuid: string);
	abstract getAll();
	abstract delete(uuid: string);
	abstract update(entity: any);
}
