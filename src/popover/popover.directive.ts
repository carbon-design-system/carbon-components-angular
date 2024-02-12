import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	NgZone,
	OnChanges,
	Output,
	Renderer2,
	SimpleChanges
} from "@angular/core";
import {
	arrow,
	computePosition,
	flip,
	offset,
	Placement
} from "@floating-ui/dom";

type oldPlacement = "top"
	| "top-left" // deprecated
	| "top-right" // deprecated
	| "bottom-left" // deprecated
	| "bottom-right" // deprecated
	| "left-bottom" // deprecated
	| "left-top" // deprecated
	| "right-bottom" // deprecated
	| "right-top" // deprecated
	| "bottom"
	| "left"
	| "right"
	| "top-start"
	| "top-end"
	| "bottom-start"
	| "bottom-end"
	| "left-end"
	| "left-start"
	| "right-end"
	| "right-start";

/**
 * Applies popover container styling to the element it is applied to. Get started with importing the module:
 *
 * ```typescript
 * import { PopoverModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-popover--basic)
 */
@Directive({
	selector: "[cdsPopover], [ibmPopover]"
})
export class PopoverContainer implements AfterViewInit, OnChanges {
	@Input() set align(alignment: oldPlacement) {
		switch (alignment) {
			case "top-left":
				this._align = "top-start";
				break;
			case "top-right":
				this._align = "top-end";
				break;
			case "bottom-left":
				this._align = "bottom-start";
				break;
			case "bottom-right":
				this._align = "bottom-end";
				break;
			case "left-top":
				this._align = "left-start";
				break;
			case "left-bottom":
				this._align = "left-end";
				break;
			case "right-top":
				this._align = "right-start";
				break;
			case "right-bottom":
				this._align = "right-end";
				break;
			default:
				this._align = alignment as Placement;
				break;
		}
	}
	// // Top
	// @HostBinding("class.cds--popover--top") get alignmentTopClass() {
	// 	return this._align === "top";
	// }

	// @HostBinding("class.cds--popover--top-left") get alignmentTopLeftClass() {
	// 	return this._align === "top-start";
	// }

	// @HostBinding("class.cds--popover--top-right") get alignmentTopRightClass() {
	// 	return this._align === "top-end";
	// }

	// // Bottom
	// @HostBinding("class.cds--popover--bottom") get alignmentBottomClass() {
	// 	return this._align === "bottom";
	// }

	// @HostBinding("class.cds--popover--bottom-left") get alignmentBottomLeftClass() {
	// 	return this._align === "bottom-start";
	// }

	// @HostBinding("class.cds--popover--bottom-right") get alignmentBottomRightClass() {
	// 	return this._align === "bottom-end";
	// }

	// // Left
	// @HostBinding("class.cds--popover--left") get alignmentLeftClass() {
	// 	return this._align === "left";
	// }

	// @HostBinding("class.cds--popover--left-top") get alignmentLeftTopClass() {
	// 	return this._align === "left-start";
	// }

	// @HostBinding("class.cds--popover--left-bottom") get alignmentLeftBottomClass() {
	// 	return this._align === "left-end";
	// }

	// // Right
	// @HostBinding("class.cds--popover--right") get alignmentRightClass() {
	// 	return this._align === "right";
	// }

	// @HostBinding("class.cds--popover--right-top") get alignmentRightTopClass() {
	// 	return this._align === "right-start";
	// }

	// @HostBinding("class.cds--popover--right-bottom") get alignmentRightBottomClass() {
	// 	return this._align === "right-end";
	// }

	/**
	 * Emits an event when the dialog is closed
	 */
	@Output() onClose: EventEmitter<Event> = new EventEmitter();
	/**
	 * Emits an event when the dialog is opened
	 */
	@Output() onOpen: EventEmitter<Event> = new EventEmitter();
	/**
	 * Emits an event when the state of `isOpen` changes. Allows `isOpen` to be double bound
	 */
	@Output() isOpenChange = new EventEmitter<boolean>();

	@HostBinding("class.cds--popover--caret") @Input() caret = true;
	@HostBinding("class.cds--popover--drop-shadow") @Input() dropShadow = true;
	@HostBinding("class.cds--popover--high-contrast") @Input() highContrast = true;
	@HostBinding("class.cds--popover--open") @Input() isOpen = false;
	@HostBinding("class.cds--popover--auto-align") @Input() autoAlign = false;

	@HostBinding("class.cds--popover-container") containerClass = true;

	_align: | "top"
		| "top-start"
		| "top-end"
		| "right"
		| "right-start"
		| "right-end"
		| "bottom"
		| "bottom-start"
		| "bottom-end"
		| "left"
		| "left-start"
		| "left-end" = "bottom";

	floatingUiConfig: {
		placement: string,
		middleware: any[],
		[key: string]: any
	};

	constructor(protected elementRef: ElementRef, protected ngZone: NgZone, protected render: Renderer2) { }

	handleChange(open: boolean, event: Event) {
		if (this.isOpen !== open) {
			this.isOpenChange.emit(open);
		}

		if (open) {
			this.recomputePosition();
			this.onOpen.emit(event);
		} else {
			this.onClose.emit(event);
		}
		this.isOpen = open;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.recomputePosition();
	}

	recomputePosition() {
		this.ngZone.runOutsideAngular(() => {
			const popContentSpan = this.elementRef.nativeElement.querySelector(".cds--popover-content");
			const arrowElement = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");

			if (popContentSpan && arrowElement) {
				// Reset position, seems like it is using previous values in computation
				// popContentSpan.style.left = '0';
				// popContentSpan.style.top = '0';
				// arrowElement.style.left = '0';
				// arrowElement.style.top = '0';

				computePosition(this.elementRef.nativeElement, popContentSpan, {
					placement: this._align,
					strategy: "absolute",
					middleware: [
						flip({ fallbackAxisSideDirection: "start" }),
						// arrow({
						// 	element: arrowElement,
						// }),
						offset(8)
					]
				}).then((value) => {
					console.log("value", value);
					popContentSpan.style.position = "absolute";
					popContentSpan.style.left = `${value.x}px`;
					popContentSpan.style.top = `${value.y}px`;

					if (this.caret && value.middlewareData.arrow) {
						arrowElement.style.position = "absolute";
						arrowElement.style.left = `${value.middlewareData.arrow.x}px`;
						arrowElement.style.top = `${value.middlewareData.arrow.y}px`;
					}
				});
			}
		});
	}

	ngAfterViewInit(): void {
		this.recomputePosition();
	}
}
