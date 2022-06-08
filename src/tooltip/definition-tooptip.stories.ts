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

storiesOf("Components|Tooltip Definition", module).addDecorator(
	moduleMetadata({
		imports: [TooltipModule, DocumentationModule]
	}))
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div class="container">
				<p>Custom domains direct requests for your apps in this Cloud Foundry organization to a
				<ibm-tooltip-definition
					[isOpen]="isOpen"
					[caret]="caret"
					[align]="align"
					(onOpen)="onOpen($event)"
					(onClose)="onClose($event)"
					(isOpenChange)="isOpenChange($event)"
					[description]="description">
					URL
				</ibm-tooltip-definition>
				that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
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
			description: text("Description", "Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet."),
			isOpen: boolean("Open", false),
			caret: boolean("Caret", true),
			align: select("Align", [
				"top",
				"top-left",
				"top-right",
				"bottom",
				"bottom-left",
				"bottom-right"
			], "bottom-left"),
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
