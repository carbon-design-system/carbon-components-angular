import {
	Component,
	HostListener,
	ElementRef,
	AfterViewInit,
	Optional
} from "@angular/core";
import { Dialog } from "../dialog.component";
import { position } from "@carbon/utils-position";
import { isFocusInLastItem, isFocusInFirstItem } from "carbon-components-angular/common";
import { I18n } from "carbon-components-angular/i18n";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { AnimationFrameService, ElementService } from "carbon-components-angular/utils";
import { CloseReasons } from "../dialog-config.interface";
import { closestAttr } from "carbon-components-angular/utils";

/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
@Component({
	selector: "ibm-overflow-menu-pane",
	template: `
		<ul
			[attr.aria-label]="dialogConfig.menuLabel"
			[ngClass]="{'bx--overflow-menu--flip': dialogConfig.flip}"
			role="menu"
			#dialog
			class="bx--overflow-menu-options bx--overflow-menu-options--open"
			role="menu"
			(click)="onClose($event)"
			[attr.aria-label]="dialogConfig.menuLabel">
			<ng-template
				[ngTemplateOutlet]="dialogConfig.content"
				[ngTemplateOutletContext]="{overflowMenu: this}">
			</ng-template>
		</ul>
	`
})
export class OverflowMenuPane extends Dialog implements AfterViewInit {
	constructor(
		protected elementRef: ElementRef,
		protected i18n: I18n,
		protected experimental: ExperimentalService,
		protected animationFrameService: AnimationFrameService,
		// mark `elementService` as optional since making it mandatory would be a breaking change
		@Optional() protected elementService: ElementService = null) {
		super(elementRef, elementService, animationFrameService);
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

	@HostListener("keydown", ["$event"])
	hostkeys(event: KeyboardEvent) {
		const listItems = this.listItems();

		switch (event.key) {
			case "Down": // IE specific value
			case "ArrowDown":
				event.preventDefault();
				if (!isFocusInLastItem(event, listItems))  {
					const index = listItems.findIndex(item => item === event.target);
					listItems[index + 1].focus();
				} else {
					listItems[0].focus();
				}
				break;

			case "Up": // IE specific value
			case "ArrowUp":
				event.preventDefault();
				if (!isFocusInFirstItem(event, listItems))  {
					const index = listItems.findIndex(item => item === event.target);
					listItems[index - 1].focus();
				} else {
					listItems[listItems.length - 1].focus();
				}
				break;

			case "Home":
				event.preventDefault();
				listItems[0].focus();
				break;

			case "End":
				event.preventDefault();
				listItems[listItems.length - 1].focus();
				break;

			case "Esc": // IE specific value
			case "Escape":
			case "Tab":
				event.stopImmediatePropagation();
				this.doClose({
					reason: CloseReasons.interaction,
					target: event.target
				});
				break;
			default: break;
		}
	}

	onClose(event) {
		this.doClose({
			reason: CloseReasons.interaction,
			target: event.target
		});
	}

	afterDialogViewInit() {
		const focusElementList = this.listItems();
		focusElementList.forEach(button => {
			// Allows user to set tabindex to 0.
			if (button.getAttribute("tabindex") === null) {
				button.tabIndex = -1;
			}
		});
		if (focusElementList[0]) {
			focusElementList[0].tabIndex = 0;
			focusElementList[0].focus();
		}
	}

	protected listItems() {
		const selector = ".bx--overflow-menu-options__option:not([disabled]) .bx--overflow-menu-options__btn";
		return Array.from<HTMLElement>(this.elementRef.nativeElement.querySelectorAll(selector));
	}
}
