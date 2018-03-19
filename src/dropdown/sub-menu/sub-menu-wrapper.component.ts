import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	ViewChild,
	AfterViewInit,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { SubMenuItem } from "./sub-menu-item.component";
import { dropdownConfig } from "./../dropdown.const";


/**
 * @export
 * @class SubMenuWrapper
 */
@Component({
	selector: "n-sub-menu-wrapper",
	template: `
		<div
			[ngStyle]="{
				position: 'absolute',
				left: level === 1 ? 0 : '100%',
				top: 0,
				width: '100%',
				'box-shadow': '0 0 10px rgba(0, 0, 0, 0.15)',
				'z-index': 1
			}">
			<div
				*ngIf="canScroll"
				class="scroll-arrow--up"
				style="display: flex; justify-content: center; background: white;"
				(mouseover)="onHoverUp(true)"
				(mouseout)="onHoverUp(false)">
				<n-static-icon icon="carat_up" size="sm"></n-static-icon>
			</div>
			<ul
				#list
				[ngClass]="{
					'menu_flyout': level === 1,
					'dropdown_menu': level > 1
				}"
				[attr.role]="role"
				[attr.aria-hidden]="((role == 'group') ? !isOpen : null)"
				[attr.aria-label]="label"
				style="position: relative; left: 0;"
				(wheel)="onWheel($event)">
				<li
					*ngFor="let item of items; index as i"
					role="treeitem"
					[attr.aria-level]="level"
					[attr.aria-posinset]="i"
					[attr.aria-setsize]="3"
					[attr.aria-expanded]="(!!item.items ? item.selected : null)"
					[attr.aria-selected]="(item.selected && !item.items) ? true : null">
					<n-sub-menu-item
						[listTpl]="listTpl"
						[level]="level + 1"
						[listItem]="item"
						[hasSubMenu]="!!item.items"
						[parentRef]="parent"
						[rootElem]="rootElem"
						[scrollEnabled]="scrollEnabled"
						(select)="bubbleSelect($event)">
					</n-sub-menu-item>
				</li>
			</ul>
			<div
				*ngIf="canScroll"
				class="scroll-arrow--down"
				style="display: flex; justify-content: center; background: white;"
				(mouseover)="onHoverDown(true)"
				(mouseout)="onHoverDown(false)">
				<n-static-icon icon="carat_up" size="sm" style="transform: rotateX(180deg);"></n-static-icon>
			</div>
		</div>
	`
})
export class SubMenuWrapper implements OnChanges {
	/**
	 * The items to be displayed in the list within the `SubMenuWrapper`.
	 * @type {Array<ListItem>}
	 * @memberof SubMenuWrapper
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Reflects which level the item is at (how many menus it is within).
	 * @type {number}
	 * @memberof SubMenuWrapper
	 */
	@Input() level = 1;
	/**
	 * Set to `true` if the submenu unordered list is hidden (collapsed with parent menu) in the view.
	 * @type {boolean}
	 * @memberof SubMenuWrapper
	 */
	@Input() isOpen = false;
	@Input() parent: any = null;
	/**
	 * Optional custom template for displaying the `SubMenuWrapper`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof SubMenuWrapper
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	/**
	 * The role of the unordered list element.
	 * @type {("tree" | "group")}
	 * @memberof SubMenuWrapper
	 */
	@Input() role: "tree" | "group" = "tree" ;
	/**
	 * Aria label for the unordered list in the submenu.
	 * @type {string}
	 * @memberof SubMenuWrapper
	 */
	@Input() label: string;
	/**
	 * Defines whether or not the `DropdownSubMenu` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof SubMenuWrapper
	 */
	@Input() type: "single" | "multi" = "single";

	@Input() scrollEnabled = false;

	/**
	 * Emits event that handles the selection of a `SubMenuItem`.
	 * @type {EventEmitter<Object>}
	 * @memberof SubMenuWrapper
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	@ViewChild("list") list: ElementRef;

	/**
	 * controls wether the scroll up/down arrows are shown
	 */
	public canScroll = false;

	protected lastTouch;

	protected hoverScrollInterval;

	ngOnChanges(changes: SimpleChanges) {
		if (changes.isOpen) {
			if (changes.isOpen.currentValue) {
				const boundingClientRect = this.list.nativeElement.getBoundingClientRect();
				if (boundingClientRect.bottom > window.innerHeight) {
					this.canScroll = true;
					const list = this.list.nativeElement;
					const boudningClientRect = list.getBoundingClientRect();
					list.style.overflow = "hidden";
					// 40 gives us some padding between the bottom of the list,
					// the bottom of the window, and the scroll down button
					list.style.height =
						`${(boudningClientRect.height - (boudningClientRect.bottom - window.innerHeight)) - 40}px`;
				}
			} else {
				this.canScroll = false;
				const list = this.list.nativeElement;
				list.style.height = null;
				list.style.overflow = null;
				clearInterval(this.hoverScrollInterval);
			}
		}
	}

	// scrolling methods here
	onWheel(event) {
		const list = this.list.nativeElement;
		if (event.deltaY < 0) {
			list.scrollTop -= 10;
		} else {
			list.scrollTop += 10;
		}
		// only prevent the parent/window from scrolling if we can scroll
		if (!(list.scrollTop === list.scrollTopMax || list.scrollTop === 0)) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	onTouchStart(event) {
		if (event.touches[0]) {
			this.lastTouch = event.touches[0].clientY;
		}
	}

	onTouchMove(event) {
		event.preventDefault();
		event.stopPropagation();
		const list = this.list.nativeElement;
		if (event.touches[0]) {
			const touch = event.touches[0];
			list.scrollTop += this.lastTouch - touch.clientY;
			this.lastTouch = touch.clientY;
		}
	}

	hoverScrollBy(hovering, amount) {
		const list = this.list.nativeElement;
		if (hovering) {
			this.hoverScrollInterval = setInterval(() => {
				list.scrollTop += amount;
			}, 1);
		} else {
			clearInterval(this.hoverScrollInterval);
		}
	}

	onHoverUp(hovering) {
		this.hoverScrollBy(hovering, -dropdownConfig.hoverScrollSpeed);
	}

	onHoverDown(hovering) {
		this.hoverScrollBy(hovering, dropdownConfig.hoverScrollSpeed);
	}

	/**
	 * Bubbling the select event up to parent classes.
	 * @param {any} evt
	 * @memberof SubMenuWrapper
	 */
	bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
