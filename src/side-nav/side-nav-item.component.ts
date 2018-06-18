import {
	Component,
	Input,
	Output,
	ViewChild,
	AfterViewInit,
	ElementRef,
	EventEmitter,
	HostListener
} from "@angular/core";

import {
	getFocusElementList,
	focusFirstFocusableElement,
	focusLastFocusableElement,
	isFocusInFirstItem,
	isFocusInLastItem,
	isElementFocused
} from "./../common/tab.service";

/**
 * `SideNavItem` expects either a icon with the class `.side-nav-glyph` and
 * a title with the class `.side-nav-item` or a `.side-nav-glyph` and a `SideNavPaneTitle` contained
 * within a `.side-nav-pane-sub-template`.
 *
 *
 * ```html
 * <n-side-nav-item>
 * 	<n-glyphicon class="side-nav-glyph" icon="alert" size="md"></n-glyphicon>
 * 	<span class="side-nav-item">Some title content here</span>
 * </n-side-nav-item>
 * ```
 *
 * ```html
 * <n-side-nav-item>
 * 	<span class="side-nav-item">Some title content here</span>
 * 	<div class="side-nav-pane-sub-template">
 * 		<n-side-nav-pane-title>Some title content here</n-side-nav-pane-title>
 * 		<n-tree-view [items]="demoItems" [listTpl]="listTpl" [elemSpacing]="44" ></n-tree-view>
 * 	</div>
 * </n-side-nav-item>
 * ```
 *
 *
 * @export
 * @class SideNavItem
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-side-nav-item",
	template: `
	<li class="side-nav_menu_item" aria-level="2" #item>
		<a
		[attr.aria-controls]="subpanelId"
		[attr.aria-expanded]="expanded"
		[ngClass]="{active: this.selected}"
		tabindex="0"
		(click)="activatePanel()">
			<ng-content select=".side-nav-item"></ng-content>
		</a>
		<div [id]="subpanelId" class="side-nav_subpanel" #subItem>
			<div class="side-nav_subpanel-wrapper" style="display: none;">
				<ng-content
					select="n-side-nav-subpanel">
				</ng-content>
			</div>
		</div>
	</li>
	`
})
export class SideNavItem implements AfterViewInit {
	/**
	 * To uniquely id `SideNavItem` components contained in the `SideNavGroup` parent component.
	 * @static
	 * @type {number}
	 * @memberof SideNavItem
	 */
	static sideNavItemCount = 0;
	/**
	 * Unique generated id for the `SideNavItem`.
	 * @type {string}
	 * @memberof SideNavItem
	 */
	subpanelId = "side-nav-subpanel-" + SideNavItem.sideNavItemCount;

	/**
	 * Value `true` if menu item has a subpanel that is expanded in the view.
	 * @type {boolean}
	 * @memberof SideNavItem
	 */
	@Input() expanded: boolean = null;
	/**
	 * Value `true` reflects the state of the menu item as being selected.
	 * @type {boolean}
	 * @memberof SideNavItem
	 */
	@Input() selected = false;
	/**
	 * Emits the event of the `SideNavItem` being selected.
	 * @type {EventEmitter<any>}
	 * @memberof SideNavItem
	 */
	@Output() select: EventEmitter<any> = new EventEmitter<any>();

	/**
	 * The list element rendered by `SideNavItem` in view DOM.
	 * @memberof SideNavItem
	 */
	@ViewChild("item") item;
	/**
	 * The panel of subitems associated with this `SideNavItem` in view DOM.
	 * @memberof SideNavItem
	 */
	@ViewChild("subItem") subItem;

	/**
	 * Creates an instance of `SideNavItem`.
	 * @param {ElementRef} _elementRef
	 * @memberof SideNavItem
	 */
	constructor(private _elementRef: ElementRef) {
		SideNavItem.sideNavItemCount++;
	}

	/**
	 * Updates view to display the associated subitem panel if `SideNavItem` component is selected.
	 * @memberof SideNavItem
	 */
	ngAfterViewInit() {
		if (this.hasSubmenu() && this.expanded === null) {
			setTimeout(() => this.expanded = false);
		}
		if (this.selected && this.getPaneTemplateElement()) {
			this.showPane();
			this.selected = false;
		}
	}

	/**
	 * Keyboard listening event to open and close the menu.
	 * @param {KeyboardEvent} event
	 * @memberof SideNavItem
	 */
	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {

		if (event.key === "Enter" || event.key === " " || event.key === "ArrowRight") {
			event.preventDefault();

			this.activatePanel();

			if (event.target === this.getPaneTemplateElement().querySelector(".subpanel_heading") as HTMLElement) {
				this.item.nativeElement.querySelector("div").classList.remove("slide-in");

				// hide after the animation
				setTimeout( () => {
					this.item.nativeElement.closest(".side-nav_subpanel-wrapper").setAttribute("style", "display: none;");
					this.item.nativeElement.closest("li").querySelector("a").focus();
				}, 360);
			}
		}
	}

	/**
	 * The `SideNavItem` has associated subitems.
	 * @returns {boolean}
	 * @memberof SideNavItem
	 */
	hasSubmenu() {
		return (this.subItem.nativeElement.firstElementChild.children && this.subItem.nativeElement.firstElementChild.children.length > 0);
	}

	/**
	 * The item is selected on click if there are no associated subitems.
	 * Otherwise the click toggles view of item's associated subitems.
	 * @memberof SideNavItem
	 */
	activatePanel() {
		// only elements that don't have pane-like children can be selected
		// those that do, show that child on click
		if (!this.hasSubmenu()) {
			this.selected = !this.selected;
		} else {
			this.showPane();
		}
		this.select.emit();
	}

	/**
	 * Gets the native HTML element for the item's pane of associated children subitems.
	 * @returns {HTMLElement}
	 * @memberof SideNavItem
	 */
	getPaneTemplateElement() {
		return this.subItem.nativeElement;
	}

	/**
	 * Toggles the `SideNavItem`'s pane of children subitems into view in the `SideNav`.
	 * @memberof SideNavItem
	 */
	showPane() {
		let pane = this.getPaneTemplateElement();
		if (pane) {
			pane.firstElementChild.setAttribute("style", "display: block;");
			pane.classList.add("slide-in");
			setTimeout( () => {
				(pane.querySelector(".subpanel_heading") as HTMLElement).focus();
			}, 360);  // focus after animation
		}
	}
}
