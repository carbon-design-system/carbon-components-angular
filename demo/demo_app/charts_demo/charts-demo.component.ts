import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "charts-demo",
	template: `
	<h1>Charts Demo</h1>
	<p>!!FOR DEMO PURPOSES ONLY!!</p>
	<section class="chart">
		<span class="chart-title">Parts</span>
		<cdl-bar-chart [config]="barConfig" [data]="chartData"></cdl-bar-chart>
	</section>
	`,
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
			cdl-bar-chart {
				display: block;
				padding-left: 20px;
				padding-top: 20px;
			}
			.chart {

			}
			.chart-title {
			    display: block;
			    font-size: 16px;
			    font-weight: bold;
			}
			.chart svg {
				overflow: visible;
			}
		`
	]
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
		id: "bar",
		width: 550,
		height: 500,
		margin: {
			top: 20,
			bottom: 50,
			left: 20,
			right: 0
		},
		xDomain: "Part Number",
		yDomain: "Qty",
		yTicks: 5,
		colours: ["#4178BE"],
		animDuration: 1500
	};

	ngOnInit() {
		setTimeout(() => {
			console.log("adding data");
			this.chartData.push({
				"Part Number": "473D-XK35L",
				"Qty": 10
			})
		}, 5000);
	}
}
