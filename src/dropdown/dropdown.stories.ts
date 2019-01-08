import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, object, text } from "@storybook/addon-knobs/angular";

import { DropdownModule } from "../";

// needed to init ngx translate and load the translations
import { BootstrapModule } from "../../.storybook/bootstrap.module";
import { stringify } from "querystring";

storiesOf("Dropdown", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DropdownModule,
				BootstrapModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-dropdown
			[theme]="theme"
			placeholder="Select"
			[disabled]="disabled"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
		</ibm-dropdown>
	`,
		props: {
			disabled: boolean("disabled", false),
			items: object("items", [
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			]),
			selected: action("Selected fired for dropdown"),
			onClose: action("Dropdown closed"),
			theme: select("theme", ["dark", "light"], "dark")
		}
	}))
	.add("Multi-select", withNotes({ text: "Notes on multi select" })(() => ({
		template: `
		<ibm-dropdown
			type="multi"
			placeholder="Multi-select"
			[disabled]="disabled"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
		</ibm-dropdown>
	`,
		props: {
			disabled: boolean("disabled", false),
			items: object("items", [
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			]),
			selected: action("Selected fired for multi-select dropdown"),
			onClose: action("Multi-select dropdown closed")
		}
	})))
	.add("With ngModel", () => ({
		template: `
		<ibm-dropdown
			placeholder="Select"
			[disabled]="disabled"
			[(ngModel)]="model"
			value="content">
			<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
		</ibm-dropdown>
		<span>{{model | json}}</span>
		`,
		props: {
			disabled: boolean("disabled", false),
			items: [
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			],
			model: null
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown skeleton="true"></ibm-dropdown>
			&nbsp;
			<ibm-dropdown skeleton="true" inline="true"></ibm-dropdown>
		</div>
		`
	}));
