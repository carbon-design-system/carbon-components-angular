import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BarChart } from "./bar-chart.component";

export { BarChart } from "./bar-chart.component";

@NgModule({
	declarations: [
		BarChart
	],
	exports: [
		BarChart
	],
	imports: [CommonModule]
})
export class ChartsModule {}
