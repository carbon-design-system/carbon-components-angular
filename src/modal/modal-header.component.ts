import { Component, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-modal-header',
  template: `
    <header class="{{modalType}}">
      <h4>
        <ng-content></ng-content>  
      </h4>
      <app-icon class="icon-remove" (click)="closeSelect.emit()" [iconColor]="'#FFF'" [name]="'X'"></app-icon>
    </header>
  `,
  styleUrls: ['./modal-header.component.scss']
})

export class ModalHeaderComponent {
  @Input() modalType = 'default';
  @Output() closeSelect = new EventEmitter();
  constructor() {}
}
