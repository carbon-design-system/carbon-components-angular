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
			<ibm-search [theme]="theme" [placeholder]="placeholder" [disabled]="disabled" [size]="size"></ibm-search>
		`,
		props: {
			size: select("size", ["lg", "sm"], "lg"),
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false),
			placeholder: text("placeholder", "Search")
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 200px;">
			<ibm-search skeleton="true"></ibm-search>
			&nbsp;
			<ibm-search skeleton="true" size="sm"></ibm-search>
		</div>
		`
	}));
