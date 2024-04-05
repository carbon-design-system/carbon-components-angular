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
			<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
		</span>
		<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
	`
})
export class PopoverContent implements AfterViewInit {
	@HostBinding("class.cds--popover") popoverClass = true;
	@ViewChild("content") popoverContent: ElementRef;
	autoAlign = false;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngAfterViewInit(): void {
		if (this.popoverContent) {
			// Get the parent element and check if auto align is enabled
			const parentElement = this.popoverContent.nativeElement.closest(".cds--popover-container");
			this.autoAlign = parentElement?.classList.contains("cds--popover--auto-align");
			// Run change detection manually to resolve ExpressionHasChanged
			this.changeDetectorRef.detectChanges();
		}
	}
}
