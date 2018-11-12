import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IconSize } from "./icon.types";
/**
 * Service that provides static methods for globally configuring icon requests,
 * and instance methods for requesting sprites and converting sizes to pixel values
 */
export declare class IconService {
    protected http: HttpClient;
    static spriteLoaded: EventEmitter<{}>;
    /**
     * Internal variable to track running requests.
     * Used to call spriteLoaded when new sprites are available
     */
    protected static runningRequests: number;
    /**
     * map to use for sprite requests
     *
     * we just cache the whole promise since we can always `.then` out the result
     * */
    protected static spriteCache: Map<string, Observable<string>>;
    /** how aggressively to cache sprites. defaults to simple */
    protected static cacheLevel: "none" | "simple";
    /** URL to request sprites from */
    protected static baseURL: string;
    /**
     * Sets the baseURL
     *
     * By default we use http://peretz-icons.mybluemix.net/ for sprites - this is sufficient for prototyping,
     * but for development and production it is recommended to build streamlined sprites and host them statically.
     *
     * @param {string} url
     */
    static setBaseURL(url: string): typeof IconService;
    /**
     * sets the caching level for sprites.
     * "none" disables caching (sprites will always be requested again)
     * "simple" uses a static Map as a naive cache
     *
     * @param {"none" | "simple"} level
     */
    static setCacheLevel(level: "none" | "simple"): typeof IconService;
    /** get an instance of the Http service */
    constructor(http: HttpClient);
    /**
     * Responsible for fetching sprites from the `baseURL`
     *
     * @param {string} name name of the sprite to request
     */
    doSpriteRequest(name: string): Observable<string>;
    /**
     * Returns a promise that will resolve to a clone of the requested icon
     *
     * @param name name of the icon
     * @param size size of the icon as an IconSize
     */
    getIcon(name: string, size: IconSize): Promise<HTMLElement>;
    /**
     * Requests and caches the specified sprite
     *
     * @param {string} name name of the sprite to request
     */
    getSprite(name: string): Observable<string>;
}
