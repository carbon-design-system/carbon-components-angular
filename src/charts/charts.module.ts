import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NChartComponent } from "./charts.component";
export { NChartComponent } from "./charts.component";

@NgModule({
	declarations: [
		NChartComponent
	],
	exports: [
		NChartComponent
	],
	imports: [CommonModule]
})
export class ChartModule {}
