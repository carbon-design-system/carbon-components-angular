import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	HostBinding,
	Input,
	Output,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "cds-contained-list-item, ibm-contained-list-item",
	template: `
		<ng-container *ngIf="clickable">
			<button
				class="cds--contained-list-item__content"
				type="button"
				[disabled]="disabled"
				(click)="onClick()">
				<ng-content select="[ibmContainedListItemButton]"></ng-content>
			</button>
		</ng-container>
		<ng-container *ngIf="!clickable">
			<div class="cds--contained-list-item__content">
				<div *ngIf="icon" class="cds--contained-list-item__icon">
					<ng-container *ngIf="!isTemplate(icon)"><svg [ibmIcon]="icon" size="16"></svg></ng-container>
					<ng-template *ngIf="isTemplate(icon)" [ngTemplateOutlet]="icon"></ng-template>
				</div>
				<ng-content></ng-content>
			</div>
		</ng-container>
		<div class="cds--contained-list-item__action" *ngIf="action">
			<ng-template [ngTemplateOutlet]="action"></ng-template>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedListItem {
	/**
	 * A slot for a possible interactive element to render within the item.
	 */
	@Input() action: TemplateRef<any>;

	/**
	 * Whether this item is disabled.
	 */
	@Input() disabled = false;

	/**
	 * Whether this item is clickable.
	 */
	@Input() clickable: boolean;

	/**
	 * Provide an optional icon to render in front of the item's content.
	 *
	 * Note that if you intend to use this as a string ref, it's important to remember
	 * to register the icon that you wish to add. In this case, it's also worth noting
	 * that only icons with a size of 16 are currently supported.
	 */
	@Input() icon: TemplateRef<any> | string;

	/**
	 * Emits click event.
	 */
	@Output() click = new EventEmitter<void>();

	/**
	 * Host binding item class.
	 */
	@HostBinding("class.cds--contained-list-item") itemClass = true;

	/**
	 * Host binding item role attribute
	 */
	@HostBinding("attr.role") role = "listitem";

	/**
	 * Host binding clickable item class.
	 */
	@HostBinding("class.cds--contained-list-item--clickable") get itemClickableClass() {
		return this.clickable;
	}

	/**
	 * Host binding item with icon class.
	 */
	@HostBinding("class.cds--contained-list-item--with-icon") get itemWithIconClass() {
		return !!this.icon;
	}

	public onClick() {
		this.click.emit();
	}

	public isTemplate(value: string | TemplateRef<any>) {
		return value instanceof TemplateRef;
	}
}
