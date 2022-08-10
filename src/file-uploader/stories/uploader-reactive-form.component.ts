import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { NotificationService } from "../../notification";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";

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
export class ReactiveFormsStory implements OnInit {
	static notificationCount = 0;
	public formGroup: FormGroup;

	@Input() notificationId = `notification-${ReactiveFormsStory.notificationCount++}`;
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
	) { }

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
