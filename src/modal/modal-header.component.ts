import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { IconButton } from "carbon-components-angular/button";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * ***Inputs***
 * ```html
 * <cds-modal-header>Header text</cds-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <cds-modal-header (closeSelect)="closeModal()">Header text</cds-modal-header>
 * ```
 */
@Component({
	selector: "cds-modal-header, ibm-modal-header",
	template: `
		<header class="cds--modal-header {{theme}}">
			<ng-content />
			<div class="cds--modal-close-button">
				@if (showCloseButton) {
					<cds-icon-button
						type="button"
						[buttonNgClass]="buttonNgClass"
						[buttonAttributes]="buttonAttributes"
						align="left"
						[description]="closeLabel"
						(click)="onClose()">
						<svg cdsIcon="close" size="20" class="cds--modal-close__icon"></svg>
					</cds-icon-button>
				}
			</div>
		</header>

	`,
	standalone: true,
	imports: [IconButton, IconDirective]
})
export class ModalHeader {
	/**
	 * @deprecated since v5
	 * Sets the style on the modal heading based on its category.
	 */
	@Input() theme = "default";
	/**
	 * Accessible label for the header close button.
	 * Defaults to the `MODAL.CLOSE` value from the i18n service.
	 */
	@Input() closeLabel = this.i18n.get().MODAL.CLOSE;
	/**
	 * Set to `false` to hide the close button.
	 */
	@Input() showCloseButton = true;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 */
	@Output() closeSelect = new EventEmitter();

	buttonNgClass = {
		"cds--modal-close": true
	};

	buttonAttributes = {
		"aria-label": this.i18n.get().MODAL.CLOSE
	};

	constructor(protected i18n: I18n) {}

	/**
	 * Handles click for the close icon button within the `Modal`.
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
