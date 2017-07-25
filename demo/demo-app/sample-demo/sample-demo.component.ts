import { Component } from "@angular/core";

@Component({
	selector: "sample-demo",
	template: `
		<h1>Sample demo</h1>

		<h3>Default sample</h3>
		<div>
			<n-sample></n-sample>
		</div>

		<h3>Sample sub component</h3>
		<div>
			<n-sample-sub></n-sample-sub>
		</div>
	`,
})
export class SampleDemo {
	// code to run the demo goes here
}
