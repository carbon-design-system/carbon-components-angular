import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class IconService {
	private static spriteCache: Map<string, Promise<string>> = new Map<string, Promise<string>>();
	private static cacheLevel: "none" | "simple" = "simple";
	private static baseURL = "https://peretz-icons.mybluemix.net/";

	static setBaseURL(url: string) {
		IconService.baseURL = url;
		return IconService;
	}

	static setCacheLevel(level: "none" | "simple") {
		IconService.cacheLevel = level;
		return IconService;
	}

	constructor(private http: Http) {}

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

	doSpriteRequest(name) {
		return this.http.get(`${IconService.baseURL}${name}.svg`)
			.toPromise()
			.then(res => res.text(),
				err => {
					console.error(`failed to load sprite ${name}, check that the server is available and baseURL is correct`);
					return "";
				});
	}

	getSprite(name) {
		if (IconService.cacheLevel === "none") {
			return this.doSpriteRequest(name);
		} else {
			if (IconService.spriteCache.has(name)) {
				return IconService.spriteCache.get(name);
			}
			let spriteRequest = this.doSpriteRequest(name);
			IconService.spriteCache.set(name, spriteRequest);
			return spriteRequest;
		}
	}
}
