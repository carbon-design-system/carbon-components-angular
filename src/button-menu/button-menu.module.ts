import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { ButtonMenu } from "./button-menu.component";
import { ButtonMenuItem } from "./button-menu-item.component";

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
		FormsModule,
		TranslateModule.forChild()
	]
})
export class ButtonMenuModule {}
