import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs/angular";

import { SearchModule, DocumentationModule } from "../";

storiesOf("Search", module).addDecorator(
	moduleMetadata({
		imports: [SearchModule, DocumentationModule]
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
	.add("Toolbar search", () => ({
		template: `
		<div class="bx--toolbar">
			<ibm-search placeholder="search" size="sm" toolbar="true"></ibm-search>
		</div>
		`
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 200px;">
			<ibm-search skeleton="true"></ibm-search>
			&nbsp;
			<ibm-search skeleton="true" size="sm"></ibm-search>
		</div>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Search.html"></ibm-documentation>
		`
	}));
