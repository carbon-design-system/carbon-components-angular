import { TableModel } from "../table-model.class";
import { I18n, Overridable } from "../../i18n/i18n.module";
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
export declare class TableToolbar {
    protected i18n: I18n;
    model: TableModel;
    ariaLabel: {
        ACTION_BAR: string;
    };
    cancelText: {
        CANCEL: string;
    };
    actionBarLabel: Overridable;
    _cancelText: Overridable;
    constructor(i18n: I18n);
    readonly count: number;
    readonly selected: boolean;
    onCancel(): void;
}
