import {
	Component,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	OnChanges,
	ViewChild
} from "@angular/core";
import { Observable, OperatorFunction } from "rxjs";
import { I18n } from "carbon-components-angular/i18n";
import { map } from "rxjs/operators";
import { TableHeaderItem } from "../table-header-item.class";
import { NgClass, NgTemplateOutlet, AsyncPipe } from "@angular/common";
import { TableHeadCellLabel } from "./table-head-cell-label.directive";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableHeadCell], [ibmTableHeadCell]",
	template: `
		@if (sortable && this.sort.observers.length > 0 && column.sortable) {
			<button
				class="cds--table-sort"
				[attr.aria-label]="(column.sorted && column.ascending ? getSortDescendingLabel() : getSortAscendingLabel()) | async"
				aria-live="polite"
				[ngClass]="{
					'cds--table-sort--active': column.sorted,
					'cds--table-sort--descending': column.ascending
				}"
				(click)="onClick($event)">
				@if (headerAILabelDecoratorLayout) {
					<span
						class="cds--table-sort__flex"
						[title]="column.title"
						tabindex="-1">
						<div cdsTableHeadCellLabel>{{ getHeaderLabelText() }}</div>
						@if (!skeleton) {
							<svg class="cds--table-sort__icon" cdsIcon="arrow--down"></svg>
						}
						@if (!skeleton) {
							<svg class="cds--table-sort__icon-unsorted" cdsIcon="arrows--vertical"></svg>
						}
						<div
							#decoratorInner
							class="cds--table-header-label--decorator-inner"
							(click)="onDecoratorRegionClick($event)">
							<ng-template
								[ngTemplateOutlet]="column.template"
								[ngTemplateOutletContext]="{data: column.data}">
							</ng-template>
						</div>
					</span>
				}
				@if (!headerAILabelDecoratorLayout) {
					<span
						class="cds--table-sort__flex"
						[title]="column.title"
						tabindex="-1">
						@if (!skeleton && !column.template) {
							<div
								cdsTableHeadCellLabel
								[class.cds--table-header-label--ai-label]="column.hasAILabelHeader"
								[class.cds--table-header-label--slug]="column.hasAILabelHeader">
								{{column.data}}
							</div>
						}
						@if (!skeleton && column.template) {
							<div
								cdsTableHeadCellLabel
								[class.cds--table-header-label--ai-label]="column.hasAILabelHeader"
								[class.cds--table-header-label--slug]="column.hasAILabelHeader">
								<ng-template
									[ngTemplateOutlet]="column.template"
									[ngTemplateOutletContext]="{data: column.data}">
								</ng-template>
							</div>
						}
						@if (!skeleton) {
							<svg class="cds--table-sort__icon" cdsIcon="arrow--down"></svg>
						}
						@if (!skeleton) {
							<svg class="cds--table-sort__icon-unsorted" cdsIcon="arrows--vertical"></svg>
						}
					</span>
				}
			</button>
		}
		@if (headerAILabelDecoratorLayout && ((!skeleton && sort.observers.length === 0) || (sort.observers.length > 0 && !column.sortable) || !sortable)) {
			<div
				class="cds--table-header-label"
				[ngClass]="{
					'cds--table-header-label--ai-label': column.hasAILabelHeader,
					'cds--table-header-label--slug': column.hasAILabelHeader,
					'cds--table-header-label--decorator': column.hasAILabelHeader
				}">
				@if (getHeaderLabelText()) {
					<span>{{ getHeaderLabelText() }}</span>
				}
				<div class="cds--table-header-label--decorator-inner">
					<ng-template
						[ngTemplateOutlet]="column.template"
						[ngTemplateOutletContext]="{data: column.data}">
					</ng-template>
				</div>
			</div>
		}
		@if (!headerAILabelDecoratorLayout && ((!skeleton && sort.observers.length === 0) || (sort.observers.length > 0 && !column.sortable) || !sortable)) {
			<div
				class="cds--table-header-label"
				[ngClass]="{
					'cds--table-header-label--ai-label': column.hasAILabelHeader,
					'cds--table-header-label--slug': column.hasAILabelHeader
				}">
				@if (!column.template) {
					<span [title]="column.data">
						@if (!skeleton) {
							{{column.data}}
						}
					</span>
				}
				<ng-template
					[ngTemplateOutlet]="column.template"
					[ngTemplateOutletContext]="{data: column.data}">
				</ng-template>
			</div>
		}
	`,
	standalone: true,
	imports: [
		NgClass,
		NgTemplateOutlet,
		TableHeadCellLabel,
		AsyncPipe
	]
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

	@ViewChild("decoratorInner") decoratorInnerRef: ElementRef;

	@HostBinding("class.thead_action") theadAction = false;

	@HostBinding("class.cds--table-sort__header") get sortHeaderHost() {
		return this.sortable && this.sort.observers.length > 0 && this.column?.sortable;
	}

	@HostBinding("class.cds--table-sort__header--ai-label") get sortHeaderAILabelHost() {
		return this.column?.hasAILabelHeader && this.sortHeaderHost;
	}

	@HostBinding("class.cds--table-sort__header--decorator") get sortHeaderDecoratorHost() {
		return this.column?.hasAILabelHeader && this.column?.template && this.sortHeaderHost;
	}

	/**
	 * When the column uses a separate template for the slug/AI: label text + sort icons + `cds--table-header-label--decorator-inner`.
	 */
	get headerAILabelDecoratorLayout(): boolean {
		return !!(this.column?.hasAILabelHeader && this.column?.template);
	}

	protected _sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
	protected _sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
	protected _filterTitle = this.i18n.getOverridable("TABLE.FILTER");

	constructor(protected i18n: I18n) {}

	ngOnChanges() {
		this.theadAction = !!(this.column && this.column.filterTemplate) || this.sort.observers.length > 0;
	}

	/**
	 * Text label for the column when `hasAILabelHeader` uses a separate `template` for the slug.
	 */
	getHeaderLabelText(): string {
		if (!this.column) {
			return "";
		}
		const d = this.column.data;
		if (d != null && typeof d === "object" && "label" in d && (d as { label?: unknown }).label != null) {
			return String((d as { label: unknown }).label);
		}
		if (typeof d === "string") {
			return d;
		}
		return "";
	}

	getSortDescendingLabel(): Observable<string> {
		return this._sortDescendingLabel.subject.pipe(this.sortLabelMap());
	}

	getSortAscendingLabel(): Observable<string> {
		return this._sortAscendingLabel.subject.pipe(this.sortLabelMap());
	}

	/**
	 * Prevent focus from moving to parent button when click on decorator
	 */
	onDecoratorRegionClick(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
	}

	onClick(event: MouseEvent) {
		if (this.skeleton) {
			return;
		}
		if (
			this.column?.hasAILabelHeader &&
			this.decoratorInnerRef?.nativeElement?.contains(event.target)
		) {
			return;
		}
		this.sort.emit();
	}

	protected sortLabelMap(): OperatorFunction<string, string> {
		return map((str: string) => {
			if (this.column.ariaSortLabel) {
				return this.column.ariaSortLabel;
			}
			if (this.column.formatSortLabel) {
				return this.column.formatSortLabel(str, this.column.ariaSortLabel);
			}
			const header =
				this.getHeaderLabelText() ||
				(typeof this.column.data === "string" ? this.column.data : "");
			return `${header} - ${str}`;
		});
	}
}
