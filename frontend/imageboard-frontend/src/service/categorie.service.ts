import { EntityService } from './entity.service';
import { Injectable } from '@angular/core';

import { Category } from '../entity/category';

@Injectable({
	providedIn: 'root'
})
export class CategorieService implements EntityService {

	constructor() { }

	public getAll(): Category[] {
		return [new Category('New', '1'), new Category('Top', '2')];
	}

	public get(id: string): Category {
		return null;
	}

	public delete(uuid: string) {
		return null;
	}

	public update(uuid: string) {
		return null;
	}
}
