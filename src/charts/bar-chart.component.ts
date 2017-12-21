import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";

import { BarChart as BC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `BarChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class BarChart
 * @extends {BaseAxisChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-bar-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class BarChart extends BaseAxisChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof BarChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof BarChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof BarChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof BarChart
	 */
	ngAfterViewInit() {
		this.chart = new BC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof BarChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
