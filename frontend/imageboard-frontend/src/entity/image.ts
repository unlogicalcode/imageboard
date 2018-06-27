import { Entity } from './entity';

export class Image implements Entity  {
	uuid: string;
	name: string;
	url: string;

	// TODO all attributes
	constructor(uuid: string) {
		this.uuid = uuid;
		this.name = 'image-' + uuid;
		this.url = 'https://www.probytes.net/wp-content/uploads/2018/01/2-768x552.jpg';
	}
}
