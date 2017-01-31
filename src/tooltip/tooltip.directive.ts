import {
  Directive,
  Input,
  TemplateRef,
} from "@angular/core";

import { PopoverDirective } from "../popover/popover.directive";

@Directive({
  selector: "[cdlTooltip]",
  exportAs: "cdlTooltip"
})
export class TooltipDirective extends PopoverDirective {
  @Input() cdlTooltip: string | TemplateRef<any>;

  open() {
    this.cdlPopover = this.cdlTooltip;
    this.isTooltip = true;
    super.open();
  }
}
