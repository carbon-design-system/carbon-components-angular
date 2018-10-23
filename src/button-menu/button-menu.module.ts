import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ButtonMenu } from "./button-menu.component";
import { ButtonMenuItem } from "./button-menu-item.component";

export { ButtonMenu } from "./button-menu.component";
export { ButtonMenuItem } from "./button-menu-item.component";

@NgModule({
	declarations: [
		ButtonMenu,
		ButtonMenuItem
	],
	exports: [
		ButtonMenu,
		ButtonMenuItem
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class ButtonMenuModule {}
