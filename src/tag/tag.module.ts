import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "./tag.component";
import { TagFilter } from "./tag-filter.component";
import { TagIconDirective } from "./tag-icon.directive";
import { TagSelectableComponent } from "./tag-selectable.component";
import { TagOperationalComponent } from "./tag-operational.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		Tag,
		TagFilter,
		TagIconDirective,
		TagSelectableComponent,
		TagOperationalComponent
	],
	imports: [CommonModule, IconDirective, Tag,
		TagFilter,
		TagIconDirective,
		TagSelectableComponent,
		TagOperationalComponent]
})
export class TagModule {}
