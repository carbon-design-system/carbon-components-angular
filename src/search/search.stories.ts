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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%&#13;
			22%3A%22SearchFragment%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22&#13;
			%3A%22search%22%2C%22label%22%3A%22Search%22%2C%22placeholder%22%3A%22Search%22&#13;
			%2C%22autocomplete%22%3A%22off%22%2C%22inputSize%22%3A%22lg%22%2C%22defaultValue%22&#13;
			%3A%22%22%2C%22expandable%22%3Afalse%2C%22closeButtonLabelText%22%3A%22Clear%20&#13;
			search%20input%22%2C%22disabled%22%3Afalse%2C%22light%22%3Afalse%2C%22searchType%22&#13;
			%3A%22text%22%2C%22role%22%3A%22searchbox%22%2C%22id%22%3A%222%22%2C%22codeContext%22&#13;
			%3A%7B%22name%22%3A%22search-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22&#13;
			%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
