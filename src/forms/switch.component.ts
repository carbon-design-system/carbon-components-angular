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
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @export
 * @class SwitchComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-switch",
	template: `
		<input
			class="bx--toggle"
			[id]="id"
			type="checkbox"
			(click)="onClick($event)"
			[disabled]="disabled"
			[attr.aria-checked]="checked">
		<label class="bx--toggle__label" [for]="id">
			<span class="bx--toggle__text--left">Off</span>
			<span class="bx--toggle__appearance"></span>
			<span class="bx--toggle__text--right">On</span>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SwitchComponent,
			multi: true
		}
	],
	styleUrls: ["./../../node_modules/carbon-components/scss/components/toggle/_toggle.scss"]
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
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" | "default")}
	 * @memberof SwitchComponent
	 */
	@Input() size: "sm" | "md" | "default" = "md";

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
		/* TODO: remove and extend in neutrino
		// Build variant classes
		const labelClass = `toggle-label${this.size !== "md" ? `--${this.size}` : ""}`;
		const buttonClass = `toggle${this.size !== "md" ? `--${this.size}` : ""}`;

		// Get elements
		const labelEl = this.elementRef.nativeElement.querySelector("label");
		const buttonEl = this.elementRef.nativeElement.querySelector("button");

		// Add classes to elements
		this.renderer.addClass(labelEl, labelClass);
		this.renderer.addClass(buttonEl, buttonClass);
		*/
	}
}
