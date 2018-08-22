import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Button } from "./button.directive";

export { Button } from "./button.directive";

@NgModule({
	declarations: [Button],
	exports: [Button],
	imports: [CommonModule]
})
export class ButtonModule { }
