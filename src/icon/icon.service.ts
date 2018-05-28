import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { IconSize } from "./icon.types";

/**
 * Service that provides static methods for globally configuring icon requests,
 * and instance methods for requesting sprites and converting sizes to pixel values
 */
@Injectable()
export class IconService {
	static spriteLoaded = new EventEmitter();
	/**
	 * Internal variable to track running requests.
	 * Used to call spriteLoaded when new sprites are available
	 */
	private static runningRequests = 0;
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
	 * By default we use http://peretz-icons.mybluemix.net/ for sprites - this is sufficient for prototyping,
	 * but for development and production it is recommended to build streamlined sprites and host them statically.
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
	 * Responsible for fetching sprites from the `baseURL`
	 *
	 * @param {string} name name of the sprite to request
	 */
	doSpriteRequest(name: string) {
		IconService.runningRequests++;
		return this.http.get(`${IconService.baseURL}${name}.svg`)
			.toPromise()
			.then(res => {
				IconService.runningRequests--;
				IconService.spriteLoaded.emit();
				return res;
			})
			.then(res => res.text(),
				err => {
					console.error(`failed to load sprite ${name}, check that the server is available and baseURL is correct`);
					return "";
				});
	}

	/**
	 * Returns a promise that will resolve to a clone of the requested icon
	 *
	 * @param name name of the icon
	 * @param size size of the icon as an IconSize
	 */
	getIcon(name: string, size: IconSize): Promise<HTMLElement> {
		// resolver either calls the provided Promise resolution function with the loaded icon
		// or returns false to indicate the sprite with the required icon has yet to load
		const resolver = resolve => {
			const icon = document.querySelector(`symbol#${name}_${size}`);
			if (icon) {
				const clone = icon.firstElementChild.cloneNode(true);
				return resolve(clone as HTMLElement);
			}
			return false;
		};

		const loadedIcon = new Promise<HTMLElement>((resolve, reject) => {
			if (!resolver(resolve)) {
				IconService.spriteLoaded.subscribe(() => {
					resolver(resolve);
				});
			}
		});
		return loadedIcon;
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
