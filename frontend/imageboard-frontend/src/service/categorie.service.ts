import { EntityService } from './entity.service';
import { Injectable } from '@angular/core';

import { Category } from '../entity/category';

@Injectable({
	providedIn: 'root'
})
export class CategorieService extends EntityService {

	primaryCategory: Category;

	constructor() {
		super();
		this.getAll().forEach(category => {
			if (category.primary) {
				this.primaryCategory = category;
				return;
			}
		});
	}

	public getAll(): Category[] {
		return [new Category('New', '1'), new Category('Top', '2')];
	}

	public get(id: string): Category {
		return null;
	}

	public delete(uuid: string) {
		return null;
	}

	public update(category: Category) {
		return null;
	}

	public setPrimary(uuid: string) {
		const category: Category = this.get(uuid);
		const oldPrimary = this.primaryCategory;
		oldPrimary.setPrimary();
		this.update(oldPrimary);
		this.primaryCategory = category;
		this.update(category);
	}
}
