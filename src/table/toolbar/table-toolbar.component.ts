import { TableModel } from "../table-model.class";
import { Component, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";

/**
 * The table toolbar is reserved for global table actions such as table settings, complex filter, export, or editing table data.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-table-toolbar [model]="model">
 *		<ibm-table-toolbar-actions>
 *			<button ibmButton="primary">
 *				Delete
 *				<ibm-icon-delete16 class="bx--btn__icon"></ibm-icon-delete16>
 *			</button>
 *			<button ibmButton="primary">
 *				Save
 *				<ibm-icon-save16 class="bx--btn__icon"></ibm-icon-save16>
 *			</button>
 *			<button ibmButton="primary">
 *				Download
 *				<ibm-icon-download16 class="bx--btn__icon"></ibm-icon-download16>
 *			</button>
 *		</ibm-table-toolbar-actions>
 *			<ibm-table-toolbar-content>
 *			<ibm-table-toolbar-search [expandable]="true"></ibm-table-toolbar-search>
 *			<button ibmButton="toolbar-action">
 *				<ibm-icon-settings16 class="bx--toolbar-action__icon"></ibm-icon-settings16>
 *			</button>
 *			<button ibmButton="primary" size="sm">
 *				Primary Button
 *				<ibm-icon-add20 class="bx--btn__icon"></ibm-icon-add20>
 *			</button>
 *		</ibm-table-toolbar-content>
 *	</ibm-table-toolbar>
 * ```
 *
 */
@Component({
	selector: "ibm-table-toolbar",
	template: `
	<section class="bx--table-toolbar">
		<div
			class="bx--batch-actions"
			[ngClass]="{
				'bx--batch-actions--active': selected
			}"
			[attr.aria-label]="actionBarLabel | async">
			<div class="bx--action-list">
				<ng-content select="ibm-table-toolbar-actions"></ng-content>
				<button ibmButton="primary" class="bx--batch-summary__cancel" (click)="onCancel()">{{cancelText | async}}</button>
			</div>
			<div class="bx--batch-summary">
				<p class="bx--batch-summary__para">
					<span>{{count}}</span> items selected
				</p>
			</div>
		</div>
		<ng-content></ng-content>
	</section>
	`
})
export class TableToolbar {
	@Input() model: TableModel;

	@Input() set ariaLabel (value) {
		this.actionBarLabel.next(value.ACTION_BAR);
	}
	@Input() set cancelText(value) {
		this._cancelText.next(value.CANCEL);
	}
	get cancelText() {
		return this._cancelText;
	}
	actionBarLabel = this.i18n.get("TABLE_TOOLBAR.ACTION_BAR");
	_cancelText = this.i18n.get("TABLE_TOOLBAR.CANCEL");

	constructor(protected i18n: I18n) {}

	get count() {
		return this.model.totalDataLength > 0 ? this.model.rowsSelected.reduce((previous, current) => previous + (current ? 1 : 0), 0) : 0;
	}
	get selected() {
		return this.model.totalDataLength > 0 ? this.model.rowsSelected.some(item => item) : false;
	}

	onCancel() {
		for (let i = 0; i < this.model.rowsSelected.length; i++) {
			this.model.selectRow(i, false);
		}
	}
}
