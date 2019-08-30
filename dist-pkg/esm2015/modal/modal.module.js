/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { ModalPlaceholder } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "../forms/forms.module";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { ExperimentalModule } from "./../experimental.module";
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";
export { AlertModalType, ModalButtonType } from "./alert-modal.interface";
export { BaseModal } from "./base-modal.class";
export class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AlertModal,
                    ModalPlaceholder,
                    Modal,
                    ModalHeader,
                    ModalFooter,
                    Overlay
                ],
                exports: [
                    AlertModal,
                    ModalPlaceholder,
                    Modal,
                    ModalHeader,
                    ModalFooter
                ],
                entryComponents: [
                    AlertModal,
                    Modal,
                    ModalFooter,
                    ModalHeader
                ],
                providers: [ModalService],
                imports: [
                    CommonModule,
                    ButtonModule,
                    I18nModule,
                    PlaceholderModule,
                    ExperimentalModule,
                    Close16Module
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHOUQsT0FBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsZ0RBQWMseUJBQXlCLENBQUM7QUFDeEMsMEJBQWMsb0JBQW9CLENBQUM7QUFrQ25DLE1BQU07OztZQWhDTCxRQUFRLFNBQUM7Z0JBQ1QsWUFBWSxFQUFFO29CQUNiLFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixLQUFLO29CQUNMLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxPQUFPO2lCQUNQO2dCQUNELE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsS0FBSztvQkFDTCxXQUFXO29CQUNYLFdBQVc7aUJBQ1g7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixVQUFVO29CQUNWLEtBQUs7b0JBQ0wsV0FBVztvQkFDWCxXQUFXO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxDQUFFLFlBQVksQ0FBRTtnQkFDM0IsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixhQUFhO2lCQUNiO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVzXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDbG9zZTE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvY2xvc2UvMTZcIjtcblxuLy8gaW1wb3J0c1xuaW1wb3J0IHsgTW9kYWxQbGFjZWhvbGRlciB9IGZyb20gXCIuL21vZGFsLXBsYWNlaG9sZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRm9vdGVyIH0gZnJvbSBcIi4vbW9kYWwtZm9vdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbEhlYWRlciB9IGZyb20gXCIuL21vZGFsLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFsZXJ0TW9kYWwgfSBmcm9tIFwiLi9hbGVydC1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5tb2R1bGVcIjtcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlck1vZHVsZSB9IGZyb20gXCIuLy4uL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLm1vZHVsZVwiO1xuaW1wb3J0IHsgRXhwZXJpbWVudGFsTW9kdWxlIH0gZnJvbSBcIi4vLi4vZXhwZXJpbWVudGFsLm1vZHVsZVwiO1xuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSBcIi4vbW9kYWwuZGVjb3JhdG9yXCI7XG5leHBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9hbGVydC1tb2RhbC5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Jhc2UtbW9kYWwuY2xhc3NcIjtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWxlcnRNb2RhbCxcblx0XHRNb2RhbFBsYWNlaG9sZGVyLFxuXHRcdE1vZGFsLFxuXHRcdE1vZGFsSGVhZGVyLFxuXHRcdE1vZGFsRm9vdGVyLFxuXHRcdE92ZXJsYXlcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0TW9kYWwsXG5cdFx0TW9kYWxQbGFjZWhvbGRlcixcblx0XHRNb2RhbCxcblx0XHRNb2RhbEhlYWRlcixcblx0XHRNb2RhbEZvb3RlclxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRBbGVydE1vZGFsLFxuXHRcdE1vZGFsLFxuXHRcdE1vZGFsRm9vdGVyLFxuXHRcdE1vZGFsSGVhZGVyXG5cdF0sXG5cdHByb3ZpZGVyczogWyBNb2RhbFNlcnZpY2UgXSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRCdXR0b25Nb2R1bGUsXG5cdFx0STE4bk1vZHVsZSxcblx0XHRQbGFjZWhvbGRlck1vZHVsZSxcblx0XHRFeHBlcmltZW50YWxNb2R1bGUsXG5cdFx0Q2xvc2UxNk1vZHVsZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHsgfVxuIl19