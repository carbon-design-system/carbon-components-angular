import { Component, Input } from "@angular/core";
import { NotificationService } from "../../notification";

import { FileItem } from "../";

@Component({
	selector: "app-ngmodel-file-uploader",
	template: `
		<ibm-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[(ngModel)]="model"
			[disabled]="disabled">
		</ibm-file-uploader>
		<br><div [id]="notificationId" style="width: 300px"></div>
		<button ibmButton *ngIf="model && model.size > 0" (click)="onUpload()">
			Upload
		</button>
		<button ibmButton (click)="removeFiles()">Remove all</button>
	`
})
export class NgModelFileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${NgModelFileUploaderStory.notificationCount++}`;
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() buttonType = "primary";
	@Input() accept;
	@Input() multiple;
	@Input() size = "normal";
	@Input() disabled = false;

	protected model = new Set<FileItem>();
	protected maxSize = 500000;

	constructor(protected notificationService: NotificationService) {}

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
						fileItem.invalidText = "File size exceeds limit";
					}, 1500);
				}
			}
		});
	}
}
