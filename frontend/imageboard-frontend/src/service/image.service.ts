import { EntityService } from './entity.service';
import { Injectable } from '@angular/core';

import { Image } from '../entity/image';

@Injectable({
	providedIn: 'root'
})
export class ImageService implements EntityService {

	constructor() { }

	public getAll(): Image[] {
		return [new Image('1'), new Image('2'), new Image('3'), new Image('4'), new Image('5'), new Image('6'), new Image('7')];
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