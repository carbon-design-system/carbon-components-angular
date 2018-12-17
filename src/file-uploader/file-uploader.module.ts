import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FileUploader } from "./file-uploader.component";
import { File } from "./file.component";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";

export { FileUploader } from "./file-uploader.component";

@NgModule({
	declarations: [FileUploader, File],
	exports: [FileUploader],
	imports: [CommonModule, ButtonModule, LoadingModule]
})
export class FileUploaderModule { }
