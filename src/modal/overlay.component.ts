import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cdl-overlay",
  templateUrl: `
    <section class="overlay" (click)="overlayClick($event)"></section>
  `,
  styleUrls: ["./overlay.component.scss"]
})
export class OverlayComponent {
  @Output() overlaySelect = new EventEmitter();

  constructor() { }

  overlayClick(event) {
    event.stopPropagation();
    this.overlaySelect.emit(event);
  }

}
