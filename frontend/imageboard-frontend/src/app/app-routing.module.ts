import { CategorieService } from './../service/categorie.service';
import { Category } from './../entity/category';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [
	{path: 'login', component: ImageViewComponent},
	{path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
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
		//generate route foreach category, special handling for primary category
		this.categories.forEach(category => {
			if (!category.primary) {
				router.config.unshift({path: category.displayName.toLowerCase(), component: ImageViewComponent});
				router.config.unshift({path: category.displayName.toLowerCase()+'/:uuid', component: ImageDetailComponent});
				//TODO IMPLEMENT special handling for primary category
			} else {
				router.config.unshift({path: category.displayName.toLowerCase(), component: ImageViewComponent});
				router.config.unshift({path: category.displayName.toLowerCase()+'/:uuid', component: ImageDetailComponent});
			}
		});
		//display generated routes in console
		router.config.forEach(route => {
			console.log(route);
		});
	}
}
