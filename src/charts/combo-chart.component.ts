import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";

import { ComboChart as CC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `ComboChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class ComboChart
 * @extends {BaseAxisChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-combo-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ComboChart extends BaseAxisChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof ComboChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof ComboChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof ComboChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof ComboChart
	 */
	ngAfterViewInit() {
		this.chart = new CC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof ComboChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
