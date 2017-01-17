import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tabs-demo",
	templateUrl: "./tabs_demo.component.html",
})
export class TabsDemo {
	public sampleTabs = [
		{ heading: "Tab 10", content: "tab 10" },
		{ heading: "Tab 11", content: "tab 11", active: true },
		{ heading: "Disabled Tab", content: "Disabled tab content. This should not be visible", disabled: true }
	];
	public sampleTabs2 = [];

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
