import { Component, OnInit, AfterViewInit, Input, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Category } from './../../entity/category';
import { Image } from './../../entity/image';
import { ImageService } from '../../service/image.service';

@Component({
	selector: 'app-image-view',
	templateUrl: './image-view.component.html',
	styleUrls: ['./image-view.component.scss']
})

export class ImageViewComponent implements OnInit, AfterViewInit {

	columnNumber = 5;

	@Input()
	public viewCategory: Category;

	images: Image[];

	constructor(imageService: ImageService) {
		this.images = imageService.getAll();
	}

	ngOnInit() {
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

}
