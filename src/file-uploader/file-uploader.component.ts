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
import { FileItem } from "./file-uploader.interface";

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
				<ibm-file *ngFor="let content of files"
					[content]="content"
					[files]="files"
					[file]="file"
					[filesChange]="filesChange">
				</ibm-file>
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
	@Input() files: Set<FileItem> = new Set();
	@Output() filesChange = new EventEmitter<any>();

	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: Set<FileItem>) => void = noop;

	private innerValue: any;

	constructor() {
		FileUploader.fileUploaderCount++;
	}

	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	get value(): Set<FileItem> {
		return this.innerValue;
	}
	set value(v: Set<FileItem>) {
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
	writeValue(value: Set<FileItem>) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	onFilesAdded() {
		const files: File[] = this.file.nativeElement.files;
		for (let file of files) {
			const fileDescriptor: FileItem = {
				uploaded: false,
				state: "edit",
				file: file
			};
			this.files.add(fileDescriptor);
			this.filesChange.emit(this.files);
		}

		this.value = this.files;
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
