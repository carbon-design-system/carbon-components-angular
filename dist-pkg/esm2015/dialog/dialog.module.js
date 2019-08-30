/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";
import { DialogPlaceholder } from "./dialog-placeholder.component";
import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDefinition } from "./tooltip/tooltip-definition.component";
import { TooltipIcon } from "./tooltip/tooltip-icon.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltip } from "./tooltip/ellipsis-tooltip.directive";
import { OverflowMenu } from "./overflow-menu/overflow-menu.component";
import { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { ExperimentalModule } from "./../experimental.module";
export { DialogService } from "./dialog.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholder } from "./dialog-placeholder.component";
export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDefinition } from "./tooltip/tooltip-definition.component";
export { TooltipIcon } from "./tooltip/tooltip-icon.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltip } from "./tooltip/ellipsis-tooltip.directive";
export { OverflowMenu } from "./overflow-menu/overflow-menu.component";
export { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
export { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
export { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
export class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Dialog,
                    Tooltip,
                    TooltipDefinition,
                    TooltipIcon,
                    OverflowMenu,
                    OverflowMenuPane,
                    DialogDirective,
                    TooltipDirective,
                    EllipsisTooltip,
                    OverflowMenuDirective,
                    OverflowMenuOption,
                    DialogPlaceholder
                ],
                exports: [
                    Dialog,
                    Tooltip,
                    TooltipDefinition,
                    TooltipIcon,
                    OverflowMenu,
                    OverflowMenuPane,
                    DialogDirective,
                    TooltipDirective,
                    EllipsisTooltip,
                    OverflowMenuDirective,
                    OverflowMenuOption,
                    DialogPlaceholder
                ],
                providers: [DialogService],
                entryComponents: [
                    Dialog,
                    Tooltip,
                    OverflowMenuPane
                ],
                imports: [
                    CommonModule,
                    I18nModule,
                    PlaceholderModule,
                    ExperimentalModule
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUE0Q3BGLE1BQU07OztZQTFDTCxRQUFRLFNBQUM7Z0JBQ1QsWUFBWSxFQUFFO29CQUNiLE1BQU07b0JBQ04sT0FBTztvQkFDUCxpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixpQkFBaUI7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixNQUFNO29CQUNOLE9BQU87b0JBQ1AsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUUsQ0FBRSxhQUFhLENBQUU7Z0JBQzVCLGVBQWUsRUFBRTtvQkFDaEIsTUFBTTtvQkFDTixPQUFPO29CQUNQLGdCQUFnQjtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtpQkFDbEI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZXNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuLy8gaW1wb3J0c1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL2RpYWxvZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEaWFsb2dEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaWFsb2cuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBEaWFsb2dQbGFjZWhvbGRlciB9IGZyb20gXCIuL2RpYWxvZy1wbGFjZWhvbGRlci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCIuL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvb2x0aXBEZWZpbml0aW9uIH0gZnJvbSBcIi4vdG9vbHRpcC90b29sdGlwLWRlZmluaXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb29sdGlwSWNvbiB9IGZyb20gXCIuL3Rvb2x0aXAvdG9vbHRpcC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gXCIuL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEVsbGlwc2lzVG9vbHRpcCB9IGZyb20gXCIuL3Rvb2x0aXAvZWxsaXBzaXMtdG9vbHRpcC5kaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgT3ZlcmZsb3dNZW51IH0gZnJvbSBcIi4vb3ZlcmZsb3ctbWVudS9vdmVyZmxvdy1tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3ZlcmZsb3dNZW51UGFuZSB9IGZyb20gXCIuL292ZXJmbG93LW1lbnUvb3ZlcmZsb3ctbWVudS1wYW5lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3ZlcmZsb3dNZW51RGlyZWN0aXZlIH0gZnJvbSBcIi4vb3ZlcmZsb3ctbWVudS9vdmVyZmxvdy1tZW51LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgT3ZlcmZsb3dNZW51T3B0aW9uIH0gZnJvbSBcIi4vb3ZlcmZsb3ctbWVudS9vdmVyZmxvdy1tZW51LW9wdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlck1vZHVsZSB9IGZyb20gXCIuLy4uL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLm1vZHVsZVwiO1xuaW1wb3J0IHsgRXhwZXJpbWVudGFsTW9kdWxlIH0gZnJvbSBcIi4vLi4vZXhwZXJpbWVudGFsLm1vZHVsZVwiO1xuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vZGlhbG9nLnNlcnZpY2VcIjtcbmV4cG9ydCB7IERpYWxvZyB9IGZyb20gXCIuL2RpYWxvZy5jb21wb25lbnRcIjtcbmV4cG9ydCB7IERpYWxvZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL2RpYWxvZy5kaXJlY3RpdmVcIjtcbmV4cG9ydCB7IERpYWxvZ1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4vZGlhbG9nLXBsYWNlaG9sZGVyLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgeyBUb29sdGlwIH0gZnJvbSBcIi4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudFwiO1xuZXhwb3J0IHsgVG9vbHRpcERlZmluaXRpb24gfSBmcm9tIFwiLi90b29sdGlwL3Rvb2x0aXAtZGVmaW5pdGlvbi5jb21wb25lbnRcIjtcbmV4cG9ydCB7IFRvb2x0aXBJY29uIH0gZnJvbSBcIi4vdG9vbHRpcC90b29sdGlwLWljb24uY29tcG9uZW50XCI7XG5leHBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSBcIi4vdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZVwiO1xuZXhwb3J0IHsgRWxsaXBzaXNUb29sdGlwIH0gZnJvbSBcIi4vdG9vbHRpcC9lbGxpcHNpcy10b29sdGlwLmRpcmVjdGl2ZVwiO1xuXG5leHBvcnQgeyBPdmVyZmxvd01lbnUgfSBmcm9tIFwiLi9vdmVyZmxvdy1tZW51L292ZXJmbG93LW1lbnUuY29tcG9uZW50XCI7XG5leHBvcnQgeyBPdmVyZmxvd01lbnVQYW5lIH0gZnJvbSBcIi4vb3ZlcmZsb3ctbWVudS9vdmVyZmxvdy1tZW51LXBhbmUuY29tcG9uZW50XCI7XG5leHBvcnQgeyBPdmVyZmxvd01lbnVEaXJlY3RpdmUgfSBmcm9tIFwiLi9vdmVyZmxvdy1tZW51L292ZXJmbG93LW1lbnUuZGlyZWN0aXZlXCI7XG5leHBvcnQgeyBPdmVyZmxvd01lbnVPcHRpb24gfSBmcm9tIFwiLi9vdmVyZmxvdy1tZW51L292ZXJmbG93LW1lbnUtb3B0aW9uLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREaWFsb2csXG5cdFx0VG9vbHRpcCxcblx0XHRUb29sdGlwRGVmaW5pdGlvbixcblx0XHRUb29sdGlwSWNvbixcblx0XHRPdmVyZmxvd01lbnUsXG5cdFx0T3ZlcmZsb3dNZW51UGFuZSxcblx0XHREaWFsb2dEaXJlY3RpdmUsXG5cdFx0VG9vbHRpcERpcmVjdGl2ZSxcblx0XHRFbGxpcHNpc1Rvb2x0aXAsXG5cdFx0T3ZlcmZsb3dNZW51RGlyZWN0aXZlLFxuXHRcdE92ZXJmbG93TWVudU9wdGlvbixcblx0XHREaWFsb2dQbGFjZWhvbGRlclxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RGlhbG9nLFxuXHRcdFRvb2x0aXAsXG5cdFx0VG9vbHRpcERlZmluaXRpb24sXG5cdFx0VG9vbHRpcEljb24sXG5cdFx0T3ZlcmZsb3dNZW51LFxuXHRcdE92ZXJmbG93TWVudVBhbmUsXG5cdFx0RGlhbG9nRGlyZWN0aXZlLFxuXHRcdFRvb2x0aXBEaXJlY3RpdmUsXG5cdFx0RWxsaXBzaXNUb29sdGlwLFxuXHRcdE92ZXJmbG93TWVudURpcmVjdGl2ZSxcblx0XHRPdmVyZmxvd01lbnVPcHRpb24sXG5cdFx0RGlhbG9nUGxhY2Vob2xkZXJcblx0XSxcblx0cHJvdmlkZXJzOiBbIERpYWxvZ1NlcnZpY2UgXSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RGlhbG9nLFxuXHRcdFRvb2x0aXAsXG5cdFx0T3ZlcmZsb3dNZW51UGFuZVxuXHRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEkxOG5Nb2R1bGUsXG5cdFx0UGxhY2Vob2xkZXJNb2R1bGUsXG5cdFx0RXhwZXJpbWVudGFsTW9kdWxlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHt9XG4iXX0=