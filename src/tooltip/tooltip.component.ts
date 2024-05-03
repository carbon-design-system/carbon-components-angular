import {
	AfterContentChecked,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	NgZone,
	OnChanges,
	Renderer2,
	SimpleChanges,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { TooltipModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-tooltip--basic)
 */
@Component({
	selector: "cds-tooltip, ibm-tooltip",
	changeDetection: ChangeDetectionStrategy.OnPush,
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
					<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>
					<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
				</span>
				<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
			</ng-container>
		</span>
	`
})
export class Tooltip extends PopoverContainer implements OnChanges, AfterContentChecked {
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
	/**
	 * Optional data for templates passed as implicit context
	 */
	@Input() templateContext: any;

	@ViewChild("contentWrapper") wrapper: ElementRef<HTMLSpanElement>;

	private timeoutId: any; // it should be number, but setTimeout below is matching the NodeJs type instead of the JS type

	constructor(
		protected elementRef: ElementRef,
		protected ngZone: NgZone,
		protected renderer: Renderer2,
		protected changeDetectorRef: ChangeDetectorRef
	) {
		super(elementRef, ngZone, renderer, changeDetectorRef);
		this.highContrast = true;
		this.dropShadow = false;
	}

	@HostListener("mouseenter", ["$event"])
	mouseenter(event) {
		// If a mouseleave is triggered before the tooltip is displayed (before setTimeout of mouseenter completes)
		// we trigger the mouseleave only avoiding having to unecessary show the tooltip
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(() => {
			this.handleChange(true, event);
		}, this.enterDelayMs);
	}

	@HostListener("mouseleave", ["$event"])
	mouseleave(event) {
		// If a mouseleave is triggered before the tooltip is displayed (before setTimeout of mouseenter completes)
		// we trigger the mouseleave only avoiding having to unecessary show the tooltip
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(() => {
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
	 * Close the popover and reopen it with updated values without emitting an event
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges): void {
		// Close and reopen the popover, handle alignment/programmatic open/close
		const originalState = this.isOpen;
		this.handleChange(false);

		// Ignore first change since content is not initialized
		if ((changes.autoAlign && !changes.autoAlign.firstChange)
			|| (changes.disabled && !changes.disabled.firstChange && !changes.disabled.currentValue)) {
			// Update view before getting popover content
			this.changeDetectorRef.detectChanges();
			// Reset the inline styles
			this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
			this.popoverContentRef.setAttribute("style", "");
			this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
		}

		this.handleChange(originalState);
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
