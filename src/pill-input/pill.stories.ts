import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { PillInputModule } from "../";

storiesOf("Pill", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				PillInputModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-pill [item]="item">
				{{item.content}}
			</ibm-pill>
		`,
		props: {
			item:
			{
				content: "one",
				selected: false
			}
		}
	}));
