import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChart } from "./bar-chart.component";
import { StackedBarChart } from "./stacked-bar-chart.component";
import { LineChart } from "./line-chart.component";
import { DoubleAxisLineChart } from "./double-axis-line-chart.component";
import { ComboChart } from "./combo-chart.component";
import { BaseChart } from "./base-chart.component";
import { BaseAxisChart } from "./base-axis-chart.component";

@NgModule({
	declarations: [
		BaseChart,
		BaseAxisChart,
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	exports: [
		BaseChart,
		BaseAxisChart,
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	imports: [CommonModule]
})
export class ChartsModule {}
