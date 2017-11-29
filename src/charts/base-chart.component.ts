import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseChart as BC } from "@peretz/charts/bundle/bundle.js";

@Component({
	selector: "n-base-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class BaseChart implements AfterViewInit {
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;

	chart;

	ngAfterViewInit() {
		this.chart = new BC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	getActualChartSize() {
		this.chart.getActualChartSize();
	}

	removeChart() {
		this.chart.removeChart();
	}

	redrawChart(data?: any) {
		this.chart.redrawChart(data);
	}

	setSVG() {
		this.chart.setSVG();
	}

	updateSVG() {
		this.chart.updateSVG();
	}

	repositionSVG() {
		this.chart.repositionSVG();
	}

	drawChart(data?: any) {
		this.chart.draw(data);
	}

	updateChart() {
		this.chart.updateChart();
	}

	setResizeWhenContainerChange() {
		this.chart.setResizeWhenContainerChange();
	}

	resizeWhenContainerChange() {
		this.chart.resizeWhenContainerChange();
	}

	setClickableLegend() {
		this.chart.setClickableLegend();
	}

	setClickableLegendInTooltip() {
		this.chart.setClickableLegendInTooltip();
	}

	getActiveDataSeries() {
		this.chart.getActiveDataSeries();
	}

	setChartIdContainer() {
		this.chart.setChartIDContainer();
	}

	resetOpacity() {
		this.chart.resetOpacity();
	}

	reduceOpacity(exception) {
		this.chart.reduceOpacity(exception);
	}

	getLegendItems() {
		this.chart.getLegendItems();
	}

	updateLegend(legend) {
		this.chart.updateLegend(legend);
	}

	addLegend() {
		this.chart.addLegend();
	}

	positionLegend() {
		this.chart.positionLegend();
	}

	addLegendCircleHoverEffect() {
		this.chart.addLegendCircleHoverEffect();
	}

	hasLegendExpandBtn() {
		this.chart.hasLegendExpandBtn();
	}

	isLegendOnRight() {
		this.chart.isLegendOnRight();
	}

	addTooltipOpenButtonToLegend() {
		this.chart.addTooltipOpenButtonToLegend();
	}

	openLegendTooltip(target) {
		this.chart.openLegendTooltip(target);
	}

	showLabelTooltip(d, leftSide) {
		this.chart.showLabelTooltip(d, leftSide);
	}

	showTooltip(d) {
		this.chart.showTooltip(d);
	}
}
