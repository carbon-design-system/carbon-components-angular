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

/**
 * [See demo](../../?path=/story/file-uploader--basic)
 *
 * <example-url>../../iframe.html?id=file-uploader--basic</example-url>
 *
 * @export
 * @class FileUploader
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-file-uploader",
	template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate">
			<strong class="bx--file--label">{{title}}</strong>
			<p class="bx--label-description">{{description}}</p>
			<div class="bx--file">
				<button
					ibmButton="primary"
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
					tabindex="-1"
					(change)="onFilesAdded()"/>
				<div class="bx--file-container">
					<ibm-file *ngFor="let fileItem of files" [fileItem]="fileItem" (remove)="removeFile(fileItem)"></ibm-file>
				</div>
			</div>
		</ng-container>

		<ng-template #skeletonTemplate>
			<div class="bx--skeleton__text" style="width: 100px"></div>
			<div class="bx--skeleton__text" style="width: 225px"></div>
			<button ibmButton skeleton="true"></button>
		</ng-template>
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
	 * Accessible text for the button that opens the upload window.
	 *
	 * Defaults to the `FILE_UPLOADER.OPEN` value from the i18n service
	 */
	@Input() buttonText = this.i18n.get().FILE_UPLOADER.OPEN;
	/**
	 * Text set to the title
	 */
	@Input() title: string;
	/**
	 * Text set to the description
	 */
	@Input() description: string;
	/**
	 * Specify the types of files that the input should be able to receive
	 */
	@Input() accept = [];
	/**
	 * Set to `false` to tell the component to only accept a single file on upload.
	 *
	 * Defaults to `true`. Accepts multiple files.
	 */
	@Input() multiple = true;
	/**
	 * Set to `true` for a loading file uploader.
	 */
	@Input() skeleton = false;
	/**
	 * Provides a unique id for the underlying <input> node
	 */
	@Input() fileUploaderId = `file-uploader-${FileUploader.fileUploaderCount}`;
	/**
	 * Maintains a reference to the view DOM element of the underlying <input> node
	 */
	@ViewChild("fileInput") fileInput;
	/**
	 * The list of files that have been submitted to be uploaded
	 */
	@Input() files: Set<FileItem>;
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
		// overrides the undefined files value set by the user
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
		const files = this.fileInput.nativeElement.files;
		if (!this.multiple) {
			this.files.clear();
		}
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
	 * Registers the injected function to control the touch use of the `FileUploader`.
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
