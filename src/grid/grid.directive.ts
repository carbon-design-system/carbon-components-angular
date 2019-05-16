import { Directive, HostBinding, Input, OnInit } from "@angular/core";

/**
 * [See demo](../../?path=/story/grid--basic)
 *
 * <example-url>../../iframe.html?id=grid--basic</example-url>
 *
 * @export
 * @class GridDirective
 */
@Directive({
	selector: "[ibmGrid]"
})
export class GridDirective {
	@HostBinding("class.bx--grid") baseClass = true;
}

@Directive({
	selector: "[ibmRow]"
})
export class RowDirective {
	@HostBinding("class.bx--row") baseClass = true;
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
			Object.keys(this.columnNumbers).forEach(key => {
				if (this.columnNumbers[key] === "nobreak") {
					this._columnClasses.push(`bx--col-${key}`);
				} else {
					this._columnClasses.push(`bx--col-${key}-${this.columnNumbers[key]}`);
				}
			});

			Object.keys(this.offsets).forEach(key => {
				this._columnClasses.push(`bx--offset-${key}-${this.offsets[key]}`);
			});
		} catch (err) {
			console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`);
		}

		if (this.class !== "") {
			this._columnClasses.push(this.class);
		}
	}
}
