import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CloseModule } from "@carbon/icons-angular";

import { Tag } from "./tag.component";
import { TagFilter } from "./tag-filter.component";

@NgModule({
	declarations: [ Tag, TagFilter ],
	exports: [ Tag, TagFilter ],
	imports: [ CommonModule, CloseModule ]
})
export class TagModule { }
