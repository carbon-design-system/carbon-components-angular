import { Component, Input } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";

import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	boolean,
	text,
	array
} from "@storybook/addon-knobs";

import { FileUploaderModule, NotificationModule, ButtonModule } from "../";
import { NotificationService } from "../notification/notification.service";

@Component({
	selector: "app-file-uploader",
	template: `
		<ibm-file-uploader
			[labelTitle]="labelTitle"
			[labelDescription]="labelDescription"
			[buttonLabel]="buttonLabel"
			[accept]="accept"
			[multiple]="multiple"
			[(files)]="files">
		</ibm-file-uploader>

		<br><div [id]="notificationId" style="width: 300px"></div>
		<button ibmButton *ngIf="files && files.size > 0" (click)="onUpload()">
			Upload
		</button>
	`
})
class FileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() files: any;
	@Input() labelTitle;
	@Input() labelDescription;
	@Input() buttonLabel;
	@Input() accept;
	@Input() multiple;

	protected maxSize = 500000;

	constructor(protected notificationService: NotificationService) {
		FileUploaderStory.notificationCount++;
	}

	onUpload() {
		this.files.forEach(content => {
			if (content.file.size > this.maxSize) {
				this.notificationService.showNotification({
					type: "error",
					title: `'${content.file.name}' exceeds size limit`,
					message: `500kb max size. Please select a new file and try again`,
					target: `#${this.notificationId}`
				});
			}
		});

		let filesArray = Array.from<any>(this.files);
		if (filesArray.every(content => content.file.size <= this.maxSize)) {
            this.files.forEach(content => {
                if (!content.uploaded) {
					content.state = "upload";
					setTimeout(() => {
						content.state = "complete";
						content.uploaded = true;
						console.log(content);
					}, 1500);
				}
			});
		}
	}
}

@Component({
	selector: "app-ngmodel-file-uploader",
	template: `
		<ibm-file-uploader
			[labelTitle]="labelTitle"
			[labelDescription]="labelDescription"
			[buttonLabel]="buttonLabel"
			[accept]="accept"
			[multiple]="multiple"
			[(ngModel)]="model">
		</ibm-file-uploader>

		<br><div [id]="notificationId" style="width: 300px"></div>
		<button ibmButton *ngIf="model && model.size > 0" (click)="onUpload()">
			Upload
		</button>
	`
})
class NgModelFileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() labelTitle;
	@Input() labelDescription;
	@Input() buttonLabel;
	@Input() accept;
	@Input() multiple;

	protected model = new Set();
	protected maxSize = 500000;

	constructor(protected notificationService: NotificationService) {
		FileUploaderStory.notificationCount++;
	}

	onUpload() {
		this.model.forEach(content => {
			if (content.file.size > this.maxSize) {
				this.notificationService.showNotification({
					type: "error",
					title: `'${content.file.name}' exceeds size limit`,
					message: `500kb max size. Please select a new file and try again`,
					target: `#${this.notificationId}`
				});
			}
		});

		let filesArray = Array.from<any>(this.model);
		if (filesArray.every(content => content.file.size <= this.maxSize)) {
            this.model.forEach(content => {
                if (!content.uploaded) {
					content.state = "upload";
					setTimeout(() => {
						content.state = "complete";
						content.uploaded = true;
						console.log(content);
					}, 1500);
				}
			});
		}
	}
}

storiesOf("File Uploader", module)
	.addDecorator(
		moduleMetadata({
			imports: [FileUploaderModule, NotificationModule, ButtonModule],
			declarations: [FileUploaderStory, NgModelFileUploaderStory]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-file-uploader
				[labelTitle]="labelTitle"
				[labelDescription]="labelDescription"
				[buttonLabel]="buttonLabel"
				[accept]="accept"
				[multiple]="multiple">
			</app-file-uploader>
		`,
		props: {
			labelTitle: text("The label title", "Account Photo"),
			labelDescription: text("The label description", "only .jpg and .png files. 500kb max file size."),
			buttonLabel: text("Button label", "Add files"),
			accept: array("Accepted file extensions", [".png", ".jpg"], ","),
			multiple: boolean("Supports multiple files", true)
		}
	}))
	.add("Using ngModel", () => ({
		template: `
			<app-ngmodel-file-uploader
				[labelTitle]="labelTitle"
				[labelDescription]="labelDescription"
				[buttonLabel]="buttonLabel"
				[accept]="accept"
				[multiple]="multiple">
			</app-ngmodel-file-uploader>
		`,
		props: {
			labelTitle: text("The label title", "Account Photo"),
			labelDescription: text("The label description", "only .jpg and .png files. 500kb max file size."),
			buttonLabel: text("Button label", "Add files"),
			accept: array("Accepted file extensions", [".png", ".jpg"], ","),
			multiple: boolean("Supports multiple files", true)
		}
	}));
