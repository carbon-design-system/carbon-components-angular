import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListItemDirective } from "./list-item.directive";
import { List } from "./list.directive";

@NgModule({
	declarations: [
		ListItemDirective,
		List
	],
	exports: [
		ListItemDirective,
		List
	],
	imports: [CommonModule]
})
export class ListModule {}
