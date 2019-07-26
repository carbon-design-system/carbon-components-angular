import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../../i18n/i18n.module";

import { Panel } from "./panel.component";
import { ProductSwitcher } from "./product-switcher.component";
import { SwitcherList } from "./switcher-list.component";
import { SwitcherListItem } from "./switcher-list-item.component";

export {
	Panel,
	ProductSwitcher,
	SwitcherList,
	SwitcherListItem
};

@NgModule({
	declarations: [
		Panel,
		ProductSwitcher,
		SwitcherList,
		SwitcherListItem
	],
	imports: [CommonModule, I18nModule],
	exports: [
		Panel,
		ProductSwitcher,
		SwitcherList,
		SwitcherListItem
	]
})
export class PanelModule { }
