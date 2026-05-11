import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	OnDestroy,
	Output,
	SimpleChanges,
	ViewChild
} from "@angular/core";
import { Placement } from "@floating-ui/dom";
import { NgClass } from "@angular/common";

import { IconButton } from "carbon-components-angular/button";

import { AILabelPopoverDirective } from "./ai-label-popover.directive";

/**
 * @deprecated alignments — use `Placement` names
 */
type DeprecatedAILabelAlign =
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right"
	| "left-bottom"
	| "left-top"
	| "right-bottom"
	| "right-top";

/**
 * AI-branded toggletip control (`cds-ai-label`). Renders an "AI" badge that opens a
 * popover; projected content and optional actions use `ng-content`.
 *
 * Get started with importing the module:
 *
 * ```typescript
 * import { AILabelModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-ai-label size="md">
 *   <div>
 *     <p>AI Explained</p>
 *     <h2>84%</h2>
 *     <p>Confidence score</p>
 *   </div>
 *   <div cdsAILabelActions>
 *     <button cdsButton="ghost" size="sm">View details</button>
 *   </div>
 * </cds-ai-label>
 * ```
 *
 * `[cdsAILabelActions]` adds `cds--toggletip-actions` and `cds--ai-label-actions`
 * to its host. Place it as a **sibling** of the body content, both direct
 * children of `<cds-ai-label>`. `[cdsAILabelContent]` is an optional marker; the
 * `cds--ai-label-content` / `cds--toggletip-content` classes come from this
 * component’s template.
 *
 * [See demo](../../?path=/story/components-ai-label--default)
 */
@Component({
	selector: "cds-ai-label, ibm-ai-label",
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (!revertActive) {
			<span
				#aiLabelPopoverHost
				cdsAILabelPopover
				class="cds--toggletip"
				[isOpen]="isOpen"
				(isOpenChange)="onPopoverIsOpenChange($event)"
				(onOpen)="onOpen.emit($event)"
				(onClose)="onClose.emit($event)"
				[align]="align"
				[caret]="caret"
				[dropShadow]="dropShadow"
				[highContrast]="highContrast"
				[autoAlign]="autoAlign"
				[alignmentAxisOffset]="alignmentAxisOffset">
				<button
					type="button"
					[attr.aria-label]="computedAriaLabel"
					[attr.aria-expanded]="isOpen"
					[attr.aria-controls]="id"
					[ngClass]="triggerClasses"
					(click)="onTriggerClick($event)">
					<span class="cds--ai-label__text">{{aiText}}</span>
					@if (kind === 'inline' && textLabel) {
						<span class="cds--ai-label__additional-text">{{textLabel}}</span>
					}
				</button>

				<span
					[id]="id"
					class="cds--popover"
					aria-live="polite">
					<span class="cds--popover-content cds--ai-label-content">
						<div class="cds--toggletip-content">
							<ng-content></ng-content>
						</div>
						@if (autoAlign) {
							<span class="cds--popover-caret cds--popover--auto-align"></span>
						}
					</span>
					@if (!autoAlign) {
						<span class="cds--popover-caret"></span>
					}
				</span>
			</span>
		}
		@if (revertActive) {
			<cds-icon-button
				kind="ghost"
				size="sm"
				[description]="revertLabel"
				[autoAlign]="autoAlign"
				[buttonAttributes]="{ 'aria-label': revertLabel }"
				(click)="onRevertButtonClick($event)">
				<svg cdsIcon="undo" size="16"></svg>
			</cds-icon-button>
		}
	`,
	imports: [NgClass, AILabelPopoverDirective, IconButton]
})
export class AILabelComponent implements AfterViewInit, OnChanges, OnDestroy {
	static labelCounter = 0;

	@HostBinding("class.cds--ai-label") aiLabelClass = true;
	@HostBinding("class.cds--ai-label--revert") get revertClass() {
		return this.revertActive;
	}

	/**
	 * Set alignment of popover. Deprecated Carbon alignments are mapped to
	 * floating-ui placements.
	 */
	@Input() align: DeprecatedAILabelAlign | Placement;

	/**
	 * Show caret at the alignment position.
	 */
	@Input() caret = true;

	/**
	 * Enable drop shadow around the popover container.
	 */
	@Input() dropShadow = false;

	/**
	 * Enable high contrast for popover container.
	 */
	@Input() highContrast = true;

	/**
	 * **Experimental**: Use floating-ui to position the tooltip.
	 */
	@Input() autoAlign = false;

	/**
	 * Whether the callout is open.
	 */
	@Input() isOpen = false;

	/**
	 * Emits when the callout is closed.
	 */
	@Output() onClose = new EventEmitter<Event>();

	/**
	 * Emits when the callout is opened.
	 */
	@Output() onOpen = new EventEmitter<Event>();

	/**
	 * Emits when `isOpen` changes (two-way binding).
	 */
	@Output() isOpenChange = new EventEmitter<boolean>();

	/**
	 * Unique id used to associate the trigger button with the popover panel
	 * via `aria-controls` / `id`.
	 */
	@Input() id = `ai-label-${AILabelComponent.labelCounter++}`;

	/**
	 * Text inside the AI badge.
	 */
	@Input() aiText = "AI";

	/**
	 * Extra text beside the badge when `kind` is `"inline"`.
	 */
	@Input() textLabel: string;

	/**
	 * Set badge shape: `"default"` (circular) or `"inline"` (pill, optional `textLabel`).
	 */
	@Input() kind: "default" | "inline" = "default";

	/**
	 * Set badge size
	 */
	@Input() size: "mini" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" = "xs";

	/**
	 * Horizontal shift along the alignment axis when `autoAlign` is on, matching
	 * React `AILabel` (`alignmentAxisOffset={isSmallIcon ? -24 : 0}` on `Toggletip`).
	 */
	get alignmentAxisOffset(): number {
		return ["mini", "2xs", "xs"].includes(this.size) ? -24 : 0;
	}

	/**
	 * When `true`, shows the revert icon instead of the badge (AI-generated value
	 * is active and can be reverted).
	 */
	@Input() revertActive = false;

	/**
	 * Accessible label / tooltip for the revert icon button.
	 */
	@Input() revertLabel = "Revert to AI input";

	/**
	 * `aria-label` for the AI badge trigger (combined with `aiText` in `computedAriaLabel`).
	 */
	@Input() ariaLabel = "Show information";

	/**
	 * Emitted when the revert icon is clicked.
	 */
	@Output() revertClick = new EventEmitter<MouseEvent>();

	@ViewChild("aiLabelPopoverHost", { read: AILabelPopoverDirective })
	private aiLabelPopover: AILabelPopoverDirective;

	private readonly documentClick = this.handleOutsideClick.bind(this);

	constructor(private elementRef: ElementRef) {}

	onPopoverIsOpenChange(open: boolean): void {
		this.isOpen = open;
		this.isOpenChange.emit(open);
	}

	get triggerClasses(): Record<string, boolean> {
		return {
			"cds--toggletip-button": true,
			"cds--ai-label__button": true,
			[`cds--ai-label__button--${this.size}`]: true,
			[`cds--ai-label__button--${this.kind}`]: true,
			"cds--ai-label__button--inline-with-content": this.kind === "inline" && !!this.textLabel
		};
	}

	/**
	 * Trigger `aria-label`: `"${aiText} ${ariaLabel}"`, or
	 * `"${aiText} ${textLabel}"` when `kind` is `"inline"` and `textLabel` is set.
	 */
	get computedAriaLabel(): string {
		const suffix = (this.kind === "inline" && this.textLabel) ? this.textLabel : this.ariaLabel;
		return `${this.aiText} ${suffix}`;
	}

	ngAfterViewInit(): void {
		if (this.isOpen) {
			document.addEventListener("click", this.documentClick);
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.revertActive && !changes.revertActive.firstChange && changes.revertActive.currentValue) {
			this.isOpen = false;
			document.removeEventListener("click", this.documentClick);
		}
	}

	ngOnDestroy(): void {
		document.removeEventListener("click", this.documentClick);
	}

	onTriggerClick(event: MouseEvent): void {
		const opening = !this.isOpen;
		if (opening) {
			document.addEventListener("click", this.documentClick);
		} else {
			document.removeEventListener("click", this.documentClick);
		}
		this.aiLabelPopover?.handleChange(opening, event);
	}

	onRevertButtonClick(event: MouseEvent): void {
		this.revertClick.emit(event);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent): void {
		if (this.isOpen && event.key === "Escape") {
			event.stopPropagation();
			document.removeEventListener("click", this.documentClick);
			this.aiLabelPopover?.handleChange(false, event);
		}
	}

	/**
	 * Dismisses the popover when a click lands outside the host element.
	 */
	private handleOutsideClick(event: MouseEvent): void {
		if (!this.elementRef.nativeElement.contains(event.target as Node)) {
			this.aiLabelPopover?.handleChange(false, event);
			document.removeEventListener("click", this.documentClick);
		}
	}
}
