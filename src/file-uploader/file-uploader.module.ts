import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";

import { LoadingModule } from "carbon-components-angular/loading";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [FileUploader, FileComponent],
	imports: [
		CommonModule,
		LoadingModule,
		IconDirective,
		FileUploader,
		FileComponent
	]
})
export class FileUploaderModule { }
