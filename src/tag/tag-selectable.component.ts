import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output
} from "@angular/core";

@Component({
	selector: "cds-tag-selectable, ibm-tag-selectable",
	template: `
		@if (!skeleton) {
			<ng-content select="[cdsTagIcon],[ibmTagIcon]" />
			<span class="cds--tag__label">
				<ng-content />
			</span>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagSelectableComponent {
	@HostBinding("attr.role") role = "button";
	@HostBinding("attr.type") buttonType = "button";
	@HostBinding("attr.tabindex") tabIndex = 0;
	@HostBinding("attr.aria-pressed") get ariaPressed() {
		return this.selected;
	}

	@Input() size: "sm" | "md" | "lg" = "md";
	@Input() skeleton = false;
	@Input() disabled = false;
	@Input() class = "";
	@Input() selected = false;

	@Output() selectedChange = new EventEmitter<boolean>();

	@HostListener("click")
	onClick() {
		this.selected = !this.selected;
		this.selectedChange.emit(this.selected);
	}

	/**
	 * @todo
	 * Remove `cds--tag--${this.size}` in v7
	 */
	@HostBinding("attr.class") get attrClass() {
		const disabledClass = this.disabled ? "cds--tag--disabled" : "";
		const sizeClass = `cds--tag--${this.size} cds--layout--size-${this.size}`;
		const skeletonClass = this.skeleton ? "cds--skeleton" : "";
		const selectedClass = this.selected ? "cds--tag--selectable-selected" : "";

		return `cds--tag cds--tag--selectable ${selectedClass} ${disabledClass} ${sizeClass} ${skeletonClass} ${this.class}`;
	}
}
