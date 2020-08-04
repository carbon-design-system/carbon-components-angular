import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	CloseModule,
	CheckmarkFilledModule,
	WarningFilledModule
} from "@carbon/icons-angular";

import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { ButtonModule } from "carbon-components-angular/button";
import { LoadingModule } from "carbon-components-angular/loading";

@NgModule({
	declarations: [FileUploader, FileComponent],
	exports: [FileUploader, FileComponent],
	imports: [
		CommonModule,
		ButtonModule,
		LoadingModule,
		CloseModule,
		CheckmarkFilledModule,
		WarningFilledModule
	]
})
export class FileUploaderModule { }
