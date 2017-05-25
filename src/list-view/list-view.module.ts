import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListView } from "./list-view.component";

export { ListView } from "./list-view.component";

@NgModule({
	declarations: [
		ListView
	],
	exports: [
		ListView
	],
	imports: [CommonModule]
})
export class ListViewModule {}
