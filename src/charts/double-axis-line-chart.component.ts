import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";

import { DoubleAxisLineChart as DALC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `DoubleAxisLineChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class DoubleAxisLineChart
 * @extends {BaseAxisChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-double-axis-line-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class DoubleAxisLineChart extends BaseAxisChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof DoubleAxisLineChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof DoubleAxisLineChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof DoubleAxisLineChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof DoubleAxisLineChart
	 */
	ngAfterViewInit() {
		this.chart = new DALC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof DoubleAxisLineChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
