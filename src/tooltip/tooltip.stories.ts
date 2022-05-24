import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	select,
	boolean,
	text
} from "@storybook/addon-knobs/angular";

import { TooltipModule } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Tooltip", module).addDecorator(
	moduleMetadata({
		imports: [TooltipModule, DocumentationModule]
	}))
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div class="container">
				<ibm-tooltip
					[isOpen]="isOpen"
					[caret]="caret"
					[align]="align"
					(onOpen)="onOpen($event)"
					(onClose)="onClose($event)"
					(isOpenChange)="isOpenChange($event)"
					[description]="description">
					<button type="button" class="tooltip-trigger">
						<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
							<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
						</svg>
					</button>
				</ibm-tooltip>
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
			description: text("Description", "Occassionally, services are updated in a specified time window to ensure no down time for customers."),
			isOpen: boolean("Open", false),
			caret: boolean("Caret", true),
			align: select("Align", [
				"top",
				"top-left",
				"top-right",
				"bottom",
				"bottom-left",
				"bottom-right",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top"
			], "bottom"),
			isOpenChange: action("isOpenChange"),
			onOpen: action("onOpen"),
			onClose: action("onClose")
		}
	}))
	.add("Ellipsis", () => ({
		template: `
			<div class="container">
				<ibm-tooltip
					[isOpen]="isOpen"
					[caret]="caret"
					[align]="align"
					description="Tooltip for ellipsis because I can and I am really really long">
					<span class="overflowText">
						Tooltip for ellipsis because I can and I am really really long
					</span>
				</ibm-tooltip>
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

			.overflowText {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100px;
				display: inline-block;
			}
		`],
		props: {
			isOpen: boolean("Open", false),
			caret: boolean("Caret", true),
			align: select("Align", [
				"top",
				"top-left",
				"top-right",
				"bottom",
				"bottom-left",
				"bottom-right",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top"
			], "bottom")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_list.list.html"></ibm-documentation>
		`
	}));
