import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular-Material imports
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import { CategorieService } from './../service/categorie.service';
import { ImageViewComponent } from './image-view/image-view.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent,
		ImageViewComponent
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
		AppRoutingModule
	],
	providers: [
		CategorieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
