import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormControl,
	FormsModule,
	NgControl,
	ReactiveFormsModule
} from "@angular/forms";
import { Dropdown, DropdownList } from "../";
import { JsonPipe } from "@angular/common";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<div style="width: 300px">
				<cds-dropdown
					[label]="label"
					[hideLabel]="hideLabel"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[theme]="theme"
					[selectionFeedback]="selectionFeedback"
					placeholder="Multi-select"
					value="oid"
					(selected)="selected.emit($event)"
					(onClose)="onClose.emit($event)"
					formControlName="roles">
					<cds-dropdown-list [items]="items"></cds-dropdown-list>
				</cds-dropdown>
			</div>
		</form>
		<br>
		<code>{{ formGroup.get("roles").value | json }}</code>
	`,
	imports: [Dropdown, DropdownList, JsonPipe, ReactiveFormsModule],
	standalone: true
})
export class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

	@Input() items = [];
	@Input() label = "";
	@Input() hideLabel = false;
	@Input() helperText = "";
	@Input() invalid = false;
	@Input() invalidText = "";
	@Input() selectionFeedback = "top-after-reopen";
	@Input() set disabled(value: boolean) {
		if (!this.formGroup) { return; }
		if (value) {
			this.formGroup.get("roles")?.disable();
		} else {
			this.formGroup.get("roles")?.enable();
		}
	}
	@Output() selected = new EventEmitter();
	@Output() onClose = new EventEmitter();

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			roles: new FormControl()
		});
		this.selectRoles();
	}

	private selectRoles() {
		this.formGroup.get("roles")?.setValue(1);
	}
}
