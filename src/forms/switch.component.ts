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
			useExisting: SwitchComponent,
			multi: true
		}
	]
})

export class SwitchComponent extends CheckboxComponent implements OnInit {
	static switchCount = 0;

	@Input() size: "default" | "sm" = "default";

	id = "switch-" + SwitchComponent.switchCount;

	constructor(protected changeDetectorRef: ChangeDetectorRef, private _elementRef: ElementRef, private renderer: Renderer2) {
		super(changeDetectorRef);
		SwitchComponent.switchCount++;
	}

	ngOnInit() {
		// Build variant classes
		const labelClass = `toggle-label${this.size !== "default" ? `--${this.size}` : ""}`;
		const buttonClass = `toggle${this.size !== "default" ? `--${this.size}` : ""}`;

		// Get elements
		const labelEl = this._elementRef.nativeElement.querySelector("label");
		const buttonEl = this._elementRef.nativeElement.querySelector("button");

		// Add classes to elements
		this.renderer.addClass(labelEl, labelClass);
		this.renderer.addClass(buttonEl, buttonClass);
	}
}
