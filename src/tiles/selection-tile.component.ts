import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	HostListener,
	AfterViewInit,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
	TemplateRef
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { NgClass, AsyncPipe, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

@Component({
	selector: "cds-selection-tile, ibm-selection-tile",
	template: `
		<input
			#input
			[attr.tabindex]="disabled ? null : 0"
			class="cds--tile-input"
			[id]="id"
			[disabled]="disabled"
			[type]="(multiple ? 'checkbox': 'radio')"
			[value]="value"
			[name]="name"
			(change)="onChange($event)"/>
		<label
			class="cds--tile cds--tile--selectable"
			[for]="id"
			[ngClass]="{
				'cds--tile--is-selected' : selected,
				'cds--tile--light': theme === 'light',
				'cds--tile--disabled' : disabled,
				'cds--tile--decorator': !!decorator,
				'cds--tile--decorator-rounded': !!decorator && hasRoundedCorners
			}"
			[attr.aria-label]="i18n.get('TILES.TILE') | async">
			<div class="cds--tile__checkmark"
				[class.cds--tile__checkmark--persistent]="multiple">
				@if (!selected) {
					<svg
						[cdsIcon]="multiple ? 'checkbox' : 'checkmark'"
						size="16">
					</svg>
				} @else {
					<svg [cdsIcon]="multiple ? 'checkbox--checked--filled' : 'checkmark--filled'" size="16"></svg>
				}
			</div>
			<div class="cds--tile-content">
				<ng-content></ng-content>
			</div>
			@if (decorator) {
				<div class="cds--tile--inner-decorator">
					<ng-template [ngTemplateOutlet]="decorator"></ng-template>
				</div>
			}
		</label>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, AsyncPipe, NgTemplateOutlet, IconDirective]
})
export class SelectionTile implements AfterViewInit {
	static tileCount = 0;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * The unique id for the input.
	 */
	@Input() id = `tile-${SelectionTile.tileCount}`;

	/**
	 * Updating the state of the input to match the state of the parameter passed in.
	 * Set to `true` if this tile should be selected.
	 */
	@Input() set selected(value: boolean) {
		// If an initial selected value is set before input exists, we save
		// the value and check again when input exists in `AfterViewInit`.
		this._selected = value ? true : null;
		if (this.input) {
			this.input.nativeElement.checked = this._selected;
		}
		this.changeDetectorRef.markForCheck();
	}

	get selected() {
		return this.input ? this.input.nativeElement.checked : false;
	}
	/**
	 * The value for the tile. Returned via `ngModel` or `selected` event on the containing `TileGroup`.
	 */
	@Input() value: string;
	/**
	 * Internal event used to notify the containing `TileGroup` of changes.
	 */
	// eslint-disable-next-line @angular-eslint/no-output-native
	@Output() change: EventEmitter<Event> = new EventEmitter();

	/**
	 * Set to `true` to disable the selection tile.
	 */
	@Input() disabled = false;

	/**
	 * **Experimental**: Optional decorator (e.g. AI label).
	 */
	@Input() decorator: TemplateRef<any>;

	/**
	 * When `true` with a `decorator`, applies rounded styling.
	 */
	@Input() hasRoundedCorners = false;

	/**
	 * Set by the containing `TileGroup`. Used for the `name` property on the input.
	 */
	name = "tile-group-unbound";
	/**
	 * Defines whether or not the `SelectionTile` supports selecting multiple tiles as opposed to single
	 * tile selection.
	 *
	 * Set to true because of the way tile group sets it up.
	 * If it is first undefined then set to true, the type will change from radio to checkbox and deselects the inputs.
	 */
	multiple = true;

	@ViewChild("input", { static: true }) input;

	// If an initial selected value is set before input exists, we save
	// the value and check again when input exists in `AfterViewInit`.
	protected _selected = null;

	constructor(public i18n: I18n, protected changeDetectorRef: ChangeDetectorRef) {
		SelectionTile.tileCount++;
	}

	ngAfterViewInit() {
		if (this.input) {
			setTimeout(() => {
				this.input.nativeElement.checked = this._selected;
				this.changeDetectorRef.markForCheck();
			});
		}
	}

	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		if (event.key === "Enter" || event.key === "Spacebar" || event.key === " ") {
			this.selected = !this.selected;
			this.change.emit(event);
		}
	}

	onChange(event) {
		this.change.emit(event);
	}
}
