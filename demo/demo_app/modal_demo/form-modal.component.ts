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
					<cdl-label *ngFor="let field of fields" [class.has-error]="form.get(field).touched && !form.get(field).valid">
						<label class="label label-top">{{field}}</label>
						<input type="text" class="input-field" formControlName="{{field}}"/>
					</cdl-label>

					<br><br>

					<!-- Following is for testing escape behavior (when those are open, escape should close them and not modal) -->
					<cdl-dropdown
						placeholder="Select an option"
						size="sm">
						<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
					</cdl-dropdown>
					<br><br>
					<button class="btn" cdlPopover="Hello There" placement="bottom">Pop over bottom</button>
				</div>
				<cdl-modal-footer>
					<button class="btn btn-secondary cancel-button" (click)="closeModal()">Close</button>
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

	demoItems1 = [
		{
			content: "a item one",
			selected: false
		},
		{
			content: "b item two",
			selected: false,
		},
		{
			content: "c item three",
			selected: false
		},
		{
			content: "d item four",
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
