import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Loading } from "./loading.component";

export { Loading } from "./loading.component";

@NgModule({
	declarations: [Loading],
	exports: [Loading],
	imports: [CommonModule]
})
export class LoadingModule {}
