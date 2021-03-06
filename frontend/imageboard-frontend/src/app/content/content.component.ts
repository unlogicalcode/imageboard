import { CategorieService } from './../../service/categorie.service';
import { Category } from './../../entity/category';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	categories: Category[];

	constructor(categoryService: CategorieService) {
		this.categories = categoryService.getAll();
	}

	ngOnInit() {
	}

}
