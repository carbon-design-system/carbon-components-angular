import { BaseAxisChart } from "./base-axis-chart.component";
import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BarChart as BC } from "@peretz/charts/bundle/bundle.js";

@Component({
	selector: "n-bar-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class BarChart extends BaseAxisChart implements AfterViewInit {
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;

	ngAfterViewInit() {
		this.chart = new BC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	drawChart() {
		this.chart.drawChart();
	}
}
