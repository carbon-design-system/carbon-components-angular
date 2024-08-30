/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { Meta, moduleMetadata } from "@storybook/angular";
import { InputModule, PasswordInputLabelComponent } from ".";

export default {
	title: "Components/Input/Password",
	decorators: [
		moduleMetadata({
			imports: [InputModule, FormsModule]
		})
	],
	component: PasswordInputLabelComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-password-label
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[disabled]="disabled"
			[warnText]="warnText">
			{{ label }}
			<input
				cdsPassword
				type="password"
				[size]="size"
				[invalid]="invalid"
				[warn]="warn"
				[disabled]="disabled"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete"
				[readonly]="readonly">
		</cds-password-label>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	invalid: false,
	invalidText: "Invalid entry",
	warn: false,
	warnText: "This is a warning!",
	label: "Text input label",
	helperText: "Optional helper text",
	placeholder: "Placeholder",
	autocomplete: "on",
	theme: "dark",
	size: "md",
	readonly: false
};
Basic.argTypes = {
	autocomplete: {
		options: ["on", "off"],
		control: "radio"
	},
	theme: {
		options: ["light", "dark"],
		control: "radio"
	},
	size: {
		options: ["sm", "md", "lg"],
		control: "select"
	}
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-password-label skeleton="true">
			<input cdsPassword [skeleton]="true">
		</cds-password-label>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
