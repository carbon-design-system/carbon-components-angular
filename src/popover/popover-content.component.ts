import {
	Component,
	HostBinding,
	ViewChild,
	ElementRef,
	AfterViewInit,
	ChangeDetectorRef
} from "@angular/core";

/**
 * [See demo](../../?path=/story/components-popover--basic)
 */
@Component({
	selector: "cds-popover-content, ibm-popover-content",
	template: `
		<span class="cds--popover-content" #content>
			<div>
				<ng-content></ng-content>
			</div>
			@if (autoAlign) {
				<span class="cds--popover-caret cds--popover--auto-align"></span>
			}
		</span>
		@if (!autoAlign) {
			<span class="cds--popover-caret"></span>
		}
	`
})
export class PopoverContent implements AfterViewInit {
	@HostBinding("class.cds--popover") popoverClass = true;
	@ViewChild("content") popoverContent: ElementRef;
	autoAlign = false;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngAfterViewInit(): void {
		if (this.popoverContent) {
			// Check we are in a popover with autoAlign enabled
			this.autoAlign = !!this.popoverContent.nativeElement.closest(".cds--popover--auto-align");
			// Run change detection manually to resolve ExpressionHasChanged
			this.changeDetectorRef.detectChanges();
		}
	}
}
