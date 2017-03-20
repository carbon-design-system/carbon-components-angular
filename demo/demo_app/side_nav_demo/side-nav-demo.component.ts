import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	templateUrl: "./side-nav-demo.component.html",
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
