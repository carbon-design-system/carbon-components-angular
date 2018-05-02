import {
	Input,
	Output,
	Directive,
	EventEmitter,
	ElementRef,
	HostListener,
	OnChanges,
	SimpleChanges,
	AfterViewInit
} from "@angular/core";
import { dropdownConfig } from "./dropdown.const";

@Directive({
	selector: "[nScrollableList]",
	exportAs: "scrollable-list",
})
export class ScrollableList implements OnChanges, AfterViewInit {
	/**
	 * Enables or disables scrolling for the whole directive
	 */
	@Input() scrollEnabled = true;
	/**
	 * Sets the target used for hover scrolling up
	 */
	@Input() scrollUpTarget: HTMLElement;
	/**
	 * Sets the target used for hover scrolling down
	 */
	@Input() scrollDownTarget: HTMLElement;
	/**
	 * Optional target list to scroll
	 */
	@Input() nScrollableList: string = null;

	// keeps track of the setInterval for hover scrolling
	private hoverScrollInterval;
	// tracks the last touch event
	private lastTouch;
	private canScrollUp = false;
	private canScrollDown = false;
	private list = this.elementRef.nativeElement;

	constructor(protected elementRef: ElementRef) {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.scrollEnabled) {
			if (changes.scrollEnabled.currentValue) {
				this.list.style.overflow = "hidden";
				this.scrollUpTarget.style.display = "flex";
				this.scrollDownTarget.style.display = "flex";
				this.canScrollUp = true;
				this.canScrollDown = true;
				this.updateScrollHeight();
				this.checkScrollArrows();
				setTimeout(() => {
					this.checkScrollArrows();
				});
			} else {
				this.scrollUpTarget.style.display = "none";
				this.scrollDownTarget.style.display = "none";
				this.canScrollUp = false;
				this.canScrollDown = false;
				this.list.style.height = null;
				this.list.style.overflow = null;
				clearInterval(this.hoverScrollInterval);
			}
		}
	}

	ngAfterViewInit() {
		if (this.nScrollableList) {
			this.list = this.elementRef.nativeElement.querySelector(this.nScrollableList);
		}
		this.scrollUpTarget.addEventListener("mouseover", () => this.onHoverUp(true));
		this.scrollUpTarget.addEventListener("mouseout", () => this.onHoverUp(false));
		this.scrollDownTarget.addEventListener("mouseover", () => this.onHoverDown(true));
		this.scrollDownTarget.addEventListener("mouseout", () => this.onHoverDown(false));
	}

	public updateScrollHeight() {
		if (this.scrollEnabled) {
			const container = this.elementRef.nativeElement.parentElement;
			const containerRect = container.getBoundingClientRect();
			const innerHeightDiff = this.list.getBoundingClientRect().top - containerRect.top;
			const outerHeightDiff = containerRect.height - (containerRect.bottom - window.innerHeight);
			// 40 gives us some padding between the bottom of the list,
			// the bottom of the window, and the scroll down button
			const height = outerHeightDiff - innerHeightDiff - 40;
			this.list.style.height = `${height}px`;
		}
	}

	protected checkScrollArrows() {
		if (this.list.scrollTop === 0) {
			if (this.canScrollUp) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) + 16}px`;
			}
			this.scrollUpTarget.style.display = "none";
			this.canScrollUp = false;
		} else if (this.list.scrollTop === this.list.scrollTopMax) {
			if (this.canScrollDown) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) + 16}px`;
			}
			this.scrollDownTarget.style.display = "none";
			this.canScrollDown = false;
		} else {
			if (!this.canScrollUp) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) - 16}px`;
			}
			if (!this.canScrollDown) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) - 16}px`;
			}
			this.scrollUpTarget.style.display = "flex";
			this.scrollDownTarget.style.display = "flex";
			this.canScrollUp = true;
			this.canScrollDown = true;
		}
	}

	@HostListener("wheel", ["$event"])
	protected onWheel(event) {
		if (event.deltaY < 0) {
			this.list.scrollTop -= 10;
		} else {
			this.list.scrollTop += 10;
		}
		// only prevent the parent/window from scrolling if we can scroll
		if (!(this.list.scrollTop === this.list.scrollTopMax || this.list.scrollTop === 0)) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.checkScrollArrows();
	}

	@HostListener("touchstart", ["$event"])
	protected onTouchStart(event) {
		if (event.touches[0]) {
			this.lastTouch = event.touches[0].clientY;
		}
	}

	@HostListener("touchmove", ["$event"])
	protected onTouchMove(event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.touches[0]) {
			const touch = event.touches[0];
			this.list.scrollTop += this.lastTouch - touch.clientY;
			this.lastTouch = touch.clientY;
			this.checkScrollArrows();
		}
	}

	protected hoverScrollBy(hovering, amount) {
		if (hovering) {
			this.hoverScrollInterval = setInterval(() => {
				this.list.scrollTop += amount;
				this.checkScrollArrows();
			}, 1);
		} else {
			clearInterval(this.hoverScrollInterval);
		}
	}

	protected onHoverUp(hovering) {
		this.hoverScrollBy(hovering, -dropdownConfig.hoverScrollSpeed);
	}

	protected onHoverDown(hovering) {
		this.hoverScrollBy(hovering, dropdownConfig.hoverScrollSpeed);
	}

	@HostListener("keydown", ["$event"])
	protected onKeyDown(event) {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			this.checkScrollArrows();
		}
	}
}
