/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { AccordionModule, Accordion, AccordionItem } from "./";

export default {
	title: "Components/Accordion",
	decorators: [
		moduleMetadata({
			imports: [AccordionModule]
		})
	],
	component: Accordion,
	subcomponents: { AccordionItem }
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<ibm-accordion [size]="size" [align]="align" [skeleton]="skeleton">
			<ibm-accordion-item title="Section 1 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</ibm-accordion-item>
			<ibm-accordion-item title="Section 2 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</ibm-accordion-item>
			<ibm-accordion-item title="Section 3 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</ibm-accordion-item>
			<ibm-accordion-item [title]="title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</ibm-accordion-item>
			<ibm-accordion-item [title]="titleWithContext" [context]="{ index: 5 }" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</ibm-accordion-item>
		</ibm-accordion>

		<ng-template #title>
			<p class="cds--accordion__title">Template title</p>
		</ng-template>
		<ng-template #titleWithContext let-index="index">
			<p class="cds--accordion__title">Template context title {{ index }}</p>
		</ng-template>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	align: {
		options: ["start", "end"],
		control: { type: "radio" },
		defaultValue: "end"
	},
	size: {
		options: ["sm", "md", "lg"],
		control: { type: "radio" },
		defaultValue: "md"
	},
	selected: { action: "Selected" }
};
