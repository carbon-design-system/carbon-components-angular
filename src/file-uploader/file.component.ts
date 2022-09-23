import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	OnDestroy
} from "@angular/core";

import { I18n } from "carbon-components-angular/i18n";
import { FileItem } from "./file-item.interface";

@Component({
	selector: "ibm-file",
	template: `
		<p class="bx--file-filename">{{fileItem.file.name}}</p>
		<span
			*ngIf="fileItem.state === 'edit'"
			class="bx--file__state-container">
			<svg
				*ngIf="isInvalidText"
				ibmIcon="warning--filled"
				class="bx--file--invalid"
				size="16">
			</svg>
			<button
				type="button"
				class="bx--file-close"
				[attr.aria-label]="translations.REMOVE_BUTTON"
				tabindex="0"
				(click)="remove.emit()"
				(keyup.enter)="remove.emit()"
				(keyup.space)="remove.emit()">
				<svg ibmIcon="close" size="16"></svg>
			</button>
		</span>
		<span *ngIf="fileItem.state === 'upload'">
			<div class="bx--inline-loading__animation">
				<ibm-loading size="sm"></ibm-loading>
			</div>
		</span>
		<span *ngIf="fileItem.state === 'complete'" class="bx--file__state-container">
			<svg
				ibmIcon="checkmark--filled"
				size="16"
				class="bx--file-complete"
				[ariaLabel]="translations.CHECKMARK"
				[isFocusable]="true">
			</svg>
		</span>
	`
})
export class FileComponent implements OnDestroy {
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

	ngOnDestroy() {
		this.remove.emit();
	}
}
