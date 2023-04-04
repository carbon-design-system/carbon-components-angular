import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	OnChanges
} from "@angular/core";
import { Observable, OperatorFunction } from "rxjs";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { map } from "rxjs/operators";
import { TableHeaderItem } from "../table-header-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableHeadCell], [ibmTableHeadCell]",
	template: `
		<button
			class="cds--table-sort"
			*ngIf="sortable && this.sort.observers.length > 0 && column.sortable"
			[attr.aria-label]="(column.sorted && column.ascending ? getSortDescendingLabel() : getSortAscendingLabel()) | async"
			aria-live="polite"
			[ngClass]="{
				'cds--table-sort--active': column.sorted,
				'cds--table-sort--descending': column.ascending
			}"
			(click)="onClick()">
			<span
				class="cds--table-sort__flex"
				[title]="column.title"
				tabindex="-1">
				<div *ngIf="!skeleton && !column.template" cdsTableHeadCellLabel>
					{{column.data}}
				</div>
				<ng-template
					*ngIf="!skeleton && column.template"
					[ngTemplateOutlet]="column.template"
					[ngTemplateOutletContext]="{data: column.data}">
				</ng-template>
				<svg
					*ngIf="!skeleton"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--table-sort__icon"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M12.3 9.3l-3.8 3.8V1h-1v12.1L3.7 9.3 3 10l5 5 5-5z"></path>
				</svg>
				<svg
					*ngIf="!skeleton"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--table-sort__icon-unsorted"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M13.8 10.3L12 12.1V2h-1v10.1l-1.8-1.8-.7.7 3 3 3-3zM4.5 2l-3 3 .7.7L4 3.9V14h1V3.9l1.8 1.8.7-.7z"></path>
				</svg>
			</span>
		</button>
		<div
			class="cds--table-header-label"
			*ngIf="!skeleton && this.sort.observers.length === 0 || (this.sort.observers.length > 0 && !column.sortable) || !sortable">
			<span *ngIf="!column.template" [title]="column.data">{{column.data}}</span>
			<ng-template
				[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
			</ng-template>
		</div>
	`
})
export class TableHeadCell implements OnChanges {
	@Input() column: TableHeaderItem;

	@Input() skeleton = false;

	@Input() sortable = true;

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
	 * Notifies that the column should be sorted
	 */
	@Output() sort = new EventEmitter();

	@HostBinding("class.thead_action") theadAction = false;

	protected _sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
	protected _sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
	protected _filterTitle = this.i18n.getOverridable("TABLE.FILTER");

	constructor(protected i18n: I18n) { }

	ngOnChanges() {
		// Since it's not an input, and it touches the view, we're using `ngOnChanges`
		// `get`ters have caused issues in the past with the view updating outside of change detection
		this.theadAction = !!this.column.filterTemplate || this.sort.observers.length > 0;
	}

	getSortDescendingLabel(): Observable<string> {
		return this._sortDescendingLabel.subject.pipe(this.sortLabelMap());
	}

	getSortAscendingLabel(): Observable<string> {
		return this._sortAscendingLabel.subject.pipe(this.sortLabelMap());
	}

	onClick() {
		if (!this.skeleton) {
			this.sort.emit();
		}
	}

	protected sortLabelMap(): OperatorFunction<string, string> {
		return map((str: string) => {
			if (this.column.ariaSortLabel) {
				return this.column.ariaSortLabel;
			}
			if (this.column.formatSortLabel) {
				return this.column.formatSortLabel(str, this.column.ariaSortLabel);
			}
			return `${this.column.data} - ${str}`;
		});
	}
}
