import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListItemDirective } from "./list-item.directive";
import { List } from "./list.directive";

@NgModule({
	exports: [
		ListItemDirective,
		List
	],
	imports: [
		CommonModule,
		ListItemDirective,
		List
	]
})
export class ListModule {}
