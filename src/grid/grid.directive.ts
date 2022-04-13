import { Directive, HostBinding, Input, OnInit } from "@angular/core";

/**
 * [See demo](../../?path=/story/components-grid--basic)
 *
 * <example-url>../../iframe.html?id=components-grid--basic</example-url>
 */
@Directive({
	selector: "[ibmGrid]"
})
export class GridDirective {
	@HostBinding("class.cds--grid") baseClass = true;
	@HostBinding("class.cds--grid--condensed") @Input() condensed = false;
}

@Directive({
	selector: "[ibmRow]"
})
export class RowDirective {
	@Input() gutter = true;
	@Input() leftGutter = true;
	@Input() rightGutter = true;

	@HostBinding("class.cds--row") baseClass = true;
	@HostBinding("class.cds--row--condensed") @Input() condensed = false;
	@HostBinding("class.cds--no-gutter") get showGutter() {
		return !this.gutter;
	}
	@HostBinding("class.cds--no-gutter--left") get showLeftGutter() {
		return !this.leftGutter;
	}
	@HostBinding("class.cds--no-gutter--right") get showRightGutter() {
		return !this.rightGutter;
	}
}

@Directive({
	selector: "[ibmCol]"
})
export class ColumnDirective implements OnInit {
	@Input() class = "";

	@Input() columnNumbers = {};

	@Input() offsets = {};

	protected _columnClasses: string[] = [];

	@HostBinding("class")
	get columnClasses(): string {
		return this._columnClasses.join(" ");
	}

	set(classes: string) {
		this._columnClasses = classes.split(" ");
	}

	ngOnInit() {
		try {
			const columnKeys = Object.keys(this.columnNumbers);
			if (columnKeys.length <= 0) {
				this._columnClasses.push("cds--col");
			}

			columnKeys.forEach(key => {
				if (this.columnNumbers[key] === "nobreak") {
					this._columnClasses.push(`cds--col-${key}`);
				} else {
					this._columnClasses.push(`cds--col-${key}-${this.columnNumbers[key]}`);
				}
			});

			Object.keys(this.offsets).forEach(key => {
				this._columnClasses.push(`cds--offset-${key}-${this.offsets[key]}`);
			});
		} catch (err) {
			console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`);
		}

		if (this.class) {
			this._columnClasses.push(this.class);
		}
	}
}
