/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HostBinding, Component, Input, ElementRef, Output, EventEmitter } from "@angular/core";
/**
 * `OverflowMenuOption` represents a single option in an overflow menu
 *
 * Presently it has three possible states - normal, disabled, and danger:
 * ```
 * <ibm-overflow-menu-option>Simple option</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
 * ```
 *
 * For content that expands beyond the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
export class OverflowMenuOption {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.optionClass = "bx--overflow-menu-options__option";
        this.role = "presentation";
        /**
         * toggles between `normal` and `danger` states
         */
        this.type = "normal";
        /**
         * disable/enable interactions
         */
        this.disabled = false;
        this.selected = new EventEmitter();
        this.tabIndex = -1;
        this.title = null;
    }
    /**
     * @return {?}
     */
    get isDanger() {
        return this.type === "danger";
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.selected.emit();
    }
    /**
     * @return {?}
     */
    onFocus() {
        setTimeout(() => this.tabIndex = 0);
    }
    /**
     * @return {?}
     */
    onBlur() {
        setTimeout(() => this.tabIndex = -1);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const button = this.elementRef.nativeElement.querySelector("button, a");
        if (button.scrollWidth > button.offsetWidth) {
            this.title = button.textContent;
        }
    }
}
OverflowMenuOption.decorators = [
    { type: Component, args: [{
                selector: "ibm-overflow-menu-option",
                template: `
		<button
			*ngIf="!href"
			class="bx--overflow-menu-options__btn"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[disabled]="disabled"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</button>

		<a
			*ngIf="href"
			class="bx--overflow-menu-options__btn"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[attr.disabled]="disabled"
			[href]="href"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</a>

		<ng-template #tempOutlet>
			<div class="bx--overflow-menu-options__option-content">
				<ng-content></ng-content>
			</div>
		</ng-template>
	`
            }] }
];
/** @nocollapse */
OverflowMenuOption.ctorParameters = () => [
    { type: ElementRef }
];
OverflowMenuOption.propDecorators = {
    optionClass: [{ type: HostBinding, args: ["class",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    isDanger: [{ type: HostBinding, args: ["class.bx--overflow-menu-options__option--danger",] }],
    isDisabled: [{ type: HostBinding, args: ["class.bx--overflow-menu-options__option--disabled",] }],
    type: [{ type: Input }],
    disabled: [{ type: Input }],
    href: [{ type: Input }],
    selected: [{ type: Output }]
};
function OverflowMenuOption_tsickle_Closure_declarations() {
    /** @type {?} */
    OverflowMenuOption.prototype.optionClass;
    /** @type {?} */
    OverflowMenuOption.prototype.role;
    /**
     * toggles between `normal` and `danger` states
     * @type {?}
     */
    OverflowMenuOption.prototype.type;
    /**
     * disable/enable interactions
     * @type {?}
     */
    OverflowMenuOption.prototype.disabled;
    /** @type {?} */
    OverflowMenuOption.prototype.href;
    /** @type {?} */
    OverflowMenuOption.prototype.selected;
    /** @type {?} */
    OverflowMenuOption.prototype.tabIndex;
    /** @type {?} */
    OverflowMenuOption.prototype.title;
    /** @type {?} */
    OverflowMenuOption.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmZsb3ctbWVudS1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpYWxvZy9vdmVyZmxvdy1tZW51L292ZXJmbG93LW1lbnUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUVaLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBbUR2QixNQUFNOzs7O0lBK0JMLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7MkJBOUJSLG1DQUFtQztvQkFDdEMsY0FBYzs7OztvQkFjVixRQUFROzs7O3dCQUl6QixLQUFLO3dCQUllLElBQUksWUFBWSxFQUFFO3dCQUV4QyxDQUFDLENBQUM7cUJBR0wsSUFBSTtLQUU2Qjs7OztJQTNCaEQsSUFDVyxRQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUNXLFVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3JCOzs7O0lBcUJELE9BQU87UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsT0FBTztRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsTUFBTTtRQUNMLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxlQUFlOztRQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDaEM7S0FDRDs7O1lBdkZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlDVDthQUNEOzs7O1lBdERBLFVBQVU7OzswQkF3RFQsV0FBVyxTQUFDLE9BQU87bUJBQ25CLFdBQVcsU0FBQyxXQUFXO3VCQUV2QixXQUFXLFNBQUMsaURBQWlEO3lCQUs3RCxXQUFXLFNBQUMsbURBQW1EO21CQU8vRCxLQUFLO3VCQUlMLEtBQUs7bUJBRUwsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SG9zdEJpbmRpbmcsXG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdEVsZW1lbnRSZWYsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogYE92ZXJmbG93TWVudU9wdGlvbmAgcmVwcmVzZW50cyBhIHNpbmdsZSBvcHRpb24gaW4gYW4gb3ZlcmZsb3cgbWVudVxuICpcbiAqIFByZXNlbnRseSBpdCBoYXMgdGhyZWUgcG9zc2libGUgc3RhdGVzIC0gbm9ybWFsLCBkaXNhYmxlZCwgYW5kIGRhbmdlcjpcbiAqIGBgYFxuICogPGlibS1vdmVyZmxvdy1tZW51LW9wdGlvbj5TaW1wbGUgb3B0aW9uPC9pYm0tb3ZlcmZsb3ctbWVudS1vcHRpb24+XG4gKiA8aWJtLW92ZXJmbG93LW1lbnUtb3B0aW9uIGRpc2FibGVkPVwidHJ1ZVwiPkRpc2FibGVkPC9pYm0tb3ZlcmZsb3ctbWVudS1vcHRpb24+XG4gKiA8aWJtLW92ZXJmbG93LW1lbnUtb3B0aW9uIHR5cGU9XCJkYW5nZXJcIj5EYW5nZXIgb3B0aW9uPC9pYm0tb3ZlcmZsb3ctbWVudS1vcHRpb24+XG4gKiBgYGBcbiAqXG4gKiBGb3IgY29udGVudCB0aGF0IGV4cGFuZHMgYmV5b25kIHRoZSBvdmVyZmxvdyBtZW51IGBPdmVyZmxvd01lbnVPcHRpb25gIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHRpdGxlIGF0dHJpYnV0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1vdmVyZmxvdy1tZW51LW9wdGlvblwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxidXR0b25cblx0XHRcdCpuZ0lmPVwiIWhyZWZcIlxuXHRcdFx0Y2xhc3M9XCJieC0tb3ZlcmZsb3ctbWVudS1vcHRpb25zX19idG5cIlxuXHRcdFx0cm9sZT1cIm1lbnVpdGVtXCJcblx0XHRcdFt0YWJpbmRleF09XCJ0YWJJbmRleFwiXG5cdFx0XHQoZm9jdXMpPVwib25Gb2N1cygpXCJcblx0XHRcdChibHVyKT1cIm9uQmx1cigpXCJcblx0XHRcdChjbGljayk9XCJvbkNsaWNrKClcIlxuXHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFthdHRyLnRpdGxlXT1cInRpdGxlXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcE91dGxldFwiPjwvbmctY29udGFpbmVyPlxuXHRcdDwvYnV0dG9uPlxuXG5cdFx0PGFcblx0XHRcdCpuZ0lmPVwiaHJlZlwiXG5cdFx0XHRjbGFzcz1cImJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnNfX2J0blwiXG5cdFx0XHRyb2xlPVwibWVudWl0ZW1cIlxuXHRcdFx0W3RhYmluZGV4XT1cInRhYkluZGV4XCJcblx0XHRcdChmb2N1cyk9XCJvbkZvY3VzKClcIlxuXHRcdFx0KGJsdXIpPVwib25CbHVyKClcIlxuXHRcdFx0KGNsaWNrKT1cIm9uQ2xpY2soKVwiXG5cdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRbaHJlZl09XCJocmVmXCJcblx0XHRcdFthdHRyLnRpdGxlXT1cInRpdGxlXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcE91dGxldFwiPjwvbmctY29udGFpbmVyPlxuXHRcdDwvYT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGVtcE91dGxldD5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tb3ZlcmZsb3ctbWVudS1vcHRpb25zX19vcHRpb24tY29udGVudFwiPlxuXHRcdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJmbG93TWVudU9wdGlvbiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzc1wiKSBvcHRpb25DbGFzcyA9IFwiYngtLW92ZXJmbG93LW1lbnUtb3B0aW9uc19fb3B0aW9uXCI7XG5cdEBIb3N0QmluZGluZyhcImF0dHIucm9sZVwiKSByb2xlID0gXCJwcmVzZW50YXRpb25cIjtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tb3ZlcmZsb3ctbWVudS1vcHRpb25zX19vcHRpb24tLWRhbmdlclwiKVxuXHRwdWJsaWMgZ2V0IGlzRGFuZ2VyKCk6IEJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IFwiZGFuZ2VyXCI7XG5cdH1cblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tb3ZlcmZsb3ctbWVudS1vcHRpb25zX19vcHRpb24tLWRpc2FibGVkXCIpXG5cdHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOiBCb29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNhYmxlZDtcblx0fVxuXHQvKipcblx0ICogdG9nZ2xlcyBiZXR3ZWVuIGBub3JtYWxgIGFuZCBgZGFuZ2VyYCBzdGF0ZXNcblx0ICovXG5cdEBJbnB1dCgpIHR5cGU6IFwibm9ybWFsXCIgfCBcImRhbmdlclwiID0gXCJub3JtYWxcIjtcblx0LyoqXG5cdCAqIGRpc2FibGUvZW5hYmxlIGludGVyYWN0aW9uc1xuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuXHRASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cblx0QE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdGFiSW5kZXggPSAtMTtcblx0Ly8gbm90ZTogdGl0bGUgbXVzdCBiZSBhIHJlYWwgYXR0cmlidXRlIChpLmUuIG5vdCBhIGdldHRlcikgYXMgb2YgQW5ndWxhckA2IGR1ZSB0b1xuXHQvLyBjaGFuZ2UgYWZ0ZXIgY2hlY2tlZCBlcnJvcnNcblx0cHVibGljIHRpdGxlID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25Gb2N1cygpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMudGFiSW5kZXggPSAwKTtcblx0fVxuXG5cdG9uQmx1cigpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMudGFiSW5kZXggPSAtMSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiwgYVwiKTtcblx0XHRpZiAoYnV0dG9uLnNjcm9sbFdpZHRoID4gYnV0dG9uLm9mZnNldFdpZHRoKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gYnV0dG9uLnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxufVxuIl19