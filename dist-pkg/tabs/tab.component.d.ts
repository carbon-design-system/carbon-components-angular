import { OnInit, EventEmitter, TemplateRef } from "@angular/core";
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
*/
export declare class Tab implements OnInit {
    /**
     * Boolean value reflects if the `Tab` is using a custom template for the heading.
     * Default value is false.
     */
    headingIsTemplate: boolean;
    /**
     * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
     */
    heading: string | TemplateRef<any>;
    /**
     * Allows the user to pass data to the custom template for the `Tab` heading.
     */
    context: any;
    /**
     * Indicates whether the `Tab` is active/selected.
     * Determines whether it's `TabPanel` is rendered.
     */
    active: boolean;
    /**
     * Indicates whether or not the `Tab` item is disabled.
     */
    disabled: boolean;
    tabIndex: number;
    /**
     * Sets the id of the `Tab`. Will be uniquely generated if not provided.
     */
    id: string;
    /**
     * Set to true to have Tab items cached and not reloaded on tab switching.
     */
    cacheActive: boolean;
    /**
     * Value 'selected' to be emitted after a new `Tab` is selected.
     */
    selected: EventEmitter<void>;
    /**
     * Used to set the id property on the element.
     */
    attrClass: string;
    /**
     * Checks for custom heading template on initialization and updates the value
     * of the boolean 'headingIsTemplate'.
     */
    ngOnInit(): void;
    /**
     * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
     */
    doSelect(): void;
    /**
    * Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
    */
    shouldRender(): boolean;
}
