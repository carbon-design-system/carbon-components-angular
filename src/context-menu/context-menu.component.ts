import {
	Component,
	ElementRef,
	HostListener,
	Input,
	SimpleChanges,
	OnChanges,
	HostBinding
} from "@angular/core";

@Component({
	selector: "ibm-context-menu",
	template: `
			<ng-content></ng-content>
	`,
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class ContextMenuComponent implements OnChanges {
	@Input() root = true;
	@Input() open = false;
	@Input() position = {
		left: 0,
		top: 0
	};

	@HostBinding("class.cds--context-menu") contextMenu = true;
	@HostBinding("class.cds--menu") menu = true;
	@HostBinding("class.cds--context-menu--root") get contextMenuRoot() { return this.root; }
	@HostBinding("class.cds--menu--root") get menuRoot() { return this.root; }
	@HostBinding("class.cds--context-menu--open") get contextMenuOpen() { return this.open; }
	@HostBinding("class.cds--menu--open") get menuOpen() { return this.open; }
	@HostBinding("attr.role") role = "menu";
	@HostBinding("attr.tabindex") tabindex = "-1";
	@HostBinding("style.left.px") get leftPosition() { return this.position.left; }
	@HostBinding("style.top.px") get topPosition() { return this.position.top; }

	constructor(protected elementRef: ElementRef) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.open && changes.open.currentValue) {
			this.focusMenu();
		}
	}

	focusMenu() {
		// wait until the next tick to let the DOM settle before changing the focus
		const list: HTMLElement = this.elementRef.nativeElement;
		setTimeout(() => {
			if (this.root) {
				list.focus();
			} else {
				const firstOption = list.querySelector(".cds--context-menu-option, .cds--menu-option") as HTMLElement;
				firstOption.focus();
			}
		});
	}

	@HostListener("keydown", ["$event"])
	handleNavigation(event: KeyboardEvent) {
		/**
		 * @todo update this
		 */
		const list: HTMLElement = this.elementRef.nativeElement;
		const subMenus: HTMLElement[] = Array.from(list.querySelectorAll("ibm-context-menu[role=menu]"));
		console.log(subMenus);
		const menuItems: HTMLElement[] = (
			Array.from(list.querySelectorAll(".cds--context-menu-option, .cds--menu-option")) as HTMLElement[])
			.filter(menuItem => !subMenus.some(subMenu => subMenu.contains(menuItem))
			);
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
					console.log(currentMenuItem);
					currentMenuItem.click();
				}
				break;
			}
			case "ArrowLeft": {
				const parent = currentMenuItem.parentElement.closest(".cds--context-menu-option, .cds--menu-option") as HTMLElement;
				if (parent) {
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
