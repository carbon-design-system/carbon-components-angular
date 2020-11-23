import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/angular";

import { InlineLoadingModule, ButtonModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { InlineLoadingState } from "./inline-loading.component";
import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-inline-loading",
	template: `
		<ibm-inline-loading
			[state]="state"
			[loadingText]="loadingText"
			[successText]="successText"
			[errorText]="errorText"
			(onSuccess)="onSuccess($event)">
		</ibm-inline-loading>
		<button ibmButton (click)="toggleState()">Toggle state</button>
		<p>State: {{ state }}</p>
	`
})
class InlineLoadingStory implements OnInit {
	@Input() loadingText = "";
	@Input() successText = "";
	@Input() errorText = "";

	state = InlineLoadingState.Active;

	toggleState() {
		switch (this.state) {
			case InlineLoadingState.Inactive: this.state = InlineLoadingState.Active; break;
			case InlineLoadingState.Active: this.state = InlineLoadingState.Finished; break;
			case InlineLoadingState.Finished: this.state = InlineLoadingState.Error; break;
			case InlineLoadingState.Error: this.state = InlineLoadingState.Inactive; break;
		}
	}
}

storiesOf("Components|Inline Loading", module)
	.addDecorator(
		moduleMetadata({
			declarations: [InlineLoadingStory],
			imports: [InlineLoadingModule, ButtonModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-inline-loading
				#loading
				(onSuccess)="onSuccess()"
				[loadingText]="loadingText"
				[successText]="successText"
				[errorText]="errorText"></app-inline-loading>
		`,
		props: {
			onSuccess: action("onSuccess"),
			loadingText: text("The loading text", "Loading data..."),
			successText: text("The success text", "Data loaded."),
			errorText: text("The error text", "Data not found.")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/InlineLoading.html"></ibm-documentation>
		`
	}));
