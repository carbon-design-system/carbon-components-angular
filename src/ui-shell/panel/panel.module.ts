import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "carbon-components-angular/i18n";

import { Panel } from "./panel.component";
import { SwitcherList } from "./switcher-list.component";
import { SwitcherListItem } from "./switcher-list-item.component";

export {
	Panel,
	SwitcherList,
	SwitcherListItem
};

@NgModule({
	imports: [
		CommonModule,
		I18nModule,
		Panel,
		SwitcherList,
		SwitcherListItem
	],
	exports: [
		Panel,
		SwitcherList,
		SwitcherListItem
	]
})
export class PanelModule { }
