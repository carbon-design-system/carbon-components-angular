/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import {
	BreadcrumbModule,
	Breadcrumb,
	BreadcrumbItemComponent,
	BreadcrumbItem
} from "./";

let breadcrumbItems;

const createBreadcrumbItems = (count: number, content = "Breadcrumb"): Array<BreadcrumbItem> => {
	if (breadcrumbItems && count === breadcrumbItems.length) {
		return breadcrumbItems;
	}
	breadcrumbItems = Array(count).fill(0).map((x, i) => ({
		content: `${content} ${i + 1}`,
		href: "#" + (i + 1)
	}));
	return breadcrumbItems;
};

const withTemplate = (templateRef, items) => items.map(item => Object.assign(item, { template: templateRef }));

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
		},
		skeleton: {
			type: "boolean",
			defaultValue: false,
			control: false
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

const CurrentPageTemplate: Story<Breadcrumb> = (args) => ({
	props: args,
	template: `
		<ibm-breadcrumb>
			<ibm-breadcrumb-item href="#1">
				Breadcrumb 1
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item href="#2">
				Breadcrumb 2
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item current="true" href="#3">
				Breadcrumb 3
			</ibm-breadcrumb-item>
		</ibm-breadcrumb>
	`
});
export const CurrentPage = CurrentPageTemplate.bind({});
CurrentPage.parameters = {
	controls: {
		disable: true
	}
};

const ModelTemplate: Story<Breadcrumb> = (args) => ({
	props: {
		...args,
		createBreadcrumbItems
	},
	template: `
		<ibm-breadcrumb
			[noTrailingSlash]="noTrailingSlash"
			[threshold]="threshold"
			[items]="createBreadcrumbItems(itemCount, content)">
		</ibm-breadcrumb>
	`
});
export const Model = ModelTemplate.bind({});
Model.args = {
	itemCount: 10,
	threshold: 4,
	templateContent: "Hello",
	content: "breadcrumb"
};

const ModelWTemplate: Story<Breadcrumb> = (args) => ({
	props: {
		...args,
		createBreadcrumbItems,
		withTemplate
	},
	template: `
		<ng-template #breadcrumbTemplate let-item>
			{{ templateContent }}{{ item.content }}
		</ng-template>
		<ibm-breadcrumb
			[noTrailingSlash]="noTrailingSlash"
			[threshold]="threshold"
			[items]="withTemplate(breadcrumbTemplate, createBreadcrumbItems(itemCount, content))">
		</ibm-breadcrumb>
	`
});
export const ModelWithTemplate = ModelWTemplate.bind({});
ModelWithTemplate.args = {
	itemCount: 10,
	threshold: 4,
	templateContent: "Hello",
	content: "breadcrumb"
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
Skeleton.parameters = {
	controls: {
		disable: true
	}
};

