import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Chart } from "./charts.component";

export { Chart } from "./charts.component";

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
