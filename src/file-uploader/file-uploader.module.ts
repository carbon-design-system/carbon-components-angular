import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";

import { FileUploader } from "./file-uploader.component";
import { File } from "./file.component";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";

export { FileUploader } from "./file-uploader.component";

@NgModule({
	declarations: [FileUploader, File],
	exports: [FileUploader],
	imports: [
		CommonModule,
		ButtonModule,
		LoadingModule,
		Close16Module,
		CheckmarkFilled16Module
	]
})
export class FileUploaderModule { }
