import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class IconService {
	private static iconCache = {};
	private static iconUrl: string = "icons/";
	private http: Http;

	static setIconUrl(url: string) {
		IconService.iconUrl = url;
	}
	constructor(http: Http) {
		this.http = http;
	}

	size2px(size) {
		if (parseFloat(size)) {
			return parseFloat(size) + "px";
		}
		switch (size) {
			case "xs":
				return "14px";
			case "sm":
				return "16px";
			case "md":
				return "20px";
			case "lg":
				return "30px";
			default:
				return "16px";
		}
	}

	getIcon(name, size) {
		let icon = name + "-" + size;
		if (IconService.iconCache[icon]) {
			return IconService.iconCache[icon];
		}
		IconService.iconCache[icon] = this.http.get(IconService.iconUrl + icon + ".svg")
			.toPromise()
			.then(
				res => res.text(),
				err => `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"></svg>`);
		return IconService.iconCache[icon];
	}
}
