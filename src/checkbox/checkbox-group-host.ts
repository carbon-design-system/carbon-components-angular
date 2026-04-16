import { InjectionToken } from "@angular/core";

/**
 * Host context for `cds-checkbox` when nested in `cds-checkbox-group`
 * (read-only and validation state can propagate from the group).
 */
export interface CheckboxGroupHost {
	readOnly: boolean;
	invalid: boolean;
	warn: boolean;
}

export const CHECKBOX_GROUP_HOST = new InjectionToken<CheckboxGroupHost | null>("CheckboxGroupHost");
