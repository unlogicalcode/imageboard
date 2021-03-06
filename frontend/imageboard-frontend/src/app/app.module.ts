//angular base immports
import { BrowserModule } 			from '@angular/platform-browser';
import { BrowserAnimationsModule } 	from '@angular/platform-browser/animations';
import { NgModule } 				from '@angular/core';
import { RouterModule } 			from '@angular/router';

// Angular-Material imports
import { MatToolbarModule } 		from '@angular/material/toolbar';
import { MatTabsModule } 			from '@angular/material/tabs';
import { MatMenuModule } 			from '@angular/material/menu';
import { MatButtonModule } 			from '@angular/material/button';
import { MatIconModule } 			from '@angular/material/icon';
import { MatInputModule } 			from '@angular/material/input';
import { MatCardModule } 			from '@angular/material/card';
import { MatGridListModule } 		from '@angular/material/grid-list';
import { MatDividerModule } 		from '@angular/material/divider';

//own component imports
import { AppComponent } 			from './app.component';
import { HeaderComponent } 			from './header/header.component';
import { ContentComponent } 		from './content/content.component';
import { ImageViewComponent } 		from './image-view/image-view.component';

//own service imports
import { CategorieService } 		from './../service/categorie.service';

//module imports
import { AppRoutingModule } 		from './/app-routing.module';
import { ImageDetailComponent } 	from './image-detail/image-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent,
		ImageViewComponent,
		ImageDetailComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatTabsModule,
		MatInputModule,
		MatCardModule,
		MatGridListModule,
		MatDividerModule,
		AppRoutingModule
	],
	providers: [
		CategorieService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ImageViewComponent,
		ImageDetailComponent
	]
})
export class AppModule { }
