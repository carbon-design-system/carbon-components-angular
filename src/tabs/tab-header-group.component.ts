import {
	Component,
	QueryList,
	Input,
	HostListener,
	ContentChildren,
	OnDestroy,
	AfterContentInit,
	ElementRef,
	TemplateRef,
	OnChanges,
	SimpleChanges
} from "@angular/core";

import { TabHeader } from "./tab-header.component";
import { Subscription } from "rxjs";

@Component({
	selector: "ibm-tab-header-group",
	template: `
	<nav
		class="bx--tabs"
		[ngClass]="{
			'bx--skeleton': skeleton
		}"
		role="navigation"
		[attr.aria-label]="ariaLabel"
		[attr.aria-labelledby]="ariaLabelledby">
		<div
			class="bx--tabs-trigger"
			tabindex="0"
			(click)="showTabList()"
			(keydown)="onDropdownKeydown($event)">
			<a
				href="javascript:void(0)"
				class="bx--tabs-trigger-text"
				tabindex="-1">
				<ng-container *ngIf="!getSelectedTab().headingIsTemplate">
					{{ getSelectedTab().heading }}
				</ng-container>
				<ng-template
					*ngIf="getSelectedTab().headingIsTemplate"
					[ngTemplateOutlet]="getSelectedTab().heading"
					[ngTemplateOutletContext]="{$implicit: getSelectedTab().context}">
				</ng-template>
			</a>
			<svg width="10" height="5" viewBox="0 0 10 5">
				<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd"></path>
			</svg>
		</div>
		<ul
			#tabList
			[ngClass]="{
				'bx--tabs__nav--hidden': !tabListVisible
			}"
			(keydown)="tabDropdownKeydown($event)"
			class="bx--tabs__nav"
			role="tablist">
			<li role="presentation">
				<ng-container *ngIf="contentBefore" [ngTemplateOutlet]="contentBefore"></ng-container>
			</li>
			<ng-content></ng-content>
			<li role="presentation">
				<ng-container *ngIf="contentAfter" [ngTemplateOutlet]="contentAfter"></ng-container>
			</li>
		</ul>
	</nav>
	`
})
export class TabHeaderGroup implements AfterContentInit, OnDestroy, OnChanges {
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus: boolean;
	/**
	 * Enables or disables the skeleton state
	 *
	 * Note: boolean properties should be set using the `[skeleton]="true"` syntax.
	 * `skeleton="true"` will assign a string value of `"true"`
	 */
	@Input() skeleton = false;
	/**
	 * Sets the aria label on the nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the nav element.
	 */
	@Input() ariaLabelledby: string;

	@Input() contentAfter: TemplateRef<any>;

	@Input() contentBefore: TemplateRef<any>;

	/**
	 * Set to 'true' to have all pane references associated with each tab header
	 * in the tab header group cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;

	/**
	 * ContentChildren of all the tabHeaders.
	 */
	@ContentChildren(TabHeader) tabHeaderQuery: QueryList<TabHeader>;
	/**
	 * Keeps track of all the subscriptions to the tab header selection events.
	 */
	selectedSubscriptionTracker = new Subscription();

	public tabListVisible = false;
	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	public currentSelectedIndex = 0;

	private _cacheActive = false;

	constructor(protected elementRef: ElementRef) {}

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabHeadersArray = Array.from<any>(this.tabHeaderQuery);

		if (event.key === "Right" || event.key === "ArrowRight") {
			if (this.currentSelectedIndex < tabHeadersArray.length - 1) {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[this.currentSelectedIndex + 1].disabled) {
					tabHeadersArray[this.currentSelectedIndex + 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedIndex + 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex++;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[0].disabled) {
					tabHeadersArray[0].selectTab();
				} else {
					tabHeadersArray[0].tabItem.nativeElement.focus();
					this.currentSelectedIndex = 0;
				}
			}
		}

		if (event.key === "Left" || event.key === "ArrowLeft") {
			if (this.currentSelectedIndex > 0) {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[this.currentSelectedIndex - 1].disabled) {
					tabHeadersArray[this.currentSelectedIndex - 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedIndex - 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex--;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
					tabHeadersArray[tabHeadersArray.length - 1].selectTab();
				} else {
					tabHeadersArray[tabHeadersArray.length - 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex = tabHeadersArray.length - 1;
				}
			}
		}

		if (event.key === "Home") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[0].disabled) {
				tabHeadersArray[0].selectTab();
			} else {
				tabHeadersArray[0].tabItem.nativeElement.focus();
				this.currentSelectedIndex = 0;
			}
		}

		if (event.key === "End") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
				tabHeadersArray[tabHeadersArray.length - 1].selectTab();
			} else {
				tabHeadersArray[tabHeadersArray.length - 1].tabItem.nativeElement.focus();
				this.currentSelectedIndex = tabHeadersArray.length - 1;
			}
		}

		// `"Spacebar"` is IE11 specific value
		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			tabHeadersArray[this.currentSelectedIndex].selectTab();
		}

		// dropdown list handler
		if (event.key === "Escape") {
			this.tabListVisible = false;
		}
	}

	@HostListener("focusout", ["$event"])
	focusOut(event) {
		if (this.tabListVisible && !this.elementRef.nativeElement.contains(event.relatedTarget)) {
			this.tabListVisible = false;
		}
	}

	ngAfterContentInit() {
		this.selectedSubscriptionTracker.unsubscribe();

		if (this.tabHeaderQuery) {
			this.tabHeaderQuery.toArray().forEach(tabHeader => tabHeader.cacheActive = this.cacheActive);
		}

		const selectedSubscriptions = this.tabHeaderQuery.toArray().forEach(tabHeader => {
			tabHeader.selected.subscribe(() => {
				this.currentSelectedIndex = this.tabHeaderQuery.toArray().indexOf(tabHeader);
				// The Filter takes the current selected tab out, then all other headers are
				// deactivated and their associated pane references are also deactivated.
				this.tabHeaderQuery.toArray().filter(header => header !== tabHeader)
					.forEach(filteredHeader => {
						filteredHeader.active = false;
						if (filteredHeader.paneReference) {
							filteredHeader.paneReference.active = false;
						}
					});
			});
		});
		this.selectedSubscriptionTracker.add(selectedSubscriptions);

		this.tabHeaderQuery.toArray()[this.currentSelectedIndex].selectTab();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabHeaderQuery && changes.cacheActive) {
			this.tabHeaderQuery.toArray().forEach(tabHeader => tabHeader.cacheActive = this.cacheActive);
		}
	}

	public getSelectedTab(): any {
		const selected =  this.tabHeaderQuery.toArray()[this.currentSelectedIndex];
		if (selected) {
			return selected;
		}
		return {
			headingIsTemplate: false,
			heading: ""
		};
	}

	public showTabList() {
		this.tabListVisible = true;
		const focusTarget = this.tabHeaderQuery.toArray().find(tab => {
			const tabContainer = tab.tabItem.nativeElement.parentElement;
			return !tabContainer.classList.contains("bx--tabs__nav-item--selected");
		});
		focusTarget.tabItem.nativeElement.focus();
	}

	public onDropdownKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case " ":
			case "Spacebar":
			case "Enter":
				event.preventDefault();
				this.showTabList();
				break;
			default:
				break;
		}
	}

	public tabDropdownKeydown(event: KeyboardEvent) {
		if (!this.tabListVisible) { return; }

		const target = (event.target as HTMLElement).closest("a");

		const headers = this.tabHeaderQuery.toArray().filter(tab =>
			!tab.tabItem.nativeElement.parentElement.classList.contains("bx--tabs__nav-item--disabled") &&
			!tab.tabItem.nativeElement.parentElement.classList.contains("bx--tabs__nav-item--selected"));

		// unless focus can move, it should remain on the target
		let next: HTMLElement = target;
		let previous: HTMLElement = target;

		for (let i = 0; i < headers.length; i++) {
			if (headers[i].tabItem.nativeElement === target) {
				if (i + 1 < headers.length) {
					next = headers[i + 1].tabItem.nativeElement;
				}
				if (i - 1 >= 0) {
					previous = headers[i - 1].tabItem.nativeElement;
				}
			}
		}

		switch (event.key) {
			case "ArrowDown":
			case "Down": // IE11 specific value
				next.focus();
				break;
			case "ArrowUp":
			case "Up": // IE11 specific value
				previous.focus();
				break;
			default:
				break;
		}
	}

	ngOnDestroy() {
		this.selectedSubscriptionTracker.unsubscribe();
	}
}
