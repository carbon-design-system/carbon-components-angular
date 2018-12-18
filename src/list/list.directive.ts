import { Directive, ElementRef, HostBinding } from "@angular/core";

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
