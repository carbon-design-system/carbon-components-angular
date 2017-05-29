import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComboBox } from "./combo-box.component";

export { ComboBox } from "./combo-box.component";

@NgModule({
	declarations: [
		ComboBox
	],
	exports: [
		ComboBox
	],
	imports: [CommonModule]
})
export class ComboBoxModule {}
