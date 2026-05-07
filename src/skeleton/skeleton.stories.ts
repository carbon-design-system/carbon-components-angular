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
		[ai]="ai"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</cds-skeleton-text>
	`
});
export const Basic = Template.bind({});

const AITextTemplate = (args) => ({
	props: args,
	template: `
	<cds-skeleton-text
		[ai]="ai"
		[lines]="lines"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</cds-skeleton-text>
	`
});
export const AIText = AITextTemplate.bind({});
AIText.args = {
	ai: true,
	lines: 5,
	minLineWidth: 100,
	maxLineWidth: 300
};

const AIHeadingParagraphTemplate = (args) => ({
	props: args,
	template: `
	<cds-skeleton-text
		[ai]="ai"
		[heading]="heading"
		[lines]="1"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</cds-skeleton-text>
	<cds-skeleton-text
		[ai]="ai"
		[lines]="lines"
		[minLineWidth]="minLineWidth"
		[maxLineWidth]="maxLineWidth">
	</cds-skeleton-text>
	`
});
export const AIHeadingAndParagraph = AIHeadingParagraphTemplate.bind({});
AIHeadingAndParagraph.args = {
	ai: true,
	heading: true,
	lines: 5,
	minLineWidth: 100,
	maxLineWidth: 300
};

const AIIconTemplate = (args) => ({
	props: args,
	template: `
	<div class="skeleton-ai-icon-row">
		<div class="skeleton-ai-icon--margin">
			<cds-skeleton-icon [ai]="ai"></cds-skeleton-icon>
		</div>
		<div class="skeleton-ai-icon--sized">
			<cds-skeleton-icon [ai]="ai"></cds-skeleton-icon>
		</div>
	</div>
	`,
	styles: [`
		.skeleton-ai-icon-row {
			display: flex;
			align-items: flex-start;
			gap: 2rem;
		}
		.skeleton-ai-icon--margin {
			margin: 3rem;
		}
		.skeleton-ai-icon--sized {
			width: 24px;
			height: 24px;
			margin: 3rem;
		}
		.skeleton-ai-icon--sized .cds--icon--skeleton {
			width: 100%;
			height: 100%;
		}
	`]
});
export const AIIcon = AIIconTemplate.bind({});
AIIcon.args = { ai: true };

const AICombinedTemplate = () => ({
	template: `
	<div class="skeleton-ai-combined">
		<div class="skeleton-ai-combined__icon">
			<cds-skeleton-icon [ai]="true"></cds-skeleton-icon>
		</div>
		<div class="skeleton-ai-combined__body">
			<div class="skeleton-ai-combined__placeholder">
				<cds-skeleton-placeholder [ai]="true"></cds-skeleton-placeholder>
			</div>
			<cds-skeleton-text [ai]="true" [lines]="1" [heading]="true"></cds-skeleton-text>
			<cds-skeleton-text [ai]="true" [lines]="3"></cds-skeleton-text>
		</div>
	</div>
	`,
	styles: [`
		.skeleton-ai-combined {
			display: flex;
			gap: 1rem;
			max-width: 28rem;
		}
		.skeleton-ai-combined__icon .cds--icon--skeleton {
			width: 32px;
			height: 32px;
		}
		.skeleton-ai-combined__placeholder {
			width: 100%;
			height: 120px;
			margin-bottom: 1rem;
		}
	`]
});
export const AICombined = AICombinedTemplate.bind({});
