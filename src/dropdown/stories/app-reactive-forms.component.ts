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
	FormControl
} from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<div style="width: 300px">
				<cds-dropdown
					[label]="label"
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
	`
})
export class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

	@Input() items = [];
	@Input() label = "";
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
