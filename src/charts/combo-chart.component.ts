import { BaseAxisChart } from "./base-axis-chart.component";
import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { ComboChart as CC } from "@peretz/charts/bundle/bundle.js";

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
	@Input() data: any;
	@Input() options: any;
	@ViewChild("nChart") chartRef;

	ngAfterViewInit() {
		this.chart = new CC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	drawChart() {
		this.chart.drawChart();
	}
}
