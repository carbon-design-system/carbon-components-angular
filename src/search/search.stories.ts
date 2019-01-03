import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs/angular";

import { SearchModule } from "../";

storiesOf("Search", module).addDecorator(
	moduleMetadata({
		imports: [SearchModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<div style="width: 250px;">
			<ibm-search [theme]="theme" [placeholder]="placeholder" [disabled]="disabled" [size]="size"></ibm-search>
		</div>
		`,
		props: {
			size: select("size", ["lg", "sm"], "lg"),
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false),
			placeholder: text("placeholder", "Search")
		}
	}));
