import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs/angular";

import { AccordionModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Accordion", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				AccordionModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Accordion%22&#13;
			%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22accordion%22%2C%22align%22%3A%22&#13;
			end%22%2C%22size%22%3A%22md%22%2C%22items%22%3A%5B%7B%22type%22%3A%22accordion-item%22&#13;
			%2C%22title%22%3A%22Accordion%20item%22%2C%22items%22%3A%5B%5D%2C%22id%22%3A%223%22%2C&#13;
			%22codeContext%22%3A%7B%22name%22%3A%22accordion-item-3%22%7D%7D%5D%2C%22id%22%3A%222%&#13;
			22%2C%22codeContext%22%3A%7B%22name%22%3A%22accordion-2%22%7D%7D%5D%2C%22id%22%3A1%7D&#13;
			%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<ibm-accordion [align]="align" [size]="size">
				<ibm-accordion-item title="Section 1 title" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
				<ibm-accordion-item title="Section 2 title" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
				<ibm-accordion-item title="Section 3 title" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
				<ibm-accordion-item title="Section 4 title" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
			</ibm-accordion>
		`,
		props: {
			items: [
				{
					content: "one"
				},
				{
					content: "two"
				},
				{
					content: "three"
				},
				{
					content: "four"
				}
			],
			selected: action("item expanded"),
			align: select("Align", ["start", "end"], "end"),
			size: select("Size", ["sm", "md", "lg"], "md")
		}
	}))
	.add("With disabled item", () => ({
		template: `
			<ibm-accordion>
				<ibm-accordion-item title="Enabled"></ibm-accordion-item>
				<ibm-accordion-item title="Disabled" disabled="true"></ibm-accordion-item>
			</ibm-accordion>
		`
	}))
	.add("With title template", () => ({
		template: `
			<div style="width: 500px">
				<ibm-accordion>
					<ibm-accordion-item [title]="title" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
					<ibm-accordion-item [title]="titleWithContext" [context]="{ index: 2 }" (selected)="selected($event)">Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>
				</ibm-accordion>
			</div>

			<ng-template #title>
				<p class="bx--accordion__title">Section 1 title</p>
			</ng-template>

			<ng-template #titleWithContext let-index="index">
				<p class="bx--accordion__title">Section {{ index }} title</p>
			</ng-template>
		`,
		props: {
			selected: action("item expanded")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<div style="width: 500px">
				<ibm-accordion skeleton="true">
					<ibm-accordion-item expanded="true"></ibm-accordion-item>
					<ibm-accordion-item></ibm-accordion-item>
					<ibm-accordion-item></ibm-accordion-item>
					<ibm-accordion-item></ibm-accordion-item>
				</ibm-accordion>
			</div>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_accordion.accordion.html"></ibm-documentation>
		`
	}));
