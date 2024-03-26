import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainedList } from "./contained-list.component";
import { ContainedListItem } from "./contained-list-item.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [ContainedList, ContainedListItem],
	exports: [ContainedList, ContainedListItem],
	imports: [CommonModule, IconModule]
})
export class ContainedListModule {}
