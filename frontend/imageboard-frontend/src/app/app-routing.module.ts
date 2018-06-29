import { CategorieService } from './../service/categorie.service';
import { Category } from './../entity/category';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';

const routes: Routes = [
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: false })
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

	categories: Category[];

	constructor(catService: CategorieService) {
		this.categories = catService.getAll();
		this.generateRoutes();
	}

	generateRoutes() {
		this.categories.forEach(category => {
			if (!category.primary) {
				routes.concat([{path: category.displayName, component: ImageViewComponent}]);
			} else {
				routes.concat([{path: category.displayName, component: ImageViewComponent}]);
				routes.concat([{path: '', redirectTo: 'login', pathMatch: 'full'}]);
			}
		});
	}
}
