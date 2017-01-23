import { Component, OnInit, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	templateUrl: "./side-nav-demo.component.html",
	encapsulation:ViewEncapsulation.None,
	styleUrls:["./side-nav-demo.component.scss"]
})

export class SideNavDemo {

	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			subMenu: [
				{
					content: "sub item two 1",
					selected: false
				},
				{
					content: "sub item two 2",
					selected: false,
					subMenu: [
						{
							content: "sub item two 1b",
							selected: false
						},
						{
							content: "sub item two 2b",
							selected: false,


						}
					]
				},
			]
		},
		{
			content: "item three",
			selected: false
		},
		{
			content: "item four",
			selected: false
		},
		{
			content: "item six",
			selected: false,
			subMenu: [
				{
					content: "sub item six 1",
					selected: false
				},
				{
					content: "sub item six 2",
					selected: false,
					subMenu: [
						{
							content: "sub item six 1b",
							selected: false
						},
						{
							content: "sub item six 2b",
							selected: false,
						}
					]
				},
			]
		}
	];

}
