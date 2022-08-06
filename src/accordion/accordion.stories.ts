/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { AccordionModule, Accordion, AccordionItem } from "./";

export default {
	title: "Components/Accordion",
	decorators: [
		moduleMetadata({
			imports: [AccordionModule, DocumentationModule]
		})
	],
	component: Accordion,
	subcomponents: { AccordionItem }
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<ibm-accordion [size]="size" [align]="align">
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
		</ibm-accordion>
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

const WithTitleTemplate: Story<Accordion> = (args) => ({
	props: args,
	template: `
		<div style="width: 500px">
			<ibm-accordion>
				<ibm-accordion-item [title]="title" (selected)="selected($event)">
					Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ibm-accordion-item>
				<ibm-accordion-item [title]="titleWithContext" [context]="{ index: 2 }" (selected)="selected($event)">
					Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ibm-accordion-item>
			</ibm-accordion>
		</div>

		<ng-template #title>
			<p class="cds--accordion__title">Section 1 title</p>
		</ng-template>
		<ng-template #titleWithContext let-index="index">
			<p class="cds--accordion__title">Section {{ index }} title</p>
		</ng-template>
	`
});
export const WithTitle = WithTitleTemplate.bind({});

const WithSkeleton: Story<Accordion> = (args) => ({
	props: args,
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
});
export const Skeleton = WithSkeleton.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_accordion.accordion.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});

