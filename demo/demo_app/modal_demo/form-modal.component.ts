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
		<cdl-modal size="sm" (overlaySelected)="closeModal()">
			<cdl-modal-header (closeSelect)="closeModal()">Form</cdl-modal-header>
			<form novalidate (ngSubmit)="submit()" [formGroup]="form">
				<div class="modal-body">
					<div class="form-instructions">{{modalText}}</div>
					<div class="form-container" *ngFor="let field of fields" [class.has-error]="form.get(field).touched && !form.get(field).valid">
						<label class="label label-top">{{field}}</label>
						<input type="text" class="input-field" placeholder="{{field}}" formControlName="{{field}}"/>
					</div>
				</div>
				<cdl-modal-footer>
					<button class="btn secondary cancel-button" (click)="closeModal()">Cancel</button>
                    <button class="btn submit-button" type="submit">Submit</button>
				</cdl-modal-footer>
			</form>
		</cdl-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class FormModalComponent implements OnInit {
	closeModal: Function;
	private modalText: string;
	private fields = [];
	private form: FormGroup;
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
