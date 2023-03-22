import {
	Directive,
	ElementRef,
	HostBinding,
	Input,
	OnInit,
	Renderer2
} from "@angular/core";

@Directive({
	selector: "[cdsStack], [ibmStack]"
})
export class StackDirective implements OnInit {
	@HostBinding("class.cds--stack-horizontal") get isHorizontal() {
		return this.cdsStack === "horizontal";
	}

	@HostBinding("class.cds--stack-vertical") get isVertical() {
		return this.cdsStack === "vertical";
	}

	/**
	 * @deprecated as of v5 - Use `cdsStack` input property instead
	 */
	@Input() set ibmStack(type: "vertical" | "horizontal") {
		this.cdsStack = type;
	}

	/**
	 * Orientation of the items in the stack, defaults to `vertical`
	 */
	@Input() cdsStack: "vertical" | "horizontal" = "vertical";

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

	/**
	 * We need to make sure cdsStack is not an empty string since
	 * input name matches selector name.
	 */
	ngOnInit(): void {
		if (!this.cdsStack) {
			this.cdsStack = "vertical";
		}
	}
}
