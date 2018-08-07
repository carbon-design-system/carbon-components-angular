import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { TranslateModule } from "@ngx-translate/core";

import { DropdownModule } from "../";

storiesOf("Dropdown", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DropdownModule,
				TranslateModule.forRoot()
			],
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-dropdown placeholder="Select" [disabled]="disabled">
			<ibm-dropdown-list [items]="[
				{content: 'one'},
				{content: 'two'},
				{content: 'three'},
				{content: 'four'}
			]"></ibm-dropdown-list>
		</ibm-dropdown>
	`,
		props: {
			disabled: boolean("disabled", false),
		}
	}))
	.add("Multi-select", withNotes({ text: "Notes on multi select" })(() => ({
		template: `
		<ibm-dropdown  type="multi" placeholder="Multi-select" [disabled]="disabled">
			<ibm-dropdown-list [items]="[
				{content: 'one'},
				{content: 'two'},
				{content: 'three'},
				{content: 'four'}
			]"></ibm-dropdown-list>
		</ibm-dropdown>
	`,
		props: {
			disabled: boolean("disabled", false),
		}
	})));
