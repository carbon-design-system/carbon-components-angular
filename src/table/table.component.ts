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

@Component({
	selector: "cdl-table",
	template: `
	<div 
		class="table-container"
		(window:resize)="viewResize()">
		<table-header
			[cols]="cols"
			[colWidth]="columnWidth"
			(doSelectAll)="emitSelectAll($event)">
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
	public width = 0;
	public columnWidth: number;
	@Input() rows: Array<Object> = [];
	@Input() striped = false;
	@Output() loadMore = new EventEmitter<Object>();
	@Output() selectAll = new EventEmitter<Object>();
	@Output() selectRow = new EventEmitter<Object>();
	@ViewChild("body") body;
	@ContentChildren(Column) cols;

	ngAfterContentChecked() {
		this.columnWidth = ((this.body.width - 60) / this.cols.length);
	}

	bubble(ev, to) {
		to.emit(ev);
	}

	viewResize() {
		this.columnWidth = ((this.body.width - 60) / this.cols.length);
	}

	emitSelectAll(ev) {
		if (ev.target.checked) {
			this.body.selected["all"] = true;
		} else {
			this.body.selected = {};
		}
		this.selectAll.emit({
			selected: ev.target.checked,
			rows: this.rows
		});
	}
}
