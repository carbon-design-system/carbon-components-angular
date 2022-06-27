/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { LoadingModule, Loading } from "./";

export default {
	title: "Components/Loading",
	decorators: [
		moduleMetadata({
			imports: [LoadingModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story<Loading> = (args) => ({
	props: args,
	template: `
		<ibm-loading [isActive]="isActive" [size]="size" [overlay]="overlay"></ibm-loading>
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

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_loading.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
