import {
	Directive,
	EventEmitter,
	HostBinding,
	Input,
	Output
} from "@angular/core";

/**
 * Applies popover container styling to the element it is applied to.
 *
 * [See demo](../../?path=/story/components-popover--basic)
 */
@Directive({
	selector: "[cdsPopover], [ibmPopover]"
})
export class PopoverContainer {
	// Top
	@HostBinding("class.cds--popover--top") get alignmentTopClass() {
		return this.align === "top";
	}

	@HostBinding("class.cds--popover--top-left") get alignmentTopLeftClass() {
		return this.align === "top-left";
	}

	@HostBinding("class.cds--popover--top-right") get alignmentTopRightClass() {
		return this.align === "top-right";
	}

	// Bottom
	@HostBinding("class.cds--popover--bottom") get alignmentBottomClass() {
		return this.align === "bottom";
	}

	@HostBinding("class.cds--popover--bottom-left") get alignmentBottomLeftClass() {
		return this.align === "bottom-left";
	}

	@HostBinding("class.cds--popover--bottom-right") get alignmentBottomRightClass() {
		return this.align === "bottom-right";
	}

	// Left
	@HostBinding("class.cds--popover--left") get alignmentLeftClass() {
		return this.align === "left";
	}

	@HostBinding("class.cds--popover--left-top") get alignmentLeftTopClass() {
		return this.align === "left-top";
	}

	@HostBinding("class.cds--popover--left-bottom") get alignmentLeftBottomClass() {
		return this.align === "left-bottom";
	}

	// Right
	@HostBinding("class.cds--popover--right") get alignmentRightClass() {
		return this.align === "right";
	}

	@HostBinding("class.cds--popover--right-top") get alignmentRightTopClass() {
		return this.align === "right-top";
	}

	@HostBinding("class.cds--popover--right-bottom") get alignmentRightBottomClass() {
		return this.align === "right-bottom";
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
	@HostBinding("class.cds--popover--high-contrast") @Input() highContrast = false;
	@HostBinding("class.cds--popover--open") @Input() isOpen = false;

	@HostBinding("class.cds--popover-container") containerClass = true;
	@Input() align: "top" | "top-left" | "top-right" |
		"bottom" | "bottom-left" | "bottom-right" |
		"left" | "left-bottom" | "left-top" |
		"right" | "right-bottom" | "right-top" = "bottom";

	handleChange(open: boolean, event: Event) {
		if (this.isOpen !== open) {
			this.isOpenChange.emit(open);
		}

		if (open) {
			this.onOpen.emit(event);
		} else {
			this.onClose.emit(event);
		}
		this.isOpen = open;
	}
}
