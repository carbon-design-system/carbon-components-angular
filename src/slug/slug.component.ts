import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	Output,
	Renderer2,
	SimpleChanges,
	ViewChild
} from "@angular/core";
import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * AI-branded toggletip control (`cds-slug`). Renders an "AI" badge that opens a
 * popover; projected content and optional actions use `ng-content`.
 *
 * Get started with importing the module:
 *
 * ```typescript
 * import { SlugModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-slug size="md">
 *   <div>
 *     <p>AI Explained</p>
 *     <h2>84%</h2>
 *     <p>Confidence score</p>
 *   </div>
 *   <div cdsAILabelActions>
 *     <button cdsButton="ghost" size="sm">View details</button>
 *   </div>
 * </cds-slug>
 * ```
 *
 * `[cdsAILabelActions]` adds `cds--toggletip-actions` and `cds--ai-label-actions`
 * to its host. Place it as a **sibling** of the body content, both direct
 * children of `<cds-slug>`. `[cdsAILabelContent]` is an optional marker; the
 * `cds--ai-label-content` / `cds--toggletip-content` classes come from this
 * component’s template.
 *
 * [See demo](../../?path=/story/components-slug--default)
 */
@Component({
	selector: "cds-slug, ibm-slug",
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button
			*ngIf="!revertActive"
			type="button"
			[attr.aria-label]="computedAriaLabel"
			[attr.aria-expanded]="isOpen"
			[attr.aria-controls]="id"
			[ngClass]="triggerClasses"
			(click)="onTriggerClick($event)">
			<span class="cds--ai-label__text">{{aiText}}</span>
			<span *ngIf="kind === 'inline' && textLabel" class="cds--ai-label__additional-text">{{textLabel}}</span>
		</button>

		<span
			*ngIf="!revertActive"
			[id]="id"
			class="cds--popover"
			aria-live="polite">
			<span #popoverContent class="cds--popover-content cds--ai-label-content">
				<div class="cds--toggletip-content">
					<ng-content></ng-content>
				</div>
				<span *ngIf="autoAlign" #caretAutoAlign class="cds--popover-caret cds--popover--auto-align"></span>
			</span>
			<span *ngIf="!autoAlign" #caretNonAutoAlign class="cds--popover-caret"></span>
		</span>

		<cds-icon-button
			*ngIf="revertActive"
			kind="ghost"
			size="sm"
			[description]="revertLabel"
			[autoAlign]="autoAlign"
			[buttonAttributes]="{ 'aria-label': revertLabel }"
			(click)="onRevertButtonClick($event)">
			<svg cdsIcon="undo" size="16"></svg>
		</cds-icon-button>
	`
})
export class Slug extends PopoverContainer implements AfterViewInit, OnChanges, OnDestroy {
	static slugCount = 0;

	@HostBinding("class.cds--toggletip") toggletipClass = true;
	@HostBinding("class.cds--ai-label") aiLabelClass = true;
	@HostBinding("class.cds--ai-label--revert") get revertClass() {
		return this.revertActive;
	}

	/**
	 * Unique id used to associate the trigger button with the popover panel
	 * via `aria-controls` / `id`.
	 */
	@Input() id = `ai-label-${Slug.slugCount++}`;

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

	@ViewChild("popoverContent") private popoverContent: ElementRef<HTMLSpanElement>;

	/**
	 * Bypasses `querySelector` which would otherwise pick up carets from nested
	 * components (e.g. the `cds-tooltip` inside a projected `cds-icon-button`).
	 */
	// Direct reference to the caret rendered when `autoAlign=true`.
	@ViewChild("caretAutoAlign") private caretAutoAlignRef: ElementRef<HTMLSpanElement>;
	// Direct reference to the caret rendered when `autoAlign=false`.
	@ViewChild("caretNonAutoAlign") private caretNonAutoAlignRef: ElementRef<HTMLSpanElement>;

	private readonly documentClick = this.handleOutsideClick.bind(this);

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

	/**
	 * Returns the caret element that belongs to THIS component's popover, regardless of the `autoAlign` state.
	 * Using `querySelector("span.cds--popover-caret")` walks the full subtree and would match carets from
	 * nested components.
	 */
	private resolveCaretRef(): HTMLElement | null {
		return (this.autoAlign ? this.caretAutoAlignRef : this.caretNonAutoAlignRef)?.nativeElement ?? null;
	}

	/**
	 * Override `PopoverContainer.initializeReferences` to bind popoverContentRef and caretRef via ViewChild references.
	 */
	initializeReferences(): void {
		this.updateAlignmentClass(this._align);
		this.popoverContentRef = this.popoverContent?.nativeElement;
		this.caretRef = this.resolveCaretRef();
		this.handleChange(this.isOpen);
	}


	ngAfterViewInit(): void {
		super.ngAfterViewInit();

		if (this.isOpen) {
			document.addEventListener("click", this.documentClick);
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.revertActive && !changes.revertActive.firstChange && changes.revertActive.currentValue) {
			this.isOpen = false;
			document.removeEventListener("click", this.documentClick);
		}

		const originalState = this.isOpen;
		this.handleChange(false);

		if (
			(changes.autoAlign && !changes.autoAlign.firstChange)
			|| (changes.revertActive && !changes.revertActive.firstChange)
		) {
			this.changeDetectorRef.detectChanges();
			this.popoverContentRef = this.popoverContent?.nativeElement;
			this.popoverContentRef?.setAttribute("style", "");
			this.caretRef = this.resolveCaretRef();
		}

		this.handleChange(originalState);
	}

	ngOnDestroy(): void {
		document.removeEventListener("click", this.documentClick);
		super.ngOnDestroy();
	}

	onTriggerClick(event: MouseEvent): void {
		const opening = !this.isOpen;
		if (opening) {
			document.addEventListener("click", this.documentClick);
		} else {
			document.removeEventListener("click", this.documentClick);
		}
		this.expand(opening, event);
	}

	onRevertButtonClick(event: MouseEvent): void {
		this.revertClick.emit(event);
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent): void {
		if (this.isOpen && event.key === "Escape") {
			event.stopPropagation();
			document.removeEventListener("click", this.documentClick);
			this.expand(false, event);
		}
	}

	/**
	 * Toggles the popover
	 */
	private expand(state: boolean, event?: Event): void {
		this.handleChange(state, event);
	}

	/**
	 * Dismisses the popover when a click lands outside the host element.
	 * Added / removed on each toggle to keep the document listener count low.
	 */
	private handleOutsideClick(event: MouseEvent): void {
		if (!this.elementRef.nativeElement.contains(event.target as Node)) {
			this.expand(false, event);
			document.removeEventListener("click", this.documentClick);
		}
	}
}
