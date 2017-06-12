import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { Icon } from "./icon.component";
import { Sprite } from "./sprite.component";
import { IconService } from "./icon.service";

export { Icon } from "./icon.component";
export { IconService } from "./icon.service";
export { Sprite } from "./sprite.component";

@NgModule({
	declarations: [
		Icon,
		Sprite
	],
	exports: [
		Icon,
		Sprite
	],
	imports: [HttpModule, CommonModule]
})
export class IconModule {}
