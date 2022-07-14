/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { SkeletonModule, SkeletonPlaceholder } from "./";

export default {
	title: "Components/Skeleton",
	decorators: [
		moduleMetadata({
			imports: [SkeletonModule, DocumentationModule]
		})
	],
	args: {
		lines: 5,
		minLineWidth: 100,
		maxLineWidth: 300
	}
} as Meta;

const Template: Story<SkeletonPlaceholder> = (args) => ({
	props: args,
	template: `
	<ibm-skeleton-text
		[lines]="lines"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</ibm-skeleton-text>
	`
});
export const Basic = Template.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_skeleton.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
