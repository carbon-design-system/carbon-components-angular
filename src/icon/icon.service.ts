import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

/**
 * Service that provides static methods for globally configuring icon requests,
 * and instance methods for requesting sprites and converting sizes to pixel values
 */
@Injectable()
export class IconService {
	/**
	 * map to use for sprite requests
	 *
	 * we just cache the whole promise since we can always `.then` out the result
	 * */
	private static spriteCache: Map<string, Promise<string>> = new Map<string, Promise<string>>();
	/** how aggressively to cache sprites. defaults to simple */
	private static cacheLevel: "none" | "simple" = "simple";
	/** URL to request sprites from */
	private static baseURL = "https://peretz-icons.mybluemix.net/";

	/**
	 * Sets the baseURL
	 *
	 * By default we use http://peretz-icons.mybluemix.net/ for sprites - this is suffciant for prototyping,
	 * but for development and production it is reccomended to build streamlined sprites and host them statically.
	 *
	 * @param {string} url
	 */
	static setBaseURL(url: string) {
		IconService.baseURL = url;
		return IconService;
	}

	/**
	 * sets the caching level for sprites.
	 * "none" disables caching (sprites will always be requested again)
	 * "simple" uses a static Map as a naive cache
	 *
	 * @param {"none" | "simple"} level
	 */
	static setCacheLevel(level: "none" | "simple") {
		IconService.cacheLevel = level;
		return IconService;
	}

	/** get an instance of the Http service */
	constructor(private http: Http) {}

	/**
	 * Converts numbers or size strings (xs, sm, mg, lg) to a px value representation
	 *
	 * @param size number (or string that can be parsed as a number)
	 */
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

	/**
	 * Responsiable for fetching sprites from the `baseURL`
	 *
	 * @param {string} name name of the sprite to request
	 */
	doSpriteRequest(name: string) {
		return this.http.get(`${IconService.baseURL}${name}.svg`)
			.toPromise()
			.then(res => res.text(),
				err => {
					console.error(`failed to load sprite ${name}, check that the server is available and baseURL is correct`);
					return "";
				});
	}

	/**
	 * Requests and caches the specified sprite
	 *
	 * @param {string} name name of the sprite to request
	 */
	getSprite(name: string) {
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
