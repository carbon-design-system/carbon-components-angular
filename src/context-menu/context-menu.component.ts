import {
	Component,
	ContentChildren,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	Optional,
	SimpleChanges,
	SkipSelf,
	QueryList,
	forwardRef,
	OnChanges
} from "@angular/core";
import { ContextMenuItemComponent } from "./context-menu-item.component";

@Component({
	selector: "ibm-context-menu",
	template: `
		<ul
			class="bx--context-menu"
			[ngClass]="{
				'bx--context-menu--root': root,
				'bx--context-menu--open': open
			}"
			role="menu"
			[attr.data-level]="level"
			tabindex="-1"
			[ngStyle]="{
				'left.px': position.left,
				'top.px': position.top
			}">
			<ng-content></ng-content>
		</ul>
	`
})
export class ContextMenuComponent implements OnInit, OnChanges {
	@Input() root = true;
	@Input() open = false;
	@Input() position = {
		left: 0,
		top: 0
	};

	public level = 0;

	// tslint:disable-next-line
	@ContentChildren(forwardRef(() => ContextMenuItemComponent), { descendants: true }) menuItems: QueryList<ContextMenuItemComponent>;

	constructor(
		@SkipSelf() @Optional() protected parentContextMenu: ContextMenuComponent,
		protected elementRef: ElementRef
	) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.open && changes.open.currentValue) {
			this.focusMenu();
		}
	}

	ngOnInit() {
		if (this.parentContextMenu && this.parentContextMenu.root) {
			this.root = false;
			this.open = false;
			this.level = this.parentContextMenu.level + 1;
		}
	}

	focusMenu() {
		// wait until the next tick to let the DOM settle before changing the focus
		const list = this.elementRef.nativeElement.querySelector("ul") as HTMLElement;
		setTimeout(() => {
			if (this.root) {
				list.focus();
			} else {
				const firstOption = list.querySelector(".bx--context-menu-option") as HTMLElement;
				firstOption.focus();
			}
		});
	}

	@HostListener("keydown", ["$event"])
	handleNavigation(event: KeyboardEvent) {
		const list: HTMLElement = this.elementRef.nativeElement.querySelector("ul");
		const subMenus: HTMLElement[] = Array.from(list.querySelectorAll("ul[role=menu]"));
		const menuItems: HTMLElement[] = (Array.from(list.querySelectorAll(".bx--context-menu-option")) as HTMLElement[]).filter(menuItem => {
			return !subMenus.some(subMenu => subMenu.contains(menuItem));
		});
		const currentIndex = menuItems.findIndex(menuItem => parseInt(menuItem.getAttribute("tabindex"), 10) === 0);
		const currentMenuItem = menuItems[currentIndex];

		switch (event.key) {
			case "ArrowDown": {
				if (document.activeElement === list) {
					menuItems[0].focus();
				} else {
					if (currentIndex !== -1 && currentIndex < menuItems.length - 1) {
						menuItems[currentIndex + 1].focus();
					}
				}
				break;
			}
			case "ArrowUp": {
				if (document.activeElement === list) {
					menuItems[menuItems.length - 1].focus();
				} else {
					if (currentIndex !== -1 && currentIndex > 0) {
						menuItems[currentIndex - 1].focus();
					}
				}
				break;
			}
			case "ArrowRight": {

				if (currentIndex !== -1 && subMenus.some(subMenu => currentMenuItem.contains(subMenu))) {
					currentMenuItem.click();
				}
				break;
			}
			case "ArrowLeft": {
				if (this.parentContextMenu) {
					const parent = currentMenuItem.parentElement.closest(".bx--context-menu-option") as HTMLElement;
					parent.focus();
				}
				break;
			}
		}
	}

	getDimensions() {
		const element: HTMLElement = this.elementRef.nativeElement.querySelector("ul");
		return element.getBoundingClientRect();
	}
}
