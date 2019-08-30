/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export class Documentation {
    /**
     * @param {?} elementRef
     * @param {?} sanitizer
     */
    constructor(elementRef, sanitizer) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} src
     * @return {?}
     */
    set src(src) {
        this._src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
    }
    /**
     * @return {?}
     */
    get src() {
        return this._src;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector(".sb-show-main").classList.add("full-page");
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.querySelector("html").style.overflow = "auto";
        document.querySelector(".sb-show-main").classList.remove("full-page");
    }
    /**
     * @return {?}
     */
    onLoad() {
        /** @type {?} */
        const docsIframe = this.elementRef.nativeElement.querySelector("#docsIframe");
        /** @type {?} */
        const docsDocument = docsIframe.contentDocument || docsIframe.contentWindow.document;
        /** @type {?} */
        const docsBody = docsDocument.querySelector("body");
        /** @type {?} */
        const mainContent = docsBody.querySelector(".content");
        mainContent.style.width = "100%";
        mainContent.style.left = 0;
        /** @type {?} */
        const menuContent = docsBody.querySelector(".hidden-xs.menu");
        menuContent.style.display = "none";
    }
}
Documentation.decorators = [
    { type: Component, args: [{
                selector: "ibm-documentation",
                template: `
		<iframe
			id="docsIframe"
			style="width: 100vw; height: 100vh;"
			(load)="onLoad()"
			[src]="src">
		</iframe>
	`
            }] }
];
/** @nocollapse */
Documentation.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
Documentation.propDecorators = {
    src: [{ type: Input }]
};
function Documentation_tsickle_Closure_declarations() {
    /** @type {?} */
    Documentation.prototype._src;
    /** @type {?} */
    Documentation.prototype.elementRef;
    /** @type {?} */
    Documentation.prototype.sanitizer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi1jb21wb25lbnQvZG9jdW1lbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhekQsTUFBTTs7Ozs7SUFVTCxZQUFzQixVQUFzQixFQUFZLFNBQXVCO1FBQXpELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFjO0tBQUk7Ozs7O0lBVG5GLElBQWEsR0FBRyxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9EOzs7O0lBQ0QsSUFBSSxHQUFHO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2pCOzs7O0lBTUQsUUFBUTtRQUNQLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ25FOzs7O0lBQ0QsV0FBVztRQUNWLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3RFOzs7O0lBRUQsTUFBTTs7UUFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBQzlFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxlQUFlLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7O1FBQ3JGLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRXBELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzs7UUFFM0IsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUNuQzs7O1lBM0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7RUFPVDthQUNEOzs7O1lBaEJBLFVBQVU7WUFJRixZQUFZOzs7a0JBY25CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRFbGVtZW50UmVmLFxuXHRPbkluaXQsXG5cdE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1kb2N1bWVudGF0aW9uXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGlmcmFtZVxuXHRcdFx0aWQ9XCJkb2NzSWZyYW1lXCJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoO1wiXG5cdFx0XHQobG9hZCk9XCJvbkxvYWQoKVwiXG5cdFx0XHRbc3JjXT1cInNyY1wiPlxuXHRcdDwvaWZyYW1lPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgpIHNldCBzcmMoc3JjOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9zcmMgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoc3JjKTtcblx0fVxuXHRnZXQgc3JjKCkge1xuXHRcdHJldHVybiB0aGlzLl9zcmM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgX3NyYztcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNiLXNob3ctbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiZnVsbC1wYWdlXCIpO1xuXHR9XG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYi1zaG93LW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGwtcGFnZVwiKTtcblx0fVxuXG5cdG9uTG9hZCgpIHtcblx0XHRjb25zdCBkb2NzSWZyYW1lID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb2NzSWZyYW1lXCIpO1xuXHRcdGNvbnN0IGRvY3NEb2N1bWVudCA9IGRvY3NJZnJhbWUuY29udGVudERvY3VtZW50IHx8IGRvY3NJZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRjb25zdCBkb2NzQm9keSA9IGRvY3NEb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuXHRcdGNvbnN0IG1haW5Db250ZW50ID0gZG9jc0JvZHkucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRcdG1haW5Db250ZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0bWFpbkNvbnRlbnQuc3R5bGUubGVmdCA9IDA7XG5cblx0XHRjb25zdCBtZW51Q29udGVudCA9IGRvY3NCb2R5LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuLXhzLm1lbnVcIik7XG5cdFx0bWVudUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG59XG4iXX0=