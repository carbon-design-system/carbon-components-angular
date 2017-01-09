import { 
	Component, 
	AfterContentChecked,  
	Input, 
	Output, 
	ViewChild, 
	ContentChildren, 
	EventEmitter 
} from "@angular/core";
import { Column } from "./column.component";

//TODO: refactor into sub-components
// head can probably be a component, etc
@Component({
	selector: "cdl-table",
	template: `
	<div 
		class="table-container"
		(window:resize)="viewResize()">
		<table-header
			[cols]="cols"
			[colWidth]="columnWidth">
		</table-header>
		<table-body #body
			[rows]="rows"
			[cols]="cols"
			[striped]="striped"
			[colWidth]="columnWidth"
			(selectRow)="bubble($event, selectRow)">
		</table-body>
	</div>
	`,
	styleUrls: ["./table.component.css"]
})
export class Table implements AfterContentChecked {
	private width:number = 0;
	private columnWidth:string;
	@Input() rows:Array<Object> = [];
	@Input() striped: boolean = false;
	@Output() loadMore = new EventEmitter<Object>();
	@Output() selectAll = new EventEmitter<Object>();
	@Output() selectRow = new EventEmitter<Object>();
	@ViewChild("body") body;
	@ContentChildren(Column) cols;

	ngAfterContentChecked() {
		this.columnWidth = `${((this.body.width-60)/this.cols.length)}px`;
	}

	bubble(ev, to) {
		to.emit(ev);
	}

	viewResize() {
		this.columnWidth = `${((this.body.width-60)/this.cols.length)}px`;
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
}
