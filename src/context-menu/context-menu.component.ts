import {
	Component,
	ElementRef,
	HostListener,
	Input,
	SimpleChanges,
	OnChanges,
	HostBinding,
	AfterViewInit,
	ChangeDetectorRef
} from "@angular/core";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { ContextMenuModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-context-menu--basic)
 */
@Component({
	selector: "cds-menu, cds-context-menu, ibm-context-menu",
	template: `
			<ng-content></ng-content>
	`,
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class ContextMenuComponent implements OnChanges, AfterViewInit {
	@Input() open = false;
	@Input() position = {
		left: 0,
		top: 0
	};
	@Input() size: "sm" | "md" | "lg" = "lg";

	@HostBinding("class") get hostClass() {
		const open = this.open ? "cds--menu--open cds--menu--shown" : "";
		return `cds--menu cds--autoalign cds--menu--${this.size} ${open}`;
	}

	@HostBinding("attr.role") role = "menu";
	@HostBinding("attr.tabindex") tabindex = "-1";
	@HostBinding("style.left.px") get leftPosition() { return this.position.left; }
	@HostBinding("style.top.px") get topPosition() { return this.position.top; }

	/**
	 * @todo - convert to getter in v6, should resolve expression has changed
	 * after switching to on OnPush Change Detection Strategy
	 */
	@HostBinding("class.cds--menu--with-icons") iconClass = false;

	constructor(protected elementRef: ElementRef) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.open && changes.open.currentValue) {
			this.focusMenu();
		}
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			const nativeElement = this.elementRef.nativeElement;
			if (nativeElement) {
				this.iconClass = !!nativeElement
					.querySelector(".cds--menu-item .cds--menu-item__icon svg");
			}
		});
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
