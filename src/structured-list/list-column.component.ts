import { Component, HostBinding, Input } from "@angular/core";

@Component({
	selector: "ibm-list-column",
	template: `<ng-content></ng-content>`
})
export class ListColumn {
	@HostBinding("class.bx--structured-list-th") isHeaderColumn = true;
	@HostBinding("class.bx--structured-list-td") isBodyColumn = true;
	@Input() @HostBinding("style.white-space") get whiteSpace() {
		if (this._whiteSpace) {
			return this._whiteSpace;
		}
		if (this.isHeaderColumn) {
			return "nowrap";
		}
		return "bx--structured-list-content--nowrap";
	}
	set whiteSpace(value: string) {
		this._whiteSpace = value;
	}

	protected _whiteSpace = "";
}
