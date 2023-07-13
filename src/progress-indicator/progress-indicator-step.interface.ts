export interface Step {
	/**
	 * The label of the `step`
	 */
	label: string;
	/**
	 * Optional label with additional information
	 */
	secondaryLabel?: string;
	/**
	 * Determines whether the step is complete or incomplete
	 */
	complete?: boolean;
	/**
	 * Determines whether the step is invalid or valid
	 */
	invalid?: boolean;
	/**
	 * Function to execute on click
	 */
	onClick?: Function;
	/**
	 * Determines whether the step is disabled or not
	 */
	disabled?: boolean;
	/**
	 * Icon description
	 */
	description?: string;
}
