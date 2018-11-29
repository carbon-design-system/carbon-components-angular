import { Component, HostListener, ElementRef, AfterViewInit } from "@angular/core";
import { Dialog } from "../dialog.component";
import { position } from "../../utils/position";
import { isFocusInLastItem, isFocusInFirstItem } from "./../../common/tab.service";
import { I18n } from "./../../i18n/i18n.module";

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
			(click)="doClose()"
			[attr.aria-label]="dialogConfig.menuLabel">
			<ng-template
				[ngTemplateOutlet]="dialogConfig.content"
				[ngTemplateOutletContext]="{overflowMenu: this}">
			</ng-template>
		</ul>
	`
})
export class OverflowMenuPane extends Dialog implements AfterViewInit {

	constructor(protected elementRef: ElementRef, protected i18n: I18n) {
		super(elementRef);
	}

	onDialogInit() {
		/**
		 *  60 shifts the menu right to align the arrow.
		 * (position service trys it's best to center everything,
		 * so we need to add some compensation)
		 */
		this.addGap["bottom"] = pos => {
			if (this.dialogConfig.flip) {
				return position.addOffset(pos, 0, -60);
			}
			return position.addOffset(pos, 0, 60);
		};

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
				this.doClose();
				break;
			default: break;
		}
	}

	ngAfterViewInit() {
		// wait for the menu to exist in the DOM before setting focus
		// TODO: work on a more elegant solution (afterDialogInit hook maybe?)
		setTimeout(() => {
			const focusElementList = this.listItems();
			focusElementList.forEach(button => {
				// Allows user to set tabindex to 0.
				if (button.getAttribute("tabindex") === null) {
					button.tabIndex = -1;
				}
			});
			focusElementList[0].tabIndex = 0;
			focusElementList[0].focus();
		});
		super.ngAfterViewInit();
	}

	protected listItems() {
		return Array.from<any>(this.elementRef.nativeElement.querySelectorAll(".bx--overflow-menu-options__btn:not([disabled])"));
	}
}
