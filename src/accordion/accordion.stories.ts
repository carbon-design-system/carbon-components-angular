/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { AccordionModule, Accordion } from "./";

export default {
	title: "Components/Accordion",
	decorators: [
		moduleMetadata({
			imports: [AccordionModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story<Accordion> = (args) => ({
	props: args,
	template: `
		<cds-accordion [align]="align" [size]="size">
			<cds-accordion-item title="Section 1 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</cds-accordion-item>
			<cds-accordion-item title="Section 2 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</cds-accordion-item>
			<cds-accordion-item title="Section 3 title" (selected)="selected($event)">
				Lorem ipsum dolor sit amet, \
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</cds-accordion-item>
		</cds-accordion>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	align: {
		options: ["start", "end"],
		control: { type: "radio" }
	},
	size: {
		options: ["sm", "md", "lg"],
		control: {type: "radio" }
	},
	selected: { action: "Selected" }
};

const WithTitleTemplate: Story<Accordion> = (args) => ({
	props: args,
	template: `
		<div style="width: 500px">
			<cds-accordion>
				<cds-accordion-item [title]="title" (selected)="selected($event)">
					Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</cds-accordion-item>
				<cds-accordion-item [title]="titleWithContext" [context]="{ index: 2 }" (selected)="selected($event)">
					Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</cds-accordion-item>
			</cds-accordion>
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
WithTitle.parameters = {
	controls: {
		disable: true
	}
};

const WithSkeleton: Story<Accordion> = (args) => ({
	props: args,
	template: `
		<div style="width: 500px">
			<cds-accordion skeleton="true">
				<cds-accordion-item expanded="true"></cds-accordion-item>
				<cds-accordion-item></cds-accordion-item>
				<cds-accordion-item></cds-accordion-item>
				<cds-accordion-item></cds-accordion-item>
			</cds-accordion>
		</div>
	`
});
export const Skeleton = WithSkeleton.bind({});
Skeleton.parameters = {
	controls: {
		disable: true
	}
};
