import {
	Directive,
	HostBinding,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Optional
} from "@angular/core";
import { Subscription } from "rxjs";
import { GridService } from "./grid.service";

@Directive({
	selector: "[cdsCol], [ibmCol]"
})
export class ColumnDirective implements OnInit, OnChanges, OnDestroy {
	@HostBinding("class")
	get columnClasses(): string {
		return this._columnClasses.join(" ");
	}
	set columnClasses(classes: string) {
		this._columnClasses = classes.split(" ");
	}

	@Input() class = "";

	/**
	 * Defines columns width for specified breakpoint
	 * Accepts the following formats:
	 * - {[breakpoint]: number}
	 * - {[breakpoint]: "auto"} - css only
	 * - {[breakpoint]: {[start|end]: number}} - css only
	 *
	 * Example:
	 * <div cdsCol [columnNumbers]={md: 3, lg: 4}></div>
	 */
	@Input() columnNumbers = {};

	/**
	 * Defines columns offset, which increases the left margin of the column.
	 * This field will only work with flexbox grid.
	 *
	 * Accepts the following formats:
	 * - {[breakpoint]: number}
	 *
	 * Example:
	 * <div cdsCol [offsets]={md: 3, lg: 4}></div>
	 */
	@Input() offsets = {};

	/**
	 * Set to `true` to use css grid column hang class
	 * This will only work when `isCss` property is set to true
	 *
	 * Useful when trying to align content across css grid/subgrid
	 */
	@Input() columnHang = false;

	protected _columnClasses: string[] = [];

	private isCssGrid = false;
	private subscription = new Subscription();

	constructor(@Optional() private gridService: GridService) {}

	ngOnInit() {
		if (this.gridService) {
			this.subscription = this.gridService.gridObservable.subscribe((isCssGrid: boolean) => {
				this.isCssGrid = isCssGrid;
				this.updateColumnClasses();
			});
		} else {
			this.updateColumnClasses();
		}
	}

	ngOnChanges() {
		this.updateColumnClasses();
	}

	/**
	 * Unsubscribe from subscription
	 */
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	private updateColumnClasses() {
		try {
			this._columnClasses = [];
			const columnKeys = Object.keys(this.columnNumbers);

			// Assign classes based on the type of grid used.
			if (this.isCssGrid) {
				// Default css grid class
				this._columnClasses.push("cds--css-grid-column");
				if (this.columnHang) {
					this._columnClasses.push("cds--grid-column-hang");
				}

				columnKeys.forEach(key => {
					/**
					 * Passing in `auto` to a breakpoint as such: {'md': 'auto'}
					 * will assign the element which will automatically determine the width of the column
					 * for the breakpoint passed
					 */
					if (this.columnNumbers[key] === "auto") {
						this._columnClasses.push(`cds--${key}:col-span-auto`);
					} else if (typeof this.columnNumbers[key] === "object") {
						/**
						 * In css grid, objects can be passed to the keys in the following format:
						 * {'md': {'start': 3}}
						 *
						 * These objects are used to position the column
						 */
						if (this.columnNumbers[key]["start"]) {
							// col-start is simular equivalent of flex offset
							this._columnClasses.push(`cds--${key}:col-start-${this.columnNumbers[key].start}`);
						}
						if (this.columnNumbers[key]["end"]) {
							this._columnClasses.push(`cds--${key}:col-end-${this.columnNumbers[key].end}`);
						}
						if (this.columnNumbers[key]["span"]) {
							this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key].span}`);
						}
					} else {
						this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key]}`);
					}
				});

				Object.keys(this.offsets).forEach(key => {
					this._columnClasses.push(`cds--${key}:col-start${this.offsets[key] + 1}`);
				});
			} else {
				// Set column classes for flex grid
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
			}
		} catch (err) {
			console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`);
		}

		/**
		 * Append the classes passed so they aren't overriden when we set the column classes
		 * from host binding
		 */
		if (this.class) {
			this._columnClasses.push(this.class);
		}
	}
}
