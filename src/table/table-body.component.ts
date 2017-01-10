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

@Component({
	selector: "table-body",
	template: `
	<div 
		class="scroll-table" 
		(scroll)="tableScoll($event)" 
		#tableContainer>
		<table>
			<tbody>
				<tr [ngStyle]="{'height.px': topPadding}"></tr>
				<tr *ngFor="let row of visibleRows; let i = index" 
					[ngClass]="{
						selected: selected[offsetTop + i] || selected['all'],
						striped: striped && ((offsetTop + i)%2?true:false)
					}">
					<td class="check-column">
						<div class="checkbox">
							<label>
								<input 
									type="checkbox" 
									[checked]="selected[offsetTop + i] || selected['all']" 
									(change)="doSelectRow($event, row, i)"/>
								<span></span>
							</label>
						</div>
					</td>
					<td 
						*ngFor="let col of tableService.getCols(row, cols)"
						[ngStyle]="{'width': col.col.width || colWidth}">
						<template
							[ngTemplateOutlet]="col.col.template"
							[ngOutletContext]="{
								data: col.data
							}">
						</template>
					</td>
				</tr>
				<tr [ngStyle]="{'height.px': bottomPadding}"></tr>
			</tbody>
		</table>
	</div>
	`,
	styleUrls: ["./table-body.component.css"],
	providers: [TableService]
})
export class TableBody implements OnInit, OnChanges, DoCheck {
	private visibleRows: Array<Object>;
	private offsetTop:number = 0;
	private offsetBottom:number = 0;
	private height:number = 0;
	private width:number = 0;
	private topPadding:number = 0;
	private bottomPadding:number = 0;
	private lastScrollTop:number = 0;
	public selected = {};
	@Input() rows;
	@Input() cols;
	@Input() striped;
	@Input() colWidth;
	@Output() selectRow = new EventEmitter<Object>();
	@ViewChild("tableContainer") container;

	constructor(private tableService:TableService) {}

	ngOnInit() {
		this.height = this.container.nativeElement.offsetHeight;
		this.width = this.container.nativeElement.offsetWidth;
		this.visibleRows = this.getVisibleAtScroll(0);
	}

	ngDoCheck() {
		let change = false;
		for (var i = 0; i < this.visibleRows.length; i++) {
			if(this.offsetTop + i > this.rows.length-1) {
				change = true;
				break;
			}
			if(this.rows[this.offsetTop + i] !== this.visibleRows[i]) {
				change = true;
				break;
			}
		}
		if(change) {
			this.visibleRows = this.getVisibleAtScroll(this.container.nativeElement.scrollTop);
			//deselect rows because the data set has changed
			this.selected = {};
		}
	}

	ngOnChanges(changes) {
		if(changes.rows) {
			this.visibleRows = this.getVisibleAtScroll(this.container.nativeElement.scrollTop);
		}
	}

	doSelectRow(ev, row, index) {
		if(ev.target.checked) {
			this.selected[this.offsetTop + index] = true;
		} else {
			delete this.selected[index];
		}
		this.selectRow.emit({
			selected: ev.target.checked,
			row,
			index: this.offsetTop+index
		});
	}

	getVisibleAtScroll(scroll) {
		//if we scroll right to the bottom stop trying to render more rows
		if(scroll + this.height >= this.rows.length*40) {
			this.offsetBottom = this.rows.length;
		} else {
			this.offsetBottom = Math.ceil(this.height/40) + Math.ceil(scroll/40);
		}
		this.offsetTop = Math.ceil(scroll/40);
		//ensures the top row doesn't just dissapear
		if(this.offsetTop-1 >= 0) {
			this.offsetTop = this.offsetTop - 1;
		}
		this.topPadding = this.offsetTop*40;
		this.bottomPadding = this.rows.length*40 - this.offsetBottom*40;
		return this.rows.slice(this.offsetTop, this.offsetBottom);
	}

	addRows(scroll) {
		if(this.offsetBottom < this.rows.length) {
			this.visibleRows = this.getVisibleAtScroll(scroll);
		}
	}

	removeRows(scroll) {
		this.visibleRows = this.getVisibleAtScroll(scroll);
	}

	tableScoll(ev) {
		if(ev.target.scrollTop + ev.target.offsetHeight > this.offsetBottom*40 - 50 && ev.target.scrollTop - this.lastScrollTop > 0) {
			this.addRows(ev.target.scrollTop);
		}

		if(ev.target.scrollTop + ev.target.offsetHeight < this.offsetBottom*40 && ev.target.scrollTop - this.lastScrollTop < 0) {
			this.removeRows(ev.target.scrollTop);
		}
		this.lastScrollTop = ev.target.scrollTop;
	}
}