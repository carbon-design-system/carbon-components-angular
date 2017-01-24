import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-footer',
  template: `
    <footer>
      <ng-content></ng-content>  
    </footer>
  `,
  styleUrls: ['./modal-footer.component.scss']
})

export class ModalFooterComponent {
  constructor() {}
}
