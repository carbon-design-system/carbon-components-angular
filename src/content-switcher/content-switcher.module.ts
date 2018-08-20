import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentSwitcher } from "./content-switcher.component";
import { ContentSwitcherOption } from "./content-switcher-option.directive";

export { ContentSwitcher } from "./content-switcher.component";
export { ContentSwitcherOption } from "./content-switcher-option.directive";

@NgModule({
	declarations: [
		ContentSwitcher,
		ContentSwitcherOption
	],
	exports: [
		ContentSwitcher,
		ContentSwitcherOption
	],
	imports: [CommonModule]
})
export class ContentSwitcherModule { }
