import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	TemplateRef
} from "@angular/core";
import { ContainedListKind, ContainedListSize } from "./contained-list.enums";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { ContainedListModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-contained-list--basic)
 */
@Component({
	selector: "cds-contained-list, ibm-contained-list",
	template: `
		<div
			class="cds--contained-list"
			[ngClass]="{
				'cds--contained-list--inset-rulers': isInset,
				'cds--contained-list--on-page': kind === ContainedListKind.OnPage,
				'cds--contained-list--disclosed': kind === ContainedListKind.Disclosed,
				'cds--contained-list--sm': size === ContainedListSize.Small,
				'cds--contained-list--md': size === ContainedListSize.Medium,
				'cds--contained-list--lg': size === ContainedListSize.Large,
				'cds--contained-list--xl': size === ContainedListSize.ExtraLarge,
				'cds--layout--size-sm': size === ContainedListSize.Small,
				'cds--layout--size-md': size === ContainedListSize.Medium,
				'cds--layout--size-lg': size === ContainedListSize.Large,
				'cds--layout--size-xl': size === ContainedListSize.ExtraLarge
			}">
			<div class="cds--contained-list__header">
				<div [id]="labelId" class="cds--contained-list__label">
					<ng-container *ngIf="!isTemplate(label)">{{ label }}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</div>

				<div class="cds--contained-list__action" *ngIf="action">
					<ng-template [ngTemplateOutlet]="action"></ng-template>
				</div>
			</div>
			<div role="list" [attr.aria-labelledby]="labelId">
				<ng-content></ng-content>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedList {
	/** Used to generate unique IDs */
	private static count = 0;

	/**
	 * A slot for a possible interactive element to render within the list header.
	 */
	@Input() action: TemplateRef<any>;

	/**
	 * Specify whether the dividing lines in between list items should be inset.
	 */
	@Input() isInset = false;

	/**
	 * The kind of ContainedList you want to display.
	 */
	@Input() kind: ContainedListKind = ContainedListKind.OnPage;

	/**
	 * A label describing the contained list.
	 */
	@Input() label: string | TemplateRef<any>;

	/**
	 * Specify the size of the contained list.
	 */
	@Input() size: ContainedListSize = ContainedListSize.Large;

	/**
	 * Label id for the contained list.
	 */
	@Input() labelId = `contained-list-${ContainedList.count++}-header`;

	/**
	 * Exposing ContainedListSize enum to the template
	 */
	public ContainedListSize: typeof ContainedListSize = ContainedListSize;

	/**
	 * Exposing ContainedListKind enum to the template
	 */
	public ContainedListKind: typeof ContainedListKind = ContainedListKind;

	public isTemplate(value: string | TemplateRef<any>) {
		return value instanceof TemplateRef;
	}
}
