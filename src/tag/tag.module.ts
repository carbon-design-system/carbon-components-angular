import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { Tag } from "./tag.component";

export { Tag } from "./tag.component";

@NgModule({
	declarations: [
		Tag
	],
	exports: [
		Tag
	],
	imports: [
		CommonModule,
		TranslateModule.forChild()
	]
})
export class TagModule {}
