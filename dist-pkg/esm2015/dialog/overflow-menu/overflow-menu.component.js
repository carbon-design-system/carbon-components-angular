/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewEncapsulation, ContentChild } from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
import { OverflowMenuDirective } from "./overflow-menu.directive";
/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component
 *
 * [See demo](../../?path=/story/overflow-menu--basic)
 *
 * html:
 * ```
 * <ibm-overflow-menu>
 * 	<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
 * 	<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
 * </ibm-overflow-menu>
 * ```
 *
 * <example-url>../../iframe.html?id=overflow-menu--basic</example-url>
 */
export class OverflowMenu {
    /**
     * @param {?} elementRef
     * @param {?} i18n
     */
    constructor(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.buttonLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        this.flip = false;
        this.open = false;
    }
}
OverflowMenu.decorators = [
    { type: Component, args: [{
                selector: "ibm-overflow-menu",
                template: `
		<div
			[ibmOverflowMenu]="options"
			[ngClass]="{'bx--overflow-menu--open': open}"
			[attr.aria-label]="buttonLabel"
			[flip]="flip"
			(onOpen)="open = true"
			(onClose)="open = false"
			role="button"
			aria-haspopup="true"
			class="bx--overflow-menu"
			placement="bottom"
			tabindex="0">
			<svg focusable="false" class="bx--overflow-menu__icon" width="3" height="15" viewBox="0 0 3 15">
				<g fill-rule="evenodd">
					<circle cx="1.5" cy="1.5" r="1.5" />
					<circle cx="1.5" cy="7.5" r="1.5" />
					<circle cx="1.5" cy="13.5" r="1.5" />
				</g>
			</svg>
		</div>
		<ng-template #options>
			<ng-content></ng-content>
		</ng-template>
	`,
                encapsulation: ViewEncapsulation.None,
                styles: [`
		.bx--overflow-menu--open {
			opacity: 1
		}

		/*
		Rotate the overflow menu container as well as the icon, since
		we calculate our menu position based on the container, not the icon.
		*/
		.bx--data-table-v2 .bx--overflow-menu {
			transform: rotate(90deg);
		}

		.bx--data-table-v2 .bx--overflow-menu__icon {
			transform: rotate(180deg);
		}
	`]
            }] }
];
/** @nocollapse */
OverflowMenu.ctorParameters = () => [
    { type: ElementRef },
    { type: I18n }
];
OverflowMenu.propDecorators = {
    buttonLabel: [{ type: Input }],
    flip: [{ type: Input }],
    overflowMenuDirective: [{ type: ContentChild, args: [OverflowMenuDirective,] }]
};
function OverflowMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    OverflowMenu.prototype.buttonLabel;
    /** @type {?} */
    OverflowMenu.prototype.flip;
    /** @type {?} */
    OverflowMenu.prototype.overflowMenuDirective;
    /** @type {?} */
    OverflowMenu.prototype.open;
    /** @type {?} */
    OverflowMenu.prototype.elementRef;
    /** @type {?} */
    OverflowMenu.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmZsb3ctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL292ZXJmbG93LW1lbnUvb3ZlcmZsb3ctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQStEbEUsTUFBTTs7Ozs7SUFVTCxZQUFzQixVQUFzQixFQUFZLElBQVU7UUFBNUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFZLFNBQUksR0FBSixJQUFJLENBQU07MkJBUjNDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVE7b0JBRTdDLEtBQUs7b0JBSWQsS0FBSztLQUUwRDs7O1lBeER0RSxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF3QlQ7Z0JBa0JELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO3lCQWpCNUI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQlI7YUFFRDs7OztZQXBFQSxVQUFVO1lBS0YsSUFBSTs7OzBCQWtFWCxLQUFLO21CQUVMLEtBQUs7b0NBRUwsWUFBWSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRDb250ZW50Q2hpbGRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi8uLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBPdmVyZmxvd01lbnVEaXJlY3RpdmUgfSBmcm9tIFwiLi9vdmVyZmxvdy1tZW51LmRpcmVjdGl2ZVwiO1xuXG4vKipcbiAqIFRoZSBPdmVyRmxvdyBtZW51IGNvbXBvbmVudCBlbmNhcHN1bGF0ZXMgdGhlIE92ZXJGbG93TWVudSBkaXJlY3RpdmUsIGFuZCB0aGUgbWVudSBpY29ub2dyYXBoeSBpbnRvIG9uZSBjb252aWVuZW50IGNvbXBvbmVudFxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L292ZXJmbG93LW1lbnUtLWJhc2ljKVxuICpcbiAqIGh0bWw6XG4gKiBgYGBcbiAqIDxpYm0tb3ZlcmZsb3ctbWVudT5cbiAqXHQ8aWJtLW92ZXJmbG93LW1lbnUtb3B0aW9uPk9wdGlvbiAxPC9pYm0tb3ZlcmZsb3ctbWVudS1vcHRpb24+XG4gKlx0PGlibS1vdmVyZmxvdy1tZW51LW9wdGlvbj5PcHRpb24gMjwvaWJtLW92ZXJmbG93LW1lbnUtb3B0aW9uPlxuICogPC9pYm0tb3ZlcmZsb3ctbWVudT5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1vdmVyZmxvdy1tZW51LS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tb3ZlcmZsb3ctbWVudVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXZcblx0XHRcdFtpYm1PdmVyZmxvd01lbnVdPVwib3B0aW9uc1wiXG5cdFx0XHRbbmdDbGFzc109XCJ7J2J4LS1vdmVyZmxvdy1tZW51LS1vcGVuJzogb3Blbn1cIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJidXR0b25MYWJlbFwiXG5cdFx0XHRbZmxpcF09XCJmbGlwXCJcblx0XHRcdChvbk9wZW4pPVwib3BlbiA9IHRydWVcIlxuXHRcdFx0KG9uQ2xvc2UpPVwib3BlbiA9IGZhbHNlXCJcblx0XHRcdHJvbGU9XCJidXR0b25cIlxuXHRcdFx0YXJpYS1oYXNwb3B1cD1cInRydWVcIlxuXHRcdFx0Y2xhc3M9XCJieC0tb3ZlcmZsb3ctbWVudVwiXG5cdFx0XHRwbGFjZW1lbnQ9XCJib3R0b21cIlxuXHRcdFx0dGFiaW5kZXg9XCIwXCI+XG5cdFx0XHQ8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgY2xhc3M9XCJieC0tb3ZlcmZsb3ctbWVudV9faWNvblwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAzIDE1XCI+XG5cdFx0XHRcdDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cblx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgLz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI3LjVcIiByPVwiMS41XCIgLz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxMy41XCIgcj1cIjEuNVwiIC8+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvZGl2PlxuXHRcdDxuZy10ZW1wbGF0ZSAjb3B0aW9ucz5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRzdHlsZXM6IFtgXG5cdFx0LmJ4LS1vdmVyZmxvdy1tZW51LS1vcGVuIHtcblx0XHRcdG9wYWNpdHk6IDFcblx0XHR9XG5cblx0XHQvKlxuXHRcdFJvdGF0ZSB0aGUgb3ZlcmZsb3cgbWVudSBjb250YWluZXIgYXMgd2VsbCBhcyB0aGUgaWNvbiwgc2luY2Vcblx0XHR3ZSBjYWxjdWxhdGUgb3VyIG1lbnUgcG9zaXRpb24gYmFzZWQgb24gdGhlIGNvbnRhaW5lciwgbm90IHRoZSBpY29uLlxuXHRcdCovXG5cdFx0LmJ4LS1kYXRhLXRhYmxlLXYyIC5ieC0tb3ZlcmZsb3ctbWVudSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdFx0fVxuXG5cdFx0LmJ4LS1kYXRhLXRhYmxlLXYyIC5ieC0tb3ZlcmZsb3ctbWVudV9faWNvbiB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdH1cblx0YF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmZsb3dNZW51IHtcblxuXHRASW5wdXQoKSBidXR0b25MYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5PVkVSRkxPV19NRU5VLk9WRVJGTE9XO1xuXG5cdEBJbnB1dCgpIGZsaXAgPSBmYWxzZTtcblxuXHRAQ29udGVudENoaWxkKE92ZXJmbG93TWVudURpcmVjdGl2ZSkgb3ZlcmZsb3dNZW51RGlyZWN0aXZlOiBPdmVyZmxvd01lbnVEaXJlY3RpdmU7XG5cblx0b3BlbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgaTE4bjogSTE4bikge31cbn1cbiJdfQ==