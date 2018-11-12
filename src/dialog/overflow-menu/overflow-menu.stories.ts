import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number } from "@storybook/addon-knobs/angular";

import { DialogModule } from "../../";

let options;

cost createOptions = (count: number): Array<string> => {
	if (options && count === options.length) {
		return options;
	}
	options = Array(count).fill(0).map((x, i) => "Option " + (i+1));
	return options;
};

storiesOf("Overflow Menu", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-overflow-menu>
				<ibm-overflow-menu-option (selected)="selected($event)" (click)="click($event)">
					An example option that is really long to show what should be done to handle long text
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option (selected)="selected($event)">Option 2</ibm-overflow-menu-option>
				<li class="bx--overflow-menu-options__option">
					<button class="bx--overflow-menu-options__btn">A fully custom option</button>
				</li>
				<ibm-overflow-menu-option (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
				<ibm-overflow-menu-option disabled="true" (selected)="selected($event)">Disabled</ibm-overflow-menu-option>
				<ibm-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</ibm-overflow-menu-option>
			</ibm-overflow-menu>

			<span>Flipped OverflowMenu</span>
			<ibm-overflow-menu flip="true" style="display: inline-block;">
				<ibm-overflow-menu-option>
					An example option that is really long to show what should be done to handle long text
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
				<li class="bx--overflow-menu-options__option">
					<button class="bx--overflow-menu-options__btn">A fully custom option</button>
				</li>
				<ibm-overflow-menu-option>Option 4</ibm-overflow-menu-option>
				<ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
				<ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
			</ibm-overflow-menu>
			<ibm-dialog-placeholder></ibm-dialog-placeholder>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected")
		}
	}))
	.add("Dynamic", () => ({
		template: `
			<span>Dynamic OverflowMenu, using the optionCount knob to change the number of menu options</span>
			<ibm-overflow-menu>
				<ibm-overflow-menu-option *ngFor="let option of options(optionCount)">
					{{option}}
				</ibm-overflow-menu-option>
			</ibm-overflow-menu>
		`,
		props: {
			optionCount: number("optionCount", 10),
			options: createOptions
		}
	}));
