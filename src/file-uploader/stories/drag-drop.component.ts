import { Component, Input } from "@angular/core";
import { FileItem } from "../";
import * as fileType from "file-type";

@Component({
	selector: "app-drop-file-uploader",
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
			drop="true"
			[dropText]="dropText"
			(filesChange)="onDropped($event)"
			[disabled]="disabled">
		</cds-file-uploader>
		<button
			cdsButton
			*ngIf="files && files.size > 0"
			(click)="onUpload()"
			style="margin-top:20px">
			Upload
		</button>
	`
})
export class DragAndDropStory {
	@Input() files = new Set<FileItem>();
	@Input() title;
	@Input() description;
	@Input() accept = [".jpg", ".png"];
	@Input() multiple;
	@Input() dropText = "Drag and drop files here of upload";
	@Input() disabled = false;
	@Input() fileItemSize: "sm" | "md" | "lg" = "lg";

	protected maxSize = 500000;

	// This is an example of further filtration which can take place after
	// preliminary filtration and is optional.
	onDropped(event) {
		const transferredFiles = Array.from(event);

		// Creates a promise which resolves to a file and whether or not the file should be accepted.
		const readFileAndCheckType = fileObj => {
			return new Promise<{ file: File, accept: boolean }>((resolve, reject) => {
				let fileExtension, mime;
				let reader = new FileReader();
				reader.readAsArrayBuffer(fileObj.file);
				reader.onload = () => {
					if (reader.result) {
						// Checks the type of file based on magic numbers.
						// @ts-ignore
						const type = fileType(reader.result);
						if (type) {
							fileExtension = type.ext.replace(/^/, ".");
							mime = type.mime;
						} else {
							// If a file type can not be determined using magic numbers
							// then use file extension or mime type.
							fileExtension = fileObj.file.name.split(".").pop().replace(/^/, ".");
							mime = fileObj.file.type;
						}
					}
					resolve({
						file: fileObj,
						accept: (this.accept.includes(fileExtension) || this.accept.includes(mime) || !this.accept.length)
					});
				};

				reader.onerror = error => {
					reject(error);
				};
			});
		};

		const promises = transferredFiles.map(file => readFileAndCheckType(file));

		Promise.all(promises).then(filePromiseArray =>
			filePromiseArray.filter(filePromise => filePromise.accept)
				.map(acceptedFile => acceptedFile.file))
			.then(acceptedFiles => this.files = new Set<any>(acceptedFiles))
			.catch(error => console.log(error));
	}

	onUpload() {
		this.files.forEach(fileItem => {
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
