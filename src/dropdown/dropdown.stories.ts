import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, object, text } from "@storybook/addon-knobs/angular";

import { DropdownModule, DocumentationModule } from "../";
import { of } from "rxjs";
import { PlaceholderModule } from "../placeholder/placeholder.module";

storiesOf("Dropdown", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DropdownModule,
				PlaceholderModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[theme]="theme"
				placeholder="Select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
		<ibm-placeholder></ibm-placeholder>
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
	.add("Multi-select", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				type="multi"
				placeholder="Multi-select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
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
	}))
	.add("With ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				placeholder="Select"
				[disabled]="disabled"
				[(ngModel)]="model"
				value="content">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
			<span>{{model | json}}</span>
		</div>
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
	.add("With Observable items", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[theme]="theme"
				placeholder="Select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
	`,
		props: {
			disabled: boolean("disabled", false),
			items: of([
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
	.add("Skeleton", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown skeleton="true">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
			&nbsp;
			<ibm-dropdown skeleton="true" inline="true">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
		`,
		props: {
			items: [
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			]
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Dropdown.html"></ibm-documentation>
		`
	}));
