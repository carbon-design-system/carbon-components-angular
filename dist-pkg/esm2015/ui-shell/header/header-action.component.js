/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
/**
 * Contained by `HeaderGlobal`. Generally used to trigger `Panel`s
 */
export class HeaderAction {
    constructor() {
        /**
         * Title. Populates the aria-label as well as the browser `title` tooltip
         */
        this.title = "";
        /**
         * Toggles the active state. May be used to toggle a `Panel`s active state.
         */
        this.active = false;
        /**
         * "Change" emitter to allow double binding to the `active` Input.
         */
        this.activeChange = new EventEmitter();
        /**
         * Emits when the action has been clicked.
         */
        this.selected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.active = !this.active;
        this.selected.emit(this.active);
        this.activeChange.emit(this.active);
    }
}
HeaderAction.decorators = [
    { type: Component, args: [{
                selector: "ibm-header-action",
                template: `
		<button
			class="bx--header__action"
			[ngClass]="{
				'bx--header__action--active': active
			}"
			[attr.aria-label]="title"
			[title]="title"
			(click)="onClick()">
			<ng-content></ng-content>
			<svg ibmIconClose20 class="bx--navigation-menu-panel-collapse-icon"></svg>
		</button>
	`
            }] }
];
HeaderAction.propDecorators = {
    title: [{ type: Input }],
    active: [{ type: Input }],
    activeChange: [{ type: Input }],
    selected: [{ type: Output }]
};
function HeaderAction_tsickle_Closure_declarations() {
    /**
     * Title. Populates the aria-label as well as the browser `title` tooltip
     * @type {?}
     */
    HeaderAction.prototype.title;
    /**
     * Toggles the active state. May be used to toggle a `Panel`s active state.
     * @type {?}
     */
    HeaderAction.prototype.active;
    /**
     * "Change" emitter to allow double binding to the `active` Input.
     * @type {?}
     */
    HeaderAction.prototype.activeChange;
    /**
     * Emits when the action has been clicked.
     * @type {?}
     */
    HeaderAction.prototype.selected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWFjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWktc2hlbGwvaGVhZGVyL2hlYWRlci1hY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDOzs7O0FBcUJ2QixNQUFNOzs7OztxQkFJWSxFQUFFOzs7O3NCQUlELEtBQUs7Ozs7NEJBSUMsSUFBSSxZQUFZLEVBQVc7Ozs7d0JBSTlCLElBQUksWUFBWSxFQUFXOzs7OztJQUVoRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQzs7O1lBdENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztFQVlUO2FBQ0Q7OztvQkFLQyxLQUFLO3FCQUlMLEtBQUs7MkJBSUwsS0FBSzt1QkFJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBDb250YWluZWQgYnkgYEhlYWRlckdsb2JhbGAuIEdlbmVyYWxseSB1c2VkIHRvIHRyaWdnZXIgYFBhbmVsYHNcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1oZWFkZXItYWN0aW9uXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3M9XCJieC0taGVhZGVyX19hY3Rpb25cIlxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHQnYngtLWhlYWRlcl9fYWN0aW9uLS1hY3RpdmUnOiBhY3RpdmVcblx0XHRcdH1cIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiXG5cdFx0XHRbdGl0bGVdPVwidGl0bGVcIlxuXHRcdFx0KGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PHN2ZyBpYm1JY29uQ2xvc2UyMCBjbGFzcz1cImJ4LS1uYXZpZ2F0aW9uLW1lbnUtcGFuZWwtY29sbGFwc2UtaWNvblwiPjwvc3ZnPlxuXHRcdDwvYnV0dG9uPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckFjdGlvbiB7XG5cdC8qKlxuXHQgKiBUaXRsZS4gUG9wdWxhdGVzIHRoZSBhcmlhLWxhYmVsIGFzIHdlbGwgYXMgdGhlIGJyb3dzZXIgYHRpdGxlYCB0b29sdGlwXG5cdCAqL1xuXHRASW5wdXQoKSB0aXRsZSA9IFwiXCI7XG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBhY3RpdmUgc3RhdGUuIE1heSBiZSB1c2VkIHRvIHRvZ2dsZSBhIGBQYW5lbGBzIGFjdGl2ZSBzdGF0ZS5cblx0ICovXG5cdEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXHQvKipcblx0ICogXCJDaGFuZ2VcIiBlbWl0dGVyIHRvIGFsbG93IGRvdWJsZSBiaW5kaW5nIHRvIHRoZSBgYWN0aXZlYCBJbnB1dC5cblx0ICovXG5cdEBJbnB1dCgpIGFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblx0LyoqXG5cdCAqIEVtaXRzIHdoZW4gdGhlIGFjdGlvbiBoYXMgYmVlbiBjbGlja2VkLlxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG5cdFx0dGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuYWN0aXZlKTtcblx0XHR0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlKTtcblx0fVxufVxuIl19