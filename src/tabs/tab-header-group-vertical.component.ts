import {
	AfterContentInit,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	QueryList,
	Renderer2,
	SimpleChanges,
	ViewChild
} from "@angular/core";
import { Subscription } from "rxjs";
import { EventService } from "carbon-components-angular/utils";

import { BaseTabHeader } from "./base-tab-header.component";
import { TabHeaderBase } from "./tab-header.directive";

const VERTICAL_TAB_HEIGHT = 64;

/**
 * Vertical tab header group: same children as `cds-tab-header-group`, with
 * up/down (and Home/End) keys, gradient overflow, and always-contained type.
 *
 *
 * ```html
 * <cds-tabs-vertical-grouped height="400px">
 *   <cds-tab-header-group-vertical>
 *     <cds-tab-header [paneReference]="a">A</cds-tab-header>
 *     <cds-tab-header [paneReference]="b">B</cds-tab-header>
 *   </cds-tab-header-group-vertical>
 *   <cds-tab #a>...</cds-tab>
 *   <cds-tab #b>...</cds-tab>
 * </cds-tabs-vertical-grouped>
 * ```
 */
@Component({
	selector: "cds-tab-header-group-vertical, ibm-tab-header-group-vertical",
	template: `
		<div *ngIf="isOverflowingTop" class="cds--tab--list-gradient_top"></div>
		<div
			#tabList
			class="cds--tab--list"
			role="tablist"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby || null">
			<ng-container [ngTemplateOutlet]="contentBefore"></ng-container>
			<ng-content></ng-content>
			<ng-container [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		<div *ngIf="isOverflowingBottom" class="cds--tab--list-gradient_bottom"></div>
	`
})
export class TabHeaderGroupVertical
	extends BaseTabHeader
	implements AfterContentInit, OnChanges, OnInit, OnDestroy {
	/**
	 * When `true`, sets each tab panel `tabindex` to `-1` for navigation-style usage.
	 */
	@Input() isNavigation = false;

	/**
	 * Fires with tab index when a close control is used (with `dismissable`).
	 */
	@Output() tabClose = new EventEmitter<number>();

	/**
	 * ContentChildren of all the tab headers (both directive and component
	 * forms — see `TabHeaderBase`).
	 */
	@ContentChildren(TabHeaderBase) tabHeaderQuery: QueryList<TabHeaderBase>;

	@ViewChild("tabList", { static: true }) headerContainer: ElementRef<HTMLElement>;

	@HostBinding("class.cds--tabs--vertical") verticalClass = true;

	/**
	 * Index of the selected tab for keyboard logic
	 */
	currentSelectedTab = 0;

	/**
	 * Focused tab index when `followFocus` is false (manual activation).
	 */
	activeIndex: number | null = null;

	isOverflowingTop = false;
	isOverflowingBottom = false;

	/**
	 * We use taller rows when any header has a secondary label.
	 */
	@HostBinding("class.cds--tabs--tall") get tallClass(): boolean {
		return this.hasSecondaryLabelTabs;
	}

	get hasSecondaryLabelTabs(): boolean {
		if (!this.tabHeaderQuery) {
			return false;
		}
		return this.tabHeaderQuery
			.toArray()
			.some((h) => h.secondaryLabel != null && h.secondaryLabel !== "");
	}

	private selectedSubscriptionTracker = new Subscription();
	private closeSubscriptionTracker = new Subscription();

	private resizeObserver: ResizeObserver | null = null;
	private boundListScrollHandler: () => void;

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2
	) {
		super(elementRef, changeDetectorRef, eventService, renderer);
		this.type = "contained";
		// Cache a stable reference for add/removeEventListener.
		this.boundListScrollHandler = () => this.updateOverflowState();
	}

	@HostListener("keydown", ["$event"])
	keyboardInput(event: KeyboardEvent) {
		if (!this.tabHeaderQuery) {
			return;
		}
		const tabHeadersArray = this.tabHeaderQuery.toArray();
		const enabledHeaders = tabHeadersArray.filter((h) => !h.disabled);
		if (enabledHeaders.length === 0) {
			return;
		}

		const referenceIndex = this.followFocus
			? this.currentSelectedTab
			: (this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab);
		const currentEnabledIndex = Math.max(0, enabledHeaders.indexOf(tabHeadersArray[referenceIndex]));

		let nextEnabledIndex = currentEnabledIndex;
		let handled = false;

		if (event.key === "ArrowDown") {
			nextEnabledIndex = (currentEnabledIndex + 1) % enabledHeaders.length;
			handled = true;
		} else if (event.key === "ArrowUp") {
			nextEnabledIndex = (enabledHeaders.length + currentEnabledIndex - 1) % enabledHeaders.length;
			handled = true;
		} else if (event.key === "Home") {
			nextEnabledIndex = 0;
			handled = true;
		} else if (event.key === "End") {
			nextEnabledIndex = enabledHeaders.length - 1;
			handled = true;
		}

		if (handled) {
			event.preventDefault();
			const nextHeader = enabledHeaders[nextEnabledIndex];
			const nextIndex = tabHeadersArray.indexOf(nextHeader);

			if (this.followFocus) {
				nextHeader.selectTab();
				this.currentSelectedTab = nextIndex;
			} else {
				nextHeader.focus();
				this.activeIndex = nextIndex;
			}
			return;
		}

		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			const focusIndex = this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab;
			tabHeadersArray[focusIndex].selectTab();
			this.currentSelectedTab = focusIndex;
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

	ngOnInit() {
		this.resizeObserver = new ResizeObserver(() => {
			this.updateOverflowState();
			this.changeDetectorRef.detectChanges();
		});
		this.resizeObserver.observe(this.headerContainer.nativeElement);
		this.headerContainer.nativeElement.addEventListener(
			"scroll",
			this.boundListScrollHandler
		);
	}

	ngOnDestroy() {
		this.selectedSubscriptionTracker.unsubscribe();
		this.closeSubscriptionTracker.unsubscribe();
		this.resizeObserver?.unobserve(this.headerContainer.nativeElement);
		this.resizeObserver = null;
		this.headerContainer.nativeElement.removeEventListener(
			"scroll",
			this.boundListScrollHandler
		);
	}

	ngAfterContentInit() {
		// Reallocate trackers because subscriptions are permanently closed after unsubscribe
		this.selectedSubscriptionTracker.unsubscribe();
		this.closeSubscriptionTracker.unsubscribe();
		this.selectedSubscriptionTracker = new Subscription();
		this.closeSubscriptionTracker = new Subscription();

		this.applyHeaderInputs();
		this.wireSubscriptions();

		this.tabHeaderQuery.changes.subscribe(() => {
			// Re-wire when the projected list changes.
			this.selectedSubscriptionTracker.unsubscribe();
			this.closeSubscriptionTracker.unsubscribe();
			this.selectedSubscriptionTracker = new Subscription();
			this.closeSubscriptionTracker = new Subscription();
			this.applyHeaderInputs();
			this.wireSubscriptions();
			this.changeDetectorRef.markForCheck();
		});

		setTimeout(() => {
			const headers = this.tabHeaderQuery.toArray();
			const initialIndex = Math.max(0, headers.findIndex(h => h.active));
			this.currentSelectedTab = initialIndex;
			this.activeIndex = initialIndex;
			headers[initialIndex]?.selectTab();
			this.updateOverflowState();
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabHeaderQuery) {
			if (changes.cacheActive) {
				this.tabHeaderQuery.toArray().forEach(h => h.cacheActive = this.cacheActive);
			}
			if (changes.dismissable) {
				this.tabHeaderQuery.toArray().forEach(h => h.dismissable = this.dismissable);
			}
			if (changes.isNavigation) {
				this.tabHeaderQuery.toArray()
					.forEach(h => h.paneTabIndex = this.isNavigation ? null : 0);
			}
		}
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
		if (!this.scrollIntoView) {
			return;
		}
		const container = this.headerContainer?.nativeElement;
		if (!container) {
			return;
		}
		container.scrollTo({
			top: Math.max(0, (this.currentSelectedTab - 1) * VERTICAL_TAB_HEIGHT),
			behavior: "smooth"
		});
	}

	private applyHeaderInputs() {
		this.tabHeaderQuery.toArray().forEach((header) => {
			header.cacheActive = this.cacheActive;
			header.dismissable = this.dismissable;
			header.paneTabIndex = this.isNavigation ? null : 0;
		});
	}

	private wireSubscriptions() {
		this.tabHeaderQuery.toArray().forEach((header) => {
			this.selectedSubscriptionTracker.add(
				header.selected.subscribe(() => {
					this.currentSelectedTab = this.tabHeaderQuery
						.toArray()
						.indexOf(header);
					this.tabHeaderQuery
						.toArray()
						.filter((h) => h !== header)
						.forEach((other) => {
							other.active = false;
							if (other.paneReference) {
								other.paneReference.active = false;
							}
						});
					this.scrollSelectedTabIntoView();
				})
			);

			this.closeSubscriptionTracker.add(
				header.tabClose.subscribe(() => {
					const index = this.tabHeaderQuery.toArray().indexOf(header);
					this.tabClose.emit(index);
				})
			);
		});
	}
}
