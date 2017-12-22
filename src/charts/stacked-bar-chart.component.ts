import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";
import { StackedBarChart as SBC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `StackedBarChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class StackedBarChart
 * @extends {BaseAxisChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-stacked-bar-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class StackedBarChart extends BaseAxisChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof StackedBarChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof StackedBarChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof StackedBarChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof StackedBarChart
	 */
	ngAfterViewInit() {
		this.chart = new SBC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof StackedBarChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
