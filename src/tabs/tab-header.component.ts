import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	Output,
	AfterViewInit
} from "@angular/core";

import { Tab } from "./tab.component";
import { EventEmitter } from "@angular/core";

@Component({
	selector: "ibm-tab-header",
	template: `
		<button
			#tabItem
			role="tab"
			[attr.aria-selected]="active"
			[title]="title"
			[attr.tabindex]="(active? 0 : -1)"
			[attr.aria-disabled]="disabled"
			[ngClass]="{
				'cds--tabs__nav-item--selected': active,
				'cds--tabs__nav-item--disabled': disabled
			}"
			class="cds--tabs__nav-item cds--tabs__nav-link"
			type="button"
			draggable="false"
			(click)="selectTab()">
			<ng-content></ng-content>
		</button>
	`,
	styles: [`
	:host {
		display: inline-flex;
		max-width: 10rem;
		flex: 1 0 auto;
	}
`]
})

export class TabHeader implements AfterViewInit {
	/**
	 * Indicates whether the `Tab` is active/selected.
	 * Determines whether it's `TabPanel` is rendered.
	 */
	@Input() active = false;
	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 */
	@Input() disabled = false;
	/**
	 * Reference to the corresponsing tab pane.
	 */
	@Input() paneReference: Tab;
	@Input() title;
	/**
	 * Set to 'true' to have pane reference cached and not reloaded on tab switching.
	 */
	@Input() set cacheActive(shouldCache: boolean) {
		this._cacheActive = shouldCache;

		// Updates the pane references associated with the tab header when cache active is changed.
		if (this.paneReference) {
			this.paneReference.cacheActive = this.cacheActive;
		}
	}

	@Input() set paneTabIndex(tabIndex: number | null) {
		if (this.paneReference) {
			this.paneReference.tabIndex = tabIndex;
		}
	}

	get cacheActive() {
		return this._cacheActive;
	}

	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 */

	@Output() selected = new EventEmitter<any>();

	// @ts-ignore
	@ViewChild("tabItem", { static: true }) tabItem: ElementRef;

	protected _cacheActive = false;

	ngAfterViewInit() {
		this.paneReference.shouldRender();
		setTimeout(() => {
			this.title = this.title ? this.title : this.tabItem.nativeElement.textContent;
		});
	}

	selectTab() {
		this.tabItem.nativeElement.focus();
		if (!this.disabled) {
			this.selected.emit();
			this.active = true;
			if (this.paneReference) {
				this.paneReference.active = true;
			}
		}
	}
}
