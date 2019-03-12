import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarbonIcon } from "./carbon-icon.component";

export { CarbonIcon } from "./carbon-icon.component";

@NgModule({
	declarations: [CarbonIcon],
	exports: [CarbonIcon],
	imports: [CommonModule]
})
export class CarbonIconModule { }
