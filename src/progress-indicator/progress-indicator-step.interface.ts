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
	 * Function to execute on click
	 */
	onClick?: Function;
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
