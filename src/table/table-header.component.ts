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
					[ngStyle]="{'width': column.col.width || colWidth}">
					{{column.col.title}}
					<div class="col-actions">
						<button 
							class="sm" 
							*ngIf="column.col.filter"
							(click)="filter(column.col)">
								filter
							</button>
						<span 
							class="sm" 
							*ngIf="column.col.sort"
							(click)="sort(column.col)">
							<!-- arrow up -->
							<svg *ngIf="column.col.direction === 'up'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								<path d="M13.5 5.5L8 0 2.5 5.5l1 1 3.8-3.8V16h1.4V2.7l3.8 3.8z"/>
							</svg>
							<!-- arrow down -->
							<svg *ngIf="column.col.direction !== 'up'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								<path d="M13.5 10.5L8 16l-5.5-5.5 1-1 3.8 3.8V0h1.4v13.3l3.8-3.8z"/>
							</svg>
						</span>
					</div>
					<div class="resizer"></div>
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
	@Input() colWidth;
	@Output() doSelectAll = new EventEmitter<Object>();
	private isTabMoving: boolean = false;
	private isTabResizeing: boolean = false;
	private movingCol: Column = null;
	private resizingCol: Column = null;

	constructor(private tableService: TableService) {}

	sort(col: Column) {
		for (let column of this.tableService.getCols({}, this.cols)) {
			if (column.col !== col) {
				column.col.direction = "down";
			}
		}
		if (col.direction === "down") {
			col.direction = "up";
		} else {
			col.direction = "down";
		}
		col.sort.emit({key: col.key, direction: col.direction});
	}

	filter(col: Column) {
		console.log(col);
	}

	selectAll(ev) {
		this.doSelectAll.emit(ev);
	}

	mouseDown(ev, col) {
		this.isTabMoving = true;
		this.movingCol = col;
	}

	mouseUp(ev) {
		this.isTabMoving = false;
		this.movingCol = null;
	}

	mouseMove(ev) {
		if (this.isTabMoving) {
			console.log(ev, this.movingCol);
		}
	}
}
