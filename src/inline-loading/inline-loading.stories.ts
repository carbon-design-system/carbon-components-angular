import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/angular";

import { InlineLoadingModule, ButtonModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Inline Loading", module)
	.addDecorator(
		moduleMetadata({
			imports: [InlineLoadingModule, ButtonModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-inline-loading #loading (onSuccess)="onSuccess()" [loadingText]="loadingText" [successText]="successText"></ibm-inline-loading>
			<button ibmButton (click)="loading.success = !loading.success">Toggle state</button>
		`,
		props: {
			onSuccess: action("onSuccess"),
			loadingText: text("The loading text", "Loading data..."),
			successText: text("The success text", "Data loaded.")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/InlineLoading.html"></ibm-documentation>
		`
	}));
