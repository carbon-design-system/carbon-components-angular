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
	// tslint:disable-next-line
	@ContentChildren(forwardRef(() => ContextMenuComponent), { descendants: true }) subMenus: QueryList<ContextMenuComponent>;

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
		setTimeout(() => {
			if (this.root) {
				this.elementRef.nativeElement.querySelector("ul").focus();
			} else {
				this.menuItems.first.focusItem();
			}
		});
	}

	@HostListener("keydown", ["$event"])
	handleNavigation(event: KeyboardEvent) {
		const subMenus = this.subMenus.toArray().filter(subMenu => subMenu !== this);
		const menuItems = this.menuItems.toArray().filter(menuItem => {
			// if the menu item is contained within any submenu then remove it from the array
			return !subMenus.some(subMenu => {
				// check if the menu item is contained within a submenu
				return subMenu.menuItems.some(subMenuItem => menuItem === subMenuItem);
			});
		});
		const currentIndex = menuItems.findIndex(menuItem => menuItem.tabindex === 0);
		const list: HTMLElement = this.elementRef.nativeElement.querySelector("ul");

		switch (event.key) {
			case "ArrowDown": {
				if (document.activeElement === list) {
					menuItems[0].focusItem();
				} else {
					if (currentIndex !== -1 && currentIndex < menuItems.length - 1) {
						menuItems[currentIndex + 1].focusItem();
					}
				}
				break;
			}
			case "ArrowUp": {
				if (document.activeElement === list) {
					menuItems[menuItems.length - 1].focusItem();
				} else {
					if (currentIndex !== -1 && currentIndex > 0) {
						menuItems[currentIndex - 1].focusItem();
					}
				}
				break;
			}
			case "ArrowRight": {
				if (currentIndex !== -1 && menuItems[currentIndex].childContextMenu) {
					menuItems[currentIndex].openSubMenu();
					menuItems[currentIndex].childContextMenu.focusMenu();
				}
				break;
			}
			case "ArrowLeft": {
				if (this.parentContextMenu) {
					const parentItem = this.parentContextMenu.menuItems.find(item => item.childContextMenu === this);
					parentItem.focusItem();
					parentItem.closeSubMenu();

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
