import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListGroup } from "./list-group.component";

export { ListGroup } from "./list-group.component";

@NgModule({
	declarations: [
		ListGroup
	],
	exports: [
		ListGroup
	],
	imports: [CommonModule]
})
export class ListGroupModule {}
