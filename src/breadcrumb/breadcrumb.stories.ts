import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs/angular";

import { BreadcrumbModule, DialogModule, DocumentationModule } from "../";
import { BreadcrumbItem } from "../breadcrumb/breadcrumb-item.interface";

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

storiesOf("Breadcrumb", module)
.addDecorator(
	moduleMetadata({
		imports: [
			BreadcrumbModule,
			DialogModule,
			DocumentationModule
		]
	})
)
.addDecorator(withKnobs)
.add("Basic", () => ({
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
		<ibm-breadcrumb-item href="#4">
			Breadcrumb 4
		</ibm-breadcrumb-item>
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true)
	}
}))
.add("Model", () => ({
	template: `
	<ibm-breadcrumb
		[noTrailingSlash]="noTrailingSlash"
		[threshold]="threshold"
		[items]="createBreadcrumbItems(itemCount, content)">
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true),
		itemCount: number("itemCount", 10),
		threshold: number("threshold", 4),
		content: text("Content for the items", "Breadcrumb"),
		createBreadcrumbItems
	}
}))
.add("Model with templates", () => ({
	template: `
	<ng-template #breadcrumbTemplate let-item>
		{{ templateContent }}{{ item.content }}
	</ng-template>
	<ibm-breadcrumb
		[noTrailingSlash]="noTrailingSlash"
		[threshold]="threshold"
		[items]="withTemplate(breadcrumbTemplate, createBreadcrumbItems(itemCount, content))">
	</ibm-breadcrumb>
	`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true),
		itemCount: number("itemCount", 10),
		threshold: number("threshold", 4),
		templateContent: text("Content for the template", "Hello "),
		content: text("Content for the items", "breadcrumb"),
		createBreadcrumbItems,
		withTemplate
	}
}))
.add("Skeleton", () => ({
	template: `
	<ibm-breadcrumb skeleton="true" [noTrailingSlash]="noTrailingSlash">
		<ibm-breadcrumb-item></ibm-breadcrumb-item>
		<ibm-breadcrumb-item></ibm-breadcrumb-item>
		<ibm-breadcrumb-item></ibm-breadcrumb-item>
		<ibm-breadcrumb-item></ibm-breadcrumb-item>
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true)
	}
}))
.add("Documentation", () => ({
	template: `
		<ibm-documentation src="documentation/components/Breadcrumb.html"></ibm-documentation>
	`
}));
