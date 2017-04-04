import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "charts-demo",
	template: `
	<h1>Side Nav Demo</h1>
	<p> Work in progress </p>
	<cdl-bar-chart [config]="barConfig" [data]="chartData"></cdl-bar-chart>
	`,
	encapsulation: ViewEncapsulation.None
})

export class ChartsDemo {

	chartData = [
		{
			"Part Number": "2V2N-9KYPM",
			"Qty": 1
		},
		{
			"Part Number": "L22I-P66EP",
			"Qty": 2
		},
		{
			"Part Number": "JQAI-2M4L1",
			"Qty": 6
		},
		{
			"Part Number": "J9DZ-F37AP",
			"Qty": 1
		},
		{
			"Part Number": "Q6XK-YEL48",
			"Qty": 4
		},
		{
			"Part Number": "773C-XKB5L",
			"Qty": 13
		}
		];

	barConfig = {
		"id": "bar",
		"width": 960,
		"height": 500,
		"margin" : {
			"top": 20,
			"right": 20,
			"bottom": 100,
			"left": 40
		},
		"xDomain" : "Part Number",
		"yDomain" : "Qty",
		"yTicks": 5,
		"colours": ["#4178BE"],
		"animDuration": 1500
		};

}
