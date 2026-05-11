import { JsonPipe } from "@angular/common";
import {
	FormGroup,
	FormBuilder,
	FormControl,
	ReactiveFormsModule
} from "@angular/forms";
import {
	Component,
	OnInit,
	Input
} from "@angular/core";
import isEqual from "lodash-es/isEqual";

import { DropdownList } from "carbon-components-angular/dropdown";
import { ComboBox } from "../combobox.component";

@Component({
	selector: "app-reactive-combobox",
	imports: [ComboBox, DropdownList, ReactiveFormsModule, JsonPipe],
	template: `
		<form [formGroup]="sampleForm" (ngSubmit)="onSubmit(sampleForm)">
			<cds-combo-box
				formControlName="combobox"
				[size]="size"
				[label]="label"
				[helperText]="helperText"
				itemValueKey="content"
				[theme]="theme"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[items]="_items">
				<cds-dropdown-list />
			</cds-combo-box>
			selected: {{ sampleForm.get("combobox").value | json }}
			<cds-combo-box
				style="margin-top: 40px"
				formControlName="multibox"
				[label]="label"
				[size]="size"
				itemValueKey="content"
				[helperText]="helperText"
				type="multi"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[items]="_items">
				<cds-dropdown-list />
			</cds-combo-box>
			selected: {{ sampleForm.get("multibox").value | json }}
		</form>
	`
})
export class ReactiveFormsCombobox implements OnInit {
	public sampleForm: FormGroup;
	@Input() invalid = false;
	@Input() invalidText = "";
	@Input() warn = false;
	@Input() warnText = "";
	@Input() label = "";
	@Input() helperText = "";
	@Input() size = "md";
	@Input() theme = "dark";
	@Input() set items(newItems: Array<any>) {
		if (!newItems.length) {
			newItems = [];
		}
		if (!isEqual(this._items, newItems)) {
			this._items = newItems;
		}
	}
	@Input() set disabled(isDisabled: boolean) {
		if (this.sampleForm) {
			if (isDisabled) {
				this.sampleForm.disable();
			} else {
				this.sampleForm.enable();
			}
		}
	}

	_items: any[] = [];

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.sampleForm = this.fb.group({
			combobox: new FormControl,
			multibox: new FormControl
		});

		this.sampleForm.get("combobox")?.setValue("four");
		this.sampleForm.get("multibox")?.setValue(["four", "two"]);
	}
}
