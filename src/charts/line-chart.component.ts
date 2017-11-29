import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseAxisChart } from "./base-axis-chart.component";

import { LineChart as LC } from "@peretz/charts/bundle/bundle.js";

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
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;

	ngAfterViewInit() {
		this.chart = new LC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	drawChart() {
		this.chart.drawChart();
	}
}
