import { TableModel, TableItem } from "./table.module";
import {
	Component,
	AfterContentChecked,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

@Component({
	selector: "n-table",
	template: `
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th class="check-column" *ngIf="enableRowSelect">
						<n-checkbox [(ngModel)]="selectAllCheckbox"
							[indeterminate]="selectAllCheckboxSomeSelected"
							(change)="onSelectAllCheckboxChange()">
						</n-checkbox>
					</th>
					<ng-container *ngFor="let column of model.header; let i = index">
						<th
							*ngIf="column.visible"
							[ngStyle]="{'width': i < model.header.length - 1 ? (colWidth) + 'px' : ''}">
							{{column.data}}
							<ng-template
								[ngTemplateOutlet]="column.headerTemplate">
							</ng-template>
							<div class="col-actions">
								<button
									class="sm"
									*ngIf="filter"
									(click)="filter(i)">
										filter
									</button>
								<span
									(click)="filter(i)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path fill="#949494" d="M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z"/>
									</svg>
								</span>
								<span
									*ngIf="sort"
									(click)="sort(i)">
									<!-- arrow up -->
									<svg
										*ngIf="column.ascending && column.sorted"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M13.5 5.5L8 0 2.5 5.5l1 1 3.8-3.8V16h1.4V2.7l3.8 3.8z"/>
									</svg>
									<!-- arrow down -->
									<svg
										*ngIf="column.descending && column.sorted"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M13.5 10.5L8 16l-5.5-5.5 1-1 3.8 3.8V0h1.4v13.3l3.8-3.8z"/>
									</svg>
									<!-- sort -->
									<svg
										*ngIf="!column.sorted"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M7.5 6l1-1-4-4-4 4 1 1 2.3-2.3V14h1.4V3.7zM14.5 10l-2.3 2.3V2h-1.4v10.3L8.5 10l-1 1 4 4 4-4z"/>
									</svg>
								</span>
							</div>
						</th>
					</ng-container>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let row of model.data; let i = index" [ngClass]="{selected: model.rowsSelected[i]}">
					<td class="check-column" *ngIf="enableRowSelect">
						<n-checkbox
							[(ngModel)]="model.rowsSelected[i]"
							(change)="onRowCheckboxChange()">
						</n-checkbox>
					</td>
					<ng-container *ngFor="let item of row; let i = index">
						<td *ngIf="model.header[i].visible"
							[ngStyle]="{'width': i < row.length - 1 ? (colWidth) + 'px' : ''}">
							{{item.data}}
						</td>
					</ng-container>
				</tr>
			</tbody>
		</table>
	</div>
	`,
	styleUrls: ["./table.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class Table implements AfterContentChecked {
	@Input() model: TableModel;
	@Input() enableRowSelect = true;
	selectAllCheckbox = false;
	selectAllCheckboxSomeSelected = false;
	colWidth = 150;

	@Input() striped = false;
	@Output() selectAll = new EventEmitter<Object>();
	@Output() selectRow = new EventEmitter<Object>();
	@ViewChild("body") body;

	constructor(private applicationRef: ApplicationRef) {}

	ngAfterContentChecked() {
	}

	onSelectAllCheckboxChange(event) {
		this.applicationRef.tick();  // give app time to process the click if needed
		if (this.selectAllCheckboxSomeSelected) {
			this.selectAllCheckbox = false; // clear all boxes
		}
		this.selectAllCheckboxSomeSelected = false;
		for (let i = 0; i < this.model.rowsSelected.length; i++) {
			this.model.rowsSelected[i] = this.selectAllCheckbox;
		}
	}
	onRowCheckboxChange() {
		let startValue = this.model.rowsSelected[0];

		for (let i = 1; i < this.model.rowsSelected.length; i++) {
			let one = this.model.rowsSelected[i];

			if (one !== startValue) {
				// set indeterminate
				this.selectAllCheckbox = false;
				this.selectAllCheckboxSomeSelected = true;
				return;
			}
		}

		this.selectAllCheckboxSomeSelected = false;
		this.selectAllCheckbox = startValue;
	}



	sort(index: number) {
		if (this.model.header[index].sorted) {
			// if already sorted flip sorting direction
			this.model.header[index].ascending = this.model.header[index].descending;
		}
		this.model.sort(index);
	}



	bubble(ev, to) {
		to.emit(ev);
	}

	emitSelectAll(ev) {
		if (ev.target.checked) {
			this.body.selected["all"] = true;
		} else {
			this.body.selected = {};
		}
		this.selectAll.emit({
			selected: ev.target.checked,
		});
	}
}
