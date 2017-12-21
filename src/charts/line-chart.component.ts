import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";

import { LineChart as LC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `LineChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class LineChart
 * @extends {BaseAxisChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-line-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class LineChart extends BaseAxisChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof LineChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof LineChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof LineChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof LineChart
	 */
	ngAfterViewInit() {
		this.chart = new LC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof LineChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
