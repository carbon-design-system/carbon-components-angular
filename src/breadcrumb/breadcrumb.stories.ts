/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { BreadcrumbModule, Breadcrumb, BreadcrumbItemComponent } from "./";

export default {
	title: "Components/Breadcrumb",
	decorators: [
		moduleMetadata({
			imports: [BreadcrumbModule, DocumentationModule]
		})
	],
	argTypes: {
		noTrailingSlash: {
			type: "boolean",
			defaultValue: true
		}
	},
	component: Breadcrumb,
	subcomponents: { BreadcrumbItemComponent }
} as Meta;

const Template: Story<Breadcrumb> = (args) => ({
	props: args,
	template: `
		<ibm-breadcrumb [noTrailingSlash]="noTrailingSlash">
			<ibm-breadcrumb-item href="#1">
				Breadcrumb 1
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item href="#2">
				Breadcrumb 2
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item href="#3">
				Breadcrumb 3
			</ibm-breadcrumb-item>
		</ibm-breadcrumb>
	`
});
export const Basic = Template.bind({});

const WithSkeleton: Story<Breadcrumb> = (args) => ({
	props: args,
	template: `
		<ibm-breadcrumb skeleton="true" [noTrailingSlash]="noTrailingSlash">
			<ibm-breadcrumb-item></ibm-breadcrumb-item>
			<ibm-breadcrumb-item></ibm-breadcrumb-item>
			<ibm-breadcrumb-item></ibm-breadcrumb-item>
			<ibm-breadcrumb-item></ibm-breadcrumb-item>
		</ibm-breadcrumb>
	`
});
export const Skeleton = WithSkeleton.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
	<ibm-documentation src="documentation/classes/src_button.button.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
