import { Component, forwardRef, Input } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { Tab } from "./tab.component";

/**
 * Icon-only approach for `cds-tab` variant: `[icon]` template plus `label` for tooltip.
 *
 * ```html
 * <ng-template #i><svg cdsIcon="activity" size="16"></svg></ng-template>
 * <cds-tabs>
 *   <cds-icon-tab label="Activity" [icon]="i">Panel</cds-icon-tab>
 * </cds-tabs>
 * ```
 */
@Component({
	selector: "cds-icon-tab, ibm-icon-tab",
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
	providers: [
		{ provide: Tab, useExisting: forwardRef(() => IconTab) }
	],
	imports: [NgTemplateOutlet]
})
export class IconTab extends Tab {
	/**
	 * Accessible label and tooltip text for the icon tab.
	 */
	@Input()
	set label(value: string) {
		this.iconLabel = value;
	}

	get label(): string {
		return this.iconLabel;
	}

	/**
	 * Icon tabs are only for icons, so iconOnly by default
	 */
	override iconOnly = true;
}
