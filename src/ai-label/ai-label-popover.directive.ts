import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	NgZone,
	OnChanges,
	Renderer2,
	SimpleChanges,
	inject
} from "@angular/core";

import { PopoverContainer } from "carbon-components-angular/popover";

/**
 * Popover/toggletip behavior for `cds-ai-label`, applied to an inner wrapper so
 * `cds--popover-*` classes are not merged onto the `cds--ai-label` host.
 */
@Directive({
	selector: "[cdsAILabelPopover]",
	standalone: true
})
export class AILabelPopoverDirective extends PopoverContainer implements OnChanges {


	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	override initializeReferences(): void {
		this.updateAlignmentClass(this._align);
		this.bindPopoverRefs();
		this.handleChange(this.isOpen);
	}

	override ngOnChanges(changes: SimpleChanges): void {
		const originalState = this.isOpen;
		this.handleChange(false);

		if (changes.autoAlign && !changes.autoAlign.firstChange) {
			this.popoverContentRef?.setAttribute("style", "");
			this.bindPopoverRefs();
		}

		this.handleChange(originalState);
	}

	private bindPopoverRefs(): void {
		const host = this.elementRef.nativeElement;
		const panel = host.querySelector(":scope > span.cds--popover");
		if (!panel) {
			return;
		}
		this.popoverContentRef = panel.querySelector(":scope > span.cds--popover-content");
		this.caretRef = this.resolveCaretRef(panel);
	}

	private resolveCaretRef(panel: HTMLElement): HTMLElement | null {
		if (this.autoAlign) {
			return panel.querySelector(
				"span.cds--popover-content > span.cds--popover-caret.cds--popover--auto-align"
			);
		}
		return panel.querySelector(":scope > span.cds--popover-caret");
	}
}
