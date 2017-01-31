import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AlertService } from "./alert.service";
import { Alert } from "./alert.component";

export { AlertService } from "./alert.service";
export { Alert } from "./alert.component";

@NgModule({
	declarations: [
		Alert
	],
	exports: [
		Alert
	],
	entryComponents: [Alert],
	imports: [CommonModule, BrowserModule]
})
export class AlertModule {}
