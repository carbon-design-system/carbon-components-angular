import { Component } from "@angular/core";

@Component({
	selector: "app-sample-demo",
	template: `
		<h1 class="p-demo-heading">Sample</h1>

		<h2 class="p-demo-section">Default sample</h2>
		<div>
			<ibm-sample></ibm-sample>
		</div>

		<h3 class="p-demo-variation">Sample sub component</h3>
		<div>
			<ibm-sample-sub></ibm-sample-sub>
		</div>
	`,
})
export class SampleDemo {
	// code to run the demo goes here
}
