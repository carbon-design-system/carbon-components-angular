import {
	Component,
	EventEmitter,
	HostBinding,
	OnDestroy,
	ChangeDetectionStrategy,
	Input,
	Output,
	TemplateRef,
	inject
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

import { I18n } from "carbon-components-angular/i18n";
import { FileItem } from "./file-item.interface";
import { IconDirective } from "carbon-components-angular/icon";
import { Loading } from "carbon-components-angular/loading";
import { Button } from "carbon-components-angular/button";

@Component({
	selector: "cds-file, ibm-file",
	template: `
		<p class="cds--file-filename" [title]="fileItem.file.name">
			@if (isTemplate(nameTpl)) {
				<ng-template
					[ngTemplateOutlet]="nameTpl"
					[ngTemplateOutletContext]="{ $implicit: fileItem }">
				</ng-template>
			} @else {
				{{ fileItem.file.name }}
			}
		</p>
		@if (fileItem.state === 'edit') {
			<span class="cds--file__state-container">
				@if (isInvalidText) {
					<svg
						cdsIcon="warning--filled"
						class="cds--file--invalid"
						size="16">
					</svg>
				}
				@if (isTemplate(actionsTpl)) {
					<ng-template
						[ngTemplateOutlet]="actionsTpl"
						[ngTemplateOutletContext]="{ $implicit: fileItem }">
					</ng-template>
				} @else {
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
				}
			</span>
		}
		@if (fileItem.state === 'upload') {
			<span>
				<div class="cds--inline-loading__animation">
					<cds-loading size="sm"></cds-loading>
				</div>
			</span>
		}
		@if (fileItem.state === 'complete') {
			<span class="cds--file__state-container">
				<svg
					cdsIcon="checkmark--filled"
					size="16"
					class="cds--file-complete"
					[ariaLabel]="translations.CHECKMARK">
				</svg>
			</span>
		}
		@if (fileItem.invalid) {
			<div
				class="cds--form-requirement"
				role="alert">
				<div class="cds--form-requirement__title">
					{{ fileItem.invalidTitle }}
				</div>
				<p class="cds--form-requirement__supplement">
					{{ fileItem.invalidText }}
				</p>
			</div>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgTemplateOutlet, IconDirective, Loading, Button]
})
export class FileComponent implements OnDestroy {
	public i18n = inject(I18n);

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

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	public isTemplate(value: unknown): boolean {
		return value instanceof TemplateRef;
	}

	ngOnDestroy() {
		this.remove.emit();
	}
}
