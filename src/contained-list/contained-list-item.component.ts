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
		@if (clickable) {
			<button
				class="cds--contained-list-item__content"
				type="button"
				[disabled]="disabled"
				(click)="onClick()">
				<ng-content select="[cdsContainedListItemButton],[ibmContainedListItemButton]" />
			</button>
		} @else {
			<div class="cds--contained-list-item__content">
				@if (icon) {
					<div class="cds--contained-list-item__icon">
						@if (isTemplate(icon)) {
							<ng-template [ngTemplateOutlet]="icon" />
						} @else {
							<svg [ibmIcon]="icon" size="16"></svg>
						}
					</div>
				}
				<ng-content />
			</div>
		}
		@if (action) {
			<div class="cds--contained-list-item__action">
				<ng-template [ngTemplateOutlet]="action" [ngTemplateOutletContext]="{ $implicit: actionData }" />
			</div>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedListItem {
	/**
	 * A slot for a possible interactive element to render within the item.
	 */
	@Input() action: TemplateRef<any>;

	/**
	 * Optional interactive element data.
	 */
	@Input() actionData: any;

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
