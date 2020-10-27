import { AfterViewInit, Component, ElementRef, Optional } from "@angular/core";
import { position } from "@carbon/utils-position";
import { I18n } from "carbon-components-angular/i18n";
import { ElementService } from "carbon-components-angular/utils";

import { Dialog } from "../dialog.component";

@Component({
	selector: "ibm-overflow-custom-menu-pane",
	template: `
		<div
			[attr.aria-label]="dialogConfig.menuLabel"
			[ngClass]="{'bx--overflow-menu--flip': dialogConfig.flip}"
			class="bx--overflow-menu-options bx--overflow-menu-options--open"
			role="menu"
			(click)="doClose()"
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
		// mark `elementService` as optional since making it mandatory would be a breaking change
		@Optional() protected elementService: ElementService = null
	) {
		super(elementRef, elementService);
	}

	onDialogInit() {
		const positionOverflowMenu = pos => {
			let offset;
			/*
			* 16 is half the width of the overflow menu trigger element.
			* we also move the element by half of it's own width, since
			* position service will try and center everything
			*/
			const closestRel = this.closestAttr("position", ["relative", "fixed", "absolute"]);
			const topFix = closestRel ? closestRel.getBoundingClientRect().top * -1 : 0;
			const leftFix = closestRel ? closestRel.getBoundingClientRect().left * -1 : 0;

			offset = Math.round(this.dialog.nativeElement.offsetWidth / 2) - 16;
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

	closestAttr(s, t) {
		let el = this.elementRef.nativeElement;

		do {
			if (
				this.matchesAttr(el, s, t)
			) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	}

	matchesAttr(el, attr, val) {
		const styles = window.getComputedStyle(el);
		return val.includes(styles[attr]);
	}
}
