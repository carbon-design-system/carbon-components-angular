/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { LayoutModule, StackDirective } from "./";

export default {
	title: "Layout/Stack",
	decorators: [
		moduleMetadata({
			imports: [LayoutModule, DocumentationModule]
		})
	],
	component: StackDirective
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<div [ibmStack]="orientation" [gap]="gap">
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

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_layout.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
