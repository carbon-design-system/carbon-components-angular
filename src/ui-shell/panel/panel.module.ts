import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../../i18n/i18n.module";

import { Panel } from "./panel.component";
import { ProductSwitcher } from "./product-switcher.component";
import { ProductSwitcherList } from "./product-switcher-list.component";
import { ProductSwitcherListItem } from "./product-switcher-list-item.component";
import { ProductSwitcherItem } from "./product-switcher-item.component";

export {
	Panel,
	ProductSwitcher,
	ProductSwitcherList,
	ProductSwitcherListItem,
	ProductSwitcherItem
};

@NgModule({
	declarations: [
		Panel,
		ProductSwitcher,
		ProductSwitcherList,
		ProductSwitcherListItem,
		ProductSwitcherItem
	],
	imports: [CommonModule, I18nModule],
	exports: [
		Panel,
		ProductSwitcher,
		ProductSwitcherList,
		ProductSwitcherListItem,
		ProductSwitcherItem
	]
})
export class PanelModule { }
