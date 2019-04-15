import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import { DialogModule } from "../../";
import { PlaceholderModule } from "../../placeholder/placeholder.module";
import { ExperimentalModule } from "../../experimental.module";
import { ExperimentalComponenent } from "../../../.storybook/experimental.component";

let options;

function createOptions(count: number): Array<string> {
	if (options && count === options.length) {
		return options;
	}
	options = Array(count).fill(0).map((x, i) => "Option " + (i + 1));
	return options;
}

storiesOf("Overflow Menu", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
			imports: [
				DialogModule,
				ExperimentalModule,
				PlaceholderModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-experimental-component></app-experimental-component>
			<ibm-overflow-menu [flip]="flip">
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
			<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected"),
			flip: boolean("Flipped", false)
		}
	}))
	.add("With links", () => ({
		template: `
			<app-experimental-component></app-experimental-component>
			<ibm-overflow-menu [flip]="flip" >
				<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)" (click)="click($event)">
					An example option that is really long to show what should be done to handle long text
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 2</ibm-overflow-menu-option>
				<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 3</ibm-overflow-menu-option>
				<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
				<ibm-overflow-menu-option href="https://www.ibm.com" disabled="true" (selected)="selected($event)">Disabled</ibm-overflow-menu-option>
				<ibm-overflow-menu-option href="https://www.ibm.com" type="danger" (selected)="selected($event)">Danger option</ibm-overflow-menu-option>
			</ibm-overflow-menu>
			<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected"),
			flip: boolean("Flipped", false)
		}
	}))
	.add("Dynamic", () => ({
		template: `
			<span>
				Dynamic <code style="font-family: monospace;">OverflowMenu</code>,
				using the <code style="font-family: monospace;">optionCount</code> knob <br/>
				to change the number of menu options
			</span>
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
