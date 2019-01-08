import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { AccordionModule } from "../";

storiesOf("Accordion", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				AccordionModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-accordion>
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
	}));
