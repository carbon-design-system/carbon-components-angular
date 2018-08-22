import { Optional } from "@angular/core";
import { DialogPlaceholderService } from "./dialog-placeholder.service";
export { DialogService } from "./dialog.service";
export { DialogPlaceholderService } from "./dialog-placeholder.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholderComponent } from "./dialog-placeholder.component";
export { Popover } from "./popover/popover.component";
export { PopoverDirective } from "./popover/popover.directive";
export { PopoverMenu } from "./popover/popover-menu.component";
export { PopoverMenuDirective } from "./popover/popover-menu.directive";
export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";
export declare function DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: DialogPlaceholderService): DialogPlaceholderService;
export declare const DIALOG_PLACEHOLDER_SERVICE_PROVIDER: {
    provide: typeof DialogPlaceholderService;
    deps: Optional[][];
    useFactory: typeof DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY;
};
export declare class DialogModule {
}
