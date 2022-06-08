import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, select, text } from "@storybook/addon-knobs/angular";

import { CodeSnippetModule } from "./";
import { ButtonModule } from "../button";
import { Input, Component } from "@angular/core";
import { DocumentationModule } from "../documentation-component/documentation.module";

const code = `{
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
}`;

const lessCode = `import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { CodeSnippetModule } from "..";

storiesOf("Components|Code Snippet", module).addDecorator(
	moduleMetadata({
		imports: [CodeSnippetModule]
	})
) // that's it, no more after this line
`;

const singleLineOfCode = `import { UIShellModule } from 'carbon-components-angular'; // Single line of code`;

@Component({
	selector: "app-dynamic-code-snippet",
	template: `
		<button ibmButton (click)="openCodeSnippet()">Show Code Snippet</button>
		<ibm-code-snippet *ngIf="shouldShow" display="multi">{{displayedCode}}</ibm-code-snippet>
	`
})
export class DynamicCodeSnippet {
	shouldShow = false;

	@Input() displayedCode = code;

	openCodeSnippet() {
		this.shouldShow = !this.shouldShow;
	}
}

const inlineCode = "<inline code>";

storiesOf("Components|Code Snippet", module).addDecorator(
	moduleMetadata({
		declarations: [DynamicCodeSnippet],
		imports: [CodeSnippetModule, ButtonModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `<ibm-code-snippet display="single">{{singleCode}}</ibm-code-snippet>`,
		props: {
			singleCode: singleLineOfCode
		}
	}))
	.add("Multi", () => ({
		template: `
			<h2>With a lot of code</h2>
			<ibm-code-snippet display="multi">{{code}}</ibm-code-snippet>

			<h2 style="margin-top: 60px">With less code</h2>
			<ibm-code-snippet display="multi">{{lessCode}}</ibm-code-snippet>
		`,
		props: {
			code,
			lessCode
		}
	}))
	.add("Inline", () => ({
		template: `Here is some <ibm-code-snippet display="inline" [theme]="theme">{{inlineCode}}</ibm-code-snippet> for you.`,
		props: {
			inlineCode,
			theme: select("Theme", ["dark", "light"], "dark")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<div style="width: 800px">
				<ibm-code-snippet display="single" skeleton="true"></ibm-code-snippet>
				<br>
				<ibm-code-snippet display="multi" skeleton="true"></ibm-code-snippet>
			</div>
		`
	}))
	.add("Dynamic", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-dynamic-code-snippet [displayedCode]="displayedCode"></app-dynamic-code-snippet>
		`,
		props: {
			displayedCode: text("Displayed code", code)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_code_snippet.codesnippet.html"></ibm-documentation>
		`
	}));
