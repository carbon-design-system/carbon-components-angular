import {
	Component,
	OnInit,
	Injector,
	Output,
	EventEmitter,
	ViewChild
} from "@angular/core";

import {
	FormControl,
	FormGroup,
	FormBuilder,
	Validators
} from "@angular/forms";

import { ModalService } from "../../../src";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "app-form-modal",
	template: `
		<ibm-modal size="sm">
			<ibm-modal-header (closeSelect)="closeModal()">Form</ibm-modal-header>
			<form novalidate (ngSubmit)="submit()" [formGroup]="form" style="display: contents">
				<div class="modal-body modal_body">
					<div class="form-instructions">{{modalText}}</div>
					<ibm-label *ngFor="let field of fields" [labelState]="form.get(field).touched && !form.get(field).valid ? 'error' : ''"
						[class.has-error]="form.get(field).touched && !form.get(field).valid">
						<label>{{field}}</label>
						<input
							type="text"
							class="input-field"
							[class.valid--error]="form.get(field).touched && !form.get(field).valid"
							formControlName="{{field}}"/>
					</ibm-label>

					<!-- Following is for testing escape behavior (when those are open, escape should close them and not modal) -->
					<label>Drop-down list</label>
					<ibm-dropdown
						placeholder="Select an option">
						<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
					</ibm-dropdown>
					<br><br>
					<button class="btn--primary" type="button" nPopover="Hello there" placement="bottom" title="Popover">Popover bottom</button>
				</div>
				<ibm-modal-footer>
                    <button class="btn--primary submit-button" type="submit">Submit</button>
					<button class="btn--secondary cancel-button" type="button" (click)="closeModal()">Cancel</button>
				</ibm-modal-footer>
			</form>
		</ibm-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class FormModalComponent implements OnInit {
	closeModal: Function;
	public modalText: string;
	public fields = [];
	public form: FormGroup;

	demoItems1 = [
		{
			content: "An item",
			selected: false
		},
		{
			content: "But when",
			selected: false,
		},
		{
			content: "Can a",
			selected: false
		},
		{
			content: "Dog run",
			selected: false
		}
	];

	private submitted: any;

	constructor(private fb: FormBuilder, private injector: Injector) {
		this.modalText = this.injector.get("modalText");
		this.fields = this.injector.get("fields");
		this.submitted = this.injector.get("submitted");
	}

	ngOnInit() {
		this.form = this.fb.group({});

		this.fields.forEach((field) => {
			this.form.addControl(field, new FormControl("", Validators.required));
		});
	}

	submit() {
		if (this.form.valid) {
			this.submitted(this.form);
			this.closeModal();
		}
	}
}
