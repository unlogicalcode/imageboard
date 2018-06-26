import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	getDisplayVersion(): string {
		let dv: string = environment.appVersion.major.toString() + "." +
						environment.appVersion.minor.toString() + "." + 
						environment.appVersion.fix.toString();
		if(!environment.production) {
			dv += "-dev";
		}

		return dv;
	}

}
