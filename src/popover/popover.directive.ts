import {
	AfterViewInit,
	ChangeDetectorRef,
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	Output,
	Renderer2,
	SimpleChanges
} from "@angular/core";
import {
	arrow,
	autoUpdate,
	computePosition,
	flip,
	offset,
	Placement
} from "@floating-ui/dom";

// Deprecated popover alignments
type oldPlacement = "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right"
	| "left-bottom"
	| "left-top"
	| "right-bottom"
	| "right-top";

@Directive({
	selector: "[cdsPopover], [ibmPopover]"
})
export class PopoverContainer implements AfterViewInit, OnChanges, OnDestroy {
	/**
	 * Set alignment of popover
	 * As of v5, `oldPlacements` are now deprecated in favor of Placements
	 *
	 * When `autoAlign` is set to `true`, alignment may change for best placement
	 */
	@Input() set align(alignment: oldPlacement | Placement) {
		// If alignment is not passed, the default value will be `undefined`.
		if (!alignment) {
			return;
		}

		const previousAlignment = this._align;
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
		this.updateAlignmentClass(this._align, previousAlignment);
	}

	_align: Placement = "bottom";
	readonly alignmentClassPrefix = "cds--popover--";

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
	/**
	 * Show caret at the alignment position
	 */
	@HostBinding("class.cds--popover--caret") @Input() caret = true;
	/**
	 * Enable drop shadow around the popover container
	 */
	@HostBinding("class.cds--popover--drop-shadow") @Input() dropShadow = true;
	/**
	 * Enable high contrast for popover container
	 */
	@HostBinding("class.cds--popover--high-contrast") @Input() highContrast = false;
	/**
	 * **Experimental**: Use floating-ui to position the tooltip
	 * This is not toggleable - should be sent once
	 */
	@HostBinding("class.cds--popover--auto-align") @Input() autoAlign = false;
	@HostBinding("class.cds--popover-container") containerClass = true;
	@Input() @HostBinding("class.cds--popover--open") isOpen = false;

	protected popoverContentRef: HTMLElement;
	protected caretRef: HTMLElement;
	protected caretOffset: number;
	protected caretHeight: number;
	protected unmountFloatingElement: Function;

	constructor(
		protected elementRef: ElementRef,
		protected ngZone: NgZone,
		protected renderer: Renderer2,
		protected changeDetectorRef: ChangeDetectorRef
	) {}

	/**
	 * Handles emitting open/close event
	 * @param open - Is the popover container open
	 * @param event - Event
	 */
	handleChange(open: boolean, event?: Event) {
		// We only emit the event when parameter has an event to keep existing behavior
		if ((this.isOpen !== open) && event) {
			this.isOpenChange.emit(open);
		}

		if (open) {
			if (event) {
				this.onOpen.emit(event);
			}

			// when auto alignment is enabled, use auto update to set the placement for the element
			if (this.autoAlign) {
				if (this.caretRef) {
					// Get caret offset/height property
					// Getting computed styles once every open, otherwise expensive.
					const computedStyle = getComputedStyle(this.caretRef);
					const offset = computedStyle.getPropertyValue("--cds-popover-offset");
					const height = computedStyle.getPropertyValue("--cds-popover-caret-height");
					this.caretOffset = (offset?.includes("px") ? Number(offset.split("px", 1)[0]) : Number(offset.split("rem", 1)[0]) * 16) || 10;
					this.caretHeight = (height?.includes("px") ? Number(height.split("px", 1)[0]) : Number(height.split("rem", 1)[0]) * 16) || 6;
				}
				if (this.elementRef.nativeElement && this.popoverContentRef) {
					this.unmountFloatingElement = autoUpdate(
						this.elementRef.nativeElement,
						this.popoverContentRef,
						this.recomputePosition.bind(this)
					);
				}
			}
		} else {
			this.cleanUp();
			if (event) {
				this.onClose.emit(event);
			}
		}
		this.isOpen = open;
		this.changeDetectorRef.markForCheck();
	}

	roundByDPR(value) {
		const dpr = window.devicePixelRatio || 1;
		return Math.round(value * dpr) / dpr;
	}

	/**
	 * Compute position of tooltip when autoAlign is enabled
	 */
	recomputePosition() {
		// Run outside of angular zone to avoid unnecessary change detection and rely on floating-ui
		this.ngZone.runOutsideAngular(async () => {
			const { x, y, placement, middlewareData } = await computePosition(
				this.elementRef.nativeElement,
				this.popoverContentRef,
				{
					placement: this._align,
					strategy: "fixed",
					middleware: [
						offset(this.caretOffset),
						flip({ fallbackAxisSideDirection: "start" }),
						arrow({ element: this.caretRef })
					]
				});

			const previousAlignment = this._align;
			this._align = placement;
			this.updateAlignmentClass(this._align, previousAlignment);

			// Using CSSOM to manipulate CSS to avoid content security policy inline-src
			// https://github.com/w3c/webappsec-csp/issues/212
			Object.assign(this.popoverContentRef.style, {
				position: "fixed",
				top: "0",
				left: "0",
				// Using transform instead of top/left position to improve performance
				transform: `translate(${this.roundByDPR(x)}px,${this.roundByDPR(y)}px)`
			});

			if (middlewareData.arrow) {
				const { x: arrowX, y: arrowY } = middlewareData.arrow;

				const staticSide = {
					top: "bottom",
					right: "left",
					bottom: "top",
					left: "right"
				}[placement.split("-")[0]];

				this.caretRef.style.left = arrowX != null ? `${arrowX}px` : "";
				this.caretRef.style.top = arrowY != null ? `${arrowY}px` : "";
				this.caretRef.style.right = "";
				this.caretRef.style.bottom = "";

				if (staticSide) {
					this.caretRef.style[staticSide] = `${-this.caretHeight}px`;
				}
			}
		});
	}

	/**
	 * Close the popover and reopen it with updated values without emitting an event
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges): void {
		// Close and reopen the popover, handle alignment/programmatic open/close
		const originalState = this.isOpen;
		this.handleChange(false);

		// Ignore first change since content is not initialized
		if (changes.autoAlign && !changes.autoAlign.firstChange) {
			// Reset the inline styles
			this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
			this.popoverContentRef.setAttribute("style", "");
			this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
		}

		this.handleChange(originalState);
	}

	/**
	 * Handle initialization of element
	 */
	ngAfterViewInit(): void {
		this.initializeReferences();
	}

	initializeReferences(): void {
		this.updateAlignmentClass(this._align);

		// Initialize html references since they will not change and are required for popover components
		this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
		this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");

		// Handle initial isOpen
		this.handleChange(this.isOpen);
	}

	/**
	 * Clean up
	 */
	ngOnDestroy(): void {
		this.cleanUp();
	}

	/**
	 * Clean up `autoUpdate` if auto alignment is enabled
	 */
	cleanUp() {
		if (this.unmountFloatingElement) {
			this.unmountFloatingElement();
		}
		this.unmountFloatingElement = undefined;
	}

	/**
	 * Replace existing previous alignment class with new
	 * @param previousAlignment
	 */
	updateAlignmentClass(newAlignment: string, previousAlignment?: string) {
		if (this.elementRef.nativeElement && previousAlignment !== newAlignment) {
			const regexp = new RegExp("right|top|left|bottom");
			// Since we are constantly switching, it's safer to delete all matching class names
			this.elementRef.nativeElement.classList.forEach(className => {
				if (regexp.test(className)) {
					this.renderer.removeClass(this.elementRef.nativeElement, `${className}`);
				}
			});
			this.renderer.addClass(this.elementRef.nativeElement, `${this.alignmentClassPrefix}${newAlignment}`);
		}
	}
}
