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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22id%22%3A%22InlineLoadingFargment%22%2C%22title%22%3A%22New%20fragment%22%2C%22data%22%3A%7B%22items%22%3A[%7B%22type%22%3A%22inline-loading%22%2C%22status%22%3A%22active%22%2C%22activeText%22%3A%22Loading...%22%2C%22successText%22%3A%22Finished.%22%2C%22errorText%22%3A%22Error!%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22inline-loading-2%22%7D%7D]%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A[]%7D"_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
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
			<ibm-documentation src="documentation/classes/src_inline_loading.inlineloading.html"></ibm-documentation>
		`
	}));
