/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
/**
 * [See demo](../../?path=/story/loading--basic)
 *
 * <example-url>../../iframe.html?id=loading--basic</example-url>
 */
export class Loading {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * Accessible title for the loading circle.
         * Defaults to the `LOADING.TITLE` value from the i18n service.
         */
        this.title = this.i18n.get().LOADING.TITLE;
        /**
         * set to `false` to stop the loading animation
         */
        this.isActive = true;
        /**
         * Specify the size of the button
         */
        this.size = "normal";
        /**
         * Set to `true` to make loader with an overlay.
         */
        this.overlay = false;
    }
}
Loading.decorators = [
    { type: Component, args: [{
                selector: "ibm-loading",
                template: `
		<div
			[ngClass]="{
				'bx--loading--small': size === 'sm',
				'bx--loading--stop': !isActive && !overlay,
				'bx--loading-overlay--stop': !isActive && overlay
			}"
			class="bx--loading">
			<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
				<title>{{title}}</title>
				<circle class="bx--loading__stroke" cx="0" cy="0" r="37.5" />
			</svg>
		</div>
	`
            }] }
];
/** @nocollapse */
Loading.ctorParameters = () => [
    { type: I18n }
];
Loading.propDecorators = {
    title: [{ type: Input }],
    isActive: [{ type: Input }],
    size: [{ type: Input }],
    overlay: [{ type: Input }, { type: HostBinding, args: ["class.bx--loading-overlay",] }]
};
function Loading_tsickle_Closure_declarations() {
    /**
     * Accessible title for the loading circle.
     * Defaults to the `LOADING.TITLE` value from the i18n service.
     * @type {?}
     */
    Loading.prototype.title;
    /**
     * set to `false` to stop the loading animation
     * @type {?}
     */
    Loading.prototype.isActive;
    /**
     * Specify the size of the button
     * @type {?}
     */
    Loading.prototype.size;
    /**
     * Set to `true` to make loader with an overlay.
     * @type {?}
     */
    Loading.prototype.overlay;
    /** @type {?} */
    Loading.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBd0I3QyxNQUFNOzs7O0lBc0JMLFlBQXNCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNOzs7OztxQkFqQmYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSzs7Ozt3QkFLMUIsSUFBSTs7OztvQkFLUyxRQUFROzs7O3VCQUtvQixLQUFLO0tBRTlCOzs7WUF2Q3BDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0VBYVQ7YUFDRDs7OztZQXZCUSxJQUFJOzs7b0JBNkJYLEtBQUs7dUJBS0wsS0FBSzttQkFLTCxLQUFLO3NCQUtMLEtBQUssWUFBSSxXQUFXLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9sb2FkaW5nLS1iYXNpYylcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9bG9hZGluZy0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWxvYWRpbmdcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2XG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tbG9hZGluZy0tc21hbGwnOiBzaXplID09PSAnc20nLFxuXHRcdFx0XHQnYngtLWxvYWRpbmctLXN0b3AnOiAhaXNBY3RpdmUgJiYgIW92ZXJsYXksXG5cdFx0XHRcdCdieC0tbG9hZGluZy1vdmVybGF5LS1zdG9wJzogIWlzQWN0aXZlICYmIG92ZXJsYXlcblx0XHRcdH1cIlxuXHRcdFx0Y2xhc3M9XCJieC0tbG9hZGluZ1wiPlxuXHRcdFx0PHN2ZyBjbGFzcz1cImJ4LS1sb2FkaW5nX19zdmdcIiB2aWV3Qm94PVwiLTc1IC03NSAxNTAgMTUwXCI+XG5cdFx0XHRcdDx0aXRsZT57e3RpdGxlfX08L3RpdGxlPlxuXHRcdFx0XHQ8Y2lyY2xlIGNsYXNzPVwiYngtLWxvYWRpbmdfX3N0cm9rZVwiIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIzNy41XCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmcge1xuXHQvKipcblx0ICogQWNjZXNzaWJsZSB0aXRsZSBmb3IgdGhlIGxvYWRpbmcgY2lyY2xlLlxuXHQgKiBEZWZhdWx0cyB0byB0aGUgYExPQURJTkcuVElUTEVgIHZhbHVlIGZyb20gdGhlIGkxOG4gc2VydmljZS5cblx0ICovXG5cdEBJbnB1dCgpIHRpdGxlID0gdGhpcy5pMThuLmdldCgpLkxPQURJTkcuVElUTEU7XG5cblx0LyoqXG5cdCAqIHNldCB0byBgZmFsc2VgIHRvIHN0b3AgdGhlIGxvYWRpbmcgYW5pbWF0aW9uXG5cdCAqL1xuXHRASW5wdXQoKSBpc0FjdGl2ZSA9IHRydWU7XG5cblx0LyoqXG5cdCAqIFNwZWNpZnkgdGhlIHNpemUgb2YgdGhlIGJ1dHRvblxuXHQgKi9cblx0QElucHV0KCkgc2l6ZTogXCJub3JtYWxcIiB8IFwic21cIiA9IFwibm9ybWFsXCI7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gbWFrZSBsb2FkZXIgd2l0aCBhbiBvdmVybGF5LlxuXHQgKi9cblx0QElucHV0KCkgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWxvYWRpbmctb3ZlcmxheVwiKSBvdmVybGF5ID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IEkxOG4pIHt9XG59XG4iXX0=