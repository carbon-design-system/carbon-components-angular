import { TemplateRef } from "@angular/core";
import { DialogConfig } from "./../dialog/dialog-config.interface";

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
	tooltip?: DialogConfig;
	/**
	 * Determines whether the step is disabled or not
	 */
	disabled?: boolean;
}
