import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular-Material imports
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatTabsModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
