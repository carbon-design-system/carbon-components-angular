import {
	Directive,
	HostBinding,
	Input,
	OnInit
} from "@angular/core";
import { ButtonSize, ButtonType } from "./button.types";

/**
 * A convenience directive for applying styling to a button.
 *
 * [See demo](../../?path=/story/components-button--basic)
 *
 * Example:
 *
 * ```html
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 *
 * <example-url>../../iframe.html?id=components-button--basic</example-url>
 */
@Directive({
	selector: "[ibmButton]"
})
export class Button implements OnInit {
	/**
	 * sets the button type
	 */
	@Input() ibmButton: ButtonType = "primary";
	/**
	 * Specify the size of the button
	 */
	@Input() size: ButtonSize;
	/**
	 * If assistive text is used, this specifies the placement.
	 * Possible placements are `top`, `bottom`, `left`, `right`.
	 * If assistive text is not used, this can be left undefined.
	 */
	@Input() assistiveTextPlacement: "top" | "bottom" | "left" | "right" = "top";
	/**
	 * If assistive text is used, this specifies the alignment.
	 * Possible alignments are `center`, `start`, `end`.
	 * If assistive text is not used, this can be left undefined.
	 */
	@Input() assistiveTextAlignment: "center" | "start" | "end" = "center";
	/**
	 * Set to `true` for a skeleton state button
	 */
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;
	/**
	 * Set to `true` if the button contains only an icon, and a span with `.cds--assistive-text` containing the content
	 * For example:
	 *
	 * <button ibmButton="primary" [iconOnly]="true" [hasAssistiveText]="true">
	 *    <svg class="cds--btn__icon" ibmIconCopy size="20"></svg>
	 *    <span class="cds--assistive-text">Icon description</span>
	 * </button>
	 */
	@HostBinding("class.cds--btn--icon-only") @Input() iconOnly = false;

	/**
	 * Set to `true` for a "expressive" style button
	 */
	@HostBinding("class.cds--btn--expressive") @Input() isExpressive = false;

	// a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
	@HostBinding("class.cds--btn") get baseClass() {
		return !this.toolbarAction;
	}
	@HostBinding("class.cds--btn--primary") get primaryButton() {
		return this.ibmButton === "primary";
	}
	@HostBinding("class.cds--btn--secondary") get secondaryButton() {
		return this.ibmButton === "secondary";
	}
	@HostBinding("class.cds--btn--tertiary") get tertiaryButton() {
		return this.ibmButton === "tertiary";
	}
	@HostBinding("class.cds--btn--ghost") get ghostButton() {
		return this.ibmButton === "ghost";
	}
	@HostBinding("class.cds--btn--danger") get dangerButton() {
		return this.ibmButton === "danger" || this.ibmButton === "danger--primary";
	}
	@HostBinding("class.cds--btn--danger--tertiary") get dangerTertiary() {
		return this.ibmButton === "danger--tertiary";
	}
	@HostBinding("class.cds--btn--danger--ghost") get dangerGhost() {
		return this.ibmButton === "danger--ghost";
	}
	@HostBinding("class.cds--btn--sm") get smallSize() {
		return this.size === "sm";
	}
	@HostBinding("class.cds--btn--lg") get largeSize() {
		return this.size === "lg";
	}
	@HostBinding("class.cds--btn--xl") get extraLargeSize() {
		return this.size === "xl";
	}
	@HostBinding("class.cds--btn--field") get fieldSize() {
		return this.size === "field";
	}
	@HostBinding("class.cds--toolbar-action") toolbarAction = false;
	@HostBinding("class.cds--overflow-menu") overflowMenu = false;


	/**
	 * `hasAssistiveText` input specifies whether the button contains assistive text or not.
	 * Assistive text can be utilized as follows:
	 * ```typescript
	 *	<button
	 *		ibmButton="tertiary"
	 *		[iconOnly]="true"
	 *		[hasAssistiveText]="true"
	 *		assistiveTextPlacement="top"
	 *		assistiveTextAlignment="center">
	 *		<svg class="cds--btn__icon" ibmIcon="copy" size="20"></svg>
	 *		<span class="cds--assistive-text">Icon description</span>
	 *	</button>
	 * ```
	 */
	@HostBinding("class.cds--tooltip__trigger")
	@HostBinding("class.cds--tooltip--a11y") @Input() hasAssistiveText = false;

	@HostBinding("class.cds--tooltip--align-center") get isAssistiveTextCenterAligned() {
		return this.hasAssistiveText && this.assistiveTextAlignment === "center";
	}

	@HostBinding("class.cds--tooltip--align-start") get isAssistiveTextStartAligned() {
		return this.hasAssistiveText && this.assistiveTextAlignment === "start";
	}

	@HostBinding("class.cds--tooltip--align-end") get isAssistiveTextEndAligned() {
		return this.hasAssistiveText && this.assistiveTextAlignment === "end";
	}

	@HostBinding("class.cds--tooltip--top") get isAssistiveTextTopPositioned() {
		return this.hasAssistiveText && this.assistiveTextPlacement === "top";
	}

	@HostBinding("class.cds--tooltip--bottom") get isAssistiveTextBottomPositioned() {
		return this.hasAssistiveText && this.assistiveTextPlacement === "bottom";
	}

	@HostBinding("class.cds--tooltip--left") get isAssistiveTextLeftPositioned() {
		return this.hasAssistiveText && this.assistiveTextPlacement === "left";
	}

	@HostBinding("class.cds--tooltip--right") get isAssistiveTextRightPositioned() {
		return this.hasAssistiveText && this.assistiveTextPlacement === "right";
	}

	ngOnInit() {
		if (!this.ibmButton) {
			this.ibmButton = "primary";
		}
	}
}
