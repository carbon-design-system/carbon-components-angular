// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { SwitchComponent } from "../switch/switch.component";

// exports
export { SwitchComponent } from "../switch/switch.component";

/**
 * Deprecated in favour of `ToggleModule` (to be removed in v3.0).
 *
 * @deprecated
 */
@NgModule({
	declarations: [
		SwitchComponent
	],
	exports: [
		SwitchComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class SwitchModule { }
