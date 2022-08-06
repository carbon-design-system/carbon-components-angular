/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { LinkModule, Link } from "./";

export default {
	title: "Components/Link",
	decorators: [
		moduleMetadata({
			imports: [LinkModule, DocumentationModule]
		})
	],
	component: Link
} as Meta;

const Template: Story<Link> = (args) => ({
	props: args,
	template: `
		<a href="#" ibmLink [disabled]="disabled" [inline]="inline">link</a>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	inline: false
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_link.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
