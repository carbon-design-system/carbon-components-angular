import {
	Component,
	AfterContentInit,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	ContentChildren,
	QueryList,
	OnDestroy,
	TemplateRef
} from "@angular/core";
import { SelectionTile } from "./selection-tile.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TileSelection } from "./tile-selection.interface";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "cds-tile-group, ibm-tile-group",
	template: `
		<fieldset>
			<legend *ngIf="legend" class="cds--label">
				<ng-template *ngIf="isTemplate(legend); else legendLabel;" [ngTemplateOutlet]="legend"></ng-template>
				<ng-template #legendLabel>{{legend}}</ng-template>
			</legend>
			<ng-content select="ibm-selection-tile,cds-selection-tile"></ng-content>
		</fieldset>`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TileGroup,
			multi: true
		}
	]
})
export class TileGroup implements AfterContentInit, OnDestroy {
	static tileGroupCount = 0;
	/**
	 * The tile group `name`
	 */
	@Input() name = `tile-group-${TileGroup.tileGroupCount}`;
	/**
	 * Set to `true` to support multiple tile selection
	 */
	@Input() multiple = false;

	@Input() legend: string | TemplateRef<any>;

	/**
	 * Emits an event when the tile selection changes.
	 *
	 * Emits an object that looks like:
	 * ```javascript
	 * {
	 * 	value: "something",
	 * 	selected: true,
	 * 	name: "tile-group-1"
	 * }
	 * ```
	 */
	@Output() selected: EventEmitter<TileSelection> = new EventEmitter();

	@HostBinding("class.cds--tile-group") tileGroupClass = true;

	@ContentChildren(SelectionTile) selectionTiles: QueryList<SelectionTile>;

	protected unsubscribe$ = new Subject<void>();
	protected unsubscribeTiles$ = new Subject<void>();

	constructor() {
		TileGroup.tileGroupCount++;
	}

	onChange = (_: any) => { };

	onTouched = () => { };

	ngAfterContentInit() {
		const updateTiles = () => {
			// remove old subscriptions
			this.unsubscribeTiles$.next();

			// react to changes
			// setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.selectionTiles.forEach(tile => {
					tile.name = this.name;
					tile.change
						.pipe(takeUntil(this.unsubscribeTiles$))
						.subscribe(() => {
							this.selected.emit({
								value: tile.value,
								selected: tile.selected,
								name: this.name
							});
							this.onChange(tile.value);
						});
					tile.multiple = this.multiple;
				});
			});
		};
		updateTiles();

		this.selectionTiles.changes
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(_ => updateTiles());
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();

		// takes care of tile subscriptions when tile-group dies
		this.unsubscribeTiles$.next();
		this.unsubscribeTiles$.complete();
	}

	writeValue(value: any) {
		if (!this.selectionTiles) { return; }
		this.selectionTiles.forEach(tile => {
			if (tile.value === value) {
				tile.selected = true;
			} else {
				tile.selected = false;
			}
		});
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
