import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	template: `
	<h1>Side Nav Demo</h1>

	<ng-template #listTpl let-item="item">
		<span *ngIf="item.icon"><cdl-glyphicon icon="{{item.icon}}" size="md"></cdl-glyphicon></span>
		<span class="side-nav-item">{{item.content}}</span>
	</ng-template>

	<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="false" >
			<cdl-hamburger (onClick)="onClick($event)" hamburger></cdl-hamburger>
	</cdl-top-nav>

	<cdl-side-nav [open]="sideNavOpen">
		<cdl-side-nav-item routerLink="/table">
			<cdl-glyphicon class="side-nav-glyph" icon="Alert" size="md"></cdl-glyphicon>
			<span class="side-nav-item">Understand</span>
		</cdl-side-nav-item>
		<cdl-side-nav-item>
			<span class="side-nav-item">More</span>
			<cdl-side-nav-item>
				<span class="side-nav-item">Content</span>
			</cdl-side-nav-item>
			<cdl-side-nav-item>
				<span class="side-nav-item">Here</span>
				<div class="side-nav-pane-sub-template">
					<cdl-side-nav-pane-title>Here</cdl-side-nav-pane-title>
					<cdl-tree-view [items]="demoItems" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
				</div>
			</cdl-side-nav-item>
			<cdl-side-nav-item>
				<span class="side-nav-item">And Here</span>
				<div class="side-nav-pane-sub-template">
					<cdl-side-nav-pane-title>And Here</cdl-side-nav-pane-title>
					<cdl-tree-view [items]="demoItems2" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
				</div>
			</cdl-side-nav-item>
		</cdl-side-nav-item>
	</cdl-side-nav>
	`,
	encapsulation: ViewEncapsulation.None
})

export class SideNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";
	private sideNavOpen = true;


	private demoItems = [
		{
			content: "Understand",
			selected: false,
			icon: "Alert",
			subMenu: [
				{
					content: "Experience integrations",
					selected: false,
					subMenu: [
						{
							content: "Experience integrations",
							selected: false
						},
						{
							content: "Predictive custom intelligence",
							selected: false
						},
					]
				},
				{
					content: "Predictive custom intelligence",
					selected: false
				},
			]
		},
		{
			content: "Plan",
			selected: false,
			icon: "Alert"
		},
		{
			content: "Design",
			selected: false,
			icon: "Alert"
		},
		{
			content: "Build",
			selected: false,
			icon: "Alert"

		},
		{
			content: "Listen",
			selected: false,
			icon: "Alert"

		},
		{
			content: "Optimize",
			selected: false,
			icon: "Alert"

		}
	];

	private demoItems2 = this.clone(this.demoItems);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	private onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}
}
