import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	TemplateRef,
	HostBinding
} from "@angular/core";

/**
* The `Tab` component is a child of the `Tabs` component.
* It represents one `Tab` item and its content within a panel of other `Tab` items.
*
*
* `Tab` takes a string or `TemplateRef` for the header, and any content for the body of the tab.
* Disabled states should be handled by the application (ie. switch to the tab, but display some
* indication as to _why_ the tab is disabled).
*
* When the tab is selected the `select` output will be triggered.
* The `select` output will also be triggered for the active tab when the tabs are loaded or updated.
*
*
* Tab with string header:
*
* ```html
* <cds-tab heading='tab1'>
* 	tab 1 content
* </cds-tab>
* ```
*
* Tab with custom header:
*
* ```html
* <ng-template #tabHeading>
* 	<svg cdsIcon="facebook"
* 		size="sm"
* 		style="margin-right: 7px;">
* 	</svg>
* 	Hello Tab 1
* </ng-template>
* <cds-tabs>
* 	<cds-tab [heading]="tabHeading">
* 		Tab 1 content <svg cdsIcon="alert" size="lg"></svg>
* 	</cds-tab>
* 	<cds-tab heading='Tab2'>
* 		Tab 2 content
* 	</cds-tab>
* 	<cds-tab heading='Tab3'>
* 		Tab 3 content
* 	</cds-tab>
* </cds-tabs>
* ```
*/
@Component({
	selector: "cds-tab, ibm-tab",
	template: `
		<div
			[attr.tabindex]="tabIndex"
			role="tabpanel"
			*ngIf="shouldRender()"
			class="cds--tab-content"
			[ngStyle]="{'display': active ? null : 'none'}"
			[attr.aria-labelledby]="id + '-header'"
			aria-live="polite">
			<ng-content></ng-content>
		</div>
	`
})
export class Tab implements OnInit {
	private static counter = 0;
	/**
	 * Boolean value reflects if the `Tab` is using a custom template for the heading.
	 * Default value is false.
	 */
	public headingIsTemplate = false;

	/**
	 * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
	 */
	@Input() heading: string | TemplateRef<any>;
	/**
	 * Optional override for the `tabItem's`'s title attribute which is set in `TabHeaders`.
	 * `tabItem`'s title attribute is automatically set to `heading`.
	 *
	 * You might want to use this if you set `heading` to a `TemplateRef`.
	 */
	@Input() title: string;
	/**
	 * Allows the user to pass data to the custom template for the `Tab` heading.
	 */
	@Input() context: any;
	/**
	 * Indicates whether the `Tab` is active/selected.
	 * Determines whether it's `TabPanel` is rendered.
	 */
	@Input() active = false;
	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 */
	@Input() disabled = false;

	@Input() tabIndex = 0;
	/**
	 * Sets the id of the `Tab`. Will be uniquely generated if not provided.
	 */
	@Input() id = `n-tab-${Tab.counter++}`;
	/**
	 * Set to true to have Tab items cached and not reloaded on tab switching.
	 */
	@Input() set cacheActive(shouldCache: boolean) {
		this._cacheActive = shouldCache;
	}
	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 */
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * Used to set the id property on the element.
	 */
	@HostBinding("attr.id") attrClass = this.id;

	get cacheActive() {
		return this._cacheActive;
	}

	protected _cacheActive = false;

	/**
	 * Checks for custom heading template on initialization and updates the value
	 * of the boolean 'headingIsTemplate'.
	 */
	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}

	/**
	 * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
	 */
	doSelect() {
		this.selected.emit();
	}

	/**
	* Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
	*/
	shouldRender() {
		return this.active || this.cacheActive;
	}
}
