// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { LabelComponent } from "../input/label.component";

// exports
export { LabelComponent } from "../input/label.component";

@NgModule({
	declarations: [
		LabelComponent
	],
	exports: [
		LabelComponent
	],
	imports: [
		CommonModule,
		FormsModule,
	]
})
export class InputModule { }
