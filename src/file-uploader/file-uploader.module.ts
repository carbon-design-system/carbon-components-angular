import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";

export { FileUploader } from "./file-uploader.component";

@NgModule({
	declarations: [FileUploader, FileComponent, File],
	exports: [FileUploader, FileComponent, File],
	imports: [
		CommonModule,
		ButtonModule,
		LoadingModule,
		Close16Module,
		CheckmarkFilled16Module,
		WarningFilled16Module
	]
})
export class FileUploaderModule { }
