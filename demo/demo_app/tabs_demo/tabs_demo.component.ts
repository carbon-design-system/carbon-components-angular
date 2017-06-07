import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tabs-demo",
	template: `
	<h1>Tabs Demo</h1>

	<h2>Static tabs</h2>
		<cdl-tabs>
			<cdl-tab heading='tab1'>
				tab 1 content
			</cdl-tab>
			<cdl-tab heading='tab2'>
				tab 2 content
			</cdl-tab>
			<cdl-tab heading='tab3'>
				tab 3 content
			</cdl-tab>
			<cdl-tab heading='tab4'>
				tab 4content
			</cdl-tab>
			<cdl-tab heading='tab5'>
				tab 5 content
			</cdl-tab>
			<cdl-tab heading='tab6'>
				tab 6 content
			</cdl-tab>
			<cdl-tab heading='tab7'>
				tab 7 content
			</cdl-tab>
			<cdl-tab heading='tab8'>
				tab 8 content
			</cdl-tab>
			<cdl-tab heading='tab9'>
				tab 9 content
			</cdl-tab>
			<cdl-tab heading='tab10'>
				tab 10 content
			</cdl-tab>
			<cdl-tab heading='tab11'>
				tab 11 content
			</cdl-tab>
			<cdl-tab heading='tab12'>
				tab 12 content
			</cdl-tab>
		</cdl-tabs>

	<h2>Static tabs with tab2 active and the tabs are at the bottom</h2>
	<cdl-tabs tabsPosition='bottom'>
		<cdl-tab heading='tab1'>
			tab 1 content
		</cdl-tab>
		<cdl-tab heading='tab2' active='true'>
			tab 2 content
		</cdl-tab>
		<cdl-tab heading='tab3'>
			tab 3 content
		</cdl-tab>
	</cdl-tabs>

	<h2>Dynamic tabs</h2>
	<cdl-tabs>
		<cdl-tab *ngFor="let tab of sampleTabs" [heading]="tab.heading" [active]="tab.active" [disabled]="tab.disabled">
			{{tab.content}}
		</cdl-tab>
	</cdl-tabs>

	<h2>Dynamic tabs with timeout</h2>
	<div>
		<cdl-tabs>
			<cdl-tab *ngFor="let tab of sampleTabs2" [heading]="tab.heading" [active]="tab.active">
				{{tab.content}}
			</cdl-tab>
		</cdl-tabs>
	</div>

	<h2>Tabs with custom header template</h2>
	<ng-template #tabHeading>
		Hello, <button (click)="test()">Click me</button> <cdl-glyphicon icon="alert" size="sm"></cdl-glyphicon>
	</ng-template>
	<cdl-tabs>
		<cdl-tab [heading]="tabHeading">
			tab 1 content <cdl-glyphicon icon="alert" size="lg"></cdl-glyphicon>
		</cdl-tab>
		<cdl-tab heading='tab2'>
			tab 2 content
		</cdl-tab>
		<cdl-tab   heading='tab3'>
			tab 3 content
		</cdl-tab>
	</cdl-tabs>


	<h2>Scroll tabs</h2>
	<div style="max-width: 600px">
		<cdl-tabs tabsPosition='bottom'>
			<cdl-tab heading='tab1'>
				tab 1 content
			</cdl-tab>
			<cdl-tab heading='tab2'>
				tab 2 content
			</cdl-tab>
			<cdl-tab heading='tab3'>
				tab 3 content
			</cdl-tab>
			<cdl-tab heading='tab4'>
				tab 4content
			</cdl-tab>
			<cdl-tab heading='tab5'>
				tab 5 content
			</cdl-tab>
			<cdl-tab heading='tab6'>
				tab 6 content
			</cdl-tab>
			<cdl-tab heading='tab7'>
				tab 7 content
			</cdl-tab>
			<cdl-tab heading='tab8'>
				tab 8 content
			</cdl-tab>
			<cdl-tab heading='tab9'>
				tab 9 content
			</cdl-tab>
			<cdl-tab heading='tab10'>
				tab 10 content
			</cdl-tab>
			<cdl-tab heading='tab11'>
				tab 11 content
			</cdl-tab>
			<cdl-tab heading='tab12'>
				tab 12 content
			</cdl-tab>
		</cdl-tabs>
	</div>

	<br><br>
	`
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
