import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "carbon-components-angular/icon";

import { ContextMenuDividerComponent } from "./context-menu-divider.component";
import { ContextMenuGroupComponent } from "./context-menu-group.component";
import { ContextMenuItemComponent } from "./context-menu-item.component";
import { ContextMenuComponent } from "./context-menu.component";

@NgModule({
	declarations: [
		ContextMenuDividerComponent,
		ContextMenuGroupComponent,
		ContextMenuItemComponent,
		ContextMenuComponent
	],
	exports: [
		ContextMenuDividerComponent,
		ContextMenuGroupComponent,
		ContextMenuItemComponent,
		ContextMenuComponent
	],
	imports: [CommonModule, IconModule]
})
export class ContextMenuModule { }
