import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostListener,
	Input,
	NgZone,
	Renderer2,
	TemplateRef
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { TooltipModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-tooltip-definition--basic)
 */
@Component({
	selector: "cds-tooltip-definition, ibm-tooltip-definition",
	changeDetection: ChangeDetectionStrategy.OnPush,
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
		@if (description) {
			<span
				class="cds--popover"
				[id]="id"
				[attr.aria-hidden]="isOpen"
				role="tooltip">
				<span class="cds--popover-content cds--definition-tooltip">
					@if (!isTemplate(description)) {
						{{description}}
					}
					@if (isTemplate(description)) {
						<ng-template [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>
					} @else {
						{{description}}
					}
					@if (autoAlign) {
						<span class="cds--popover-caret cds--popover--auto-align"></span>
					}
				</span>
				@if (!autoAlign) {
					<span class="cds--popover-caret"></span>
				}
			</span>
		}
	`
})
export class TooltipDefinition extends PopoverContainer {
	static tooltipCount = 0;

	@Input() id = `tooltip-definition-${TooltipDefinition.tooltipCount++}`;

	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	@Input() description: string | TemplateRef<any>;
	/**
	 * Optional data for templates passed as implicit context
	 */
	@Input() templateContext: any;

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
