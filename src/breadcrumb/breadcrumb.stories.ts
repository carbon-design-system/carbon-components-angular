import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number } from "@storybook/addon-knobs/angular";

import { BreadcrumbModule, DialogModule } from "../";
import { BreadcrumbItem } from "../breadcrumb/breadcrumb-item.interface";
import { DocumentationModule } from "./../documentation-component/documentation.module";

let breadcrumbItems;

const createBreadcrumbItems = (count: number): Array<BreadcrumbItem> => {
	if (breadcrumbItems && count === breadcrumbItems.length) {
		return breadcrumbItems;
	}
	breadcrumbItems = Array(count).fill(0).map((x, i) => ({ content: " Breadcrumb " + (i + 1), href: "#" + (i + 1) }));
	return breadcrumbItems;
};

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
		[items]="items(itemCount)">
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true),
		itemCount: number("itemCount", 10),
		threshold: number("threshold", 4),
		items: createBreadcrumbItems
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
