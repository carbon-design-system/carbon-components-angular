import { ElementRef, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";
import { IconService } from "./icon.service";
/**
 * Used to load sprites and is generally used at the root of the application.
 * Page specific sprites may be loaded on that page, but do note that may result in unintened network requets.
 */
export declare class Sprite implements AfterViewInit {
    private http;
    private _elementRef;
    private icons;
    /** name used to request sprite from the baseURL */
    sprite: string;
    /**
     * instantiate the component and instances of http and iconService
     *
     * @param {Http} http
     * @param {ElementRef} _elementRef
     * @param {IconService} icons
     */
    constructor(http: Http, _elementRef: ElementRef, icons: IconService);
    /** load the sprite and inject it into the rendered DOM */
    ngAfterViewInit(): void;
}
