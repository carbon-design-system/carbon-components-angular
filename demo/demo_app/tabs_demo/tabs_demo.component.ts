import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../../src/glyphicon/glyphicon.module";
// import { IconService } from "./../../../src/glyphicon/glyphicon.module";

@Component({
	selector: "tabs-demo",
	templateUrl: "./tabs_demo.component.html",
	// styleUrls: ["./core-demo.component.css"]
})
export class TabsDemo {
	constructor () {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}

	title = "Tabs Component Demo";

	sampleTabs = [
		{ heading: "Tab 10", content: "tab 10" },
		{ heading: "Tab 11", content: "tab 11", active: true },
		{ heading: "Disabled Tab", content: "Disabled tab content. This should not be visible", disabled: true }
	]

	sampleTabs2 = [];

	ngOnInit() {
		setTimeout(() => {
			this.sampleTabs2 = [
				{ heading: "tab10a", content: "tab 10a" },
				{ heading: "tab11a", content: "tab 11a", active: true }
			];
		}, 2000);
	}

	test() {
		alert("You just clicked me");
	}
}
