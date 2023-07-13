import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	TemplateRef,
	ChangeDetectorRef,
	HostBinding,
	Renderer2
} from "@angular/core";
import { EventService } from "carbon-components-angular/utils";

/**
 * There are two ways to create a tab, this class is a collection of features
 * & metadata required by both.
 */
@Component({
	template: ""
})
export class BaseTabHeader {
	/**
	 * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
	 * Duplicate from `n-tabs` to support standalone headers
	 */
	@Input() cacheActive = false;
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus: boolean;
	/**
	 * Sets the aria label on the nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the nav element.
	 */
	@Input() ariaLabelledby: string;

	@Input() contentBefore: TemplateRef<any>;
	@Input() contentAfter: TemplateRef<any>;

	@Input() type: "line" | "contained" = "line";
	@Input() theme: "dark" | "light" = "dark";

	@HostBinding("class.cds--tabs") tabsClass = true;
	@HostBinding("class.cds--tabs--contained") get containedClass() {
		return this.type === "contained";
	}
	@HostBinding("class.cds--tabs--light") get themeClass() {
		return this.theme === "light";
	}

	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 */
	@ViewChild("tabList", { static: true }) headerContainer;

	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	currentSelectedTab: number;
	// width of the overflow buttons
	readonly OVERFLOW_BUTTON_OFFSET = 44;
	readonly longPressMultiplier = 3;
	readonly clickMultiplier = 1.5;

	protected longPressInterval = null;
	protected tickInterval = null;

	get hasHorizontalOverflow() {
		const tabList = this.headerContainer.nativeElement;
		return tabList.scrollWidth > tabList.clientWidth;
	}

	get leftOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow || !tabList.scrollLeft;
	}

	get rightOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow ||
			(tabList.scrollLeft + tabList.clientWidth) === tabList.scrollWidth;
	}

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2
	) { }

	handleScroll() {
		this.changeDetectorRef.markForCheck();
	}

	handleOverflowNavClick(direction: number, numOftabs = 0) {
		const tabList = this.headerContainer.nativeElement;

		const { clientWidth, scrollLeft, scrollWidth } = tabList;
		if (direction > 0) {
			tabList.scrollLeft = Math.min(scrollLeft + (scrollWidth / numOftabs) * this.clickMultiplier,
				scrollWidth - clientWidth);
		} else if (direction < 0) {
			tabList.scrollLeft = Math.max(scrollLeft - (scrollWidth / numOftabs) * this.clickMultiplier, 0);
		}
	}

	handleOverflowNavMouseDown(direction: number) {
		const tabList = this.headerContainer.nativeElement;

		this.longPressInterval = setTimeout(() => {
			// Manually overriding scroll behvior to `auto` to make animation work correctly
			this.renderer.setStyle(tabList, "scroll-behavior", "auto");

			this.tickInterval = setInterval(() => {
				tabList.scrollLeft += (direction * this.longPressMultiplier);
				// clear interval if scroll reaches left or right edge
				if (this.leftOverflowNavButtonHidden || this.rightOverflowNavButtonHidden) {
					return () => {
						clearInterval(this.tickInterval);
						this.handleOverflowNavMouseUp();
					};
				}
			});

			return () => clearInterval(this.longPressInterval);
		}, 500);
	}

	/**
	 * Clear intervals/Timeout & reset scroll behavior
	 */
	handleOverflowNavMouseUp() {
		clearInterval(this.tickInterval);
		clearTimeout(this.longPressInterval);

		// Reset scroll behavior
		this.renderer.setStyle(this.headerContainer.nativeElement, "scroll-behavior", "smooth");
	}
}
