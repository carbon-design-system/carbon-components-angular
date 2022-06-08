import {
	Component,
	HostBinding,
	HostListener,
	Input,
	TemplateRef
} from "@angular/core";
import { PopoverContainer } from "../popover";

/**
 * [See demo](../../?path=/story/components-tooltip--basic)
 *
 * <example-url>../../iframe.html?id=components-tooltip--basic</example-url>
 */
@Component({
	selector: "ibm-tooltip",
	template: `
		<span
			[attr.aria-labelledby]="this.isTemplate(this.description) ? id : null"
			[attr.aria-describedby]="!this.isTemplate(this.description) ? id : null"
			(mouseenter)="mouseenter($event)"
			(mouseleave)="mouseleave($event)">
			<ng-content></ng-content>
		</span>
		<span
			*ngIf="description"
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="isOpen"
			role="tooltip">
			<ng-container *ngIf="!disabled">
				<span class="cds--popover-content cds--tooltip-content">
					<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>
					<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description"></ng-template>
				</span>
				<span class="cds--popover-caret"></span>
			</ng-container>
		</span>
	`
})
export class Tooltip extends PopoverContainer {
	static tooltipCount = 0;

	@HostBinding("class.cds--tooltip") tooltipClass = true;

	@Input() id = `tooltip-${Tooltip.tooltipCount++}`;
	/**
	 * Set delay before tooltip is shown
	 */
	@Input() enterDelayMs = 100;
	/**
	 * Set delay when tooltip disappears
	 */
	@Input() leaveDelayMs = 300;
	/**
	 * Prevent tooltip from showing, used by icon button
	 */
	@Input() disabled = false;
	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	@Input() description: string | TemplateRef<any>;

	constructor() {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	mouseenter(event) {
		setTimeout(() => {
			this.handleChange(true, event);
		}, this.enterDelayMs);
	}

	mouseleave(event) {
		setTimeout(() => {
			this.handleChange(false, event);
		}, this.leaveDelayMs);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent) {
		if (open && event.key === "Escape") {
			event.stopPropagation();
			this.handleChange(false, event);
		}
	}

	// We are not focusing on entire popover, only the trigger
	@HostListener("focusin", ["$event"])
	handleFocus(event: Event) {
		this.handleChange(true, event);
	}

	@HostListener("focusout", ["$event"])
	handleFocusOut(event: Event) {
		this.handleChange(false, event);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
