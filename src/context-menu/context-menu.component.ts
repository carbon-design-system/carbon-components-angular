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
	selector: "cds-context-menu, ibm-context-menu",
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
	@Input() open = false;
	@Input() position = {
		left: 0,
		top: 0
	};

	@HostBinding("class.cds--menu") contextMenu = true;
	@HostBinding("class.cds--menu--open") get contextMenuOpen() { return this.open; }
	@HostBinding("class.cds--menu--shown") get showMenu() { return this.open; }
	@HostBinding("attr.role") role = "menu";
	@HostBinding("attr.tabindex") tabindex = "-1";
	@HostBinding("style.left.px") get leftPosition() { return this.position.left; }
	@HostBinding("style.top.px") get topPosition() { return this.position.top; }

	@HostBinding("class.cds--menu--with-icons") get classIcons() {
		const svgElement = this.elementRef.nativeElement
			.querySelector(".cds--menu-item .cds--menu-item__icon svg") as HTMLElement;
		return svgElement;
	}

	constructor(protected elementRef: ElementRef) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.open && changes.open.currentValue) {
			this.focusMenu();
		}
	}

	focusMenu() {
		// wait until the next tick to let the DOM settle before changing the focus
		setTimeout(() => {
			const list: HTMLElement = this.elementRef.nativeElement;
			const firstOption = list.querySelector(".cds--menu-item") as HTMLElement;
			firstOption.focus();
		});
	}

	@HostListener("keydown", ["$event"])
	handleNavigation(event: KeyboardEvent) {
		const list: HTMLElement = this.elementRef.nativeElement;
		const subMenus: HTMLElement[] = Array.from(list.querySelectorAll("cds-context-menu[role=menu]"));
		const menuItems: HTMLElement[] = (
			Array.from(list.querySelectorAll(".cds--menu-item")) as HTMLElement[])
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
					currentMenuItem.click();
				}
				break;
			}
			case "ArrowLeft": {
				const parent = currentMenuItem.parentElement.closest(".cds--menu-item, .cds--menu-item") as HTMLElement;
				if (parent) {
					parent.focus();
				}
				break;
			}
		}
	}
}
