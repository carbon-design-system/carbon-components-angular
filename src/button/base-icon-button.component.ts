import { Component, Input } from "@angular/core";

/**
 * Base button with common input properties for configuring icon button.
 * Extend class to inherit @Input meta data
 *
 * Used by pagination nav icon button, code snippet, etc.
 */
@Component({
	template: ""
})
export class BaseIconButton {
	/**
	 * Set to `false` to hide caret
	 */
	@Input() caret = true;
	/**
	 * Set to `false` to hide shadow
	 */
	@Input() dropShadow = true;
	/**
	 * Set to `true` to enable high contrast
	 */
	@Input() highContrast = true;
	/**
	 * Set to `true` to have the popover open by default
	 */
	@Input() isOpen = false;
	/**
	 * Set popover alignment
	 */
	@Input() align: "top" | "top-left" | "top-right" |
		"bottom" | "bottom-left" | "bottom-right" |
		"left" | "left-bottom" | "left-top" |
		"right" | "right-bottom" | "right-top" = "bottom";
	/**
	 * Set delay before tooltip is shown
	 */
	@Input() enterDelayMs = 100;
	/**
	 * Set delay when tooltip disappears
	 */
	@Input() leaveDelayMs = 300;
}
