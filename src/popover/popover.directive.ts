import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	NgZone,
	OnDestroy,
	Output,
	Renderer2
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
export class PopoverContainer implements AfterViewInit, OnDestroy {

	/**
	 * Set alignment of popover
	 * As of v5, `oldPlacements` are now deprecated in favor of Placements
	 */
	@Input() set align(alignment: oldPlacement | Placement) {
		// If alignment is not passed, the default value will be `undefined`.
		if (!alignment) {
			return;
		}

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

	@Input() set isOpen(open: boolean) {
		this.handleChange(open);
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
	 * Show caret for the
	 */
	@HostBinding("class.cds--popover--caret") @Input() caret = true;
	/**
	 * Enable drop shadow around the popover container
	 */
	@HostBinding("class.cds--popover--drop-shadow") @Input() dropShadow = true;
	/**
	 * Enable high contrast for popover container
	 */
	@HostBinding("class.cds--popover--high-contrast") @Input() highContrast = true;
	/**
	 * **Experimental**: Use floating-ui to position the tooltip
	 */
	@HostBinding("class.cds--popover--auto-align") @Input() autoAlign = false;
	@HostBinding("class.cds--popover-container") containerClass = true;
	@HostBinding("class.cds--popover--open") _open = false;

	protected popoverContentRef: HTMLElement;
	protected caretRef: HTMLElement;
	protected caretOffset;
	protected caretHeight;

	protected autoUpdateCleanUp: Function;

	constructor(
		protected elementRef: ElementRef,
		protected ngZone: NgZone,
		protected renderer: Renderer2
	) { }

	/**
	 * Handles emitting open/close event
	 * @param open - Is the popover container open
	 * @param event - Event
	 */
	handleChange(open: boolean, event?: Event) {
		if (this._open !== open) {
			this.isOpenChange.emit(open);
		}

		if (open) {
			if (event) {
				this.onOpen.emit(event);
			}

			// auto alignment is enabled, we use auto update to set the placement for the element
			if (this.autoAlign) {
				if (this.caretRef) {
					// Get caret offset/height property
					this.caretOffset = parseFloat(
						getComputedStyle(this.caretRef).getPropertyValue("--cds-popover-offset").split("rem", 1)[0]
					) * 16 || 10;
					this.caretHeight = parseFloat(
						getComputedStyle(this.caretRef).getPropertyValue("--cds-popover-caret-height").split("px", 1)[0]
					) || 6;
				}
				if (this.elementRef.nativeElement && this.popoverContentRef) {
					// Auto update
					this.autoUpdateCleanUp = autoUpdate(this.elementRef.nativeElement, this.popoverContentRef, this.recomputePosition.bind(this));
				}
			}

		} else {
			this.cleanUp();
			if (event) {
				this.onClose.emit(event);
			}
		}
		this._open = open;
	}

	/**
	 * Compute position of tooltip when autoAlign is enabled
	 */
	async recomputePosition() {
		// Run outside of angular zone to avoid change detection and rely on
		// floating-ui
		this.ngZone.runOutsideAngular(async () => {
			const { x, y, placement, middlewareData } = await computePosition(
				this.elementRef.nativeElement,
				this.popoverContentRef,
				{
					placement: this._align,
					strategy: "fixed",
					middleware: [
						flip({ fallbackAxisSideDirection: "start" }),
						offset(this.caretOffset),
						this.caret && arrow({ element: this.caretRef })
					]
				});

			const previousAlignment = this._align;
			this._align = placement;
			this.setAlignmentClass(previousAlignment);

			// Using CSSOM to manipulate CSS to avoid content security policy inline-src
			// https://github.com/w3c/webappsec-csp/issues/212
			this.popoverContentRef.style.position = "fixed";
			this.popoverContentRef.style.left = `${x}px`;
			this.popoverContentRef.style.top = `${y}px`;

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
				this.caretRef.style[staticSide] = `${-this.caretHeight}px`;
			}
		});
	}

	/**
	 * Handle initialization of element
	 */
	ngAfterViewInit(): void {
		this.initialzeReferences();
	}

	initialzeReferences(): void {
		this.setAlignmentClass();

		// Initialize html references since they will not change and are required for popover components
		this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
		this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
		// Handle initial isOpen
		this.handleChange(this._open);
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
		if (this.autoUpdateCleanUp) {
			this.autoUpdateCleanUp?.();
			this.autoUpdateCleanUp = undefined;
		}
	}

	/**
	 * Remove existing assigned alignment class and reassign
	 * @param previousAlignment
	 */
	setAlignmentClass(previousAlignment?: string) {
		if (this.elementRef.nativeElement && previousAlignment !== this._align) {
			this.renderer.removeClass(this.elementRef.nativeElement, `${this.alignmentClassPrefix}${previousAlignment}`);
			this.renderer.addClass(this.elementRef.nativeElement, `${this.alignmentClassPrefix}${this._align}`);
		}
	}
}
