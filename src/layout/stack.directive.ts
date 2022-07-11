import {
	Directive,
	ElementRef,
	HostBinding,
	Input,
	Renderer2
} from "@angular/core";

@Directive({
	selector: "[ibmStack]"
})
export class StackDirective {
	@HostBinding("class.cds--stack-horizontal") get isHorizontal() {
		return this.ibmStack === "horizontal";
	}

	@HostBinding("class.cds--stack-vertical") get isVertical() {
		return this.ibmStack === "vertical";
	}

	/**
	 * Orientation of the items in the stack, defaults to `vertical`
	 */
	@Input() ibmStack: "vertical" | "horizontal" = "vertical";

	/**
	 * Gap in the layout, provide a custom value (string) or a step from the spacing scale (number)
	 */
	@Input() set gap(num: number) {
		if (num !== undefined) {
			this.render.removeClass(this.hostElement.nativeElement, `cds--stack-scale-${this._gap}`);
			this.render.addClass(this.hostElement.nativeElement, `cds--stack-scale-${num}`);
			this._gap = num;
		}
	}
	// Used to track previous value of gap so we can dynamically remove class
	private _gap;

	constructor(private render: Renderer2, private hostElement: ElementRef) { }
}
