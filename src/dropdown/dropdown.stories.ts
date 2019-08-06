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
				[label]="label"
				[helperText]="helperText"
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
			label: text("Label", "Dropdown label"),
			helperText: text("Helper text", "Optional helper text."),
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
				[label]="label"
				[helperText]="helperText"
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
			label: text("Label", "Dropdown label"),
			helperText: text("Helper text", "Optional helper text."),
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
	.add("Multi-select with ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				type="multi"
				[label]="label"
				[helperText]="helperText"
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
			label: text("Label", "Dropdown label"),
			helperText: text("Helper text", "Optional helper text."),
			items: [
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			],
			model: null
		}
	}))
	.add("With ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
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
			label: text("Label", "Dropdown label"),
			helperText: text("Helper text", "Optional helper text."),
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
				[label]="label"
				[helperText]="helperText"
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
			label: text("Label", "Dropdown label"),
			helperText: text("Helper text", "Optional helper text."),
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
	.add("With Template", () => ({
		template: `
		<div style="width: 300px;">
			<ibm-dropdown
				[theme]="theme"
				placeholder="Select"
				[displayValue]="dropdownRenderer"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items" [listTpl]="dropdownRenderer"></ibm-dropdown-list>
			</ibm-dropdown>
			<ng-template #dropdownRenderer let-item="item">
				<div *ngIf="item && item.content" style="font-size: 14px;">
					<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
							width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="will-change: transform;">
						<path d="M9.3 3.7l3.8 3.8H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z"></path>
					</svg>
					&nbsp;{{item.content}}
				</div>
			</ng-template>
		</div>
	`,
		props: {
			disabled: boolean("disabled", false),
			items: object("items", [
				{ content: "one", selected: true },
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
