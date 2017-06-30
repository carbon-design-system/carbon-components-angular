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
	selector: "form-modal",
	template: `
		<n-modal size="sm" (overlaySelected)="closeModal()">
			<n-modal-header (closeSelect)="closeModal()">Form</n-modal-header>
			<form novalidate (ngSubmit)="submit()" [formGroup]="form">
				<div class="modal-body">
					<div class="form-instructions">{{modalText}}</div>
					<n-label *ngFor="let field of fields" [labelState]="form.get(field).touched && !form.get(field).valid ? 'error' : ''"
						[class.has-error]="form.get(field).touched && !form.get(field).valid">
						<label *ngIf="!(form.get(field).touched && !form.get(field).valid)" class="label">{{field}}</label>
						<label *ngIf="form.get(field).touched && !form.get(field).valid" class="label">Field with error</label>
						<input type="text" class="input-field" formControlName="{{field}}"/>
					</n-label>

					<!-- Following is for testing escape behavior (when those are open, escape should close them and not modal) -->
					<label class="label label-top">Drop-down list</label>
					<n-dropdown
						placeholder="Select an option">
						<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
					</n-dropdown>
					<br><br>
					<button class="btn" nPopover="Hello there" placement="bottom" title="Popover">Popover bottom</button>
				</div>
				<n-modal-footer>
					<button class="btn btn-secondary cancel-button" (click)="closeModal()">Cancel</button>
                    <button class="btn submit-button" type="submit">Submit</button>
				</n-modal-footer>
			</form>
		</n-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class FormModalComponent implements OnInit {
	closeModal: Function;
	private modalText: string;
	private fields = [];
	private form: FormGroup;
	private submitted: any;

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
