import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../entity/category';
import { Image } from './../../entity/image';
import { ImageService } from '../../service/image.service';

@Component({
	selector: 'app-image-view',
	templateUrl: './image-view.component.html',
	styleUrls: ['./image-view.component.scss']
})

export class ImageViewComponent implements OnInit {

	@Input()
	public viewCategory: Category;

	images: Image[];

	constructor(imageService: ImageService) {
		this.images = imageService.getAll();
	}

	ngOnInit() {
	}

}
