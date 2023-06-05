/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { LayoutModule, StackDirective } from "./";

export default {
	title: "Layout/Stack",
	decorators: [
		moduleMetadata({
			imports: [LayoutModule]
		})
	],
	component: StackDirective
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<div [cdsStack]="orientation" [gap]="gap">
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
		<div>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	orientation: "vertical",
	gap: 1
};
Basic.argTypes = {
	orientation: {
		control: "radio",
		options: ["vertical", "horizontal"]
	}
};
