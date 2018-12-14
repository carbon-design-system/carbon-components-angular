import {
	Component,
	Input,
	Output,
	ViewChild,
	EventEmitter,
	OnInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "../i18n/i18n.module";
import { FileUploaderContent } from "./file-uploader.interface";

const noop = () => {
};

@Component({
	selector: "ibm-file-uploader",
	template: `
		<strong class="bx--label">{{labelTitle}}</strong>
		<p class="bx--label-description">{{labelDescription}}</p>
		<div class="bx--file">
			<button
				ibmButton="secondary"
				(click)="file.click()"
				[attr.for]="fileUploaderId">
				{{buttonLabel}}
			</button>
			<input
				#file
				type="file"
				class="bx--file-input"
				[accept]="accept"
				[id]="fileUploaderId"
				[multiple]="multiple"
				(change)="onFilesAdded()"/>
			<div class="bx--file-container">
				<span class="bx--file__selected-file" *ngFor="let content of files">
					<p class="bx--file-filename">{{content.file.name}}</p>
					<span *ngIf="content.state === 'edit'" class="bx--file__state-container" (click)="removeFile(content)">
						<svg class="bx--file-close" fill-rule="evenodd" role="img" width="16" height="16" viewBox="0 0 16 16" tabindex="0"
							[attr.aria-label]="translations.CLOSE_BUTTON" [attr.alt]="translations.CLOSE_BUTTON">
							<title>{{translations.CLOSE_TITLE}}</title>
							<path d="M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414
							8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
						</svg>
					</span>
					<span *ngIf="content.state === 'upload'">
						<ibm-loading size="sm"></ibm-loading>
					</span>
					<span *ngIf="content.state === 'complete'" class="bx--file__state-container">
						<svg class="bx--file-complete" fill-rule="evenodd" role="img" width="16" height="16" viewBox="0 0 16 16" tabindex="0"
							[attr.aria-label]="translations.CHECKMARK" [attr.alt]="translations.CHECKMARK">
							<title>{{translations.CHECKMARK_TITLE}}</title>
							<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.293-11.332L6.75 9.21 4.707 7.168 3.293 8.582 6.75
							 12.04l5.957-5.957-1.414-1.414z"></path>
						</svg>
					</span>
				</span>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: FileUploader,
			multi: true
		}
	]
})
export class FileUploader implements OnInit {
	/**
	 * Variable used for creating unique ids for file-uploader components
	 */
	static fileUploaderCount = 0;

	/**
	 * Accessible translations for the close and complete icons
	 */
	@Input() translations = this.i18n.get().FILE_UPLOADER;
	/**
	 * Provided labels for the user to modify
	 */
	@Input() labelTitle;
	@Input() buttonLabel = "Add file";
	@Input() labelDescription = "500kb max file size.";
	/**
	 * Specify the types of files that the input should be able to receive
	 */
	@Input() accept = [];
	/**
	 * Specify if the component should accept multiple files to upload
	 */
	@Input() multiple = true;
	/**
	 * Provide a unique id for the underlying <input> node
	 */
	@Input() fileUploaderId = `file-uploader-${FileUploader.fileUploaderCount}`;
	/**
	 * Maintains a reference to the view DOM element of the underlying <input> node
	 */
	@ViewChild("file") file;
	/**
	 * The list of files that have been submitted to be uploaded
	 */
	@Input() files: Set<FileUploaderContent> = new Set();
	@Output() filesChange = new EventEmitter<any>();

	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: Set<FileUploaderContent>) => void = noop;

	private innerValue: any;

	constructor(protected i18n: I18n) {
		FileUploader.fileUploaderCount++;
	}

	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	get value(): Set<FileUploaderContent> {
		return this.innerValue;
	}
	set value(v: Set<FileUploaderContent>) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChangeCallback(v);
		}
	}

	ngOnInit() {
		if (!this.files) {
			this.files = new Set();
			this.filesChange.emit(this.files);
		}
	}

	onBlur() {
		this.onTouchedCallback();
	}

	/**
	 * Propagates the injected `value`.
	 */
	writeValue(value: Set<FileUploaderContent>) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	onFilesAdded() {
		const files: File[] = this.file.nativeElement.files;
		for (let file of files) {
			const fileDescriptor: FileUploaderContent = {
				uploaded: false,
				state: "edit",
				file: file
			};
			this.files.add(fileDescriptor);
			this.filesChange.emit(this.files);
		}

		this.value = this.files;
	}

	removeFile(file) {
		this.files.delete(file);
		this.file.nativeElement.value = "";
		this.filesChange.emit(this.files);
	}

	/**
	 * Registering the function injected to control the touch use of the `FileUploader`.
	 */
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}
	/**
	 * Sets a method in order to propagate changes back to the form.
	 */
	registerOnChange(fn: any) {
		this.onChangeCallback = fn;
	}
}
