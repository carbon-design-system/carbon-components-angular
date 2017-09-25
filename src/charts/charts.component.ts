import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild
} from "@angular/core";

import { Charts } from "@peretz/charts/bundle/bundle.js"

import "./charts.scss"

@Component({
	selector: "n-chart",
	template: `
		<div #nChart
			class="n-chart-cotainer"
		></div>
	`,
	styles: [`
		:host {
			display: block;
			position: relative;
		}
		:host /deep/ .n-chart-cotainer {
			width: 100%;
			height: 100%;
			z-index: -1;
			resize: both;
		}
	`]
})
export class NChartComponent implements AfterViewInit {
	@Input() data: any;
	@Input() option: any;
	@ViewChild('nChart') chartRef;
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
