/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import {
	BreadcrumbModule,
	Breadcrumb,
	BreadcrumbItemComponent
} from "./";

export default {
	title: "Components/Breadcrumb",
	decorators: [
		moduleMetadata({
			imports: [BreadcrumbModule]
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
		<ibm-breadcrumb [skeleton]="true" [noTrailingSlash]="noTrailingSlash">
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
Basic.argsTypes = {
	skeleton: {
		type: "boolean",
		defaultValue: false
	}
};

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

