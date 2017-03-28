import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	template: `
	<h1>Side Nav Demo</h1>

	<ng-template #listTpl let-item="item">
		<span class="side-nav-glyph" *ngIf="item.icon"><cdl-glyphicon icon="{{item.icon}}" size="md"></cdl-glyphicon></span>
		<span class="side-nav-item">{{item.content}}</span>
	</ng-template>

	<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="false" >
			<cdl-hamburger (onClick)="onClick($event)" hamburger></cdl-hamburger>
	</cdl-top-nav>
	<cdl-side-nav [open]="sideNavOpen">
		<cdl-tree-view [items]="demoItems" [listTpl]="listTpl" [indentStart]="1" [brdrAllTheWay]="true" [elemSpacing]="44" ></cdl-tree-view>
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

	private onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}

}
