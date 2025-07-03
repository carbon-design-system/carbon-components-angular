import { moduleMetadata, Meta } from "@storybook/angular";
import { SkeletonText, SkeletonPlaceholder } from "./";

export default {
	title: "Components/Skeleton",
	decorators: [
		moduleMetadata({
			imports: [SkeletonText, SkeletonPlaceholder]
		})
	],
	args: {
		lines: 5,
		minLineWidth: 100,
		maxLineWidth: 300
	},
	component: SkeletonPlaceholder
} as Meta;

const Template = (args) => ({
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
