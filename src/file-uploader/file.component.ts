
import {
	Component,
	Input,
	Output,
	ViewChild,
	EventEmitter,
	OnInit,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "../i18n/i18n.module";
import { FileItem } from "./file-item.interface";

@Component({
	selector: "ibm-file",
	template: `
		<p class="bx--file-filename">{{fileItem.file.name}}</p>
		<span
			*ngIf="fileItem.state === 'edit'"
			class="bx--file__state-container"
			(click)="remove.emit()"
			(keyup.enter)="remove.emit()"
			(keyup.space)="remove.emit()"
			tabindex="0">
			<ibm-icon-warning-filled16
				*ngIf="isInvalidText"
				class="bx--file--invalid">
			</ibm-icon-warning-filled16>
			<ibm-icon-close16
				class="bx--file-close"
				[ariaLabel]="translations.REMOVE_BUTTON">
			</ibm-icon-close16>
		</span>
		<span *ngIf="fileItem.state === 'upload'">
			<ibm-loading size="sm"></ibm-loading>
		</span>
		<span
			*ngIf="fileItem.state === 'complete'"
			class="bx--file__state-container"
			tabindex="0">
			<ibm-icon-checkmark-filled16
				class="bx--file-complete"
				[ariaLabel]="translations.CHECKMARK">
			</ibm-icon-checkmark-filled16>
		</span>
	`
})
export class FileComponent {
	/**
	 * Accessible translations for the close and complete icons
	 */
	@Input() translations = this.i18n.get().FILE_UPLOADER;
	/**
	 * A single `FileItem` from the set of `FileItem`s
	 */
	@Input() fileItem: FileItem;

	@Output() remove = new EventEmitter();

	@HostBinding("class.bx--file__selected-file") selectedFile = true;

	@HostBinding("class.bx--file__selected-file--invalid") get isInvalidText() {
		return this.fileItem.invalidText;
	}

	constructor(protected i18n: I18n) {}
}

export { FileComponent as File };
