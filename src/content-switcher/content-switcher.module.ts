import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentSwitcher } from "./content-switcher.component";
import { ContentSwitcherOption } from "./content-switcher-option.directive";

@NgModule({
	exports: [
		ContentSwitcher,
		ContentSwitcherOption
	],
	imports: [
		CommonModule,
		ContentSwitcher,
		ContentSwitcherOption
	]
})
export class ContentSwitcherModule { }
