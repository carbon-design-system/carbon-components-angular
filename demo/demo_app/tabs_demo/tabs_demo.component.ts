import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tabs-demo",
	template: `
	<h1>Tabs Demo</h1>

	<h2>Static tabs</h2>
		<cdl-tabs>
			<cdl-tab heading='Tab1'>
				Tab 1 content
			</cdl-tab>
			<cdl-tab heading='Tab2'>
				Tab 2 content
			</cdl-tab>
			<cdl-tab heading='Tab3'>
				Tab 3 content
			</cdl-tab>
			<cdl-tab heading='Tab4'>
				Tab 4 content
			</cdl-tab>
			<cdl-tab heading='Tab5'>
				Tab 5 content
			</cdl-tab>
			<cdl-tab heading='Tab6'>
				Tab 6 content
			</cdl-tab>
			<cdl-tab heading='Tab7'>
				Tab 7 content
			</cdl-tab>
			<cdl-tab heading='Tab8'>
				Tab 8 content
			</cdl-tab>
			<cdl-tab heading='Tab9'>
				Tab 9 content
			</cdl-tab>
			<cdl-tab heading='Tab10'>
				Tab 10 content
			</cdl-tab>
			<cdl-tab heading='Tab11'>
				Tab 11 content
			</cdl-tab>
			<cdl-tab heading='Tab12'>
				Tab 12 content
			</cdl-tab>
		</cdl-tabs>

	<h2>Static tabs with tab2 active and the tabs are at the bottom</h2>
	<cdl-tabs position='bottom'>
		<cdl-tab heading='Tab1'>
			Tab 1 content
		</cdl-tab>
		<cdl-tab heading='Tab2' active='true'>
			Tab 2 content
		</cdl-tab>
		<cdl-tab heading='Tab3'>
			Tab 3 content
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
		<cdl-icon
			icon="facebook"
			size="sm"
			style="margin-right: 7px;">
		</cdl-icon>
		Hello,&nbsp;<span (click)="test($event)">click me</span>
	</ng-template>
	<cdl-tabs>
		<cdl-tab [heading]="tabHeading">
			Tab 1 content <cdl-icon icon="alert" size="lg"></cdl-icon>
		</cdl-tab>
		<cdl-tab heading='Tab2'>
			Tab 2 content
		</cdl-tab>
		<cdl-tab   heading='Tab3'>
			Tab 3 content
		</cdl-tab>
	</cdl-tabs>


	<h2>Scroll tabs</h2>
	<div style="max-width: 600px">
		<cdl-tabs>
			<cdl-tab heading='Tab1'>
				Tab 1 content
			</cdl-tab>
			<cdl-tab heading='Tab2 with a long header'>
				Tab 2 content
			</cdl-tab>
			<cdl-tab heading='Tab3'>
				Tab 3 content
			</cdl-tab>
			<cdl-tab heading='Tab4'>
				Tab 4content
			</cdl-tab>
			<cdl-tab heading='Tab5 with a long header'>
				Tab 5 content
			</cdl-tab>
			<cdl-tab heading='Tab6 with a long header'>
				Tab 6 content
			</cdl-tab>
			<cdl-tab heading='Tab7'>
				Tab 7 content
			</cdl-tab>
			<cdl-tab heading='Tab8'>
				Tab 8 content
			</cdl-tab>
			<cdl-tab heading='Tab9 with a long header'>
				Tab 9 content
			</cdl-tab>
			<cdl-tab heading='Tab10'>
				Tab 10 content
			</cdl-tab>
			<cdl-tab heading='Tab11'>
				Tab 11 content
			</cdl-tab>
			<cdl-tab heading='Tab12'>
				tab 12 content
			</cdl-tab>
		</cdl-tabs>
	</div>

	<br><br>
	`
})
export class TabsDemo {
	public sampleTabs = [
		{ heading: "Tab 10", content: "Tab 10" },
		{ heading: "Tab 11", content: "Tab 11", active: true },
		{ heading: "Disabled Tab", content: "Disabled tab content. The application should display some message as to why."}
	];
	public sampleTabs2 = [];

	ngOnInit() {
		setTimeout(() => {
			this.sampleTabs2 = [
				{ heading: "Tab10a", content: "Tab 10a" },
				{ heading: "Tab11a", content: "Tab 11a", active: true }
			];
		}, 2000);
	}

	test(ev) {
		ev.preventDefault();
		alert("You just clicked me");
	}
}
