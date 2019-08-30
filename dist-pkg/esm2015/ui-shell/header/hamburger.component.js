/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * A toggle for the side navigation
 */
export class Hamburger {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * Controls the active/selected state for the `Hamburger` menu.
         */
        this.active = false;
        /**
         * `EventEmitter` to notify parent components of menu click events.
         */
        this.selected = new EventEmitter();
    }
    /**
     * Emit the Hamburger click event upwards.
     * @return {?}
     */
    doClick() {
        this.selected.emit(this.active);
    }
}
Hamburger.decorators = [
    { type: Component, args: [{
                selector: "ibm-hamburger",
                template: `
		<button
			type="button"
			(click)="doClick()"
			[ngClass]="{'bx--header__action--active': active}"
			class="bx--header__menu-trigger bx--header__action bx--header__menu-toggle"
			[attr.aria-label]="i18n.get('UI_SHELL.HEADER.MENU') | async"
			[attr.title]="i18n.get('UI_SHELL.HEADER.MENU') | async">

			<svg *ngIf="!active" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<path d="M4 6h24v2H4zm0 18h24v2H4zm0-9h24v2H4z" />
			</svg>

			<svg *ngIf="active" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z" />
			</svg>
		</button>
	`
            }] }
];
/** @nocollapse */
Hamburger.ctorParameters = () => [
    { type: I18n }
];
Hamburger.propDecorators = {
    active: [{ type: Input }],
    selected: [{ type: Output }]
};
function Hamburger_tsickle_Closure_declarations() {
    /**
     * Controls the active/selected state for the `Hamburger` menu.
     * @type {?}
     */
    Hamburger.prototype.active;
    /**
     * `EventEmitter` to notify parent components of menu click events.
     * @type {?}
     */
    Hamburger.prototype.selected;
    /** @type {?} */
    Hamburger.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS1zaGVsbC9oZWFkZXIvaGFtYnVyZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUEwQjlDLE1BQU07Ozs7SUFXTCxZQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTs7OztzQkFQWCxLQUFLOzs7O3dCQUtvQixJQUFJLFlBQVksRUFBVTtLQUVuQzs7Ozs7SUFLM0IsT0FBTztRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OztZQXRDakMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUJUO2FBQ0Q7Ozs7WUF6QlEsSUFBSTs7O3FCQThCWCxLQUFLO3VCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gXCIuLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5cbi8qKlxuICogQSB0b2dnbGUgZm9yIHRoZSBzaWRlIG5hdmlnYXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1oYW1idXJnZXJcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8YnV0dG9uXG5cdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdChjbGljayk9XCJkb0NsaWNrKClcIlxuXHRcdFx0W25nQ2xhc3NdPVwieydieC0taGVhZGVyX19hY3Rpb24tLWFjdGl2ZSc6IGFjdGl2ZX1cIlxuXHRcdFx0Y2xhc3M9XCJieC0taGVhZGVyX19tZW51LXRyaWdnZXIgYngtLWhlYWRlcl9fYWN0aW9uIGJ4LS1oZWFkZXJfX21lbnUtdG9nZ2xlXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiaTE4bi5nZXQoJ1VJX1NIRUxMLkhFQURFUi5NRU5VJykgfCBhc3luY1wiXG5cdFx0XHRbYXR0ci50aXRsZV09XCJpMThuLmdldCgnVUlfU0hFTEwuSEVBREVSLk1FTlUnKSB8IGFzeW5jXCI+XG5cblx0XHRcdDxzdmcgKm5nSWY9XCIhYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cblx0XHRcdFx0PHBhdGggZD1cIk00IDZoMjR2Mkg0em0wIDE4aDI0djJINHptMC05aDI0djJINHpcIiAvPlxuXHRcdFx0PC9zdmc+XG5cblx0XHRcdDxzdmcgKm5nSWY9XCJhY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTI0IDkuNEwyMi42IDggMTYgMTQuNiA5LjQgOCA4IDkuNGw2LjYgNi42TDggMjIuNiA5LjQgMjRsNi42LTYuNiA2LjYgNi42IDEuNC0xLjQtNi42LTYuNkwyNCA5LjR6XCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvYnV0dG9uPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlciB7XG5cdC8qKlxuXHQgKiBDb250cm9scyB0aGUgYWN0aXZlL3NlbGVjdGVkIHN0YXRlIGZvciB0aGUgYEhhbWJ1cmdlcmAgbWVudS5cblx0ICovXG5cdEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBgRXZlbnRFbWl0dGVyYCB0byBub3RpZnkgcGFyZW50IGNvbXBvbmVudHMgb2YgbWVudSBjbGljayBldmVudHMuXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGkxOG46IEkxOG4pIHsgfVxuXG5cdC8qKlxuXHQgKiBFbWl0IHRoZSBIYW1idXJnZXIgY2xpY2sgZXZlbnQgdXB3YXJkcy5cblx0ICovXG5cdHB1YmxpYyBkb0NsaWNrKCkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLmFjdGl2ZSk7XG5cdH1cbn1cbiJdfQ==