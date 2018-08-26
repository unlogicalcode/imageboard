import { Component, OnInit, AfterViewInit, Input, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Category } from './../../entity/category';
import { Image } from './../../entity/image';
import { ImageService } from '../../service/image.service';
import { CategorieService } from '../../service/categorie.service';

@Component({
	selector: 'app-image-view',
	templateUrl: './image-view.component.html',
	styleUrls: ['./image-view.component.scss']
})

export class ImageViewComponent implements OnInit, AfterViewInit {

	columnNumber = 5;
	selectedTab;

	categories: Category[];

	public viewCategory: Category;

	images: Image[];

	constructor(imageService: ImageService, categoryService: CategorieService, router: Router) {
		this.categories = categoryService.getAll();
		this.setViewCategory(router);
		this.images = imageService.getAll();
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				this.setViewCategory(router);
			}
		});
	}

	ngOnInit() {
		this.calcColumnNumber();
	}

	ngAfterViewInit() {
		this.calcColumnNumber();
	}

	calcColumnNumber() {
		const width = window.innerWidth;
		this.columnNumber = Math.trunc(width / 300);
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.calcColumnNumber();
	}

	setViewCategory(router: Router) {
		this.categories.forEach(category => {
			let catPath = '/' + category.displayName.toLowerCase();
			console.log(catPath + ' vs ' + router.url);
			if(catPath == router.url) {
				this.viewCategory = category;
				console.log(this.viewCategory);
			}
		});
	}
}
