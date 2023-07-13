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
			<cds-file-uploader
				[title]="title"
				[description]="description"
				[buttonText]="buttonText"
				[buttonType]="buttonType"
				[accept]="accept"
				[multiple]="multiple"
				[skeleton]="skeleton"
				[size]="size"
				[fileItemSize]="fileItemSize"
				[disabled]="disabled"
				formControlName="files">
			</cds-file-uploader>
			<button
				cdsButton
				*ngIf="formGroup.get('files').value && formGroup.get('files').value.size > 0"
				type="submit"
				style="margin-top: 20px">
				Upload
			</button>
		</form>
		<form [formGroup]="disabledFormGroup" (ngSubmit)="onUpload()">
			<cds-file-uploader
				[title]="title"
				[description]="description"
				[buttonText]="buttonText"
				[buttonType]="buttonType"
				[accept]="accept"
				[multiple]="multiple"
				[skeleton]="skeleton"
				[size]="size"
				formControlName="files">
			</cds-file-uploader>
			<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>
			<button cdsButton *ngIf="disabledFormGroup.get('files').value && disabledFormGroup.get('files').value.size > 0" type="submit">
				Upload
			</button>
		</form>
	`
})
export class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;
	public disabledFormGroup: FormGroup;

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

	constructor(protected formBuilder: FormBuilder) {}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			files: new FormControl(new Set<any>(), [Validators.required])
		});
		this.disabledFormGroup = this.formBuilder.group({
			files: new FormControl(new Set<any>(), [Validators.required])
		});
		this.disabledFormGroup.disable();
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
						fileItem.invalidTitle = "File size exceeds limit";
						fileItem.invalidText = "500kb max file size. Select a new file and try again.";
					}, 1500);
				}
			}
		});
	}
}
