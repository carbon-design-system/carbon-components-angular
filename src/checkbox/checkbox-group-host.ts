import { InjectionToken } from "@angular/core";

/**
 * Host context for `cds-checkbox` when nested in `cds-checkbox-group`
 * (read-only and validation state can propagate from the group).
 */
export interface CheckboxGroupHost {
	readOnly: boolean;
	invalid: boolean;
	warn: boolean;
	/**
	 * `true` when the whole group is disabled (e.g. through a form control).
	 */
	disabled?: boolean;
	/**
	 * Called by a nested checkbox after the user changed its checked state, so the group
	 * can keep its value in sync.
	 */
	checkboxChanged?(checkbox: { value: unknown, checked: boolean }): void;
}

export const CHECKBOX_GROUP_HOST = new InjectionToken<CheckboxGroupHost | null>("CheckboxGroupHost");
