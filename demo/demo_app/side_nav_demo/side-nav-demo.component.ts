import { Component, OnInit, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	templateUrl: "./side-nav-demo.component.html",
	encapsulation: ViewEncapsulation.None,
	styleUrls: ["./side-nav-demo.component.scss"]
})

export class SideNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";
	private sideNavOpen = true;


	private demoItems = [

		{
			content: "Understand",
			selected: false,
			subMenu: [
				{
					content: "Experience integrations",
					selected: false
				},
				{
					content: "Predictive custom intelligence",
					selected: false,
				},
			]
		},
		{
			content: "Plan",
			selected: false
		},
		{
			content: "Design",
			selected: false
		},
		{
			content: "Build",
			selected: false

		},
		{
			content: "Listen",
			selected: false

		},
		{
			content: "Optimize",
			selected: false

		}
	];

	private onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}

}
