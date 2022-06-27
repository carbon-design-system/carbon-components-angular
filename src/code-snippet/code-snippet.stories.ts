/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { CodeSnippetModule, CodeSnippet } from "./";

export default {
	title: "Components/Code Snippet",
	decorators: [
		moduleMetadata({
			imports: [CodeSnippetModule, DocumentationModule]
		})
	],
	argTypes: {
		code: {
			control: false
		}
	}
} as Meta;

const Template: Story<CodeSnippet> = (args) => ({
	props: args,
	template: `
		<ibm-code-snippet display="single">{{code}}</ibm-code-snippet>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	code: `import { UIShellModule } from 'carbon-components-angular'; // Single line of code`
};

const InlineTemplate: Story<CodeSnippet> = (args) => ({
	props: args,
	template: `
		Here is some <ibm-code-snippet display="inline" [theme]="theme">{{code}}</ibm-code-snippet> for you.
	`
});
export const Inline = InlineTemplate.bind({});
Inline.args = {
	code: "<inline code>"
};

const MultiTemplate: Story<CodeSnippet> = (args) => ({
	props: args,
	template: `
		<ibm-code-snippet display="multi">{{code}}</ibm-code-snippet>
	`
});
export const Multi = MultiTemplate.bind({});
Multi.args = {
	code: `{
		"name": "carbon-components-angular",
		"version": "0.0.0",
		"description": "Next generation components",
		"main": "index.js",
		"scripts": {
			"build": "bash scripts/build.sh",
			"storybook": "start-storybook -s .storybook/public -p 6006",
			"docs:build": "typedoc",
			"lint": "tslint 'src/**/*.ts'",
			"lint:fix": "tslint --fix 'src/**/*.ts'",
			"test": "ng test --no-watch",
			"test:watch": "ng test --watch",
			"build-storybook": "build-storybook -c .storybook -s .storybook/public -o dist/docs/storybook",
			"semantic-release": "semantic-release",
			"commit": "git-cz",
			"ng": "ng",
			"ng:build": "node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build"
		},
		"repository": {
			"type": "git",
			"url": "git@github.com:IBM/carbon-components-angular.git"
		},
		"license": "Apache-2.0",
		"author": "IBM",
		"peerDependencies": {
			"@angular/common": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0.0",
			"@angular/core": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0",
			"@angular/forms": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0",
			"rxjs": "^6.0.0",
			"zone.js": "^0.8.26 || ^0.9.0 || ^0.10.0",
			"@carbon/styles": "^1.2.0"
		}
	}`
};

const SkeletonTemplate: Story<CodeSnippet> = (args) => ({
	props: args,
	template: `
		<ibm-code-snippet display="single" skeleton="true"></ibm-code-snippet>
		<br>
		<ibm-code-snippet display="multi" skeleton="true"></ibm-code-snippet>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_code_snippet.codesnippet.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
