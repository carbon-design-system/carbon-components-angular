import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { ModalPlaceholderComponent } from './modal-placeholder.component'
import { ModalService } from './modal.service'
import { ModalComponent } from './modal.component'
import { ModalFooterComponent }  from './modal-footer.component'
import { ModalHeaderComponent } from './modal-header.component'
import { OverlayModule } from '../overlay/overlay.module'
export { default as Modal } from './modal.decorator'

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    IconModule
  ],
  declarations: [
    ModalPlaceholderComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent
  ],
  providers: [
    ModalService
  ],
  entryComponents: [
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent 
  ],
  exports: [
    ModalPlaceholderComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent
  ]
})
export class ModalModule { }
