import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Button } from "./button.directive";
import { ButtonSet } from "./button-set.component";

@NgModule({
	declarations: [Button, ButtonSet],
	exports: [Button, ButtonSet],
	imports: [CommonModule]
})
export class ButtonModule { }
