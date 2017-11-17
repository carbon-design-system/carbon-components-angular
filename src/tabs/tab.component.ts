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
* The Tab component is a child of the neutrino Tabs component.
* It represend one Tab item and its content within a panel of other Tab items.
*
*
* # Tab
* class: Tab
* selector: `n-tab`
*
*
* Tab takes a string or TemplateRef for the header,
* and any content for the body of the tab.
* Disabled states should be handled by the application (ie. switch to the tab, but display some indication as to _why_ the tab is disabled)
*
* When the tab is selected the `select` output will be triggered.
*  `select` will also be triggered for the active tab when the tabs are loaded or updated.
*
*
* Tab with string header:
*
* ```html
* <n-tab heading='tab1'>
* 	tab 1 content
* </n-tab>
* ```
*
* Tab with custom header:
*
* ```html
* <ng-template #tabHeading>
* 	<n-icon
* 		icon="facebook"
* 		size="sm"
* 		style="margin-right: 7px;">
* 	</n-icon>
* 	Hello Tab 1
* </ng-template>
* <n-tabs>
* 	<n-tab [heading]="tabHeading">
* 		Tab 1 content <n-icon icon="alert" size="lg"></n-icon>
* 	</n-tab>
* 	<n-tab heading='Tab2'>
* 		Tab 2 content
* 	</n-tab>
* 	<n-tab heading='Tab3'>
* 		Tab 3 content
* 	</n-tab>
* </n-tabs>
* ```
*
*
* @export
* @class Tab
* @implements {OnInit}
*/
@Component({
	selector: "n-tab",
	template: `
		<div
			role="tabpanel"
			class="tabs-panel"
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
	 * @memberof Tab
	 */
	public headingIsTemplate = false;

	/**
	 *
	 * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof Tab
	 */
	@Input() heading: string | TemplateRef<any>;
	/**
	 * Indicates whether the `Tab` is active/selected.
	 * Determines whether it's `TabPanel` is rendered.
	 * @memberof Tab
	 */
	@Input() active = false;
	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 * @memberof Tab
	 */
	@Input() disabled = false;
	// do we need id's?
	/**
	 * Sets the id of the `Tab`. Will be uniquely generated if not provided.
	 * @memberof Tab
	 */
	@Input() id = `n-tab-${nextId++}`;
	/**
	 * Set to true to have Tab items cached and not reloaded on tab switching.
	 * @memberof Tab
	 */
	@Input() cacheActive = false;
	/**
	 * Value 'select' to be emitted after a new `Tab` is selected.
	 *
	 * @type {EventEmitter<void>}
	 * @memberof Tab
	 */
	@Output() select: EventEmitter<void> = new EventEmitter<void>();
	/**
	 *
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 * @type {EventEmitter<void>}
	 * @memberof Tab
	 */
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * Used to set the id property on the element.
	 * @memberof Tab
	 */
	@HostBinding("attr.id") attrClass = this.id;

	/**
	 * Checks for custom heading template on initialization and updates the value
	 * of the boolean 'headingIsTemplate'.
	 * @memberof Tab
	 */
	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}

	/**
	 * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
	 * @memberof Tab
	 */
	doSelect() {
		this.select.emit();
		this.selected.emit();
	}

	/**
 	* Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
 	* @returns boolean
 	* @memberof Tab
 	*/
	shouldRender() {
		return this.active || this.cacheActive;
	}
}
