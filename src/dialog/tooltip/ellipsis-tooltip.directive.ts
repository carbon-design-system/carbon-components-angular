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
 * class: EllipsisTooltip (extends PopoverDirective)
 *
 * selector: `nEllipsisTooltip`
 *
 * ```html
 * <div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
 * ```
 *
 * @export
 * @class EllipsisTooltip
 * @extends {TooltipDirective}
 */
@Directive({
	selector: "[ibmEllipsisTooltip]",
	providers: [
		DialogService
	]
})
export class EllipsisTooltip extends TooltipDirective {
	/**
	 * Toggles tooltip in view if text is truncated.
	 * @returns null
	 * @memberof EllipsisTooltip
	 */
	toggle() {
		if (this.elementRef.nativeElement.scrollWidth <= this.elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.dialogConfig.content = this.elementRef.nativeElement.innerText;
		super.toggle();
	}
}
