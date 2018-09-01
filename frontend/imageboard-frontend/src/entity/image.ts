import { Entity } from './entity';

export class Image implements Entity  {
	uuid: string;
	name: string;
	url: string;

	// TODO all attributes
	constructor(uuid: string) {
		this.uuid = uuid;
		this.name = 'image-' + uuid;
		this.generateUrl(); 
	}

	/* TODO: REMOVE MOCKUP METHOD 
		Generates Random Image Url to see change in ImageView
	*/
	private generateUrl() {
		let random: Boolean = Boolean(Math.round(Math.random()));
		if(random) this.url = 'https://www.probytes.net/wp-content/uploads/2018/01/2-768x552.jpg';
		else this.url = 'https://www.bacancytechnology.com/blog/wp-content/uploads/2016/09/images1.jpg';
	}
}
