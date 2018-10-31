// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { ToggleComponent } from "../toggle/toggle.component";

// exports
export { ToggleComponent } from "../toggle/toggle.component";

@NgModule({
	declarations: [
		ToggleComponent
	],
	exports: [
		ToggleComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class ToggleModule { }
