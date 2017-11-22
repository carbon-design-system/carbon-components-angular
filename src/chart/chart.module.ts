import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Chart } from "./chart.component";

export { Chart } from "./chart.component";

@NgModule({
	declarations: [
		Chart
	],
	exports: [
		Chart
	],
	imports: [CommonModule]
})
export class ChartModule {}
