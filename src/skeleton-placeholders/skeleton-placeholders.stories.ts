import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, number } from "@storybook/addon-knobs/angular";

import { SkeletonPlaceholderModule } from "./skeleton-placeholders.module";

storiesOf("Components|Skeleton Placeholders", module).addDecorator(
	moduleMetadata({
		imports: [ SkeletonPlaceholderModule ]
	})
)
	.addDecorator(withKnobs)
	.add("Skeleton Placeholder", () => ({
		template: `<ibm-skeleton-placeholder></ibm-skeleton-placeholder>`
	}))
	.add("Skeleton Text", () => ({
		template: `
			<ibm-skeleton-text
				[numberOfLines]="numberOfLines"
				[minLineWidth]="minLineWidth"
				[maxLineWidth]="maxLineWidth"
				>
			</ibm-skeleton-text>
			`,
		props: {
			minLineWidth: number("Min width of line (in px)", 100),
			maxLineWidth: number("Max width of line (in px)", 300),
			numberOfLines: number("Number of lines", 4)
		}
	}));

