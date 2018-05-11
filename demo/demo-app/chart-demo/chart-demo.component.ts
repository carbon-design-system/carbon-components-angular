import { Component, ViewChild } from "@angular/core";

@Component({
	selector: "app-chart-demo",
	template: `
	<h1 class="p-demo-heading">Chart</h1>

	<h2 class="p-demo-section">Pie</h2>
	<n-pie-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.pieData"
		[options]="pieOption" #pieChart>
	</n-pie-chart>

	<h2 class="p-demo-section">Bars</h2>
	<button class="btn--primary" (click)="changeData()">Change data</button>
	<n-bar-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.data"
		[options]="barOption" #barChart>
	</n-bar-chart>

	<h2 class="p-demo-section">Stacked Bars</h2>
	<n-stacked-bar-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.data"
		[options]="stackedBarsOption">
	</n-stacked-bar-chart>

	<h2 class="p-demo-section">Lines</h2>
	<n-line-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.data"
		[options]="linesOption">
	</n-line-chart>

	<h2 class="p-demo-section">Double Axis</h2>
	<p>Y value formatters can be added to options as functions for each metric.</p>
	<code>
		options.yFormatter: {{ '{' }} <br>
		&nbsp;&nbsp;"Click rate"(value) {{ '{' }} <br>
		&nbsp;&nbsp;&nbsp;&nbsp;return value + "%" <br>
		&nbsp;&nbsp;{{ '}' }} <br>
		{{ '}' }}
	</code>
	<n-double-axis-line-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.doubleAxisData"
		[options]="doubleAxisOption">
	</n-double-axis-line-chart>

	<h2 class="p-demo-section">Combo</h2>
	<n-combo-chart
		class="n-chart"
		style="height: 510px"
		[data]="chartConstant.longData"
		[options]="comboOption">
	</n-combo-chart>
	`,
	styles: [`
		:host {
			width: 100%;
			height: 100%;
		}
		:host p {
			margin: 15px 0;
		}
		n-chart {
			width: 80%;
			height: 600px;
			margin-bottom: 20px;
		}
		.resizable {
			width: 80%;
			height: 600px;
			overflow: auto;
			resize: both;
			border: 1px solid #ECEEEF;
			padding: 10px;
			margin-bottom: 20px;
		}
		.resizable n-chart {
			width: 100%;
			height: 100%;
		}
	`]
})

export class ChartDemo {
	@ViewChild("barChart") barChart;
	colors = [
		"#009BEF",
		"#95D13C",
		"#785EF0",
		"#F87EAC",
		"#FFB000",
		"#00B6CB",
		"#FF5C49",
		"#047CC0",
		"#FE8500",
		"#5A3EC8",
		"#40D5BB",
		"#FF509E"
	];

	chartConstant = {
		longDataOptions: {
			xDomain: "Part number",
			yDomain: ["Total", "Returned", "Defects", "This is an extra long long long legend", "Number of sold products"],
			yTicks: 5,
			legendClickable: true,
			containerResizable: true,
			colors: this.colors
		},
		doubleYAxisOptions: {
			xDomain: "Part number",
			yDomain: ["Total"],
			y2Domain: ["Returned", "Defects", "This is an extra long long long legend", "Number of sold products"],
			yTicks: 5,
			y2Ticks: 10,
			legendClickable: true,
			containerResizable: true,
			colors: this.colors
		},
		options: {
			xDomain: "Part number",
			yDomain: ["Sold", "More", "Qty"],
			yTicks: 5,
			legendClickable: true,
			containerResizable: true,
			colors: this.colors
		},
		optionsWithFormatter: {
			xDomain: "Day",
			yDomain: ["Clicks"],
			y2Domain: ["Click rate"],
			yFormatter: {
				"Click rate"(value) {
					return value + "%";
				}
			},
			yTicks: 5,
			legendClickable: true,
			containerResizable: true,
			colors: this.colors
		},
		pieOptions: {
			legendClickable: true,
			containerResizable: true,
			colors: this.colors
		},
		data: [
			{
				"Part number": "2V2N-9KYPM version 1",
				"Qty": 100000,
				"More": 60000,
				"Sold": 90000
			},
			{
				"Part number": "L22I-P66EP-L22I-P66EP-L22I-P66EP",
				"Qty": 200000,
				"More": 50000,
				"Sold": 70000
			},
			{
				"Part number": "JQAI-2M4L1",
				"Qty": 600000,
				"More": 9000,
				"Sold": 6000
			},
			{
				"Part number": "J9DZ-F37AP",
				"Qty": 100000,
				"More": 8000,
				"Sold": 11000
			},
			{
				"Part number": "Q6XK-YEL48",
				"Qty": 400000,
				"More": 4000,
				"Sold": 300000
			},
			{
				"Part number": "773C-XKB5L",
				"Qty": 800000,
				"More": 35000,
				"Sold": 390000
			}
		],
		doubleAxisData: [
			{
				"Day": "Monday",
				"Clicks": 60000,
				"Click rate": 9
			},
			{
				"Day": "Tuesday",
				"Clicks": 50000,
				"Click rate": 76
			},
			{
				"Day": "Wednesday",
				"Clicks": 9000,
				"Click rate": 80
			},
			{
				"Day": "Thursday",
				"Clicks": 8000,
				"Click rate": 1
			},
			{
				"Day": "Friday",
				"Clicks": 4000,
				"Click rate": 30
			},
			{
				"Day": "Saturday",
				"Clicks": 35000,
				"Click rate": 59
			},
			{
				"Day": "Sunday",
				"Clicks": 35000,
				"Click rate": 38
			}
		],
		longData: [
			{
				"Part number": "2V2N-9KYPM",
				"Total": 100000,
				"Returned": 60000,
				"Defects": 9230,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 90000
			},
			{
				"Part number": "L22I-P66EP",
				"Total": 200000,
				"Returned": 50000,
				"Defects": 9230,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 70000
			},
			{
				"Part number": "JQAI-2M4L1",
				"Total": 100000,
				"Returned": 9000,
				"Defects": 2980,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 6000
			},
			{
				"Part number": "J9DZ-F37AP",
				"Total": 150000,
				"Returned": 8000,
				"Defects": 12230,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 11000
			},
			{
				"Part number": "Q6XK-YEL48",
				"Total": 230000,
				"Returned": 4000,
				"Defects": 8230,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 300000
			},
			{
				"Part number": "773C-XKB5L",
				"Total": 390000,
				"Returned": 35000,
				"Defects": 5230,
				"This is an extra long long long legend": 12345,
				"Number of sold products": 190000
			}
		],
		pieData: [
			{
				label: "2V2N-9KYPM version 1",
				value: 100000
			},
			{
				label: "L22I-P66EP-L22I-P66EP-L22I-P66EP",
				value: 200000
			},
			{
				label: "JQAI-2M4L1",
				value: 600000
			},
			{
				label: "J9DZ-F37AP",
				value: 100000
			},
			{
				label: "YEL48-Q6XK-YEL48",
				value: 400000
			},
			{
				label: "P66EP-L22I-L22I",
				value: 450000
			},
			{
				label: "Q6XK-YEL48",
				value: 300000
			},
			{
				label: "XKB5-L6EP",
				value: 70000
			},
			{
				label: "YEL48-Q6XK",
				value: 20000
			},
			{
				label: "L22I-P66EP-L22I",
				value: 120000
			}
		]
	};

	barOption = Object.assign({}, this.chartConstant.options, {type: "bars"});
	stackedBarsOption = Object.assign({}, this.chartConstant.options, {type: "stackedBars"});
	linesOption = Object.assign({}, this.chartConstant.options, {type: "lines"});
	doubleAxisOption = Object.assign({}, this.chartConstant.optionsWithFormatter, {type: "doubleAxis"});
	comboOption = Object.assign({}, this.chartConstant.doubleYAxisOptions, {type: "combo"});
	pieOption = Object.assign({}, this.chartConstant.pieOptions, {type: "pie"});

	changeData() {
		this.chartConstant.data[0]["Qty"] += 60000;
		this.chartConstant.data[0]["More"] += 60000;
		this.chartConstant.data[0]["Sold"] += 60000;
		this.barChart.redrawChart(this.chartConstant.data);
	}
}
