import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "./tag.component";
import { TagFilter } from "./tag-filter.component";
import { IconModule } from "carbon-components-angular/icon";
import { TagIconDirective } from "./tag-icon.directive";
import { TagSelectableComponent } from "./tag-selectable.component";
import { TagOperationalComponent } from "./tag-operational.component";

@NgModule({
	declarations: [
		Tag,
		TagFilter,
		TagIconDirective,
		TagSelectableComponent,
		TagOperationalComponent
	],
	exports: [
		Tag,
		TagFilter,
		TagIconDirective,
		TagSelectableComponent,
		TagOperationalComponent
	],
	imports: [CommonModule, IconModule]
})
export class TagModule {}
