import {
	Component,
	HostListener,
	Input,
	TemplateRef
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * [See demo](../../?path=/story/components-tooltip-definition--basic)
 */
@Component({
	selector: "cds-tooltip-definition, ibm-tooltip-definition",
	template: `
		<button
			class="cds--definition-term"
			[attr.aria-controls]="id"
			[attr.aria-expanded]="isOpen"
			(blur)="onBlur($event)"
			(click)="onClick($event)"
			type="button">
			<ng-content></ng-content>
		</button>
		<span
			*ngIf="description"
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="isOpen"
			role="tooltip">
			<span class="cds--popover-content cds--definition-tooltip">
				<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>
				<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description"></ng-template>
			</span>
			<span class="cds--popover-caret"></span>
		</span>
	`
})
export class TooltipDefinition extends PopoverContainer {
	static tooltipCount = 0;

	@Input() id = `tooltip-definition-${TooltipDefinition.tooltipCount++}`;

	/**
	 * Override alignment options
	 */
	@Input() align: "top" | "top-left" | "top-right"
		| "bottom" | "bottom-left" | "bottom-right" = "bottom";

	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	@Input() description: string | TemplateRef<any>;

	constructor() {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	onBlur(event: Event) {
		this.handleChange(false, event);
	}

	onClick(event: Event) {
		this.handleChange(!this.isOpen, event);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent) {
		if (this.isOpen && event.key === "Escape") {
			event.stopPropagation();
			this.handleChange(false, event);
		}
	}

	@HostListener("mouseleave", ["$event"])
	mouseleave(event) {
		this.handleChange(false, event);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
