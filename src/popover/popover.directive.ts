import { DOCUMENT } from "@angular/common";
import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	Inject,
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
import { fromEvent } from "rxjs";

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

	// Top
	@HostBinding("class.cds--popover--top") get alignmentTopClass() {
		return this._align === "top" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--top-left") get alignmentTopLeftClass() {
		return this._align === "top-start" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--top-right") get alignmentTopRightClass() {
		return this._align === "top-end" && !this.autoAlign;
	}

	// Bottom
	@HostBinding("class.cds--popover--bottom") get alignmentBottomClass() {
		return this._align === "bottom" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--bottom-left") get alignmentBottomLeftClass() {
		return this._align === "bottom-start" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--bottom-right") get alignmentBottomRightClass() {
		return this._align === "bottom-end" && !this.autoAlign;
	}

	// Left
	@HostBinding("class.cds--popover--left") get alignmentLeftClass() {
		return this._align === "left" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--left-top") get alignmentLeftTopClass() {
		return this._align === "left-start" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--left-bottom") get alignmentLeftBottomClass() {
		return this._align === "left-end" && !this.autoAlign;
	}

	// Right
	@HostBinding("class.cds--popover--right") get alignmentRightClass() {
		return this._align === "right" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--right-top") get alignmentRightTopClass() {
		return this._align === "right-start" && !this.autoAlign;
	}

	@HostBinding("class.cds--popover--right-bottom") get alignmentRightBottomClass() {
		return this._align === "right-end" && !this.autoAlign;
	}

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

	scrollEvent = this._scrollEventReposition.bind(this);

	constructor(
		protected elementRef: ElementRef,
		protected ngZone: NgZone,
		protected render: Renderer2,
		@Inject(DOCUMENT) protected document: Document
	) { }

	handleChange(open: boolean, event: Event) {
		if (this.isOpen !== open) {
			this.isOpenChange.emit(open);
		}

		if (open) {
			// Considering we are applying this event directly to the document, we can ignore the
			// bubbling phase and listen for the event in the capture phase
			this.document.addEventListener("scroll", this.scrollEvent, { capture: true });
			this.recomputePosition();
			this.onOpen.emit(event);
		} else {
			this.document.removeEventListener("scroll", this.scrollEvent, true);
			this.onClose.emit(event);
		}
		this.isOpen = open;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.recomputePosition();
	}

	ngAfterViewInit(): void {
		this.recomputePosition();
	}

	recomputePosition() {
		if (this.autoAlign) {
			this.ngZone.runOutsideAngular(() => {
				const popContentSpan = this.elementRef.nativeElement.querySelector(".cds--popover-content");
				const arrowElement = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");

				if (popContentSpan && arrowElement) {
					computePosition(this.elementRef.nativeElement, popContentSpan, {
						placement: this._align,
						strategy: "fixed",
						middleware: [
							flip({ fallbackAxisSideDirection: "start" }),
							offset(this.caret ? 10 : 0),
							this.caret && arrow({ element: arrowElement })
						]
					}).then(({ x, y, placement, middlewareData }) => {
						// https://github.com/w3c/webappsec-csp/issues/212
						popContentSpan.style.position = "fixed";
						popContentSpan.style.left = `${x}px`;
						popContentSpan.style.top = `${y}px`;

						const { x: arrowX, y: arrowY } = middlewareData.arrow;

						if (middlewareData.arrow) {

							const staticSide = {
								top: "bottom",
								right: "left",
								bottom: "top",
								left: "right"
							}[placement.split("-")[0]];

							// arrowElement.style.position = "absolute";
							arrowElement.style.left = arrowX != null ? `${arrowX}px` : "";
							arrowElement.style.top = arrowY != null ? `${arrowY}px` : "";
							arrowElement.style.right = "";
							arrowElement.style.bottom = "";
							arrowElement.style[staticSide] = "10px";
						}
					});
				}
			});
		}
	}

	// Save address to function to remove listener
	_scrollEventReposition() {
		this.recomputePosition();
	}
}
