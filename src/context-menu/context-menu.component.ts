import {
	Component,
	ElementRef,
	HostListener,
	Input,
	SimpleChanges,
	OnChanges
} from "@angular/core";

@Component({
	selector: "ibm-context-menu",
	template: `
		<ul
			class="cds--context-menu cds--menu"
			[ngClass]="{
				'cds--context-menu--root': root,
				'cds--menu--root': root,
				'cds--context-menu--open': open,
				'cds--menu--open': open
			}"
			role="menu"
			tabindex="-1"
			[ngStyle]="{
				'left.px': position.left,
				'top.px': position.top
			}">
			<ng-content></ng-content>
		</ul>
	`
})
export class ContextMenuComponent implements OnChanges {
	@Input() root = true;
	@Input() open = false;
	@Input() position = {
		left: 0,
		top: 0
	};

	constructor(protected elementRef: ElementRef) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.open && changes.open.currentValue) {
			this.focusMenu();
		}
	}

	focusMenu() {
		// wait until the next tick to let the DOM settle before changing the focus
		const list = this.elementRef.nativeElement.querySelector("ul") as HTMLElement;
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
		const list: HTMLElement = this.elementRef.nativeElement.querySelector("ul");
		const subMenus: HTMLElement[] = Array.from(list.querySelectorAll("ul[role=menu]"));
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
