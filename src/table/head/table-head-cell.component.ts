import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	OnChanges
} from "@angular/core";
import { Observable, OperatorFunction } from "rxjs";
import { I18n, Overridable } from "./../../i18n/i18n.module";
import { map } from "rxjs/operators";
import { TableHeaderItem } from "./../table-header-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableHeadCell]",
	template: `
		<button
			class="bx--table-sort"
			*ngIf="!skeleton && this.sort.observers.length > 0 && column.sortable"
			[attr.aria-label]="(column.sorted && column.ascending ? getSortDescendingLabel() : getSortAscendingLabel()) | async"
			aria-live="polite"
			[ngClass]="{
				'bx--table-sort--active': column.sorted,
				'bx--table-sort--ascending': column.ascending
			}"
			(click)="sort.emit()">
			<span
				*ngIf="!column.template"
				[title]="column.data"
				tabindex="-1">
				{{column.data}}
			</span>
			<ng-template
				[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
			</ng-template>
			<svg
				focusable="false"
				preserveAspectRatio="xMidYMid meet"
				style="will-change: transform;"
				xmlns="http://www.w3.org/2000/svg"
				class="bx--table-sort__icon"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				aria-hidden="true">
				<path d="M12.3 9.3l-3.8 3.8V1h-1v12.1L3.7 9.3 3 10l5 5 5-5z"></path>
			</svg>
			<svg
				focusable="false"
				preserveAspectRatio="xMidYMid meet"
				style="will-change: transform;"
				xmlns="http://www.w3.org/2000/svg"
				class="bx--table-sort__icon-unsorted"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				aria-hidden="true">
				<path d="M13.8 10.3L12 12.1V2h-1v10.1l-1.8-1.8-.7.7 3 3 3-3zM4.5 2l-3 3 .7.7L4 3.9V14h1V3.9l1.8 1.8.7-.7z"></path>
			</svg>
		</button>
		<span
			class="bx--table-header-label"
			*ngIf="!skeleton && this.sort.observers.length === 0 || (this.sort.observers.length > 0 && !column.sortable)">
			<span *ngIf="!column.template" [title]="column.data">{{column.data}}</span>
			<ng-template
				[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
			</ng-template>
		</span>
		<button
			[ngClass]="{'active': column.filterCount > 0}"
			*ngIf="column.filterTemplate"
			type="button"
			aria-expanded="false"
			aria-haspopup="true"
			[ibmTooltip]="column.filterTemplate"
			trigger="click"
			[title]="getFilterTitle() | async"
			placement="bottom,top"
			[data]="column.filterData">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon--sm"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path d="M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z"/>
			</svg>
			<span *ngIf="column.filterCount > 0">
				{{column.filterCount}}
			</span>
		</button>
	`
})
export class TableHeadCell implements OnChanges {
	@Input() column: TableHeaderItem;

	@Input() skeleton = false;

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

	getFilterTitle(): Observable<string> {
		return this._filterTitle.subject;
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
