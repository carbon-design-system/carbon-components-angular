/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { LoadingModule, Loading } from "./";

export default {
	title: "Components/Loading",
	decorators: [
		moduleMetadata({
			imports: [LoadingModule]
		})
	],
	component: Loading
} as Meta;

const Template: Story<Loading> = (args) => ({
	props: args,
	template: `
		<cds-loading [isActive]="isActive" [size]="size" [overlay]="overlay"></cds-loading>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	isActive: true,
	overlay: false
};
Basic.argTypes = {
	size: {
		options: ["sm", "normal"],
		defaultValue: "normal",
		control: "radio"
	}
};
