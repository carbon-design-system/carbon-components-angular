import {
	Component,
	OnInit,
	OnChanges,
	DoCheck,
	Input,
	Output,
	ViewChild,
	EventEmitter
} from "@angular/core";
import { TableService } from "./table.service";
import { Column } from "./column.component";

@Component({
	selector: "table-header",
	template: `
	<table>
		<thead>
			<tr>
				<th class="check-column">
					<div class="checkbox">
						<label>
							<input type="checkbox" (change)="selectAll($event)"/>
							<span></span>
						</label>
					</div>
				</th>
				<th 
					*ngFor="let column of tableService.getCols({}, cols)"
					[ngStyle]="{'width': (column.col.width || colWidth) + 'px'}">
					<template
						[ngTemplateOutlet]="column.col.headerTemplate">
					</template>
					<div class="col-actions">
						<button 
							class="sm" 
							*ngIf="column.col.filter"
							(click)="filter(column.col)">
								filter
							</button>
						<span
							(click)="filter(column.col)">
							<svg 
								xmlns="http://www.w3.org/2000/svg"
								width="16" 
								height="16" 
								viewBox="0 0 16 16">
								<path fill="#949494" d="M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z"/>
							</svg>
						</span>
						<span
							*ngIf="column.col.sort"
							(click)="sort(column.col)">
							<!-- arrow up -->
							<svg 
								*ngIf="column.col.direction === sorts.ascending && column.col.sorted" 
								xmlns="http://www.w3.org/2000/svg" 
								width="16" 
								height="16" 
								viewBox="0 0 16 16">
								<path d="M13.5 5.5L8 0 2.5 5.5l1 1 3.8-3.8V16h1.4V2.7l3.8 3.8z"/>
							</svg>
							<!-- arrow down -->
							<svg 
								*ngIf="column.col.direction === sorts.descending && column.col.sorted" 
								xmlns="http://www.w3.org/2000/svg" 
								width="16" 
								height="16" 
								viewBox="0 0 16 16">
								<path d="M13.5 10.5L8 16l-5.5-5.5 1-1 3.8 3.8V0h1.4v13.3l3.8-3.8z"/>
							</svg>
							<!-- sort -->
							<svg 
								*ngIf="!column.col.sorted" 
								xmlns="http://www.w3.org/2000/svg" 
								width="16" 
								height="16" 
								viewBox="0 0 16 16">
								<path d="M7.5 6l1-1-4-4-4 4 1 1 2.3-2.3V14h1.4V3.7zM14.5 10l-2.3 2.3V2h-1.4v10.3L8.5 10l-1 1 4 4 4-4z"/>
							</svg>
						</span> 
					</div>
					<div 
						*ngIf="column.col.resizeable"
						class="resizer"
						(mousedown)="mouseDown($event, column.col)">
					</div>
				</th>
			</tr>
		</thead>
	</table>
	`,
	styleUrls: ["./table-header.component.css"],
	providers: [TableService]
})
export class TableHeader {
	@Input() cols;
	@Input() colWidth: number;
	@Output() doSelectAll = new EventEmitter<Object>();
	private isTabMoving = false;
	private isTabResizeing = false;
	private movingCol: Column = null;
	private resizingCol: Column = null;
	private lastX = 0;
	private sorts = Column.sort;

	constructor(private tableService: TableService) {}

	sort(col: Column) {
		for (let column of this.tableService.getCols({}, this.cols)) {
			if (column.col !== col) {
				column.col.direction = Column.sort.descending;
				column.col.sorted = false;
			}
		}
		if (col.direction === Column.sort.descending) {
			col.direction = Column.sort.ascending;
		} else {
			col.direction = Column.sort.descending;
		}
		col.sorted = true;
		col.sort.emit({key: col.key, direction: col.direction});
	}

	filter(col: Column) {
		console.log(col);
	}

	selectAll(ev) {
		this.doSelectAll.emit(ev);
	}

	mouseDown(ev, col) {
		let mouseMove = (event) => {
			if (this.isTabResizeing) {
				let colWidth = parseInt(this.resizingCol.width, 10);
				let x = event.x;
				this.resizingCol.width = colWidth - (this.lastX - x);
				this.lastX = x;
			}
		};
		this.isTabResizeing = true;
		this.resizingCol = col;
		this.lastX = ev.clientX;
		document.addEventListener("mousemove", mouseMove);
		document.addEventListener("mouseup", () => {
			this.isTabResizeing = false;
			this.resizingCol = null;
			document.removeEventListener("mousemove", mouseMove);
		});
	}
}
