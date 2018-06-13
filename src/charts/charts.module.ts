import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DonutChart } from "./donut-chart.component";
import { DonutCenter } from "./donut-center.component";
import { PieChart } from "./pie-chart.component";
import { BarChart } from "./bar-chart.component";
import { StackedBarChart } from "./stacked-bar-chart.component";
import { LineChart } from "./line-chart.component";
import { DoubleAxisLineChart } from "./double-axis-line-chart.component";
import { ComboChart } from "./combo-chart.component";
import { BaseChart } from "./base-chart.component";
import { BaseAxisChart } from "./base-axis-chart.component";

export { DonutChart } from "./donut-chart.component";
export { DonutCenter } from "./donut-center.component";
export { PieChart } from "./pie-chart.component";
export { BarChart } from "./bar-chart.component";
export { StackedBarChart } from "./stacked-bar-chart.component";
export { LineChart } from "./line-chart.component";
export { DoubleAxisLineChart } from "./double-axis-line-chart.component";
export { ComboChart } from "./combo-chart.component";
export { BaseChart } from "./base-chart.component";
export { BaseAxisChart } from "./base-axis-chart.component";

@NgModule({
	declarations: [
		BaseChart,
		BaseAxisChart,
		DonutChart,
		PieChart,
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	exports: [
		BaseChart,
		BaseAxisChart,
		DonutChart,
		PieChart,
		BarChart,
		StackedBarChart,
		LineChart,
		DoubleAxisLineChart,
		ComboChart
	],
	imports: [CommonModule]
})
export class ChartsModule {}
