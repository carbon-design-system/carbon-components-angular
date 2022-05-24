import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Input,
	Renderer2,
	TemplateRef
} from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { PopoverContainer } from "../popover";

/**
 * [See demo](../../?path=/story/components-tooltip--basic)
 *
 * <example-url>../../iframe.html?id=components-tooltip--basic</example-url>
 */
@Component({
	selector: "ibm-tooltip",
	template: `
		<ng-content></ng-content>
		<span
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="isOpen"
			role="tooltip">
			<span class="cds--popover-content cds--tooltip-content">
				<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>
				<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description"></ng-template>
			</span>
			<span class="cds--popover-caret"></span>
		</span>
	`
})
export class Tooltip extends PopoverContainer implements AfterViewInit {
	static tooltipCount = 0;

	@Input() id = `tooltip-${Tooltip.tooltipCount++}`;
	@Input() enterDelayMs = 100;
	@Input() leaveDelayMs = 300;

	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	@Input() description: string | TemplateRef<any>;

	constructor(private hostElement: ElementRef, private renderer: Renderer2) {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	ngAfterViewInit(): void {
		fromEvent(this.hostElement.nativeElement, "mouseenter")
			.pipe(debounceTime(this.enterDelayMs))
			.subscribe(() => this.handleChange(true));

		fromEvent(this.hostElement.nativeElement, "mouseleave")
			.pipe(debounceTime(this.leaveDelayMs))
			.subscribe(() => this.handleChange(false));

		const ariaProp = this.isTemplate(this.description) ? "aria-labelledby" : "aria-describedby";
		this.renderer.setAttribute(this.hostElement.nativeElement.firstElementChild, ariaProp, this.id);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent) {
		if (open && event.key === "Escape") {
			event.stopPropagation();
			this.handleChange(false);
		}
	}

	// We are not focusing on entire popover, only the trigger
	@HostListener("focusin")
	handleFocus() {
		this.handleChange(true);
	}

	@HostListener("focusout")
	handleFocusOut() {
		this.handleChange(false);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
