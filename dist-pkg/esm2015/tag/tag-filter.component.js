/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, HostBinding } from "@angular/core";
import { Tag } from "./tag.component";
export class TagFilter extends Tag {
    constructor() {
        super(...arguments);
        /**
         * Function for close/delete the tag
         */
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get attrClass() {
        return `bx--tag bx--tag--filter bx--tag--${this.type} ${this.class}`;
    }
}
TagFilter.decorators = [
    { type: Component, args: [{
                selector: "ibm-tag-filter",
                template: `
		<ng-content></ng-content>
		<svg
			(click)="close.emit()"
			focusable="false"
			preserveAspectRatio="xMidYMid meet"
			style="will-change: transform;"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Clear filter"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			role="img">
			<path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path>
		</svg>
	`
            }] }
];
TagFilter.propDecorators = {
    close: [{ type: Output }],
    attrClass: [{ type: HostBinding, args: ["attr.class",] }]
};
function TagFilter_tsickle_Closure_declarations() {
    /**
     * Function for close/delete the tag
     * @type {?}
     */
    TagFilter.prototype.close;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGFnL3RhZy1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXFCdEMsTUFBTSxnQkFBaUIsU0FBUSxHQUFHOzs7Ozs7cUJBSWYsSUFBSSxZQUFZLEVBQU87Ozs7O0lBRXpDLElBQStCLFNBQVM7UUFDdkMsT0FBTyxvQ0FBb0MsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDckU7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7RUFlVDthQUNEOzs7b0JBS0MsTUFBTTt3QkFFTixXQUFXLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiLi90YWcuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tdGFnLWZpbHRlclwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8c3ZnXG5cdFx0XHQoY2xpY2spPVwiY2xvc2UuZW1pdCgpXCJcblx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdHN0eWxlPVwid2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcIlxuXHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRhcmlhLWxhYmVsPVwiQ2xlYXIgZmlsdGVyXCJcblx0XHRcdHdpZHRoPVwiMTZcIlxuXHRcdFx0aGVpZ2h0PVwiMTZcIlxuXHRcdFx0dmlld0JveD1cIjAgMCAxNiAxNlwiXG5cdFx0XHRyb2xlPVwiaW1nXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTEyIDQuN2wtLjctLjdMOCA3LjMgNC43IDRsLS43LjdMNy4zIDggNCAxMS4zbC43LjdMOCA4LjdsMy4zIDMuMy43LS43TDguNyA4elwiPjwvcGF0aD5cblx0XHQ8L3N2Zz5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBUYWdGaWx0ZXIgZXh0ZW5kcyBUYWcge1xuXHQvKipcblx0ICogRnVuY3Rpb24gZm9yIGNsb3NlL2RlbGV0ZSB0aGUgdGFnXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmNsYXNzXCIpIGdldCBhdHRyQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBieC0tdGFnIGJ4LS10YWctLWZpbHRlciBieC0tdGFnLS0ke3RoaXMudHlwZX0gJHt0aGlzLmNsYXNzfWA7XG5cdH1cbn1cbiJdfQ==