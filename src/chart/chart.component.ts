import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild
} from "@angular/core";

import { Charts } from "@peretz/charts/bundle/bundle.js";

import "./chart.scss";

/**
 * Angular component built with common charting library.
 *
 * ## Build your own table footer with neutrino components
 *
 * ```html
 *<n-chart
 * [data]="data"
 *	[option]="stackedBarsOption">
 *</n-chart>
 * ```
 *
 * `data` and `option` are the inputs to the component.
 *
 *
 * @export
 * @class Chart
 */

@Component({
	selector: "n-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styles: [`
		:host {
			display: block;
			position: relative;
		}
		:host /deep/ .n-chart-container {
			width: 100%;
			height: 100%;
		}
	`]
})
export class Chart implements AfterViewInit {
	@Input() data: any;
	@Input() option: any;
	@ViewChild("nChart") chartRef;
	chart: any = Charts;

	ngAfterViewInit() {
		this.drawChart();
	}

	drawChart() {
		switch (this.option.type) {
			case "bars":
				this.chart.bars.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
			case "stackedBars":
				this.chart.stackedBars.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
			case "lines":
				this.chart.lines.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
			case "doubleAxis":
				this.chart.doubleAxis.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
			case "combo":
				this.chart.combo.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
			default:
				this.chart.bars.drawChart(this.data, this.chartRef.nativeElement, this.option);
				break;
		}
	}
}
