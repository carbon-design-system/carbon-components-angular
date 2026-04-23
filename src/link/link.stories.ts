/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { LinkModule, Link } from "./";

import { IconModule } from "../icon";

export default {
	title: "Components/Link",
	decorators: [
		moduleMetadata({
			imports: [LinkModule, IconModule]
		})
	],
	component: Link
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<a
			href="#"
			cdsLink
			[size]="size"
			[disabled]="disabled"
			[inline]="inline">link</a>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	inline: false,
	size: "md"
};

const IconTemplate = (args) => ({
	props: args,
	template: `
		<a
			href="#"
			cdsLink
			[disabled]="disabled"
			[size]="size"
			[inline]="inline">
			Link
			<svg cdsLinkIcon cdsIcon="close" size="16"></svg>
		</a>
	`
});
export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
	disabled: false,
	inline: false,
	size: "md"
};
