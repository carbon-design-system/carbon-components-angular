import { Directive, HostBinding, Input, OnInit } from "@angular/core";

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
	@Input()
	class = "";

	@Input()
	columnNumbers = {};

	@Input()
	offsets = {};

	@HostBinding("class")
	columnClasses: string;

	ngOnInit() {
		const classNames = [];
		try {
			Object.keys(this.columnNumbers).forEach(key => {
				if (this.columnNumbers[key] === "nobreak") {
					classNames.push(`bx--col-${key}`);
				} else {
					classNames.push(`bx--col-${key}-${this.columnNumbers[key]}`);
				}
			});

			Object.keys(this.offsets).forEach(key => {
				classNames.push(`bx--offset-${key}-${this.offsets[key]}`);
			});
		} catch (err) {
			console.log(err);
		}

		if (this.class !== "") {
			classNames.push(this.class);
		}

		this.columnClasses = classNames.join(" ");
	}
}
