import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostListener,
	Input,
	NgZone,
	Renderer2,
	TemplateRef,
	inject
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";
import { NgTemplateOutlet } from "@angular/common";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { Tooltip } from 'carbon-components-angular';
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
			[attr.aria-describedby]="isOpen ? id : null"
			(blur)="onBlur($event)"
			(mousedown)="onClick($event)"
			type="button">
			<ng-content></ng-content>
		</button>
		@if (description) {
			<span
				class="cds--popover"
				[id]="id"
				[attr.aria-hidden]="!isOpen"
				role="tooltip"
				(mousedown)="onPopoverMouseDown()"
				(mouseup)="onPopoverMouseUp()">
				<span class="cds--popover-content cds--definition-tooltip" aria-live="polite">
					@if (!isTemplate(description)) {
						{{description}}
					}
					@if (isTemplate(description)) {
						<ng-template
							[ngTemplateOutlet]="description"
							[ngTemplateOutletContext]="{ $implicit: templateContext }">
						</ng-template>
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
	`,
	imports: [NgTemplateOutlet]
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

	@Input() openOnHover = false;

	protected elementRef: ElementRef;
	protected ngZone: NgZone;
	protected renderer: Renderer2;
	protected changeDetectorRef: ChangeDetectorRef;

	/**
	 * Helper variable to ensure button blur doesn't fire on `click` of popover content
	 */
	private isInteractingWithPopover = false;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
		const elementRef = inject(ElementRef);
		const ngZone = inject(NgZone);
		const renderer = inject(Renderer2);
		const changeDetectorRef = inject(ChangeDetectorRef);

		super(elementRef, ngZone, renderer, changeDetectorRef);
		this.elementRef = elementRef;
		this.ngZone = ngZone;
		this.renderer = renderer;
		this.changeDetectorRef = changeDetectorRef;

		this.highContrast = true;
		this.dropShadow = false;
	}

	onBlur(event: Event) {
		// Only close if user is not interacting with popover content
		if (!this.isInteractingWithPopover) {
			this.handleChange(false, event);
		}
	}

	onClick(event: MouseEvent) {
		if (event.button === 0) {
			this.handleChange(!this.isOpen, event);
		}
	}

	onPopoverMouseDown() {
		this.isInteractingWithPopover = true;
	}

	onPopoverMouseUp() {
		this.isInteractingWithPopover = false;
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

	@HostListener("mouseenter", ["$event"])
	mouseenter(event) {
		if (this.openOnHover) {
			this.handleChange(true, event);
		}
	}

	@HostListener("focusin", ["$event"])
	onFocus(event) {
		this.handleChange(true, event);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
