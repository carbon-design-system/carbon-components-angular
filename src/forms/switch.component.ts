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

export enum SwitchState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

export class SwitchChange {
	source: SwitchComponent;
	checked: boolean;
}

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
			useExisting: forwardRef(() => SwitchComponent),
			multi: true
		}
	]
})

export class SwitchComponent extends CheckboxComponent {
	static switchCount = 0;

	private labelClass = "toggle-label";
	private buttonClass = "toggle";

	@Input() size: "default" | "sm" = "default";

	id = "switch-" + SwitchComponent.switchCount;

	constructor(protected changeDetectorRef: ChangeDetectorRef, protected _elementRef: ElementRef, protected renderer: Renderer2) {
		super(changeDetectorRef, _elementRef, renderer);
		SwitchComponent.switchCount++;
	}

	/**
	 * Creates class names based on @input() size.
	 */
	createSizeClasses() {
		if (this.size !== "default") {
			this.labelClass = "toggle-label--" + this.size;
			this.buttonClass = "toggle--" + this.size;
		}
	}

	ngOnInit() {
		this.createSizeClasses();

		const labelEl = this._elementRef.nativeElement.querySelector("label");
		const buttonEl = this._elementRef.nativeElement.querySelector("button");

		// Add class to label element
		this.renderer.addClass(labelEl, this.labelClass);

		// Add class to button element
		this.renderer.addClass(buttonEl, this.buttonClass);
	}
}
