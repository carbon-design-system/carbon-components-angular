/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { LinkModule, Link } from "./";

export default {
	title: "Components/Link",
	decorators: [
		moduleMetadata({
			imports: [LinkModule]
		})
	],
	component: Link
} as Meta;

const Template: Story<Link> = (args) => ({
	props: args,
	template: `
		<a href="#" cdsLink [disabled]="disabled" [inline]="inline">link</a>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	inline: false
};
