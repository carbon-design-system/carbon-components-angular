import {
	Component,
	Input,
	Output,
	ViewChild,
	EventEmitter,
	TemplateRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "carbon-components-angular/i18n";
import { FileItem } from "./file-item.interface";

const noop = () => { };

/**
 * [See demo](../../?path=/story/components-file-uploader--basic)
 */
@Component({
	selector: "ibm-file-uploader",
	template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate">
			<label [for]="fileUploaderId" class="cds--file--label">{{title}}</label>
			<p class="cds--label-description">{{description}}</p>
			<div class="cds--file">
				<label
					*ngIf="drop"
					class="cds--file-browse-btn"
					(keyup.enter)="fileInput.click()"
					(keyup.space)="fileInput.click()"
					[ngClass]="{'cds--file-browse-btn--disabled': disabled}"
					tabindex="0">
					<div
						class="cds--file__drop-container"
						[ngClass]="{'cds--file__drop-container--drag-over': dragOver}"
						role="button"
						(click)="fileInput.click()"
						[attr.for]="fileUploaderId"
						(dragover)="onDragOver($event)"
						(dragleave)="onDragLeave($event)"
						(drop)="onDrop($event)">
						<ng-container *ngIf="!isTemplate(dropText)">{{dropText}}</ng-container>
						<ng-template *ngIf="isTemplate(dropText)" [ngTemplateOutlet]="dropText"></ng-template>
					</div>
				</label>
				<button
					*ngIf="!drop"
					type="button"
					[ibmButton]="buttonType"
					(click)="fileInput.click()"
					[attr.for]="fileUploaderId"
					[size]="size"
					[disabled]="disabled">
					{{buttonText}}
				</button>
				<input
					#fileInput
					type="file"
					class="cds--file-input"
					[accept]="accept"
					[id]="fileUploaderId"
					[multiple]="multiple"
					tabindex="-1"
					(change)="onFilesAdded()"
					[disabled]="disabled"/>
				<div class="cds--file-container">
					<ng-container *ngFor="let fileItem of files">
						<ibm-file [fileItem]="fileItem" (remove)="removeFile(fileItem)"></ibm-file>
						<div *ngIf="fileItem.invalid" class="cds--form-requirement">
							{{fileItem.invalidText}}
						</div>
					</ng-container>
				</div>
			</div>
		</ng-container>

		<ng-template #skeletonTemplate>
			<div class="cds--skeleton__text" style="width: 100px"></div>
			<div class="cds--skeleton__text" style="width: 225px"></div>
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
export class FileUploader {
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
	 * Type set for button
	 */
	@Input() buttonType: "primary" | "secondary" | "tertiary" | "ghost" | "danger" = "primary";
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
	 * Sets the size of the button.
	 */
	@Input() size: "sm" | "normal";
	/**
	 * Set to `true` to enable drag and drop.
	 */
	@Input() drop = false;
	/**
	 * Sets the text shown in drag and drop box.
	 */
	@Input() dropText: string | TemplateRef<any>;
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
	@Input() files = new Set<FileItem>();
	/**
	 * Set to `true` to disable upload button
	 */
	@Input() disabled = false;

	@Output() filesChange = new EventEmitter<any>();

	/**
	 * Controls the state of the drag and drop file container
	 */
	public dragOver = false;

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

	onBlur() {
		this.onTouchedCallback();
	}

	get fileList() {
		return Array.from(this.fileInput.nativeElement.files);
	}

	/**
	 * Propagates the injected `value`.
	 */
	writeValue(value: Set<FileItem>) {
		if (value !== this.value) {
			this.files = value;
		}
	}

	createFileItem(file): FileItem {
		return {
			uploaded: false,
			state: "edit",
			invalid: false,
			invalidText: "",
			file: file
		};
	}

	onFilesAdded() {
		if (!this.multiple) {
			this.files.clear();
		}
		for (let file of this.fileList) {
			const fileItem = this.createFileItem(file);
			this.files.add(fileItem);
		}

		this.filesChange.emit(this.files);
		this.value = this.files;
	}

	onDragOver(event) {
		event.stopPropagation();
		event.preventDefault();
		this.dragOver = true;
	}

	onDragLeave(event) {
		event.stopPropagation();
		event.preventDefault();
		this.dragOver = false;
	}

	onDrop(event) {
		event.stopPropagation();
		event.preventDefault();

		const transferredFiles = Array.from(event.dataTransfer.files);

		transferredFiles.filter(({ name, type }) => {
			// Get the file extension and add a "." to the beginning.
			const fileExtension = name.split(".").pop().replace(/^/, ".");
			// Check if the accept array contains the mime type or extension of the file.
			return this.accept.includes(type) || this.accept.includes(fileExtension) || !this.accept.length;
		}).forEach(file => {
			if (!this.files.size || this.multiple) {
				const fileItem = this.createFileItem(file);
				this.files.add(fileItem);
			}
		});

		this.filesChange.emit(this.files);
		this.value = this.files;
		this.dragOver = false;
	}

	removeFile(fileItem) {
		let shouldEmit = true;
		if (this.files) {
			shouldEmit = this.files.has(fileItem);
			this.files.delete(fileItem);
		}
		this.fileInput.nativeElement.value = "";
		if (shouldEmit) {
			this.filesChange.emit(this.files);
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
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
