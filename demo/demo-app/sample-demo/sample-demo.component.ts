import { Component } from "@angular/core";

@Component({
	selector: "app-sample-demo",
	template: `
		<h1>Sample</h1>

		<h2>Default sample</h2>
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
