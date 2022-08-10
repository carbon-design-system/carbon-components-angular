import {
	Component,
	Input,
	AfterContentInit
} from "@angular/core";
import { Observable, Subject } from "rxjs";

import { ModalService } from "../";
import { InputModal } from "./input-modal.component";

@Component({
	selector: "app-data-passing-modal",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
		<h3>Data passed from input modal on input change: </h3>{{ modalInputValue }}
	`
})
export class DataPassingModal implements AfterContentInit {
	@Input() modalText = "Hello, World";
	@Input() size = "md";

	protected modalInputValue = "";
	protected data: Observable<string> = new Subject<string>();

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: InputModal,
			inputs: {
				modalText: this.modalText,
				inputValue: this.modalInputValue,
				size: this.size,
				data: this.data
			}
		});
	}

	ngAfterContentInit() {
		this.data.subscribe(value => this.modalInputValue = value);
	}
}
