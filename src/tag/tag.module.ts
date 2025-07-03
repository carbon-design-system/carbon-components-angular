import { NgModule } from "@angular/core";

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
	imports: [
		IconDirective,
		Tag,
		TagFilter,
		TagIconDirective,
		TagSelectableComponent,
		TagOperationalComponent]
})
export class TagModule {}
