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
						[ngTemplateOutlet]="column.col.header">
					</template>
					<div 
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
	private isTabMoving: boolean = false;
	private isTabResizeing: boolean = false;
	private movingCol: Column = null;
	private resizingCol: Column = null;
	private lastX: number = 0;

	constructor(private tableService: TableService) {}

	// sort(col: Column) {
	// 	for (let column of this.tableService.getCols({}, this.cols)) {
	// 		if (column.col !== col) {
	// 			column.col.direction = "down";
	// 			column.col.sorted = false;
	// 		}
	// 	}
	// 	if (col.direction === "down") {
	// 		col.direction = "up";
	// 	} else {
	// 		col.direction = "down";
	// 	}
	// 	col.sorted = true;
	// 	col.sort.emit({key: col.key, direction: col.direction});
	// }

	// filter(col: Column) {
	// 	console.log(col);
	// }

	selectAll(ev) {
		this.doSelectAll.emit(ev);
	}

	mouseDown(ev, col) {
		this.isTabResizeing = true;
		this.resizingCol = col;
		this.lastX = ev.clientX;
		document.addEventListener("mousemove", this.mouseMove.bind(this));
		document.addEventListener("mouseup", () => {
			this.isTabResizeing = false;
			this.resizingCol = null;
			document.removeEventListener("mousemove", this.mouseMove);
		});
	}

	mouseMove(ev) {
		if (this.isTabResizeing) {
			let colWidth = parseInt(this.resizingCol.width, 10);
			let x = ev.x;
			this.resizingCol.width = colWidth - (this.lastX - x);
			this.lastX = x;
		}
	}
}
