import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	TemplateRef,
	Output,
	OnInit
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
				[attr.tabindex]="(active?0:-1)"
				role="tab">
				<ng-container *ngIf="!isTemplate(heading)">
					{{ heading }}
				</ng-container>
				<ng-template
					*ngIf="isTemplate(heading)"
					[ngTemplateOutlet]="heading"
					[ngTemplateOutletContext]="{$implicit: context}">
				</ng-template>
			</a>
		</li>
	 `
})

export class TabHeader implements OnInit {
	/**
	 * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
	 */
	@Input() heading: string | TemplateRef<any>;
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
	 * Allows the user to pass data to the custom template for the `Tab` heading.
	 */
	@Input() context: any;
	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 */
	@Output() selected: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild("tabItem") tabItem: ElementRef;
	/**
	 * Boolean value reflects if the `Tab` is using a custom template for the heading.
	 * Default value is false.
	 */
	public headingIsTemplate = false;

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
	/**
	 * Checks for custom heading template on initialization and updates the value
	 * of the boolean 'headingIsTemplate'.
	 */
	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
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
