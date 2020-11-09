import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "./tag.component";
import { TagFilter } from "./tag-filter.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [ Tag, TagFilter ],
	exports: [ Tag, TagFilter ],
	imports: [ CommonModule, IconModule ]
})
export class TagModule { }
