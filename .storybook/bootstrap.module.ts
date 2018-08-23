import { NgModule } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
const en = require("./../src/i18n/en.json");

@NgModule({
	imports: [
		TranslateModule.forRoot()
	]
})
export class BootstrapModule {
	constructor(private translateService: TranslateService) {
		this.translateService.setDefaultLang("en");
		this.translateService.use("en");
		this.translateService.setTranslation("en", en);
	}
}
