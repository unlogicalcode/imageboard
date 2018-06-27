import { Injectable } from '@angular/core';

import { Category } from '../entity/category';

@Injectable({
	providedIn: 'root'
})
export class CategorieService {

	constructor() { }

	public getCategories(): Category[] {
		return [new Category('New', '1'), new Category('Top', '2')];
	}

	public getCategory(id: string): Category {
		return null;
	}
}
