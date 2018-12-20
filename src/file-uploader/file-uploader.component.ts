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
import { FileItem } from "./file-item.interface";

const noop = () => {};

@Component({
	selector: "ibm-file-uploader",
	template: `
		<strong class="bx--label">{{title}}</strong>
		<p class="bx--label-description">{{description}}</p>
		<div class="bx--file">
			<button
				ibmButton="secondary"
				(click)="fileInput.click()"
				[attr.for]="fileUploaderId">
				{{buttonText}}
			</button>
			<input
				#fileInput
				type="file"
				class="bx--file-input"
				[accept]="accept"
				[id]="fileUploaderId"
				[multiple]="multiple"
				(change)="onFilesAdded()"/>
			<div class="bx--file-container">
				<ibm-file *ngFor="let fileItem of files" [fileItem]="fileItem" (remove)="removeFile(fileItem)"></ibm-file>
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
	 * Counter used to create unique ids for file-uploader components
	 */
	static fileUploaderCount = 0;
	/**
	 * Accessible text for the button that opens the upload window
	 * Defaults to the `FILE_UPLOADER.OPEN` value from the i18n service
	 */
	@Input() buttonText = this.i18n.get().FILE_UPLOADER.OPEN;
	/**
	 * Provides the label for the title
	 */
	@Input() title: string;
	/**
	 * Provides the label for the desription
	 */
	@Input() description: String;
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
	@ViewChild("fileInput") fileInput;
	/**
	 * The list of files that have been submitted to be uploaded
	 */
	@Input() files: Set<FileItem> = new Set();
	@Output() filesChange = new EventEmitter<any>();

	protected onTouchedCallback: () => void = noop;
	protected onChangeCallback: (_: Set<FileItem>) => void = noop;

	constructor(protected i18n: I18n) {
		FileUploader.fileUploaderCount++;
	}

	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	get value(): Set<FileItem> {
		return this.files;
	}
	set value(v: Set<FileItem>) {
		if (v !== this.files) {
			this.files = v;
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
		if (value !== this.value) {
			this.files = value;
		}
	}

	onFilesAdded() {
		const files: File[] = this.fileInput.nativeElement.files;
		for (let file of files) {
			const fileItem: FileItem = {
				uploaded: false,
				state: "edit",
				file: file
			};
			this.files.add(fileItem);
			this.filesChange.emit(this.files);
		}

		this.value = this.files;
	}

	removeFile(fileItem) {
		this.files.delete(fileItem);
		this.fileInput.nativeElement.value = "";
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
