import {
	Component,
	QueryList,
	Input,
	HostListener,
	HostBinding,
	ViewChild,
	ContentChildren,
	AfterContentInit,
	ViewChildren,
	ElementRef,
	OnChanges,
	SimpleChanges,
	OnDestroy,
	OnInit,
	ChangeDetectorRef,
	Renderer2
} from "@angular/core";
import { EventService } from "carbon-components-angular/utils";
import { I18n } from "carbon-components-angular/i18n";

import { BaseTabHeader } from "./base-tab-header.component";
import { Tab } from "./tab.component";
import { NgClass, NgTemplateOutlet } from "@angular/common";

const VERTICAL_TAB_HEIGHT = 64;

/**
 * The `TabHeadersVertical` component renders tab headers in a vertical
 * orientation. It contains the `Tab` items and supports keyboard navigation
 * via ArrowUp/ArrowDown/Home/End.
 */
@Component({
	selector: "cds-tab-headers-vertical, ibm-tab-headers-vertical",
	template: `
		@if (isOverflowingTop) {
			<div class="cds--tab--list-gradient_top"></div>
		}
		<div
			#tabList
			class="cds--tab--list"
			role="tablist"
			[attr.aria-label]="ariaLabel || translations.HEADER_ARIA_LABEL"
			[attr.aria-labelledby]="ariaLabelledby || null">
			<ng-container [ngTemplateOutlet]="contentBefore"></ng-container>
			@for (tab of tabs; track tab; let i = $index) {
				<button
					#tabItem
					role="tab"
					[attr.aria-selected]="tab.active"
					[attr.tabindex]="(tab.active?0:-1)"
					[attr.aria-controls]="tab.id"
					[attr.aria-disabled]="tab.disabled"
					[disabled]="tab.disabled"
					[ngClass]="{
						'cds--tabs__nav-item--selected': tab.active,
						'cds--tabs__nav-item--disabled': tab.disabled
					}"
					class="cds--tabs__nav-item cds--tabs__nav-link"
					type="button"
					draggable="false"
					id="{{tab.id}}-header"
					[attr.title]="tab.title || (!tab.headingIsTemplate ? tab.heading : null)"
					(focus)="onTabFocus(i)"
					(click)="selectTab(tab, i)">
					<div class="cds--tabs__nav-item-label-wrapper">
						<span class="cds--tabs__nav-item-label">
							@if (!tab.headingIsTemplate) {
								{{ tab.heading }}
							}
							@if (tab.headingIsTemplate) {
								<ng-template
									[ngTemplateOutlet]="tab.heading"
									[ngTemplateOutletContext]="{$implicit: tab.context}">
								</ng-template>
							}
						</span>
					</div>
				</button>
			}
			<ng-container [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		@if (isOverflowingBottom) {
			<div class="cds--tab--list-gradient_bottom"></div>
		}
	`,
	imports: [NgClass, NgTemplateOutlet]
})
export class TabHeadersVertical extends BaseTabHeader implements AfterContentInit, OnChanges, OnDestroy, OnInit {
	/**
	 * List of `Tab` components.
	 */
	// Template/API uses `[tabs]`; property name differs to avoid clashing with the `tabs` field populated from content.
	// eslint-disable-next-line @angular-eslint/no-input-rename -- intentional alias for public `[tabs]` binding
	@Input("tabs") tabInput: QueryList<Tab>;

	/**
	 * i18n strings for the tab list `aria-label` fallback.
	 */
	@Input() translations = this.i18n.get().TABS;

	@HostBinding("class.cds--tabs--vertical") verticalClass = true;

	@ViewChild("tabList", { static: true }) headerContainer: ElementRef<HTMLElement>;

	/**
	 * ContentChild of all the tabs
	 */
	@ContentChildren(Tab) tabQuery: QueryList<Tab>;
	tabs: QueryList<Tab>;

	@ViewChildren("tabItem") allTabHeaders: QueryList<ElementRef>;

	/**
	 * Focused tab index when `followFocus` is false (manual activation)
	 */
	activeIndex: number | null = null;

	/**
	 * Whether the tab list is overflowing at the top (some tabs are clipped).
	 */
	isOverflowingTop = false;
	/**
	 * Whether the tab list is overflowing at the bottom (some tabs are clipped).
	 */
	isOverflowingBottom = false;

	private resizeObserver: ResizeObserver;

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2,
		protected i18n: I18n
	) {
		super(elementRef, changeDetectorRef, eventService, renderer);
		this.type = "contained";
	}

	@HostListener("keydown", ["$event"])
	keyboardInput(event: KeyboardEvent) {
		if (!this.tabs) {
			return;
		}
		const tabsArray = this.tabs.toArray();
		const enabledTabs = tabsArray.filter(tab => !tab.disabled);
		if (enabledTabs.length === 0) {
			return;
		}

		const referenceIndex = this.followFocus ?
			this.currentSelectedTab :
			(this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab);
		const currentEnabledIndex = Math.max(0, enabledTabs.indexOf(tabsArray[referenceIndex]));

		let nextEnabledIndex = currentEnabledIndex;
		let handled = false;

		if (event.key === "ArrowDown") {
			nextEnabledIndex = (currentEnabledIndex + 1) % enabledTabs.length;
			handled = true;
		} else if (event.key === "ArrowUp") {
			nextEnabledIndex = (enabledTabs.length + currentEnabledIndex - 1) % enabledTabs.length;
			handled = true;
		} else if (event.key === "Home") {
			nextEnabledIndex = 0;
			handled = true;
		} else if (event.key === "End") {
			nextEnabledIndex = enabledTabs.length - 1;
			handled = true;
		}

		if (handled) {
			event.preventDefault();
			const nextTab = enabledTabs[nextEnabledIndex];
			const nextIndex = tabsArray.indexOf(nextTab);

			if (this.followFocus) {
				this.selectTab(nextTab, nextIndex);
			} else {
				this.activeIndex = nextIndex;
			}
			this.allTabHeaders.toArray()[nextIndex].nativeElement.focus();
			return;
		}

		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			const focusIndex = this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab;
			this.selectTab(tabsArray[focusIndex], focusIndex);
		}
	}

	@HostListener("blur", ["$event"])
	handleBlur(event: FocusEvent) {
		const relatedTarget = event.relatedTarget as Node | null;
		const container = this.headerContainer?.nativeElement;
		if (container && relatedTarget && container.contains(relatedTarget)) {
			return;
		}
		if (!this.followFocus) {
			this.activeIndex = this.currentSelectedTab;
		}
	}

	ngOnInit(): void {
		this.resizeObserver = new ResizeObserver(() => {
			this.updateOverflowState();
			this.changeDetectorRef.detectChanges();
		});
		this.resizeObserver.observe(this.headerContainer.nativeElement);
		this.headerContainer.nativeElement.addEventListener("scroll", this.listScrollHandler);
	}

	ngOnDestroy(): void {
		this.resizeObserver?.unobserve(this.headerContainer.nativeElement);
		this.headerContainer.nativeElement.removeEventListener("scroll", this.listScrollHandler);
	}

	ngAfterContentInit() {
		if (!this.tabInput) {
			this.tabs = this.tabQuery;
		} else {
			this.tabs = this.tabInput;
		}

		this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);
		this.tabs.changes.subscribe(() => {
			this.setFirstTab();
			this.changeDetectorRef.markForCheck();
		});
		this.setFirstTab();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabs && changes.cacheActive) {
			this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);
		}
	}

	onTabFocus(index: number) {
		if (this.followFocus) {
			this.currentSelectedTab = index;
		} else {
			this.activeIndex = index;
		}
		this.scrollSelectedTabIntoView();
	}

	selectTab(tab: Tab, tabIndex: number) {
		if (tab.disabled) {
			return;
		}
		this.currentSelectedTab = tabIndex;
		this.activeIndex = tabIndex;
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		tab.doSelect();
		this.scrollSelectedTabIntoView();
	}

	getSelectedTab(): any {
		const selected = this.tabs.find(tab => tab.active);
		if (selected) {
			return selected;
		}
		return { headingIsTemplate: false, heading: "" };
	}

	protected updateOverflowState() {
		const element = this.headerContainer?.nativeElement;
		if (!element) {
			return;
		}
		const halfTabHeight = VERTICAL_TAB_HEIGHT / 2;
		this.isOverflowingBottom =
			element.scrollTop + element.clientHeight + halfTabHeight <= element.scrollHeight;
		this.isOverflowingTop = element.scrollTop > halfTabHeight;
		this.changeDetectorRef.markForCheck();
	}

	protected scrollSelectedTabIntoView() {
		const container = this.headerContainer?.nativeElement;
		if (!container) {
			return;
		}
		const selectedHeader = this.allTabHeaders?.toArray()[this.currentSelectedTab]?.nativeElement;
		if (!selectedHeader) {
			return;
		}
		const containerRect = container.getBoundingClientRect();
		const selectedRect = selectedHeader.getBoundingClientRect();
		const halfTabHeight = VERTICAL_TAB_HEIGHT / 2;

		if (
			selectedRect.top - halfTabHeight < containerRect.top ||
			selectedRect.top - containerRect.top + VERTICAL_TAB_HEIGHT + halfTabHeight > containerRect.height
		) {
			container.scrollTo({
				top: Math.max(0, (this.currentSelectedTab - 1) * VERTICAL_TAB_HEIGHT),
				behavior: "smooth"
			});
		}
	}

	protected setFirstTab() {
		setTimeout(() => {
			let firstTab = this.tabs.find(tab => tab.active);
			if (!firstTab && this.tabs.first) {
				firstTab = this.tabs.first;
				firstTab.active = true;
			}
			if (firstTab) {
				this.currentSelectedTab = this.tabs.toArray().indexOf(firstTab);
				this.activeIndex = this.currentSelectedTab;
				firstTab.doSelect();
				this.updateOverflowState();
			}
		});
	}
	private listScrollHandler = () => this.updateOverflowState();
}
