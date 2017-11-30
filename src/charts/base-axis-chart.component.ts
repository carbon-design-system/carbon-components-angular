import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseChart } from "./base-chart.component";

import { BaseAxisChart as BAC } from "@peretz/charts/bundle/bundle.js";

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
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;

	ngAfterViewInit() {
		this.chart = new BAC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	setXScale(data?) {
		return this.chart.setXScale(data);
	}

	setYScale(data?, activeSeries?) {
		return this.chart.setYScale(data, activeSeries);
	}

	drawXAxis(xScale = this.chart.xScale) {
		this.chart.drawXAxis(xScale);
	}

	updateXAxis(xScale = this.chart.xScale) {
		this.chart.updateXAxis(xScale);
	}

	drawYAxis(yScale = this.chart.yScale) {
		this.chart.drawYAxis(yScale);
	}

	updateYAxis(yScale = this.chart.yScale) {
		this.chart.updateYAxis(yScale);
	}

	drawY2Axis(yScale = this.chart.yScale) {
		this.chart.drawY2Axis(yScale);
	}

	updateY2Axis(yScale = this.chart.yScale) {
		this.chart.updateY2Axis(yScale);
	}

	appendYAxisLabel(g, label, labelNum) {
		this.chart.appendYAxisLabel(g, label, labelNum);
	}

	wrapTick(ticks) {
		this.chart.wrapTick(ticks);
	}

	wrapLabel(label) {
		this.chart.wrapLabel(label);
	}

	getLargestTickHeight(ticks) {
		this.chart.getLargestTickHeight(ticks);
	}

	getLargestTickWidth(ticks) {
		this.chart.getLargestTickWidth(ticks);
	}

	setTickStyle(axis, tickNum) {
		this.chart.setTickStyle(axis, tickNum);
	}

	addUnits(ticks, formatters) {
		this.chart.addUnits(ticks, formatters);
	}

	drawXGrid(xScale = this.chart.xScale) {
		this.chart.drawXGrid(xScale);
	}

	drawYGrid(yScale = this.chart.yScale) {
		this.chart.drawYGrid(yScale);
	}
}
