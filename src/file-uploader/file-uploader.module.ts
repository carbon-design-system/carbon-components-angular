import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";

// compatibility export
// TODO: remove in v4
// tslint:disable-next-line: variable-name
// export const File = FileComponent;

@NgModule({
	declarations: [FileUploader, FileComponent],
	exports: [FileUploader, FileComponent],
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
