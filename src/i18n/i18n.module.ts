import { SkipSelf, Optional, NgModule } from "@angular/core";
import { I18n } from "./i18n.service";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
	imports: [ReplacePipe],
	exports: [ReplacePipe],
	providers: [
		I18n
	]
})
export class I18nModule {}
