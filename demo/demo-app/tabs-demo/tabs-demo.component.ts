import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tabs-demo",
	template: `
	<h1 class="p-demo-heading">Tabs</h1>

	<h2 class="p-demo-section">Static tabs</h2>

	<ibm-tabs>
		<ibm-tab heading='Tab1' (select)="onSelect('tab1')">
			Tab 1 content
		</ibm-tab>
		<ibm-tab heading='Tab2' (select)="onSelect('tab2')">
			Tab 2 content
		</ibm-tab>
		<ibm-tab heading='Tab3'>
			Tab 3 content
		</ibm-tab>
		<ibm-tab heading='Tab4'>
			Tab 4 content
		</ibm-tab>
		<ibm-tab heading='Tab5'>
			Tab 5 content
		</ibm-tab>
		<ibm-tab heading='Tab6'>
			Tab 6 content
		</ibm-tab>
		<ibm-tab heading='Tab7'>
			Tab 7 content
		</ibm-tab>
		<ibm-tab heading='Tab8'>
			Tab 8 content
		</ibm-tab>
		<ibm-tab heading='Tab9'>
			Tab 9 content
		</ibm-tab>
		<ibm-tab heading='Tab10'>
			Tab 10 content
		</ibm-tab>
		<ibm-tab heading='Tab11'>
			Tab 11 content
		</ibm-tab>
		<ibm-tab heading='Tab12'>
			Tab 12 content
		</ibm-tab>
	</ibm-tabs>

	<h4>Tabs with an add button</h4>
	<ibm-tabs>
		<ibm-tab-headers>
			<ibm-tab *ngFor="let tab of addableTabs" [heading]="tab.heading">
				{{ tab.content }}
			</ibm-tab>
			<button class="tabs_add" (click)="addTab()"></button>
			<button class="btn--primary" style="order: 4; margin-left: auto;">button</button>
		</ibm-tab-headers>
	</ibm-tabs>
	<ibm-tabs>
		<ibm-tab-headers>
			<ibm-tab *ngFor="let tab of addableTabs" [heading]="tab.heading">
				{{ tab.content }}
			</ibm-tab>
			<button class="tabs_add" (click)="addTab()"></button>
		</ibm-tab-headers>
	</ibm-tabs>

	<h3 class="p-demo-variation">Static tabs with bottom placement</h3>
	<ibm-tabs position='bottom'>
		<ibm-tab heading='Tab1'>
			Tab 1 content
		</ibm-tab>
		<ibm-tab heading='Tab2' active='true' (select)="onSelect('bottom tab 2')">
			Tab 2 content
		</ibm-tab>
		<ibm-tab heading='Tab3'>
			Tab 3 content
		</ibm-tab>
	</ibm-tabs>

	<h2 class="p-demo-section">Dynamic tabs</h2>
	<ibm-tabs>
		<ibm-tab
			*ngFor="let tab of sampleTabs"
			[heading]="tab.heading"
			[active]="tab.active"
			[disabled]="tab.disabled"
			(select)="onSelect(tab.heading)">
			{{tab.content}}
		</ibm-tab>
	</ibm-tabs>

	<h3 class="p-demo-variation">Dynamic tabs with timeout</h3>
	<div>
		<ibm-tabs>
			<ibm-tab
				*ngFor="let tab of sampleTabs2"
				[heading]="tab.heading"
				[active]="tab.active"
				(select)="onSelect(tab.heading)">
				{{tab.content}}
			</ibm-tab>
		</ibm-tabs>
	</div>

	<h2 class="p-demo-section">Tabs with custom header template</h2>
	<ng-template #tabHeading>
		<ibm-icon
			icon="facebook"
			size="sm"
			style="margin-right: 7px; position: relative; top: 3px; display: inline !important;">
		</ibm-icon>
		Hello,&nbsp;<span (click)="test($event)">click me</span>
	</ng-template>
	<ibm-tabs>
		<ibm-tab [heading]="tabHeading">
			Tab 1 content <ibm-icon icon="alert" size="lg" style="height: 30px; line-height: 30px;"></ibm-icon>
		</ibm-tab>
		<ibm-tab heading='Tab2'>
			Tab 2 content
		</ibm-tab>
		<ibm-tab   heading='Tab3'>
			Tab 3 content
		</ibm-tab>
	</ibm-tabs>


	<h2 class="p-demo-section">Scroll tabs</h2>
	<div style="max-width: 600px">
		<ibm-tabs>
			<ibm-tab heading='Tab1'>
				Tab 1 content
			</ibm-tab>
			<ibm-tab heading='Tab2 with a long header'>
				Tab 2 content
			</ibm-tab>
			<ibm-tab heading='Tab3'>
				Tab 3 content
			</ibm-tab>
			<ibm-tab heading='Tab4'>
				Tab 4content
			</ibm-tab>
			<ibm-tab heading='Tab5 with a long header'>
				Tab 5 content
			</ibm-tab>
			<ibm-tab heading='Tab6 with a long header'>
				Tab 6 content
			</ibm-tab>
			<ibm-tab heading='Tab7'>
				Tab 7 content
			</ibm-tab>
			<ibm-tab heading='Tab8'>
				Tab 8 content
			</ibm-tab>
			<ibm-tab heading='Tab9 with a long header'>
				Tab 9 content
			</ibm-tab>
			<ibm-tab heading='Tab10'>
				Tab 10 content
			</ibm-tab>
			<ibm-tab heading='Tab11'>
				Tab 11 content
			</ibm-tab>
			<ibm-tab heading='Tab12'>
				tab 12 content
			</ibm-tab>
		</ibm-tabs>
	</div>

	<br><br>
	`
})
export class TabsDemo implements OnInit {
	public sampleTabs = [
		{ heading: "Tab 10", content: "Tab 10" },
		{ heading: "Tab 11", content: "Tab 11", active: true },
		{ heading: "Disabled tab", disabled: true, content: "Disabled tab content. The application should display some message as to why."}
	];
	public sampleTabs2 = [];

	public addableTabs = [
		{ heading: "Tab 1", content: "Tab 1 content" },
		{ heading: "Tab 2", content: "Tab 2 content" },
		{ heading: "Tab 3", content: "Tab 3 content" }
	];

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

	onSelect(name: String) {
		console.log(`selected: ${name}`);
	}

	addTab() {
		this.addableTabs.push({
			heading: `Tab ${this.addableTabs.length + 1}`,
			content: `Tab ${this.addableTabs.length + 1} content`
		});
	}
}
