import {
	Component,
	OnInit,
	AfterViewInit
} from "@angular/core";
import {
	FormGroup,
	FormBuilder,
	FormControl
} from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<cds-radio-group
				aria-label="radiogroup"
				formControlName="radioGroup">
				<cds-radio
					value="radio">
					zero
				</cds-radio>
				<cds-radio *ngFor="let radio of manyRadios"
					[value]="radio.num"
					[disabled]="radio.disabled">
					{{radio.num}}
				</cds-radio>
			</cds-radio-group>
		</form>
		<button (click)="changeSelected()">Set selected to three</button>
		<button (click)="disableGroup()">Set group disabled</button>
	`
})
export class ReactiveFormsStory implements AfterViewInit, OnInit {
	public formGroup: FormGroup;

	manyRadios = [
		{ num: "one" },
		{ num: "two" },
		{ num: "three" },
		{ num: "four", disabled: true }
	];

	constructor(protected formBuilder: FormBuilder) { }

	changeSelected() {
		this.formGroup.get("radioGroup")?.setValue("three");
	}

	disableGroup() {
		this.formGroup.get("radioGroup")?.disable();
	}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			radioGroup: new FormControl()
		});
	}

	ngAfterViewInit() {
		this.formGroup.get("radioGroup")?.setValue("one");
	}
}
