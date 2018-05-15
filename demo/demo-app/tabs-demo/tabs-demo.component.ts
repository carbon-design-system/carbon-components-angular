import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tabs-demo",
	template: `
	<h1 class="p-demo-heading">Tabs</h1>

	<h2 class="p-demo-section">Static tabs</h2>
		<n-tabs>
			<n-tab heading='Tab1' (select)="onSelect('tab1')">
				Tab 1 content
			</n-tab>
			<n-tab heading='Tab2' (select)="onSelect('tab2')">
				Tab 2 content
			</n-tab>
			<n-tab heading='Tab3'>
				Tab 3 content
			</n-tab>
			<n-tab heading='Tab4'>
				Tab 4 content
			</n-tab>
			<n-tab heading='Tab5'>
				Tab 5 content
			</n-tab>
			<n-tab heading='Tab6'>
				Tab 6 content
			</n-tab>
			<n-tab heading='Tab7'>
				Tab 7 content
			</n-tab>
			<n-tab heading='Tab8'>
				Tab 8 content
			</n-tab>
			<n-tab heading='Tab9'>
				Tab 9 content
			</n-tab>
			<n-tab heading='Tab10'>
				Tab 10 content
			</n-tab>
			<n-tab heading='Tab11'>
				Tab 11 content
			</n-tab>
			<n-tab heading='Tab12'>
				Tab 12 content
			</n-tab>
		</n-tabs>

		<h4>Tabs with an add button</h4>
		<n-tabs>
			<n-tab-headers>
				<n-tab *ngFor="let tab of addableTabs" [heading]="tab.heading">
					{{ tab.content }}
				</n-tab>
				<button class="tabs_add" (click)="addTab()"></button>
			</n-tab-headers>
		</n-tabs>

	<h3 class="p-demo-variation">Static tabs with bottom placement</h3>
	<n-tabs position='bottom'>
		<n-tab heading='Tab1'>
			Tab 1 content
		</n-tab>
		<n-tab heading='Tab2' active='true' (select)="onSelect('bottom tab 2')">
			Tab 2 content
		</n-tab>
		<n-tab heading='Tab3'>
			Tab 3 content
		</n-tab>
	</n-tabs>

	<h2 class="p-demo-section">Dynamic tabs</h2>
	<n-tabs>
		<n-tab
			*ngFor="let tab of sampleTabs"
			[heading]="tab.heading"
			[active]="tab.active"
			[disabled]="tab.disabled"
			(select)="onSelect(tab.heading)">
			{{tab.content}}
		</n-tab>
	</n-tabs>

	<h3 class="p-demo-variation">Dynamic tabs with timeout</h3>
	<div>
		<n-tabs>
			<n-tab
				*ngFor="let tab of sampleTabs2"
				[heading]="tab.heading"
				[active]="tab.active"
				(select)="onSelect(tab.heading)">
				{{tab.content}}
			</n-tab>
		</n-tabs>
	</div>

	<h2 class="p-demo-section">Tabs with custom header template</h2>
	<ng-template #tabHeading>
		<n-icon
			icon="facebook"
			size="sm"
			style="margin-right: 7px; position: relative; top: 3px; display: inline !important;">
		</n-icon>
		Hello,&nbsp;<span (click)="test($event)">click me</span>
	</ng-template>
	<n-tabs>
		<n-tab [heading]="tabHeading">
			Tab 1 content <n-icon icon="alert" size="lg" style="height: 30px; line-height: 30px;"></n-icon>
		</n-tab>
		<n-tab heading='Tab2'>
			Tab 2 content
		</n-tab>
		<n-tab   heading='Tab3'>
			Tab 3 content
		</n-tab>
	</n-tabs>


	<h2 class="p-demo-section">Scroll tabs</h2>
	<div style="max-width: 600px">
		<n-tabs>
			<n-tab heading='Tab1'>
				Tab 1 content
			</n-tab>
			<n-tab heading='Tab2 with a long header'>
				Tab 2 content
			</n-tab>
			<n-tab heading='Tab3'>
				Tab 3 content
			</n-tab>
			<n-tab heading='Tab4'>
				Tab 4content
			</n-tab>
			<n-tab heading='Tab5 with a long header'>
				Tab 5 content
			</n-tab>
			<n-tab heading='Tab6 with a long header'>
				Tab 6 content
			</n-tab>
			<n-tab heading='Tab7'>
				Tab 7 content
			</n-tab>
			<n-tab heading='Tab8'>
				Tab 8 content
			</n-tab>
			<n-tab heading='Tab9 with a long header'>
				Tab 9 content
			</n-tab>
			<n-tab heading='Tab10'>
				Tab 10 content
			</n-tab>
			<n-tab heading='Tab11'>
				Tab 11 content
			</n-tab>
			<n-tab heading='Tab12'>
				tab 12 content
			</n-tab>
		</n-tabs>
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
