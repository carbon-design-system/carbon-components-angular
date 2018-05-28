import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseChart } from "./base-chart.component";

import { DonutChart as DC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `DonutChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class DonutChart
 * @extends {BaseChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-donut-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class DonutChart extends BaseChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof DonutChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof DonutChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof DonutChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof DonutChart
	 */
	ngAfterViewInit() {
		this.chart = new DC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof DonutChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
