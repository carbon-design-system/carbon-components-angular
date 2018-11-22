import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { CodeSnippetModule } from "..";


const code = `import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { CodeSnippetModule } from "..";

storiesOf("CodeSnippet", module).addDecorator(
	moduleMetadata({
		imports: [CodeSnippetModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: \`<ibm-code-snippet>code</ibm-code-snippet>\`,
		props: { // there's more
			// disabled: boolean("disabled", false)
		}
	}));`;

const lessCode = `import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { CodeSnippetModule } from "..";

storiesOf("Code Snippet", module).addDecorator(
	moduleMetadata({
		imports: [CodeSnippetModule]
	})
) // that's it, no more after this line
`;

const inlineCode = "<inline code>";

storiesOf("CodeSnippet", module).addDecorator(
	moduleMetadata({
		imports: [CodeSnippetModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `<ibm-code-snippet display="single">{{code}}</ibm-code-snippet>`,
		props: {
			code
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
		template: `Here is some <ibm-code-snippet display="inline">{{inlineCode}}</ibm-code-snippet> for you.`,
		props: {
			inlineCode
		}
	}))
	.add("Inline Light", () => ({
		template: `Here is some <ibm-code-snippet display="inline" theme="light">{{inlineCode}}</ibm-code-snippet> for you.`,
		props: {
			inlineCode
		}
	}));
