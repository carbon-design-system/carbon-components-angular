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
							<input type="checkbox" (change)="doSelectAll($event)"/>
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
						<button 
							class="sm" 
							*ngIf="column.col.sort"
							(click)="sort(column.col)">
								sort
						</button>
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
export class TableHeader{
	@Input() cols;
	@Input() colWidth;

	constructor(private tableService:TableService) {}

	sort(col:Column) {
		console.log(col);
		if(col.direction === "down") {
			col.direction = "up";
		} else {
			col.direction = "down";
		}
		col.sort.emit({key: col.key, direction: col.direction});
	}

	filter(col:Column) {
		console.log(col);
	}
}