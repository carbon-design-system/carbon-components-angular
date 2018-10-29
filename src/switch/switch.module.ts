// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Switch } from "../switch/switch.component";

// exports
export { Switch } from "../switch/switch.component";

@NgModule({
	declarations: [
		Switch
	],
	exports: [
		Switch
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class SwitchModule { }
