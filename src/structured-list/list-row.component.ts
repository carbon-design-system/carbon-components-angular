import {
	Component,
	HostBinding,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Input,
	HostListener,
	ViewChild,
	ElementRef
} from "@angular/core";
import { ListColumn } from "./list-column.component";

@Component({
	selector: "ibm-list-row",
	template: `
		<ng-container *ngIf="selection">
			<input
				#input
				tabindex="-1"
				class="bx--structured-list-input"
				[value]="value"
				type="radio"
				[name]="name"
				[title]="label"/>
			<div class="bx--structured-list-td">
				<svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16">
					<path
						d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0
						16zm3.646-10.854L6.75 10.043 4.354
						7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
						fill-rule="evenodd" />
				</svg>
			</div>
		</ng-container>
		<ng-content></ng-content>
	`
})
export class ListRow implements AfterContentInit {
	@Input() @HostBinding("class.bx--structured-list-row--selected")
	set selected(value: boolean) {
		if (!this.input) { return; }
		if (value) {
			this.input.nativeElement.checked = true;
		} else {
			this.input.nativeElement.checked = null;
		}
	}

	get selected() {
		if (!this.input) { return; }
		return this.input.nativeElement.checked;
	}
	@Input() @HostBinding("attr.aria-label") label = "label";
	@Input() value;

	@HostBinding("class.bx--structured-list-row") wrapper = true;
	@HostBinding("attr.tabindex") tabindex = "0";

	@ContentChildren(ListColumn) columns: QueryList<ListColumn>;

	@ViewChild("input") input: ElementRef;

	selection = false;
	name = "list";

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = true;
			column.isHeaderColumn = false;
		});
	}

	@HostListener("click")
	onclick() {
		this.input.nativeElement.click();
	}
}
