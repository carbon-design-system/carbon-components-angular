import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "charts-demo",
	template: `
	<h1>Charts Demo</h1>
	<p>!!FOR DEMO PURPOSES ONLY!!</p>
	<section class="chart">
		<span class="chart-title">Parts</span>
		<n-bar-chart [config]="barConfig" [data]="chartData"></n-bar-chart>
	</section>
	`,
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
			n-bar-chart {
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
			"Qty": 100000
		},
		{
			"Part Number": "L22I-P66EP",
			"Qty": 200000
		},
		{
			"Part Number": "JQAI-2M4L1",
			"Qty": 600000
		},
		{
			"Part Number": "J9DZ-F37AP",
			"Qty": 100000
		},
		{
			"Part Number": "Q6XK-YEL48",
			"Qty": 400000
		},
		{
			"Part Number": "773C-XKB5L",
			"Qty": 13000000
		}
	];

	barConfig = {
		id: "bar",
		width: 550,
		height: 500,
		barPadding: 10,
		xDomain: "Part Number",
		yDomain: "Qty",
		yTicks: 5,
		colours: ["#4178BE"],
		animDuration: 1500
	};

	ngOnInit() {
		// setTimeout(() => {
		// 	console.log("adding data");
		// 	this.chartData = [...this.chartData, {
		// 		"Part Number": "473D-XK35L",
		// 		"Qty": 1000000
		// 	}];
		// }, 2000);

		// setTimeout(() => {
		// 	console.log("adding data");
		// 	this.chartData = [...this.chartData, {
		// 		"Part Number": "413D-CK3KL",
		// 		"Qty": 2000000
		// 	}];
		// }, 4000);

		// setTimeout(() => {
		// 	console.log("removing data");
		// 	this.chartData = this.chartData.filter(x => x.Qty !== 200000);
		// }, 8000);
	}
}
