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
		<label class="toggle-label" [for]="id">
			<ng-content></ng-content>
		</label>
		<button class="toggle"
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
export class SwitchComponent extends CheckboxComponent {
	static switchCount = 0;

	id = "switch-" + SwitchComponent.switchCount;

	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		super(changeDetectorRef);
		SwitchComponent.switchCount++;
	}
}
