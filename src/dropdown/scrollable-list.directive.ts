import {
	Input,
	Directive,
	ElementRef,
	HostListener,
	OnChanges,
	SimpleChanges,
	AfterViewInit
} from "@angular/core";

@Directive({
	selector: "[cdsScrollableList], [ibmScrollableList]",
	exportAs: "scrollable-list"
})
export class ScrollableList implements OnChanges, AfterViewInit {
	/**
	 * Optional target list to scroll
	 */
	@Input() nScrollableList: string = null;
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
	 * How many lines to scroll by each time `wheel` fires
	 * Defaults to 10 - based on testing this isn't too fast or slow on any platform
	 */
	@Input() scrollBy = 10;

	// keeps track of the setInterval for hover scrolling
	protected hoverScrollInterval;
	// tracks the last touch event
	protected lastTouch;
	protected canScrollUp = false;
	protected canScrollDown = false;
	protected list = this.elementRef.nativeElement;

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
		const scrollUpHeight = this.scrollUpTarget.offsetHeight;
		const scrollDownHeight = this.scrollDownTarget.offsetHeight;
		if (this.list.scrollTop === 0) {
			if (this.canScrollUp) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) + scrollUpHeight}px`;
			}
			this.scrollUpTarget.style.display = "none";
			this.canScrollUp = false;
		} else if (this.list.scrollTop === this.list.scrollTopMax) {
			if (this.canScrollDown) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) + scrollDownHeight}px`;
			}
			this.scrollDownTarget.style.display = "none";
			this.canScrollDown = false;
		} else {
			if (!this.canScrollUp) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) - scrollUpHeight}px`;
			}
			if (!this.canScrollDown) {
				this.list.style.height = `${parseInt(this.list.style.height, 10) - scrollDownHeight}px`;
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
			this.list.scrollTop -= this.scrollBy;
		} else {
			this.list.scrollTop += this.scrollBy;
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
		// how many px/lines to scroll by on hover
		// 3 is just a random number that felt good
		// 1 and 2 are too slow, 4 works but it might be a tad fast
		this.hoverScrollBy(hovering, -3);
	}

	protected onHoverDown(hovering) {
		this.hoverScrollBy(hovering, 3);
	}

	@HostListener("keydown", ["$event"])
	protected onKeyDown(event) {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			this.checkScrollArrows();
		}
	}
}
