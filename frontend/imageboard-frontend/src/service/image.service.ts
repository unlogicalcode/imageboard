import { EntityService } from './entity.service';
import { Injectable } from '@angular/core';

import { Image } from '../entity/image';

@Injectable({
	providedIn: 'root'
})
export class ImageService implements EntityService {

	constructor() { }

	public getAll(): Image[] {
		return [new Image('1'), new Image('2')];
	}

	public get(id: string): Image {
		return new Image('1');
	}

	public delete(uuid: string) {
		return null;
	}

	public update(uuid: string) {
		return null;
	}
}