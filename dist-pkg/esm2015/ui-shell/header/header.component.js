/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * A fixed header and navigation.
 * Header may contain a Hamburger menu to toggle the side navigation, navigation actions,
 * and global actions (generally in the form of `Panel`s).
 *
 * [See demo](../../?path=/story/ui-shell--header)
 *
 * <example-url>../../iframe.html?id=ui-shell--header</example-url>
 */
export class Header {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * Top level branding. Defaults to "IBM"
         */
        this.brand = "IBM";
    }
}
Header.decorators = [
    { type: Component, args: [{
                selector: "ibm-header",
                template: `
		<header
			class="bx--header"
			role="banner"
			[attr.aria-label]="brand + ' ' + name">
			<a
				class="bx--skip-to-content"
				[href]="skipTo"
				tabindex="0">
				{{ i18n.get("UI_SHELL.SKIP_TO") | async }}
			</a>
			<ng-content select="ibm-hamburger"></ng-content>
			<a class="bx--header__name" href="#">
				<span class="bx--header__name--prefix">{{brand}}&nbsp;</span>
				{{name}}
			</a>
			<ng-content></ng-content>
		</header>
	`
            }] }
];
/** @nocollapse */
Header.ctorParameters = () => [
    { type: I18n }
];
Header.propDecorators = {
    skipTo: [{ type: Input }],
    name: [{ type: Input }],
    brand: [{ type: Input }]
};
function Header_tsickle_Closure_declarations() {
    /**
     * ID in the main body content to jump to. Used by keyboard and screen reader users to skip the header content.
     * @type {?}
     */
    Header.prototype.skipTo;
    /**
     * Label that shows to the right of the `brand` text. Generally a product name.
     * @type {?}
     */
    Header.prototype.name;
    /**
     * Top level branding. Defaults to "IBM"
     * @type {?}
     */
    Header.prototype.brand;
    /** @type {?} */
    Header.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS1zaGVsbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7O0FBaUM5QyxNQUFNOzs7O0lBY0wsWUFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07Ozs7cUJBRlosS0FBSztLQUVZOzs7WUFwQ2xDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQlQ7YUFDRDs7OztZQWhDUSxJQUFJOzs7cUJBcUNYLEtBQUs7bUJBSUwsS0FBSztvQkFJTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuLyoqXG4gKiBBIGZpeGVkIGhlYWRlciBhbmQgbmF2aWdhdGlvbi5cbiAqIEhlYWRlciBtYXkgY29udGFpbiBhIEhhbWJ1cmdlciBtZW51IHRvIHRvZ2dsZSB0aGUgc2lkZSBuYXZpZ2F0aW9uLCBuYXZpZ2F0aW9uIGFjdGlvbnMsXG4gKiBhbmQgZ2xvYmFsIGFjdGlvbnMgKGdlbmVyYWxseSBpbiB0aGUgZm9ybSBvZiBgUGFuZWxgcykuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvdWktc2hlbGwtLWhlYWRlcilcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9dWktc2hlbGwtLWhlYWRlcjwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0taGVhZGVyXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGhlYWRlclxuXHRcdFx0Y2xhc3M9XCJieC0taGVhZGVyXCJcblx0XHRcdHJvbGU9XCJiYW5uZXJcIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJicmFuZCArICcgJyArIG5hbWVcIj5cblx0XHRcdDxhXG5cdFx0XHRcdGNsYXNzPVwiYngtLXNraXAtdG8tY29udGVudFwiXG5cdFx0XHRcdFtocmVmXT1cInNraXBUb1wiXG5cdFx0XHRcdHRhYmluZGV4PVwiMFwiPlxuXHRcdFx0XHR7eyBpMThuLmdldChcIlVJX1NIRUxMLlNLSVBfVE9cIikgfCBhc3luYyB9fVxuXHRcdFx0PC9hPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiaWJtLWhhbWJ1cmdlclwiPjwvbmctY29udGVudD5cblx0XHRcdDxhIGNsYXNzPVwiYngtLWhlYWRlcl9fbmFtZVwiIGhyZWY9XCIjXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLWhlYWRlcl9fbmFtZS0tcHJlZml4XCI+e3ticmFuZH19Jm5ic3A7PC9zcGFuPlxuXHRcdFx0XHR7e25hbWV9fVxuXHRcdFx0PC9hPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvaGVhZGVyPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdC8qKlxuXHQgKiBJRCBpbiB0aGUgbWFpbiBib2R5IGNvbnRlbnQgdG8ganVtcCB0by4gVXNlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlciB1c2VycyB0byBza2lwIHRoZSBoZWFkZXIgY29udGVudC5cblx0ICovXG5cdEBJbnB1dCgpIHNraXBUbzogc3RyaW5nO1xuXHQvKipcblx0ICogTGFiZWwgdGhhdCBzaG93cyB0byB0aGUgcmlnaHQgb2YgdGhlIGBicmFuZGAgdGV4dC4gR2VuZXJhbGx5IGEgcHJvZHVjdCBuYW1lLlxuXHQgKi9cblx0QElucHV0KCkgbmFtZTogc3RyaW5nO1xuXHQvKipcblx0ICogVG9wIGxldmVsIGJyYW5kaW5nLiBEZWZhdWx0cyB0byBcIklCTVwiXG5cdCAqL1xuXHRASW5wdXQoKSBicmFuZCA9IFwiSUJNXCI7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGkxOG46IEkxOG4pIHsgfVxufVxuIl19