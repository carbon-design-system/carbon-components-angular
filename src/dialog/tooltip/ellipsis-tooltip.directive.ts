import {
	Directive,
	Input,
	TemplateRef,
	ElementRef,
	Injector,
	ComponentFactoryResolver,
	ViewContainerRef
} from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { DialogService } from "./../dialog.service";
import { Tooltip } from "./tooltip.component";

/**
 * A directive that creates a tooltip `Dialog` for exposing truncated text.
 *
 * class: EllipsisTooltipDirective (extends PopoverDirective)
 *
 * selector: `nEllipsisTooltip`
 *
 * ```html
 * <div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
 * ```
 *
 * @export
 * @class EllipsisTooltipDirective
 * @extends {TooltipDirective}
 */
@Directive({
	selector: "[nEllipsisTooltip]",
	providers: [
		DialogService
	]
})
export class EllipsisTooltipDirective extends TooltipDirective {
	/**
	 * Toggles tooltip in view if text is truncated.
	 * @returns null
	 * @memberof EllipsisTooltipDirective
	 */
	toggle() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.dialogConfig.content = this._elementRef.nativeElement.innerText;
		super.toggle();
	}
}
