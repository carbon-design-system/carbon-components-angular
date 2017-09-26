import { Component } from "@angular/core";
@Component({
	selector: "chart-demo",
	template: `
	<h1>Chart</h1>
	<h2>Bars</h2>
	<code>
		options.type='bars'<br>
		options.containerResizable=true
	</code>
	<div class="resizable">
		<n-chart
			[data]="data"
			[option]="options">
		</n-chart>
	</div>

	<h2>Stacked Bars</h2>
	<code>options.type='stackedBars'</code>
	<n-chart
		[data]="data"
		[option]="stackedBarsOption">
	</n-chart>

	<h2>Lines</h2>
	<code>options.type='lines'</code>
	<n-chart
		[data]="data"
		[option]="linesOption">
	</n-chart>

	<h2>Double Axis</h2>
	<code>
		options.type='doubleAxis'<br>
		options.yFormatter: {{ '{' }} <br>
		&nbsp;&nbsp;"Click rate"(value) {{ '{' }} <br>
		&nbsp;&nbsp;&nbsp;&nbsp;return value + "%" <br>
		&nbsp;&nbsp;{{ '}' }} <br>
		{{ '}' }}
	</code>
	<n-chart
		[data]="doubleAxisData"
		[option]="doubleAxisOption">
	</n-chart>

	<h2>Combo</h2>
	<code>options.type='combo'</code>
	<n-chart
		[data]="data"
		[option]="comboOption">
	</n-chart>

	`,
	styles: [`
		chart-demo {
			width: 100%;
			height: 100%;
		}
		n-chart {
			width: 80%;
			height: 600px;
			margin-bottom: 20px;
		}
		.resizable {
			width: 80%;
			height: 600px;
			overflow: scroll;
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

	longDataOptions = {
		xDomain: "Part number",
		yDomain: ["Total", "Returned", "Defects", "This is an extra long long long legend", "Number of sold products"],
		yTicks: 5,
		legendClickable: true,
		containerResizable: true,
		colors: this.colors
	};

	doubleYAxisOptions = {
		xDomain: "Part number",
		yDomain: ["Qty"],
		y2Domain: ["Sold", "More"],
		yTicks: 5,
		y2Ticks: 10,
		legendClickable: true,
		containerResizable: true,
		colors: this.colors
	};

	options = {
		xDomain: "Part number",
		yDomain: ["Sold", "More", "Qty"],
		yTicks: 5,
		legendClickable: true,
		containerResizable: true,
		colors: this.colors
	};

	optionsWithFormatter = {
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
	};

	barOption = Object.assign({}, this.options, {type: "bars"});
	stackedBarsOption = Object.assign({}, this.options, {type: "stackedBars"});
	linesOption = Object.assign({}, this.options, {type: "lines"});
	doubleAxisOption = Object.assign({}, this.optionsWithFormatter, {type: "doubleAxis"});
	comboOption = Object.assign({}, this.doubleYAxisOptions, {type: "combo"});

	data = [
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
	];

	doubleAxisData = [
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
	];

	longData = [
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
	];
}
