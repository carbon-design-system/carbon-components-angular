import { TemplateRef } from "@angular/core";

export interface Step {
	/**
	 * The label of the `step`
	 */
	text: string;
	/**
	 * An array of strings to determine the progress of the step
	 */
	state: Array<string>;
	/**
	 * Defines the tooltip
	 */
	tooltip?: Tooltip;
	/**
	 * Determines whether the step is disabled or not
	 */
	disabled?: boolean;
}

export interface Tooltip {
	/**
	 * Body content for the `Tooltip`.
	 */
	content: string | TemplateRef<any>;
	/**
	 * Parameter for triggering `Tooltip` display.
	 */
	trigger: "click" | "hover";
	/**
	 * Parameter defining the placement in which the `Tooltip` appears.
	 */
	placement: string;
}
