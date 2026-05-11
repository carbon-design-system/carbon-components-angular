import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	TemplateRef
} from "@angular/core";
import { NgStyle, NgTemplateOutlet } from "@angular/common";

/**
* The `Tab` component is a child of the `Tabs` component.
* It represents one `Tab` item and its content within a panel of other `Tab` items.
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
		@if (shouldRender()) {
			@if (isTemplate(tabContent)) {
				<ng-template
					[ngTemplateOutlet]="tabContent"
					[ngTemplateOutletContext]="{ $implicit: templateContext }" />
			}
			<ng-content />
		}
	`,
	imports: [NgTemplateOutlet]
})
export class Tab implements OnInit {
	@HostBinding("attr.id") get hostId() {
		return this.id;
	}
	@HostBinding("attr.aria-labelledby") get hostAriaLabelledby() {
		return `${this.id}-header`;
	}
	@HostBinding("attr.tabindex") get hostTabIndex() {
		return this.tabIndex;
	}
	/**
	 * `hidden` + display keep inactive panels out of layout; `null` display when active preserves grid/flex.
	 */
	@HostBinding("attr.hidden") get hostHidden() {
		return this.active ? null : "";
	}
	@HostBinding("style.display") get hostDisplay() {
		return this.active ? "block" : "none";
	}
	/**
	 * Set to `true` to have `Tab` items cached and not reloaded on tab switching.
	 */
	@Input() set cacheActive(shouldCache: boolean) {
		this._cacheActive = shouldCache;
	}

	get cacheActive() {
		return this._cacheActive;
	}
	private static counter = 0;
	@HostBinding("class.cds--tab-content") tabContentClass = true;
	@HostBinding("attr.role") panelRole = "tabpanel";
	@HostBinding("attr.aria-live") panelAriaLive = "polite";
	/**
	 * Boolean value reflects if the `Tab` is using a custom template for the heading.
	 * Default value is false.
	 */
	public headingIsTemplate = false;

	/**
	 * The `Tab`'s title to be displayed or custom template for the `Tab` heading.
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
	 * Determines whether its tab panel content is rendered.
	 */
	@Input() active = false;
	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 */
	@Input() disabled = false;

	/**
	 * `tabindex` on the tab panel, the parent may set this to `null` when `isNavigation` is `true`.
	 */
	@Input() tabIndex = 0;
	/**
	 * Sets the id of the `Tab`. Will be uniquely generated if not provided.
	 */
	@Input() id = `n-tab-${Tab.counter++}`;
	/**
	 * Allows lifecycle hooks to be called on the rendered content.
	 */
	@Input() tabContent: TemplateRef<any>;
	/**
	 * Optional data for templates passed as implicit context.
	 */
	@Input() templateContext: any;
	/**
	 * Optional template that renders an icon inside the `Tab` header.
	 * Useful for rendering a `cdsIcon` or any other icon next to the tab label.
	 */
	@Input() icon: TemplateRef<any>;
	/**
	 * Optional secondary label rendered below the primary tab label.
	 * Only displayed when the parent `Tabs` is using `type="contained"`.
	 */
	@Input() secondaryLabel: string;
	/**
	 * Sets the aria-label of the close button when the parent `Tabs` uses `dismissable`.
	 */
	@Input() closeButtonAriaLabel = "Press delete to remove tab";
	/**
	 * Icon-only tab: pair with `icon` and `iconLabel`.
	 */
	@Input() iconOnly = false;
	/**
	 * Icon-only tabs: accessible name and tooltip text.
	 */
	@Input() iconLabel: string;
	/**
	 * **Preview**: Icon-only tabs — show a notification dot on the icon.
	 */
	@Input() badgeIndicator = false;
	/**
	 * Icon-only tabs: tooltip show delay (ms).
	 */
	@Input() enterDelayMs: number;
	/**
	 * Icon-only tabs: tooltip hide delay (ms).
	 */
	@Input() leaveDelayMs: number;
	/**
	 * Icon-only tabs: open the tooltip on first render.
	 */
	@Input() isTooltipOpen = false;
	/**
	 * Emits when this tab becomes selected.
	 */
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();
	/**
	 * Emits when this tab's close button is pressed.
	 */
	@Output() tabClose: EventEmitter<void> = new EventEmitter<void>();

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
	* Returns value indicating whether this `Tab` should be rendered in a tab panel.
	 */
	shouldRender() {
		return this.active || this.cacheActive;
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
