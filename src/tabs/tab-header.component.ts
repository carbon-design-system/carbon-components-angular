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
		<li
			[ngClass]="{
				'bx--tabs__nav-item--selected': active,
				'bx--tabs__nav-item--disabled': disabled
			}"
			class="bx--tabs__nav-item"
			role="presentation"
			(click)="selectTab()">
			<a
				#tabItem
				[attr.aria-selected]="active"
				draggable="false"
				class="bx--tabs__nav-link"
				href="javascript:void(0)"
				[attr.tabindex]="(active? 0 : -1)"
				role="tab">
				<ng-content></ng-content>
			</a>
		</li>
	 `
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
	/**
	 * Set to 'true' to have pane reference cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;
	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 */
	@Output() selected = new EventEmitter<any>();

	@ViewChild("tabItem") tabItem: ElementRef;

	ngAfterViewInit() {
		if (this.paneReference) {
			this.paneReference.cacheActive = this.cacheActive;
		}
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
