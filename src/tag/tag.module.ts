import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

import { Tag } from "./tag.component";
import { TagFilter } from "./tag-filter.component";

export * from "./tag.component";

@NgModule({
	declarations: [ Tag, TagFilter ],
	exports: [ Tag, TagFilter ],
	imports: [ CommonModule, Close16Module ]
})
export class TagModule { }
