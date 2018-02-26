import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tabs-demo",
	template: `
	<h2 class="p-demo-heading h1">Tabs</h2>

	<h3 class="p-demo-section h2">Static tabs</h3>
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

	<h4 class="p-demo-section h3">Static tabs with bottom placement</h4>
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

	<h3 class="p-demo-section h2">Dynamic tabs</h3>
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

	<h4 class="p-demo-section h3">Dynamic tabs with timeout</h4>
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

	<h3 class="p-demo-section h2">Tabs with custom header template</h3>
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


	<h3 class="p-demo-section h2">Scroll tabs</h3>
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
}
