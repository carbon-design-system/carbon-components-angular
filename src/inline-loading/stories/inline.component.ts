import { Component, Input } from "@angular/core";
import { InlineLoadingState } from "../";

@Component({
	selector: "app-inline-loading",
	template: `
		<cds-inline-loading
			[state]="state"
			[loadingText]="loadingText"
			[successText]="successText"
			[errorText]="errorText"
			(onSuccess)="onSuccess($event)">
		</cds-inline-loading>
		<button cdsButton (click)="toggleState()">Toggle state</button>
		<p>State: {{ state }}</p>
	`
})
export class InlineLoadingStory {
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
