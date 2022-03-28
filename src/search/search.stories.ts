import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	boolean,
	select,
	text
} from "@storybook/addon-knobs/angular";

import { SearchModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Search", module).addDecorator(
	moduleMetadata({
		imports: [SearchModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-search
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete"
				[disabled]="disabled"
				[size]="size"
				(valueChange)="valueChange($event)"
				(clear)="clear()">
			</ibm-search>
		`,
		props: {
			size: select("size", ["sm", "md", "xl"], "md"),
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false),
			autocomplete: text("autocomplete", "on"),
			placeholder: text("placeholder", "Search"),
			valueChange: action("value change fired!"),
			clear: action("clear fired!")
		}
	}))
	.add("Expandable", () => ({
		template: `
			<ibm-search
				[expandable]="true"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete"
				[disabled]="disabled"
				[size]="size"
				(valueChange)="valueChange($event)"
				(clear)="clear()">
			</ibm-search>
		`,
		props: {
			size: select("size", ["sm", "md", "xl"], "md"),
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false),
			autocomplete: text("autocomplete", "on"),
			placeholder: text("placeholder", "Search"),
			valueChange: action("value change fired!"),
			clear: action("clear fired!")
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
			<ibm-documentation src="documentation/classes/src_search.search.html"></ibm-documentation>
		`
	}));
