import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { I18n } from "./../i18n/i18n.module";

@Component({
	selector: "ibm-selection-tile",
	template: `
		<label
			class="bx--tile bx--tile--selectable"
			tabindex="0"
			[for]="id"
			[ngClass]="{'bx--tile--is-selected' : selected}"
			[attr.aria-label]="i18n.get('TILES.TILE') | async">
			<input
				#input
				tabindex="-1"
				class="bx--tile-input"
				[id]="id"
				[type]="(multiple ? 'checkbox': 'radio')"
				[value]="value"
				[name]="name"
				(change)="onChange($event)"/>
			<div class="bx--tile__checkmark">
				<svg width="16" height="16" viewBox="0 0 16 16">
					<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
						fill-rule="evenodd"/>
				</svg>
			</div>
			<div class="bx--tile-content">
				<ng-content></ng-content>
			</div>
		</label>
	`
})
export class SelectionTile {
	static tileCount = 0;
	/**
	 * The unique id for the input.
	 */
	@Input() id = `tile-${SelectionTile.tileCount}`;
	/**
	 * Updating the state of the input to match the state of the parameter passed in.
	 * Set to `true` if this tile should be selected.
	 */
	@Input() set selected(value: boolean) {
		if (!this.input) { return; }
		this.input.nativeElement.checked = value ? true : null;
	}

	get selected() {
		if (!this.input) { return; }
		return this.input.nativeElement.checked;
	}
	/**
	 * The value for the tile. Returned via `ngModel` or `selected` event on the containing `TileGroup`.
	 */
	@Input() value: string;
	/**
	 * Internal event used to notify the containing `TileGroup` of changes.
	 */
	@Output() change: EventEmitter<Event> = new EventEmitter();

	/**
	 * Set by the containing `TileGroup`. Used for the `name` property on the input.
	 */
	name: string;
	/**
	 * Defines whether or not the `SelectionTile` supports selecting multiple tiles as opposed to single
	 * tile selection.
	 */
	multiple: boolean;

	@ViewChild("input") input;

	constructor(public i18n: I18n) {
		SelectionTile.tileCount++;
	}

	onChange(event) {
		this.change.emit(event);
	}
}


