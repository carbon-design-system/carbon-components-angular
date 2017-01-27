import { Component } from "@angular/core";
import { XLModalComponent } from "./extra-large.component"
import { ErrorModalComponent } from "./error-modal.component"
import { SampleModalComponent } from "./sample-modal.component"
import { ModalService } from "../../.."

@Component({
  selector: "modal-demo",
  templateUrl: "./modal-demo.component.html"
})
export class ModalDemo {

constructor(private modalService: ModalService) {}

openModal(modalType) {
    switch(modalType) {
      case 'XXL':
        this.modalService.create({component: XLModalComponent, inputs: {}});
        break;
      case 'error':
        this.modalService.create({component: ErrorModalComponent, inputs: {}});
        break;
      default:
        this.modalService.create({component: SampleModalComponent, inputs: {modalText: 'Hello Universe'}});
        break;
    }
  }
}
