import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, number } from "@storybook/addon-knobs/angular";

import { SkeletonModule } from "./index";

storiesOf("Components|Skeleton", module).addDecorator(
	moduleMetadata({
		imports: [ SkeletonModule ]
	})
)
	.addDecorator(withKnobs)
	.add("Skeleton Placeholder", () => ({
		template: `<ibm-skeleton-placeholder [ngStyle]="{'width.px': width, 'height.px': height }"></ibm-skeleton-placeholder>`,
		props: {
			width: number("Width (in px)", 100),
			height: number("Height (in px)", 100)
		}
	}))
	.add("Skeleton Text", () => ({
		template: `
			<ibm-skeleton-text
				[lines]="lines"
				[minLineWidth]="minLineWidth"
				[maxLineWidth]="maxLineWidth">
			</ibm-skeleton-text>
			`,
		props: {
			minLineWidth: number("Min width of line (in px)", 100),
			maxLineWidth: number("Max width of line (in px)", 300),
			lines: number("Number of lines", 4)
		}
	}));
