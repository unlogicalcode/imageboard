export class Category {
	displayName: string;
	uuid: string;
	primary: boolean;

	constructor(name: string, uuid: string) {
		this.displayName = name;
		this.uuid = uuid;
	}

	setPrimary() {
		this.primary = !this.primary;
	}

}
