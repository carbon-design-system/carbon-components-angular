import { Component, Input } from "@angular/core";

import { FileItem } from "../";

@Component({
	selector: "app-ngmodel-file-uploader",
	template: `
		<cds-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[fileItemSize]="fileItemSize"
			[(ngModel)]="model"
			[disabled]="disabled">
		</cds-file-uploader>
		<button
			cdsButton
			*ngIf="model && model.size > 0"
			(click)="onUpload()"
			style="margin-top:20px">
			Upload
		</button>
		<button cdsButton (click)="removeFiles()">Remove all</button>
	`
})
export class NgModelFileUploaderStory {
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() buttonType = "primary";
	@Input() accept;
	@Input() multiple;
	@Input() size = "md";
	@Input() disabled = false;
	@Input() fileItemSize: "sm" | "md" | "lg" = "lg";

	protected model = new Set<FileItem>();
	protected maxSize = 500000;

	removeFiles() {
		this.model = new Set();
	}

	onUpload() {
		this.model.forEach(fileItem => {
			if (!fileItem.uploaded) {
				if (fileItem.file.size < this.maxSize) {
					fileItem.state = "upload";
					setTimeout(() => {
						fileItem.state = "complete";
						fileItem.uploaded = true;
						console.log(fileItem);
					}, 1500);
				}

				if (fileItem.file.size > this.maxSize) {
					fileItem.state = "upload";
					setTimeout(() => {
						fileItem.state = "edit";
						fileItem.invalid = true;
						fileItem.invalidTitle = "File size exceeds limit";
						fileItem.invalidText = "500kb max file size. Select a new file and try again.";
					}, 1500);
				}
			}
		});
	}
}
