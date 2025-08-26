import { Component, Input } from "@angular/core";

import { FileItem } from "../";

@Component({
	selector: "app-file-uploader-with-custom-file",
	template: `
		<cds-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[skeleton]="skeleton"
			[(files)]="files"
			[size]="size"
			[fileItemSize]="fileItemSize"
			[disabled]="disabled"
			[fileNameTpl]="nameTpl"
			[fileActionsTpl]="actionsTpl"
		>
		</cds-file-uploader>
		<button
			cdsButton
			*ngIf="files && files.size > 0"
			(click)="onUpload()"
			style="margin-top:20px"
		>
			Upload
		</button>

		<ng-template #nameTpl let-fileItem>
			<a href="#" cdsLink>{{ fileItem.file.name }}</a>
		</ng-template>

		<ng-template #actionsTpl>
			<button
				ibmButton="ghost"
				iconOnly="true"
				aria-label="View"
				[size]="fileItemSize"
			>
				<svg ibmIcon="view" size="16"></svg>
			</button>
			<button
				ibmButton="ghost"
				iconOnly="true"
				aria-label="Download"
				[size]="fileItemSize"
			>
				<svg ibmIcon="download" size="16"></svg>
			</button>
		</ng-template>
	`,
})
export class FileUploaderWithCustomFileStory {
	@Input() files = new Set<FileItem>();
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() buttonType = "primary";
	@Input() accept = [".jpg", ".png"];
	@Input() multiple;
	@Input() skeleton = false;
	@Input() size = "md";
	@Input() disabled = false;
	@Input() fileItemSize: "sm" | "md" | "lg" = "lg";

	protected maxSize = 500000;

	onUpload() {
		this.files.forEach((fileItem) => {
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
						fileItem.invalidText =
							"500kb max file size. Select a new file and try again.";
					}, 1500);
				}
			}
		});
	}
}
