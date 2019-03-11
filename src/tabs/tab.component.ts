import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ContentChild,
	TemplateRef,
	HostBinding
} from "@angular/core";


let nextId = 0;

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
* <ibm-tab heading='tab1'>
* 	tab 1 content
* </ibm-tab>
* ```
*
* Tab with custom header:
*
* ```html
* <ng-template #tabHeading>
* 	<ibm-icon
* 		icon="facebook"
* 		size="sm"
* 		style="margin-right: 7px;">
* 	</ibm-icon>
* 	Hello Tab 1
* </ng-template>
* <ibm-tabs>
* 	<ibm-tab [heading]="tabHeading">
* 		Tab 1 content <ibm-icon icon="alert" size="lg"></ibm-icon>
* 	</ibm-tab>
* 	<ibm-tab heading='Tab2'>
* 		Tab 2 content
* 	</ibm-tab>
* 	<ibm-tab heading='Tab3'>
* 		Tab 3 content
* 	</ibm-tab>
* </ibm-tabs>
* ```
*
*
* @export
* @class Tab
* @implements {OnInit}
*/
@Component({
	selector: "ibm-tab",
	template: `
		<div
			[tabindex]="tabIndex"
			role="tabpanel"
			*ngIf="shouldRender()"
			[ngStyle]="{'display': active ? null : 'none'}"
			[attr.aria-labelledby]="id + '-header'">
			<ng-content></ng-content>
		</div>
	 `
})
export class Tab implements OnInit {
	/**
	 * Boolean value reflects if the `Tab` is using a custom template for the heading.
	 * Default value is false.
	 */
	public headingIsTemplate = false;

	/**
	 * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
	 * @type {(string | TemplateRef<any>)}
	 */
	@Input() heading: string | TemplateRef<any>;
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
	// do we need id's?
	/**
	 * Sets the id of the `Tab`. Will be uniquely generated if not provided.
	 */
	@Input() id = `n-tab-${nextId++}`;
	/**
	 * Set to true to have Tab items cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;
	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 * @type {EventEmitter<void>}
	 */
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * Used to set the id property on the element.
	 */
	@HostBinding("attr.id") attrClass = this.id;

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
 	* @returns boolean
 	*/
	shouldRender() {
		return this.active || this.cacheActive;
	}
}
