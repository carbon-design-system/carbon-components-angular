import { TooltipConfig } from "carbon-components-angular/tooltip";

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
	tooltip?: TooltipConfig;
	/**
	 * Determines whether the step is disabled or not
	 */
	disabled?: boolean;
	optionalText?: string;
	/**
	 * Icon description
	 */
	description?: string;
}
