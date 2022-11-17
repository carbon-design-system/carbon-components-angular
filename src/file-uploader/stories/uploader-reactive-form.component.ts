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
				[fileItemSize]="fileItemSize"
				[disabled]="disabled"
				formControlName="files">
			</ibm-file-uploader>
			<button
				ibmButton
				*ngIf="formGroup.get('files').value && formGroup.get('files').value.size > 0"
				type="submit"
				style="margin-top: 20px">
				Upload
			</button>
		</form>
	`
})
export class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

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
