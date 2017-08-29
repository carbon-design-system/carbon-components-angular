import {
	EventEmitter
} from "@angular/core";


export class TableItem {
	data: any;

	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: ""
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		this.data = data.data;
	}

	display() {
		return this.data;
	}
}
