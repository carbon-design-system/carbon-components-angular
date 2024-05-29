/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { InputModule, PasswordInputLabelComponent } from ".";
import { FormsModule } from "@angular/forms";

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
				[autocomplete]="autocomplete">
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
	size: "md"
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
