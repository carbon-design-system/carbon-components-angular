import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseChart } from "./base-chart.component";

import { BaseAxisChart as BAC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `BaseAxisChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class BaseAxisChart
 * @extends {BaseChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-base-axis-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class BaseAxisChart extends BaseChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof BaseAxisChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof BaseAxisChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof BaseAxisChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof BaseAxisChart
	 */
	ngAfterViewInit() {
		this.chart = new BAC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `setXScale()` from the chart library.
	 *
	 * @param {any} [data]
	 * @returns
	 * @memberof BaseAxisChart
	 */
	setXScale(data?) {
		return this.chart.setXScale(data);
	}

	/**
	 * Calls `setYScale()` from the chart library.
	 *
	 * @param {any} [data]
	 * @param {any} [activeSeries]
	 * @returns
	 * @memberof BaseAxisChart
	 */
	setYScale(data?, activeSeries?) {
		return this.chart.setYScale(data, activeSeries);
	}

	/**
	 * Calls `drawXAxis()` from the chart library.
	 *
	 * @param {any} [xScale=this.chart.xScale]
	 * @memberof BaseAxisChart
	 */
	drawXAxis(xScale = this.chart.xScale) {
		this.chart.drawXAxis(xScale);
	}

	/**
	 * Calls `updateXAxis()` from the chart library.
	 *
	 * @param {any} [xScale=this.chart.xScale]
	 * @memberof BaseAxisChart
	 */
	updateXAxis(xScale = this.chart.xScale) {
		this.chart.updateXAxis(xScale);
	}

	/**
	 * Calls `drawYAxis()` from the chart library.
	 *
	 * @param {any} [yScale=this.chart.yScale]
	 * @memberof BaseAxisChart
	 */
	drawYAxis(yScale = this.chart.yScale) {
		this.chart.drawYAxis(yScale);
	}

	/**
	 * Calls `updateYAxis()` from the chart library.
	 *
	 * @param {any} [yScale=this.chart.yScale]
	 * @memberof BaseAxisChart
	 */
	updateYAxis(yScale = this.chart.yScale) {
		this.chart.updateYAxis(yScale);
	}

	/**
	 * Calls `drawY2Axis()` from the chart library.
	 *
	 * @param {any} [yScale=this.chart.yScale]
	 * @memberof BaseAxisChart
	 */
	drawY2Axis(yScale = this.chart.yScale) {
		this.chart.drawY2Axis(yScale);
	}

	/**
	 * Calls `updateY2Axis()` from the chart library.
	 *
	 * @param {any} [yScale=this.chart.yScale]
	 * @memberof BaseAxisChart
	 */
	updateY2Axis(yScale = this.chart.yScale) {
		this.chart.updateY2Axis(yScale);
	}

	/**
	 * Calls `appendYAxisLabel()` from the chart library.
	 *
	 * @param {any} g
	 * @param {any} label
	 * @param {any} labelNum
	 * @memberof BaseAxisChart
	 */
	appendYAxisLabel(g, label, labelNum) {
		this.chart.appendYAxisLabel(g, label, labelNum);
	}

	/**
	 * Calls `wrapTick()` from the chart library.
	 *
	 * @param {any} ticks
	 * @memberof BaseAxisChart
	 */
	wrapTick(ticks) {
		this.chart.wrapTick(ticks);
	}

	/**
	 * Calls `wrapLabel()` from the chart library.
	 *
	 * @param {any} label
	 * @memberof BaseAxisChart
	 */
	wrapLabel(label) {
		this.chart.wrapLabel(label);
	}

	/**
	 * Calls `getLargestTickHeight()` from the chart library.
	 *
	 * @param {any} ticks
	 * @memberof BaseAxisChart
	 */
	getLargestTickHeight(ticks) {
		this.chart.getLargestTickHeight(ticks);
	}

	/**
	 * Calls `getLargestTickWidth()` from the chart library.
	 *
	 * @param {any} ticks
	 * @memberof BaseAxisChart
	 */
	getLargestTickWidth(ticks) {
		this.chart.getLargestTickWidth(ticks);
	}

	/**
	 * Calls `setTickStyle()` from the chart library.
	 *
	 * @param {any} axis
	 * @param {any} tickNum
	 * @memberof BaseAxisChart
	 */
	setTickStyle(axis, tickNum) {
		this.chart.setTickStyle(axis, tickNum);
	}

	/**
	 * Calls `addUnits()` from the chart library.
	 *
	 * @param {any} ticks
	 * @param {any} formatters
	 * @memberof BaseAxisChart
	 */
	addUnits(ticks, formatters) {
		this.chart.addUnits(ticks, formatters);
	}

	/**
	 * Calls `drawXGrid()` from the chart library.
	 *
	 * @param {any} [xScale=this.chart.xScale]
	 * @memberof BaseAxisChart
	 */
	drawXGrid(xScale = this.chart.xScale) {
		this.chart.drawXGrid(xScale);
	}

	/**
	 * Calls `drawYGrid()` from the chart library.
	 *
	 * @param {any} [yScale=this.chart.yScale]
	 * @memberof BaseAxisChart
	 */
	drawYGrid(yScale = this.chart.yScale) {
		this.chart.drawYGrid(yScale);
	}
}
