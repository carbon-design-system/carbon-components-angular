import { Optional } from "@angular/core";
import { DialogPlaceholderService } from "./dialog-placeholder.service";
export { DialogService } from "./dialog.service";
export { DialogPlaceholderService } from "./dialog-placeholder.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholderComponent } from "./dialog-placeholder.component";
export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";
export { OverflowMenu } from "./overflow-menu/overflow-menu.component";
export { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
export { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
export { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
export declare function DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: DialogPlaceholderService): DialogPlaceholderService;
export declare const DIALOG_PLACEHOLDER_SERVICE_PROVIDER: {
    provide: typeof DialogPlaceholderService;
    deps: Optional[][];
    useFactory: typeof DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY;
};
export declare class DialogModule {
}
