import {
	AfterContentChecked,
	Component,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * [See demo](../../?path=/story/components-tooltip--basic)
 */
@Component({
	selector: "cds-tooltip, ibm-tooltip",
	template: `
		<span #contentWrapper>
			<ng-content></ng-content>
		</span>
		<span
			*ngIf="description"
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="!isOpen"
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
export class Tooltip extends PopoverContainer implements AfterContentChecked {
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

	@ViewChild("contentWrapper") wrapper: ElementRef<HTMLSpanElement>;

	constructor() {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	@HostListener("mouseenter", ["$event"])
	mouseenter(event) {
		setTimeout(() => {
			this.handleChange(true, event);
		}, this.enterDelayMs);
	}

	@HostListener("mouseleave", ["$event"])
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

	isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Check for any changes in the projected content & apply accessibility attribute if needed
	 */
	ngAfterContentChecked() {
		if (this.wrapper) {
			const buttonElement = this.wrapper.nativeElement.querySelector("button");
			if (buttonElement && !buttonElement.getAttribute("aria-labelledby")) {
				buttonElement.setAttribute("aria-labelledby", this.id);
			}
		}
	}
}
