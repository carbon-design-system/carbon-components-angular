// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Number } from "./number.component";

@NgModule({
	declarations: [
		Number
	],
	exports: [
		Number
	],
	imports: [
		FormsModule,
		CommonModule
	]
})
export class NumberModule { }

export { Number };
