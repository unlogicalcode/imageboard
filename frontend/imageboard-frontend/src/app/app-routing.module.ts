import { CategorieService } from './../service/categorie.service';
import { Category } from './../entity/category';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';

const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: false })
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

	categories: Category[];

	constructor(catService: CategorieService, router: Router) {
		this.categories = catService.getAll();
		this.generateRoutes(router);
	}

	generateRoutes(router: Router) {
		this.categories.forEach(category => {
			if (!category.primary) {
				router.config.unshift({path: category.displayName.toLowerCase(), component: ImageViewComponent});
				
			} else {
				router.config.unshift({path: category.displayName.toLowerCase(), component: ImageViewComponent});
			}
		});
		router.config.forEach(route => {
			console.log(route);
		});
	}
}
