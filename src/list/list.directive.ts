import { Directive, ElementRef, HostBinding } from "@angular/core";

/**
 * Applies either ordered or unordered styling to the list container it is applied to.
 *
 * For `ul`s it will apply unordered list styles, and for `ol`s it will apply ordered list styles.
 *
 * If a `ul` or `ol` is nested within a `li` the directive will apply nested list styling.
 */
@Directive({
	selector: "[ibmList]"
})
export class List {
	@HostBinding("class.bx--list--ordered") get ordered() {
		if (this.nested) { return false; }
		return this.elementRef.nativeElement.tagName === "OL";
	}

	@HostBinding("class.bx--list--unordered") get unordered() {
		if (this.nested) { return false; }
		return this.elementRef.nativeElement.tagName === "UL";
	}

	@HostBinding("class.bx--list--nested") get nested() {
		return this.elementRef.nativeElement.parentElement.tagName === "LI";
	}

	constructor(protected elementRef: ElementRef) {}
}
