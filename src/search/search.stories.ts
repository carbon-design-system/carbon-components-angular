import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	boolean,
	select,
	text
} from "@storybook/addon-knobs/angular";

import { SearchModule, DocumentationModule } from "../";

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
			size: select("size", ["lg", "sm"], "lg"),
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false),
			autocomplete: text("autocomplete", "on"),
			placeholder: text("placeholder", "Search"),
			valueChange: action("value change fired!"),
			clear: action("clear fired!")
		}
	}))
	.add("Typeahead search", () => ({
		template: `
			<div>
				<p>Default template</p>
				<ibm-search
					[typeahead]="true"
					[size]="size"
					[typeAheadResults]="typeAheadResults"
					[theme]="theme"
					placeholder="search"
					(valueChange)="valueChange($event)"
				>
				</ibm-search>

				<div style="margin-top: 150px;"><p>With custom template</p></div>
				<ibm-search
					[typeahead]="true"
					[size]="size"
					[typeAheadResults]="typeAheadResults"
					[listTpl]="myTemplate"
					[theme]="theme"
					placeholder="search"
					(valueChange)="valueChange($event)"
				>
				</ibm-search>
				<ng-template #myTemplate>
					Custom template
				</ng-template>
			</div>
		`,
		props: {
			size: select("size", ["lg", "sm"], "lg"),
			theme: select("theme", ["dark", "light"], "dark"),
			typeahead: boolean("typeahead", true),
			typeAheadResults : ['item1', 'item2'],
			valueChange: action("value change fired!")
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
