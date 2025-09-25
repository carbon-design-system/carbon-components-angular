import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnDestroy,
	Output,
	TemplateRef
} from "@angular/core";

import { I18n } from "carbon-components-angular/i18n";
import { FileItem } from "./file-item.interface";

@Component({
	selector: "cds-file, ibm-file",
	template: `
		<p class="cds--file-filename" [title]="fileItem.file.name">
			<ng-template
				*ngIf="isTemplate(nameTpl); else defaultName"
				[ngTemplateOutlet]="nameTpl"
				[ngTemplateOutletContext]="{ $implicit: fileItem }">
			</ng-template>
			<ng-template #defaultName>{{ fileItem.file.name }}</ng-template>
		</p>
		<span *ngIf="fileItem.state === 'edit'" class="cds--file__state-container">
			<svg
				*ngIf="isInvalidText"
				cdsIcon="warning--filled"
				class="cds--file--invalid"
				size="16">
			</svg>
			<ng-template
				*ngIf="isTemplate(actionsTpl); else defaultActions"
				[ngTemplateOutlet]="actionsTpl"
				[ngTemplateOutletContext]="{ $implicit: fileItem }">
			</ng-template>
			<ng-template #defaultActions>
				<button
					type="button"
					cdsButton="ghost"
					iconOnly="true"
					[size]="size"
					[attr.aria-label]="translations.REMOVE_BUTTON"
					(click)="remove.emit()"
					(keyup.enter)="remove.emit()"
					(keyup.space)="remove.emit()">
					<svg cdsIcon="trash-can" size="16"></svg>
				</button>
			</ng-template>
		</span>
		<span *ngIf="fileItem.state === 'upload'">
			<div class="cds--inline-loading__animation">
				<cds-loading size="sm"></cds-loading>
			</div>
		</span>
		<span
			*ngIf="fileItem.state === 'complete'"
			class="cds--file__state-container">
			<svg
				cdsIcon="checkmark--filled"
				size="16"
				class="cds--file-complete"
				[ariaLabel]="translations.CHECKMARK">
			</svg>
		</span>
		<div
			class="cds--form-requirement"
			role="alert"
			*ngIf="fileItem.invalid">
			<div class="cds--form-requirement__title">
				{{ fileItem.invalidTitle }}
			</div>
			<p class="cds--form-requirement__supplement">
				{{ fileItem.invalidText }}
			</p>
		</div>
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

	@Input() size: "sm" | "md" | "lg" = "lg";

	/**
	 * A custom template for the file name
	 */
	@Input() nameTpl: TemplateRef<unknown>;

	/**
	 * A custom template for the available file actions
	 */
	@Input() actionsTpl: TemplateRef<unknown>;

	@Output() remove = new EventEmitter();

	@HostBinding("class.cds--file__selected-file") selectedFile = true;

	@HostBinding("class.cds--file__selected-file--invalid") get isInvalidText() {
		return this.fileItem.invalidText;
	}

	@HostBinding("class.cds--file__selected-file--sm") get fileSizeSmall() {
		return this.size === "sm";
	}

	@HostBinding("class.cds--file__selected-file--md") get fileSizeMedium() {
		return this.size === "md";
	}

	@HostBinding("class.cds--file__selected-file--lg") get fileSizeLarge() {
		return this.size === "lg";
	}

	constructor(protected i18n: I18n) {}

	public isTemplate(value: unknown): boolean {
		return value instanceof TemplateRef;
	}

	ngOnDestroy() {
		this.remove.emit();
	}
}
