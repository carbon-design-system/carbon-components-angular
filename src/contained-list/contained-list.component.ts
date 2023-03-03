import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	TemplateRef
} from "@angular/core";
import { ContainedListKind, ContainedListSize } from "./contained-list.enums";

@Component({
	selector: "ibm-contained-list",
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
				'cds--contained-list--xl': size === ContainedListSize.ExtraLarge
			}"
		>
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
	styles: [`
		:host {
			display: block;
		}
	`],
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
	 * Host binding host contained list class.
	 */
	@HostBinding("class.cds--contained-list") containedListClass = true;

	/**
	 * Host binding host on-page class.
	 */
	@HostBinding("class.cds--contained-list--on-page") get hostOnPageClass() {
		return this.kind === ContainedListKind.OnPage;
	}

	/**
	 * Host binding host disclosed class.
	 */
	@HostBinding("class.cds--contained-list--disclosed") get hostDisclosedClass() {
		return this.kind === ContainedListKind.Disclosed;
	}

	/**
	 * Host binding host size sm class.
	 */
	@HostBinding("class.cds--contained-list--sm") get hostSizeSmClass() {
		return this.size === ContainedListSize.Small;
	}

	/**
	 * Host binding host size md class.
	 */
	@HostBinding("class.cds--contained-list--md") get hostSizeMdClass() {
		return this.size === ContainedListSize.Medium;
	}

	/**
	 * Host binding host size lg class.
	 */
	@HostBinding("class.cds--contained-list--lg") get hostSizeLgClass() {
		return this.size === ContainedListSize.Large;
	}

	/**
	 * Host binding host size xl class.
	 */
	@HostBinding("class.cds--contained-list--xl") get hostSizeXlClass() {
		return this.size === ContainedListSize.ExtraLarge;
	}

	/**
	 * Label id for the contained list.
	 */
	readonly labelId = `contained-list-${ContainedList.count++}-header`;

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
