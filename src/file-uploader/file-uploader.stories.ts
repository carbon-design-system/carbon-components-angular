/* tslint:disable variable-name */

import {
	Component,
	OnInit,
	Input
} from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators
} from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { FileUploaderModule, FileUploader, FileItem } from "./";
import { NotificationModule, NotificationService } from "../notification";
import { ButtonModule } from "../button";

import * as fileType from "file-type";


@Component({
	selector: "app-file-uploader",
	template: `
		<ibm-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[skeleton]="skeleton"
			[(files)]="files"
			[size]="size"
			[disabled]="disabled">
		</ibm-file-uploader>
		<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>
		<button ibmButton *ngIf="files && files.size > 0" (click)="onUpload()">
			Upload
		</button>
	`
})
class FileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() files = new Set<FileItem>();
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() buttonType = "primary";
	@Input() accept = [".jpg", ".png"];
	@Input() multiple;
	@Input() skeleton = false;
	@Input() size = "normal";
	@Input() disabled = false;

	protected maxSize = 500000;

	constructor(protected notificationService: NotificationService) {
		FileUploaderStory.notificationCount++;
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

@Component({
	selector: "app-drop-file-uploader",
	template: `
		<ibm-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[skeleton]="skeleton"
			[(files)]="files"
			[size]="size"
			drop="true"
			[dropText]="dropText"
			(filesChange)="onDropped($event)"
			[disabled]="disabled">
		</ibm-file-uploader>
		<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>
		<button ibmButton *ngIf="files && files.size > 0" (click)="onUpload()">
			Upload
		</button>
	`
})
class DragAndDropStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() files = new Set<FileItem>();
	@Input() title;
	@Input() description;
	@Input() accept = [".jpg", ".png"];
	@Input() multiple;
	@Input() dropText = "Drag and drop files here of upload";
	@Input() disabled = false;

	protected maxSize = 500000;

	constructor(protected notificationService: NotificationService) {
		FileUploaderStory.notificationCount++;
	}

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
class NgModelFileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
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

	constructor(protected notificationService: NotificationService) {
		FileUploaderStory.notificationCount++;
	}

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

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup" (ngSubmit)="onUpload()">
			<ibm-file-uploader
				[title]="title"
				[description]="description"
				[buttonText]="buttonText"
				[buttonType]="buttonType"
				[accept]="accept"
				[multiple]="multiple"
				[skeleton]="skeleton"
				[size]="size"
				[disabled]="disabled"
				formControlName="files">
			</ibm-file-uploader>
			<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>
			<button ibmButton *ngIf="formGroup.get('files').value && formGroup.get('files').value.size > 0" type="submit">
				Upload
			</button>
		</form>
	`
})
class ReactiveFormsStory implements OnInit {
	static notificationCount = 0;
	public formGroup: FormGroup;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() buttonType = "primary";
	@Input() accept = [".jpg", ".png"];
	@Input() multiple;
	@Input() skeleton = false;
	@Input() size = "normal";
	@Input() disabled = false;

	protected maxSize = 500000;

	constructor(
		protected notificationService: NotificationService,
		protected formBuilder: FormBuilder
	) {
		FileUploaderStory.notificationCount++;
	}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			files: new FormControl(new Set<any>(), [Validators.required])
		});
	}

	onUpload() {
		(this.formGroup.get("files") as any).value.forEach(fileItem => {
			if (!fileItem.uploaded) {
				if (fileItem.file.size < this.maxSize) {
					fileItem.state = "upload";
					setTimeout(() => {
						fileItem.state = "complete";
						fileItem.uploaded = true;
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

// Storybook start
export default {
	title: "Components/File Uploader",
	decorators: [
		moduleMetadata({
			declarations: [
				FileUploaderStory,
				NgModelFileUploaderStory,
				DragAndDropStory,
				ReactiveFormsStory
			],
			imports: [
				FileUploaderModule,
				FormsModule,
				ReactiveFormsModule,
				NotificationModule,
				ButtonModule,
				DocumentationModule
			]
		})
	],
	args: {
		title: "Account photo",
		description: "only .jpg and .png files. 500kb max file size.",
		buttonText: "Add files",
		disabled: false,
		multiple: true
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: "select"
		},
		buttonType: {
			options: ["primary", "secondary", "tertiary", "ghost", "danger"],
			defaultValue: "primary",
			control: "select"
		}
	}
} as Meta;

const Template: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-file-uploader>
	`
});
export const Basic = Template.bind({});

const DragAndDropTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-drop-file-uploader
			[title]="title"
			[description]="description"
			[accept]="accept"
			[multiple]="multiple"
			[dropText]="dropText"
			drop="true"
			[disabled]="disabled">
		</app-drop-file-uploader>
	`
});
export const DragAndDrop = DragAndDropTemplate.bind({});
DragAndDrop.args = {
	dropText: "Drag and drop files here or upload",
	accept: [".png", "image/jpeg"]
};

const ModelTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-ngmodel-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-ngmodel-file-uploader>
	`
});
export const NgModel = ModelTemplate.bind({});
NgModel.storyName = "Using NgModel";
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const ReactiveTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-reactive-forms
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-reactive-forms>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const SkeletonTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-file-uploader skeleton="true"></app-file-uploader>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_file_uploader.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
