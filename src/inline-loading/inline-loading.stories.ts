import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/angular";

import { InlineLoadingModule, ButtonModule } from "../";

storiesOf("Inline Loading", module)
	.addDecorator(
		moduleMetadata({
			imports: [InlineLoadingModule, ButtonModule]
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
			successText: text("The sucess text", "Data loaded.")
		}
	}));
