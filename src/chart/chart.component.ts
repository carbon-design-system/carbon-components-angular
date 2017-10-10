import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { Charts } from "@peretz/charts/bundle/bundle.js";

// tslint:disable:max-line-length
/**
 * Angular component built with common charting library.
 *
 * ## Build your own charts with neutrino components
 *
 * ```html
 *<n-chart
 *	[data]="data"
 *	[options]="options">
 *</n-chart>
 * ```
 *
 * `data` and `options` are the inputs to the component.
 *
 *
 * ## Available `options` properties
 * | Property        	| Use     							     | Nullable								 | Type																	 |
 * | ------------------ |----------------------------------------|---------------------------------------|-----------------------------------------------------------------------|
 * | type				| chart type							 | false								 | string, e.g. "bars", "stackedBars", "lines", "doubleAxis", "combo"	 |
 * | xDomain			| value for x axis						 | false								 | string																 |
 * | yDomain			| value for y axis						 | false								 | array of string														 |
 * | y2Domain			| value for second y axis				 | true for charts without second y axis | array of string														 |
 * | yTicks				| tick numbers							 | false								 | number																 |
 * | y2Ticks			| tick numbers							 | true									 | number																 |
 * | legendClickable	| make legend clickale to filter data	 | true									 | boolean																 |
 * | containerResizable | resize charts as its container resizes | true									 | boolean																 |
 * | yFormatter			| y value formatter functions			 | true									 | object of metrics as key and formatter functions as the key's value	 |
 *
 * ## `Options` example
 * ```javascript
 * options: {
 *		type: "bar",
 *		xDomain: "Day",
 *		yDomain: ["Clicks"],
 *		y2Domain: ["Click rate"],
 *		yFormatter: {
 *			"Click rate"(value) {
 *				return value + "%";
 *			}
 *		},
 *		yTicks: 5,
 *		legendClickable: true,
 *		containerResizable: true,
 *		colors: [
 *			"#009BEF",
 *			"#95D13C",
 *			"#785EF0",
 *			"#F87EAC",
 *			"#FFB000"
 *		]
 * }```
 *
 * ## `Data` example
 * Array of objects with xDomian and yDomain values.
 * ```javascript
 *	data: [
 *		{
 *			"Day": "Monday",
 *			"Clicks": 60000,
 *			"Click rate": 9
 *		},
 *		{
 *			"Day": "Tuesday",
 *			"Clicks": 50000,
 *			"Click rate": 76
 *		},
 *		{
 *			"Day": "Wednesday",
 *			"Clicks": 9000,
 *			"Click rate": 80
 *		},
 *		{
 *			"Day": "Thursday",
 *			"Clicks": 8000,
 *			"Click rate": 1
 *		},
 *		{
 *			"Day": "Friday",
 *			"Clicks": 4000,
 *			"Click rate": 30
 *		},
 *		{
 *			"Day": "Saturday",
 *			"Clicks": 35000,
 *			"Click rate": 59
 *		},
 *		{
 *			"Day": "Sunday",
 *			"Clicks": 35000,
 *			"Click rate": 38
 *		}
 *	]```
 *
 *
 * @export
 * @class Chart
 */
 // tslint:enable:max-line-length

@Component({
	selector: "n-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./chart.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class Chart implements AfterViewInit {
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;
	chart: any = Charts;

	ngAfterViewInit() {
		this.drawChart();
	}

	drawChart() {
		switch (this.options.type) {
			case "bars":
				this.chart.bars.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
			case "stackedBars":
				this.chart.stackedBars.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
			case "lines":
				this.chart.lines.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
			case "doubleAxis":
				this.chart.doubleAxis.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
			case "combo":
				this.chart.combo.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
			default:
				this.chart.bars.drawChart(this.data, this.chartRef.nativeElement, this.options);
				break;
		}
	}
}
