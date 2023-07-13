/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { SkeletonModule, SkeletonPlaceholder } from "./";

export default {
	title: "Components/Skeleton",
	decorators: [
		moduleMetadata({
			imports: [SkeletonModule]
		})
	],
	args: {
		lines: 5,
		minLineWidth: 100,
		maxLineWidth: 300
	},
	component: SkeletonPlaceholder
} as Meta;

const Template: Story<SkeletonPlaceholder> = (args) => ({
	props: args,
	template: `
	<cds-skeleton-text
		[lines]="lines"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</cds-skeleton-text>
	`
});
export const Basic = Template.bind({});
