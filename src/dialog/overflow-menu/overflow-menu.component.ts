import {
	Component,
	ContentChild,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewEncapsulation
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { OverflowMenuDirective } from "./overflow-menu.directive";
import { BaseIconButton } from "carbon-components-angular/button";

/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component.
 *
 * Get started with importing the module:
 *
 * ```typescript
 * import { DialogModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-overflow-menu>
 *	<cds-overflow-menu-option>Option 1</cds-overflow-menu-option>
 *	<cds-overflow-menu-option>Option 2</cds-overflow-menu-option>
 * </cds-overflow-menu>
 * ```
 *
 * [See demo](../../?path=/story/components-overflow-menu--basic)
 */
@Component({
	selector: "cds-overflow-menu, ibm-overflow-menu",
	template: `
		<cds-tooltip
			class="cds--icon-tooltip"
			[description]="description"
			[caret]="caret"
			[dropShadow]="dropShadow"
			[highContrast]="highContrast"
			[isOpen]="isOpen"
			[align]="align"
			[autoAlign]="autoAlign"
			[enterDelayMs]="enterDelayMs"
			[leaveDelayMs]="leaveDelayMs">
			<button
				cdsButton="ghost"
				[cdsOverflowMenu]="options"
				[ngClass]="{'cds--overflow-menu--open': open}"
				class="cds--overflow-menu {{triggerClass}}"
				[iconOnly]="true"
				[attr.aria-label]="buttonLabel"
				[flip]="flip"
				[isOpen]="open"
				(isOpenChange)="handleOpenChange($event)"
				[offset]="offset"
				[wrapperClass]="wrapperClass"
				aria-haspopup="true"
				type="button"
				[placement]="placement">
				<ng-template *ngIf="customTrigger; else defaultIcon" [ngTemplateOutlet]="customTrigger"></ng-template>
			</button>
		</cds-tooltip>

		<ng-template #options>
			<ng-content></ng-content>
		</ng-template>
		<ng-template #defaultIcon>
			<svg cdsIcon="overflow-menu--vertical" size="16" class="cds--overflow-menu__icon"></svg>
		</ng-template>
	`,
	styles: [`
		.cds--overflow-menu--open {
			opacity: 1
		}

		/*
		Rotate the overflow menu container as well as the icon, since
		we calculate our menu position based on the container, not the icon.
		*/
		.cds--data-table-v2 .cds--overflow-menu {
			transform: rotate(90deg);
		}

		.cds--data-table-v2 .cds--overflow-menu__icon {
			transform: rotate(180deg);
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class OverflowMenu extends BaseIconButton {
	@Input() buttonLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;

	@Input() description = this.i18n.get().OVERFLOW_MENU.ICON_DESCRIPTION;

	@Input() flip = false;

	@Input() placement: "bottom" | "top" = "bottom";

	@Input() open = false;

	@Output() openChange = new EventEmitter<boolean>();
	/**
	 * Sets the custom overflow menu trigger
	 */
	@Input() customTrigger: TemplateRef<any>;

	/**
	 * This specifies any vertical and horizontal offset for the position of the dialog
	 */
	@Input() offset: { x: number, y: number };

	@Input() wrapperClass = "";

	/**
	 * This appends additional classes to the overflow trigger/button.
	 */
	@Input() triggerClass = "";

	@ContentChild(OverflowMenuDirective) overflowMenuDirective: OverflowMenuDirective;

	constructor(protected elementRef: ElementRef, protected i18n: I18n) {
		super();
	}

	handleOpenChange(event: boolean) {
		this.open = event;
		this.openChange.emit(event);
	}
}
