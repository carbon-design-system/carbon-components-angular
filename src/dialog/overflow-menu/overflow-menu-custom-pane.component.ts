import { AfterViewInit, Component, ElementRef, Optional } from "@angular/core";
import { position } from "@carbon/utils-position";
import { I18n } from "carbon-components-angular/i18n";
import { AnimationFrameService, ElementService } from "carbon-components-angular/utils";
import { closestAttr } from "carbon-components-angular/utils";
import { CloseReasons } from "../dialog-config.interface";
import { Dialog } from "../dialog.component";

/**
 * @deprecated as of v5
 * Use Toggletip or Popover components instead
 */
@Component({
	selector: "cds-overflow-custom-menu-pane, ibm-overflow-custom-menu-pane",
	template: `
		<div
			[attr.id]="dialogConfig.compID"
			[attr.aria-label]="dialogConfig.menuLabel"
			[attr.data-floating-menu-direction]="placement ? placement : null"
			[ngClass]="{'cds--overflow-menu--flip': dialogConfig.flip}"
			class="cds--overflow-menu-options cds--overflow-menu-options--open"
			role="menu"
			(click)="onClick($event)"
			#dialog
			[attr.aria-label]="dialogConfig.menuLabel">
			<ng-template
				[ngTemplateOutlet]="dialogConfig.content"
				[ngTemplateOutletContext]="{overflowMenu: this}">
			</ng-template>
		</div>
	`
})
export class OverflowMenuCustomPane extends Dialog implements AfterViewInit {
	constructor(
		protected elementRef: ElementRef,
		protected i18n: I18n,
		@Optional() protected animationFrameService: AnimationFrameService = null,
		// mark `elementService` as optional since making it mandatory would be a breaking change
		@Optional() protected elementService: ElementService = null
	) {
		super(elementRef, elementService, animationFrameService);
	}

	onClick(event) {
		this.doClose({
			reason: CloseReasons.interaction,
			target: event.target
		});
	}

	onDialogInit() {
		const positionOverflowMenu = pos => {
			let offset;
			/*
			* 20 is half the width of the overflow menu trigger element.
			* we also move the element by half of it's own width, since
			* position service will try and center everything
			*/
			const closestRel = closestAttr("position", ["relative", "fixed", "absolute"], this.elementRef.nativeElement);
			const topFix = closestRel ? closestRel.getBoundingClientRect().top * -1 : 0;
			const leftFix = closestRel ? closestRel.getBoundingClientRect().left * -1 : 0;

			offset = Math.round(this.dialog.nativeElement.offsetWidth / 2) - 20;
			if (this.dialogConfig.flip) {
				return position.addOffset(pos, topFix, (-offset + leftFix));
			}
			return position.addOffset(pos, topFix, (offset + leftFix));
		};

		this.addGap["bottom"] = positionOverflowMenu;

		this.addGap["top"] = positionOverflowMenu;

		if (!this.dialogConfig.menuLabel) {
			this.dialogConfig.menuLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
		}
	}
}
