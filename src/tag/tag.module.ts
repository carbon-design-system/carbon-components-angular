import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "./tag.component";

export * from "./tag.component";

@NgModule({
	declarations: [ Tag ],
	exports: [ Tag ],
	imports: [ CommonModule ]
})
export class TagModule { }
