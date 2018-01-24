import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIcon } from "./static-icon.component";

export { StaticIcon } from "./static-icon.component";

@NgModule({
	declarations: [StaticIcon],
	exports: [StaticIcon],
	imports: [CommonModule]
})
export class StaticIconModule { }
