import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BarChart } from "./bar-chart.component";

export { BarChart } from "./bar-chart.component";

@NgModule({
	declarations: [
		BarChart
	],
	exports: [
		BarChart
	],
	imports: [CommonModule, BrowserModule]
})
export class ChartsModule {}
