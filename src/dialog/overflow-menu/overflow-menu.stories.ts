import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	number,
	boolean,
	object
} from "@storybook/addon-knobs";

import { DialogModule } from "../../dialog";
import { PlaceholderModule } from "../../placeholder";
import { DocumentationModule } from "./../../documentation-component/documentation.module";
import { CheckboxModule } from "../../checkbox";
import { ViewEncapsulation } from "@angular/core";
import { IconModule } from "../../icon/icon.module";

let options;

function createOptions(count: number): Array<string> {
	if (options && count === options.length) {
		return options;
	}
	options = Array(count).fill(0).map((x, i) => "Option " + (i + 1));
	return options;
}

storiesOf("Components|Overflow Menu", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule,
				PlaceholderModule,
				DocumentationModule,
				CheckboxModule,
				IconModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
			%3A%22Overflow%20menu%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
			flipped%22%3Afalse%2C%22placement%22%3A%22bottom%22%2C%22type%22%3A%22&#13;
			overflow-menu%22%2C%22items%22%3A%5B%7B%22type%22%3A%22overflow-menu-item%22&#13;
			%2C%22itemText%22%3A%22Option%201%22%2C%22disabled%22%3Afalse%2C%22isDelete%22&#13;
			%3Afalse%2C%22hasDivider%22%3Afalse%2C%22id%22%3A%223%22%2C%22codeContext%2&#13;
			2%3A%7B%22name%22%3A%22overflow-menu-item-3%22%7D%7D%2C%7B%22type%22%3A%22&#13;
			overflow-menu-item%22%2C%22itemText%22%3A%22Option%202%22%2C%22disabled%22&#13;
			%3Afalse%2C%22isDelete%22%3Afalse%2C%22hasDivider%22%3Afalse%2C%22id%22&#13;
			%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22overflow-menu-item-4&#13;
			%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22&#13;
			%3A%22overflow-menu-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<div>
				<h1 style="margin-bottom: 1rem">Bottom placement</h1>
				<ibm-overflow-menu
					[flip]="flip"
					[offset]="offset">
					<ibm-overflow-menu-option (selected)="selected($event)" (click)="click($event)">
						An example option that is really long to show what should be done to handle long text
					</ibm-overflow-menu-option>
					<ibm-overflow-menu-option (selected)="selected($event)" innerClass="a-custom-class">Option 2</ibm-overflow-menu-option>
					<li class="bx--overflow-menu-options__option">
						<button class="bx--overflow-menu-options__btn">A fully custom option</button>
					</li>
					<ibm-overflow-menu-option (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
					<ibm-overflow-menu-option disabled="true" (selected)="selected($event)" [divider]="true">Disabled</ibm-overflow-menu-option>
					<ibm-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</ibm-overflow-menu-option>
				</ibm-overflow-menu>
				<ibm-placeholder></ibm-placeholder>
			</div>
			<div style="margin-top: 8rem">
				<h1 style="margin-bottom: 1rem">Top placement</h1>
				<ibm-overflow-menu
					[flip]="flip"
					placement="top"
					[offset]="offset">
					<ibm-overflow-menu-option (selected)="selected($event)" (click)="click($event)">
						An example option that is really long to show what should be done to handle long text
					</ibm-overflow-menu-option>
					<ibm-overflow-menu-option (selected)="selected($event)" innerClass="a-custom-class">Option 2</ibm-overflow-menu-option>
					<li class="bx--overflow-menu-options__option">
						<button class="bx--overflow-menu-options__btn">A fully custom option</button>
					</li>
					<ibm-overflow-menu-option (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
					<ibm-overflow-menu-option disabled="true" (selected)="selected($event)" [divider]="true">Disabled</ibm-overflow-menu-option>
					<ibm-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</ibm-overflow-menu-option>
				</ibm-overflow-menu>
				<ibm-placeholder></ibm-placeholder>
			</div>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected"),
			flip: boolean("Flipped", false),
			offset: object("Horizontal and vertical offset", { x: 0, y: 0 })
		},
		styles: [`
			::ng-deep .a-custom-class {
				color: #0f62fe;
			}
		`]
	}))
	.add("With links", () => ({
		template: `
			<div>
				<h1 style="margin-bottom: 1rem">Bottom placement</h1>
				<ibm-overflow-menu
					[flip]="flip"
					[offset]="offset">
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)" (click)="click($event)">
						An example option that is really long to show what should be done to handle long text
					</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" target="_blank" (selected)="selected($event)">Option 2</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 3</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" disabled="true" (selected)="selected($event)">Disabled</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" type="danger" (selected)="selected($event)">
						Danger option
					</ibm-overflow-menu-option>
				</ibm-overflow-menu>
			</div>
			<div style="margin-top: 8rem">
				<h1 style="margin-bottom: 1rem">Top placement</h1>
				<ibm-overflow-menu
					[flip]="flip"
					placement="top"
					[offset]="offset">
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)" (click)="click($event)">
						An example option that is really long to show what should be done to handle long text
					</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 2</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 3</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 4</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" disabled="true" (selected)="selected($event)">Disabled</ibm-overflow-menu-option>
					<ibm-overflow-menu-option href="https://www.ibm.com" type="danger" (selected)="selected($event)">
						Danger option
					</ibm-overflow-menu-option>
				</ibm-overflow-menu>
			</div>
			<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected"),
			flip: boolean("Flipped", false),
			offset: object("Horizontal and vertical offset", { x: 0, y: 0 })
		}
	}))
	.add("With custom trigger", () => ({
		template: `
				<span>Overflow menu with custom trigger icon</span>
				<ibm-overflow-menu
					[flip]="flip"
					[customTrigger]="customTrigger"
					placement="bottom"
					[offset]="offset">
					<ibm-overflow-menu-option (selected)="selected($event)" (click)="click($event)">Option 1</ibm-overflow-menu-option>
					<ibm-overflow-menu-option (selected)="selected($event)">Option 2</ibm-overflow-menu-option>
					<ibm-overflow-menu-option disabled="true" (selected)="selected($event)">Disabled</ibm-overflow-menu-option>
					<ibm-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</ibm-overflow-menu-option>
				</ibm-overflow-menu>
				<ibm-placeholder></ibm-placeholder>
				<ng-template #customTrigger><svg ibmIcon="document" size="16"></svg></ng-template>
		`,
		props: {
			click: () => console.log("click"),
			selected: () => console.log("selected"),
			flip: boolean("Flipped", false),
			offset: object("Horizontal and vertical offset", { x: 0, y: 0 })
		}
	}))
	.add("Dynamic", () => ({
		template: `
			<span>
				Dynamic <code style="font-family: monospace;">OverflowMenu</code>,
				using the <code style="font-family: monospace;">optionCount</code> knob <br/>
				to change the number of menu options
			</span>
			<ibm-overflow-menu [offset]="offset">
				<ibm-overflow-menu-option *ngFor="let option of options(optionCount)">
					{{option}}
				</ibm-overflow-menu-option>
			</ibm-overflow-menu>
		`,
		props: {
			optionCount: number("optionCount", 10),
			options: createOptions,
			offset: object("Horizontal and vertical offset", { x: 0, y: 0 })
		}
	}))
	.add("Programmatically", () => ({
		template: `
			<ibm-overflow-menu [flip]="flip" [open]="open">
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
			open: boolean("Open", false)
		}
	}))
	.add("With custom template", () => ({
		template: `
			<p style="padding-bottom: 1rem;">
				When writing a custom template to be inserted into an overflow menu
				it becomes your responsibility to make sure tab order/keyboard nav is implemented correctly
			</p>
			<button
				style="border: none; width: 3rem; height: 3rem; background-color: lightgrey;
				display: flex; align-items: center; justify-content: center;"
				[ibmOverflowMenu]="templateRef"
				[customPane]="true"
				placement="bottom"
				[offset]="{ x: -8, y: 0 }"
			><svg ibmIcon="settings" size="16"></svg></button>
			<ng-template #templateRef>
				<div style="padding: 0 1rem;">
					<div style="padding-top: 0.5rem; color: grey;">Columns</div>
					<div><ibm-checkbox [checked]="true">Status</ibm-checkbox></div>
					<div><ibm-checkbox>Last modified</ibm-checkbox></div>
				</div>
			</ng-template>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_dialog_overflow_menu.overflowmenu.html"></ibm-documentation>
		`
	}));
