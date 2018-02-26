import { Component } from "@angular/core";

@Component({
	selector: "app-sample-demo",
	template: `
		<h2 class="p-demo-heading h1">Sample</h2>

		<h3 class="p-demo-section h2">Default sample</h3>
		<div>
			<n-sample></n-sample>
		</div>

		<h4 class="p-demo-variation h3">Sample sub component</h4>
		<div>
			<n-sample-sub></n-sample-sub>
		</div>
	`,
})
export class SampleDemo {
	// code to run the demo goes here
}
