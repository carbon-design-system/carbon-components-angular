import { 
	Component,
	OnInit, 
	AfterContentChecked, 
	OnChanges, 
	DoCheck, 
	Input, 
	Output, 
	ViewChild, 
	ContentChildren, 
	EventEmitter 
} from "@angular/core";
import { TableService } from "./table.service";
import { Column } from "./column.component";

//TODO: refactor into sub-components
// head can probably be a component, body can probably be a component, etc
@Component({
	selector: "cdl-table",
	template: `
	<div 
		class="table-container"
		(window:resize)="viewResize()">
		<table>
			<thead>
				<tr>
					<th class="check-column">
						<div class="checkbox">
							<label>
								<input type="checkbox" (change)="doSelectAll($event)"/>
								<span></span>
							</label>
						</div>
					</th>
					<th 
						*ngFor="let column of getCols()"
						[ngStyle]="{'width': column.col.width || columnWidth}">
						{{column.col.title}}
						<div class="col-actions">
							<button 
								class="btn btn-secondary btn-sm" 
								*ngIf="column.col.filter"
								(click)="filter(column.col)">
									filter
								</button>
							<button 
								class="btn btn-secondary 
								btn-sm" *ngIf="column.col.sort"
								(click)="sort(column.col)">
									sort
							</button>
						</div>
						<div class="resizer"></div>
					</th>
				</tr>
			</thead>
		</table>
		<table-body #body
			[rows]="rows"
			[cols]="cols"
			[striped]="striped"
			[colWidth]="columnWidth"
			(selectRow)="bubble($event, selectRow)">
		</table-body>
	</div>
	`,
	styleUrls: ["./table.component.css"],
	providers: [TableService]
})
export class Table implements OnInit, AfterContentChecked {
	private width:number = 0;
	private columnWidth:string;
	@Input() rows:Array<Object> = [];
	@Input() striped: boolean = false;
	@Output() loadMore = new EventEmitter<Object>();
	@Output() selectAll = new EventEmitter<Object>();
	@Output() selectRow = new EventEmitter<Object>();
	@Output() sortColumn = new EventEmitter<Object>();
	@ViewChild("body") body;
	@ContentChildren(Column) cols;
	ngOnInit() {
		
	}

	ngAfterContentChecked() {
		// console.log("content check");
		this.columnWidth = `${(this.body.width-60)/this.cols.length}px`;
	}

	bubble(ev, to) {
		to.emit(ev);
	}

	viewResize() {
		this.columnWidth = `${(this.body.width-60)/this.cols.length}px`;
	}

	filter(col:Column) {
		console.log(col);
	}

	sort(col:Column) {
		console.log(col);
		if(col.direction === "up") {
			col.direction = "down";
		} else {
			col.direction = "up";
		}
		// this.sortColumn.emit({key: col.key, direction: col.direction});
		col.sort.emit({key: col.key, direction: col.direction});
	}

	doSelectAll(ev) {
		if(ev.target.checked) {
			this.body.selected['all'] = true;
		} else {
			this.body.selected = {};
		}
		this.selectAll.emit({
			selected: ev.target.checked,
			rows: this.rows
		});
	}

	//serviceify
	getCols(row = {}) {
		let cols = [];
		this.cols.forEach(col => {
			cols.push({
				data: row[col.key],
				col: col
			});
		});
		return cols;
	}
}
