import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	select,
	boolean,
	text
} from "@storybook/addon-knobs/angular";

import { ButtonModule } from "../button";
import { LinkModule } from "../link";
import { ToggletipModule } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Toggletip", module).addDecorator(
	moduleMetadata({
		imports: [ToggletipModule, ButtonModule, LinkModule, DocumentationModule]
	}))
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div class="container">
				<span ibmToggletipLabel>Toggletip label</span>
				<ibm-toggletip
					[isOpen]="isOpen"
					[align]="align"
					(isOpenChange)="isOpenChange($event)"
					(onClose)="onClose($event)"
					(onOpen)="onOpen($event)">
					<button ibmToggletipButton>
						<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
							<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
						</svg>
					</button>
					<div ibmToggletipContent>
						<p>
							Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
						</p>
						<div ibmToggletipAction>
							<a href="#" ibmLink>Link action</a>
							<button ibmButton size="sm">Some button</button>
						</div>
					</div>
				</ibm-toggletip>
			</div>
		`,
		styles: [`
			.container {
				width: 100%;
				height: 300px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.tooltip-trigger {
				box-sizing: border-box;
				margin: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2rem;
				height: 2rem;
				background: white;
				border: 1px solid var(--cds-border-subtle);
				cursor: pointer;
			}
			svg { fill: var(--cds-background-inverse); }
		`],
		props: {
			isOpen: boolean("Open", false),
			align: select("Align", [
				"top",
				"bottom",
				"left",
				"right"
			], "bottom"),
			isOpenChange: action("isOpenChange"),
			onOpen: action("onOpen"),
			onClose: action("onClose")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_list.list.html"></ibm-documentation>
		`
	}));
