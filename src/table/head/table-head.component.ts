import {
	Component,
	Input,
	Output,
	EventEmitter,
	AfterViewInit
} from "@angular/core";

import { TableModel } from "../table-model.class";
import { getScrollbarWidth } from "carbon-components-angular/utils";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { TableRowSize } from "../table.types";

/**
 * A subcomponent that creates the thead of the table
 *
 * ## Basic usage
 *
 * ```html
 * 	<thead cdsTableHead [model]="model"></thead>
 * ```
 */
@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableHead], [ibmTableHead]",
	template: `
		@if (model) {
			<tr>
				@if (model.hasExpandableRows()) {
					<th
						cdsTableHeadExpand
						scope="col"
						[showExpandAllToggle]="showExpandAllToggle"
						[ngClass]="{'cds--table-expand-v2': stickyHeader}"
						[id]="model.getId('expand')"
						[expanded]="model.expandableRowsCount() === model.expandedRowsCount()"
						(expandedChange)="onExpandAllRowsChange($event)">
					</th>
				}
				@if (!skeleton && showSelectionColumn && enableSingleSelect) {
					<th
						scope="col"
						[id]="model.getId('select')">
						<!-- add width 0; since the carbon styles don't seem to constrain this headers width -->
					</th>
				}
				@if (!skeleton && showSelectionColumn && !enableSingleSelect) {
					<th
						cdsTableHeadCheckbox
						scope="col"
						[checked]="selectAllCheckbox"
						[indeterminate]="selectAllCheckboxSomeSelected"
						[ariaLabel]="getCheckboxHeaderLabel()"
						[skeleton]="skeleton"
						[name]="model.getHeaderId('select')"
						(change)="onSelectAllCheckboxChange()"
						[id]="model.getId('select')">
					</th>
				}
				@for (column of model.header; track column; let i = $index) {
					@if (column && column.visible) {
						<th
							[ngStyle]="column.style"
							cdsTableHeadCell
							scope="col"
							[class]="column.className"
							[sortable]="sortable"
							[skeleton]="skeleton"
							[id]="model.getId(i)"
							[column]="column"
							[filterTitle]="getFilterTitle()"
							[attr.colspan]="column.colSpan"
							[attr.rowspan]="column.rowSpan"
							(sort)="sort.emit(i)">
						</th>
					}
				}
				@if (!skeleton && stickyHeader && scrollbarWidth) {
					<th
					scope="col"
					[ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
					<!--
						Scrollbar pushes body to the left so this header column is added to push
						the title bar the same amount and keep the header and body columns aligned.
					-->
				</th>
			}
			</tr>
		}
		<ng-content />
	`,
	styles: [`
		.cds--table-expand-v2 {
			padding-left: 2.5rem;
		}
	`]
})
export class TableHead implements AfterViewInit {
	@Input() model: TableModel;

	@Input() showSelectionColumn = true;

	@Input() enableSingleSelect = false;

	@Input() selectAllCheckboxSomeSelected = false;

	@Input() selectAllCheckbox = false;

	@Input() skeleton = false;

	@Input() stickyHeader = false;

	@Input() showExpandAllToggle = false;

	/**
	 * Setting sortable to false will disable all headers including headers which are sortable. Is is
	 * possible to set the sortable state on the header item to disable/enable sorting for only some headers.
	 */
	@Input() sortable = true;

	@Input()
	set checkboxHeaderLabel(value: string | Observable<string>) {
		this._checkboxHeaderLabel.override(value);
	}

	get checkboxHeaderLabel() {
		return this._checkboxHeaderLabel.value;
	}

	@Input()
	set sortDescendingLabel(value: string | Observable<string>) {
		this._sortDescendingLabel.override(value);
	}

	get sortDescendingLabel() {
		return this._sortDescendingLabel.value;
	}

	@Input()
	set sortAscendingLabel(value: string | Observable<string>) {
		this._sortAscendingLabel.override(value);
	}

	get sortAscendingLabel() {
		return this._sortAscendingLabel.value;
	}

	@Input()
	set filterTitle(value: string | Observable<string>) {
		this._filterTitle.override(value);
	}

	get filterTitle() {
		return this._filterTitle.value;
	}

	/**
	 * Emits an index of the column that wants to be sorted.
	 */
	@Output() sort = new EventEmitter<number>();
	/**
	 * Emits if all rows are selected.
	 *
	 * @param model
	 */
	@Output() selectAll = new EventEmitter<TableModel>();
	/**
	 * Emits if all rows are deselected.
	 *
	 * @param model
	 */
	@Output() deselectAll = new EventEmitter<TableModel>();
	/**
	 * Emits if all rows are expanded.
	 *
	 * @param model
	 */
	@Output() expandAllRows = new EventEmitter<TableModel>();
	/**
	 * Emits if all rows are collapsed.
	 *
	 * @param model
	 */
	@Output() collapseAllRows = new EventEmitter<TableModel>();

	public scrollbarWidth = 0;

	protected _checkboxHeaderLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
	protected _sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
	protected _sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
	protected _filterTitle = this.i18n.getOverridable("TABLE.FILTER");

	constructor(protected i18n: I18n) {}

	ngAfterViewInit() {
		setTimeout(() => {
			this.scrollbarWidth = getScrollbarWidth();
		});
	}

	onSelectAllCheckboxChange() {
		if (!this.selectAllCheckbox && !this.selectAllCheckboxSomeSelected) {
			this.selectAll.emit(this.model);
		} else {
			this.deselectAll.emit(this.model);
		}
	}

	onExpandAllRowsChange(expand: boolean) {
		if (expand) {
			this.expandAllRows.emit(this.model);
		} else {
			this.collapseAllRows.emit(this.model);
		}
	}

	getCheckboxHeaderLabel(): Observable<string> {
		return this._checkboxHeaderLabel.subject;
	}

	getSortDescendingLabel(): Observable<string> {
		return this._sortDescendingLabel.subject;
	}

	getSortAscendingLabel(): Observable<string> {
		return this._sortAscendingLabel.subject;
	}

	getFilterTitle(): Observable<string> {
		return this._filterTitle.subject;
	}
}
