import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChart } from "./bar-chart.component";
import { StackedBarChart } from "./stacked-bar-chart.component";
import { LineChart } from "./line-chart.component";
import { DoubleAxisLineChart } from "./double-axis-line-chart.component";
import { ComboChart } from "./combo-chart.component";

export { BarChart } from "./bar-chart.component";

@NgModule({
	declarations: [
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	exports: [
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	imports: [CommonModule]
})
export class ChartsModule {}
