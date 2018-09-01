import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Image } from '../../entity/image';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  private image: Image;
  private route: ActivatedRoute;
  private imageService: ImageService;

  constructor(imageService: ImageService, route: ActivatedRoute) { 
    this.route = route;
    this.imageService = imageService;
  }

  ngOnInit() {
    this.getImage();
  }

  private getImage() {
    const id = this.route.snapshot.paramMap.get('uuid');
    this.image = this.imageService.get(id);
  }
}
