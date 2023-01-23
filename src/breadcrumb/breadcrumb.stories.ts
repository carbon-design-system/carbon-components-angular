import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs/angular";

import { BreadcrumbModule, DialogModule } from "../";
import { BreadcrumbItem } from "../breadcrumb/breadcrumb-item.interface";
import { DocumentationModule } from "../documentation-component/documentation.module";

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

storiesOf("Components|Breadcrumb", module)
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
	<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22&#13;
	Breadcrumb%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb%22%2C%22noTrailingSlash%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%201%22%2C%22href%22%3A%22%2F%22&#13;
	%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-3%22&#13;
	%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%202%22&#13;
	%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22&#13;
	%3A%22breadcrumb-item-4%22%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22&#13;
	label%22%3A%22Breadcrumb%203%22%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%225%22&#13;
	%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-5%22%7D%7D%5D%2C%22&#13;
	id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-2%22&#13;
	%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
		Edit on Carbon UI Builder
	</a>
	<br><br>
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
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true)
	}
}))
.add("Current page", () => ({
	template: `
	<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
	%3A%22Breadcrumb%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb%22%2C%22noTrailingSlash%22%3Afalse%2C%22items%22%3A%5B%7B%22&#13;
	type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%201%22%2C%22&#13;
	href%22%3A%22%2F%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22&#13;
	name%22%3A%22breadcrumb-item-3%22%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22&#13;
	%2C%22label%22%3A%22Breadcrumb%202%22%2C%22href%22%3A%22%2F%22%2C%22id%22&#13;
	%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-4%22&#13;
	%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22&#13;
	Breadcrumb%203%22%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%225%22&#13;
	%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-5%22&#13;
	%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22&#13;
	%3A%22breadcrumb-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22&#13;
	allCssClasses%22%3A%5B%5D%7D" target="_blank">
		Edit on Carbon UI Builder
	</a>
	<br><br>
	<ibm-breadcrumb [noTrailingSlash]="noTrailingSlash">
		<ibm-breadcrumb-item href="#1">
			Breadcrumb 1
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item href="#2">
			Breadcrumb 2
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item current="true" href="#3">
			Breadcrumb 3
		</ibm-breadcrumb-item>
	</ibm-breadcrumb>`,
	props: {
		noTrailingSlash: boolean("noTrailingSlash", true)
	}
}))
.add("Model", () => ({
	template: `
	<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
	%3A%22Breadcrumb%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb%22%2C%22noTrailingSlash%22%3Afalse%2C%22items%22%3A%5B%7B%22&#13;
	type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%201%22&#13;
	%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%223%22%2C%22codeContext%22&#13;
	%3A%7B%22name%22%3A%22breadcrumb-item-3%22%7D%7D%2C%7B%22type%22&#13;
	%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%202%22&#13;
	%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%224%22%2C%22codeContext%22&#13;
	%3A%7B%22name%22%3A%22breadcrumb-item-4%22%7D%7D%2C%7B%22type%22%3A%22&#13;
	breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%203%22%2C%22href%22&#13;
	%3A%22%2F%22%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22&#13;
	%3A%22breadcrumb-item-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22&#13;
	codeContext%22%3A%7B%22name%22%3A%22breadcrumb-2%22%7D%7D%5D%2C%22&#13;
	id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
		Edit on Carbon UI Builder
	</a>
	<br><br>
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
	<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
	%3A%22Breadcrumb%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb%22%2C%22noTrailingSlash%22%3Afalse%2C%22items%22%3A%5B%7B%22&#13;
	type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%201%22%2C%22&#13;
	href%22%3A%22%2F%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22&#13;
	%3A%22breadcrumb-item-3%22%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22&#13;
	label%22%3A%22Breadcrumb%202%22%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%224%22&#13;
	%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-4%22%7D%7D%2C%7B%22&#13;
	type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%203%22%2C%22href%22&#13;
	%3A%22%2F%22%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
	breadcrumb-item-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22&#13;
	name%22%3A%22breadcrumb-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
		Edit on Carbon UI Builder
	</a>
	<br><br>
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
	<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22&#13;
	Breadcrumb%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22breadcrumb%22&#13;
	%2C%22noTrailingSlash%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22&#13;
	breadcrumb-item%22%2C%22label%22%3A%22Breadcrumb%201%22%2C%22href%22%3A%22&#13;
	%2F%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
	breadcrumb-item-3%22%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22&#13;
	label%22%3A%22Breadcrumb%202%22%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%224&#13;
	%22%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-4%22&#13;
	%7D%7D%2C%7B%22type%22%3A%22breadcrumb-item%22%2C%22label%22%3A%22&#13;
	Breadcrumb%203%22%2C%22href%22%3A%22%2F%22%2C%22id%22%3A%225%22%2C%22&#13;
	codeContext%22%3A%7B%22name%22%3A%22breadcrumb-item-5%22%7D%7D%5D%2C%22&#13;
	id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22breadcrumb-2%22&#13;
	%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
		Edit on Carbon UI Builder
	</a>
	<br><br>
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
		<ibm-documentation src="documentation/classes/src_breadcrumb.breadcrumb.html"></ibm-documentation>
	`
}));
