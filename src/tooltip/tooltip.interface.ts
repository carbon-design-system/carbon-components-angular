import { TemplateRef } from "@angular/core";

export type TooltipAlignments = "top" | "top-left" | "top-right" |
	"bottom" | "bottom-left" | "bottom-right" |
	"left" | "left-bottom" | "left-top" |
	"right" | "right-bottom" | "right-top";

/**
 * Tooltip attributes
 */
export interface TooltipConfig {
	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	description: string | TemplateRef<any>;
	/**
	 * Specify the tooltip alignement
	 */
	align?: TooltipAlignments;
	/**
	 * Set to `false` to hide caret
	 */
	caret?: boolean;
	/**
	 * Set to `false` to hide shadow
	 */
	dropShadow?: boolean;
	/**
	 * Set to `true` to enable high contrast
	 */
	highContrast?: boolean;
	/**
	 * Set to `true` to have the popover open by default
	 * Tooltip will not remain open if user interacts with it (mouseenter & leave) or clicks anywhere in window
	 */
	isOpen?: boolean;
	/**
	 * Set delay before tooltip is shown
	 */
	enterDelayMs?: number;
	/**
	 * Set delay when tooltip disappears
	 */
	leaveDelayMs?: number;
}

/**
 * Default tooltip configuration for components to populate missing interface attributes
 */
export const DEFAULT_TOOLTIP_CONFIG = {
	align: "bottom" as TooltipAlignments,
	caret: true,
	dropShadow: true,
	highContrast: true,
	isOpen: false,
	enterDelayMs: 100,
	leaveDelayMs: 300
};
