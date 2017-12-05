import { CheckboxComponent } from "./checkbox.component";
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Output,
	Renderer2,
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";


/**
 * Defines the set of states for a switch component.
 * @export
 * @enum {number}
 */
export enum SwitchState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * class: SwitchChange
 *
 * Used to emit changes performed on switch components.
 * @export
 * @class SwitchChange
 */
export class SwitchChange {
	/**
	 * Contains the `SwitchComponent` that has been changed.
	 * @type {SwitchComponent}
	 * @memberof SwitchChange
	 */
	source: SwitchComponent;
	/**
	 * The state of the `SwitchComponent` encompassed in the `SwitchChange` class.
	 * @type {boolean}
	 * @memberof SwitchChange
	 */
	checked: boolean;
}

/**
 * class: SwitchComponent (extends CheckboxComponent)
 *
 * selector: `n-switch`
 *
 * source: `src/forms/switch.component.ts`
 *
 * ```html
 * <n-switch [(ngModel)]="switchState">Switch</n-switch>
 * ```
 *
 * @export
 * @class SwitchComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
@Component({
	selector: "n-switch",
	template: `
		<label [for]="id">
			<ng-content></ng-content>
		</label>
		<button
			(click)="onClick($event)"
			[id]="id"
			role="switch"
			[disabled]="disabled"
			[attr.aria-checked]="checked">
		</button>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SwitchComponent,
			multi: true
		}
	]
})
export class SwitchComponent extends CheckboxComponent implements OnInit {
	/**
	 * Variable used for creating unique ids for switch components.
	 * @type {number}
	 * @static
	 * @memberof SwitchComponent
	 */
	static switchCount = 0;

	/**
	 * Size of the switch component.
	 * @type {("default" | "sm")}
	 * @memberof SwitchComponent
	 */
	@Input() size: "default" | "sm" = "default";

	/**
	 * The unique id allocated to the `SwitchComponent`.
	 * @type {string}
	 * @memberof SwitchComponent
	 */
	id = "switch-" + SwitchComponent.switchCount;

	/**
	 * Creates an instance of SwitchComponent.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @param {ElementRef} elementRef
	 * @param {Renderer2} renderer
	 * @memberof SwitchComponent
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
		super(changeDetectorRef);
		SwitchComponent.switchCount++;
	}

	/**
	 * Builds variant classes and appends them to the switch and label elements.
	 * @memberof SwitchComponent
	 */
	ngOnInit() {
		// Build variant classes
		const labelClass = `toggle-label${this.size !== "default" ? `--${this.size}` : ""}`;
		const buttonClass = `toggle${this.size !== "default" ? `--${this.size}` : ""}`;

		// Get elements
		const labelEl = this.elementRef.nativeElement.querySelector("label");
		const buttonEl = this.elementRef.nativeElement.querySelector("button");

		// Add classes to elements
		this.renderer.addClass(labelEl, labelClass);
		this.renderer.addClass(buttonEl, buttonClass);
	}
}
