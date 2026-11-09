import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Loading } from "./loading.component";
import { I18nModule } from "carbon-components-angular/i18n";

@NgModule({
	exports: [Loading],
	imports: [CommonModule, I18nModule, Loading]
})
export class LoadingModule {}
