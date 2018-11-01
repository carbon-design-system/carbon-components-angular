// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Toggle } from "../toggle/toggle.component";

// exports
export { Toggle } from "../toggle/toggle.component";

@NgModule({
	declarations: [
		Toggle
	],
	exports: [
		Toggle
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class ToggleModule { }
