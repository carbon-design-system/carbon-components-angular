import {
	Component,
	HostListener,
	Input,
	TemplateRef
} from "@angular/core";
import { PopoverContainer } from "../popover";

/**
 * [See demo](../../?path=/story/components-tooltip-definition--basic)
 *
 * <example-url>../../iframe.html?id=components-tooltip-definition--basic</example-url>
 */
@Component({
	selector: "ibm-tooltip-definition",
	template: `
		<button
			class="cds--definition-term"
			[attr.aria-controls]="id"
			[attr.aria-expanded]="isOpen"
			(blur)="onBlur()"
			(click)="onClick()"
			type="button">
			<ng-content></ng-content>
		</button>
		<span
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

	onBlur() {
		this.handleChange(false);
	}

	onClick() {
		this.handleChange(!this.isOpen);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent) {
		if (this.isOpen && event.key === "Escape") {
			event.stopPropagation();
			this.handleChange(false);
		}
	}


	@HostListener("mouseleave", ["$event"])
	mouseleave() {
		this.handleChange(false);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
