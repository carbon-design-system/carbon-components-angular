import { Injectable, ElementRef, OnDestroy } from "@angular/core";
import { PlaceholderService } from "carbon-components-angular/placeholder";
import { Subscription } from "rxjs";
import { position } from "@carbon/utils-position";
import { AnimationFrameService } from "carbon-components-angular/utils";
import { closestAttr } from "carbon-components-angular/utils";

const defaultOffset = { top: 0, left: 0 };

@Injectable()
export class DropdownService implements OnDestroy {
	public set offset(value: { top?: number, left?: number }) {
		this._offset = Object.assign({}, defaultOffset, value);
	}

	public get offset() {
		return this._offset;
	}
	/**
	 * reference to the body appended menu
	 */
	protected menuInstance: HTMLElement;

	/**
	 * Maintains an Event Observable Subscription for the global requestAnimationFrame.
	 * requestAnimationFrame is tracked only if the `Dropdown` is appended to the body otherwise we don't need it
	 */
	protected animationFrameSubscription = new Subscription();

	protected _offset = defaultOffset;

	constructor(
		protected placeholderService: PlaceholderService,
		protected animationFrameService: AnimationFrameService
	) {}

	/**
	 * Appends the menu to the body, or a `cds-placeholder` (if defined)
	 *
	 * @param parentRef container to position relative to
	 * @param menuRef menu to be appended to body
	 * @param classList any extra classes we should wrap the container with
	 */
	appendToBody(parentRef: HTMLElement, menuRef: HTMLElement, classList): HTMLElement {
		// build the dropdown list container
		menuRef.style.display = "block";
		const dropdownWrapper = document.createElement("div");
		dropdownWrapper.className = `dropdown ${classList}`;
		dropdownWrapper.style.width = parentRef.offsetWidth + "px";
		dropdownWrapper.style.position = "absolute";
		dropdownWrapper.appendChild(menuRef);

		// append it to the placeholder
		if (this.placeholderService.hasPlaceholderRef()) {
			this.placeholderService.appendElement(dropdownWrapper);
			// or append it directly to the body
		} else {
			document.body.appendChild(dropdownWrapper);
		}

		this.menuInstance = dropdownWrapper;

		this.animationFrameSubscription = this.animationFrameService.tick.subscribe(() => {
			this.positionDropdown(parentRef, dropdownWrapper);
		});

		// run one position in sync, so we're less likely to have the view "jump" as we focus
		this.positionDropdown(parentRef, dropdownWrapper);

		return dropdownWrapper;
	}

	/**
	 * Reattach the dropdown menu to the parent container
	 * @param hostRef container to append to
	 */
	appendToDropdown(hostRef: HTMLElement): HTMLElement {
		// if the instance is already removed don't try and remove it again
		if (!this.menuInstance) { return; }
		const instance = this.menuInstance;
		const menu = instance.firstElementChild as HTMLElement;
		// clean up the instance
		this.menuInstance = null;
		menu.style.display = "none";
		hostRef.appendChild(menu);
		this.animationFrameSubscription.unsubscribe();
		if (this.placeholderService.hasPlaceholderRef() && this.placeholderService.hasElement(instance)) {
			this.placeholderService.removeElement(instance);
		} else if (document.body.contains(instance)) {
			document.body.removeChild(instance);
		}
		return instance;
	}

	/**
	 * position an open dropdown relative to the given parentRef
	 */
	updatePosition(parentRef) {
		this.positionDropdown(parentRef, this.menuInstance);
	}

	ngOnDestroy() {
		this.animationFrameSubscription.unsubscribe();
	}

	protected positionDropdown(parentRef, menuRef) {
		if (!menuRef) {
			return;
		}

		let leftOffset = 0;

		const boxMenu = menuRef.querySelector(".cds--list-box__menu");

		if (boxMenu) {
			// If the parentRef and boxMenu are in a different left position relative to the
			// window, the the boxMenu position has already been flipped and a check needs to be done
			// to see if it needs to stay flipped.
			if (parentRef.getBoundingClientRect().left !== boxMenu.getBoundingClientRect().left) {
				// The getBoundingClientRect().right of the boxMenu if it were hypothetically flipped
				// back into the original position before the flip.
				const testBoxMenuRightEdgePos =
					parentRef.getBoundingClientRect().left - boxMenu.getBoundingClientRect().left + boxMenu.getBoundingClientRect().right;

				if (testBoxMenuRightEdgePos > (window.innerWidth || document.documentElement.clientWidth)) {
					leftOffset = parentRef.offsetWidth - boxMenu.offsetWidth;
				}
			// If it has not already been flipped, check if it is necessary to flip, ie. if the
			// boxMenu is outside of the right viewPort.
			} else if (boxMenu.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidth)) {
				leftOffset = parentRef.offsetWidth - boxMenu.offsetWidth;
			}
		}

		// If cds-placeholder has a parent with a position(relative|fixed|absolute) account for the parent offset
		const closestMenuWithPos = closestAttr("position", ["relative", "fixed", "absolute"], menuRef.parentElement);
		const topPos = closestMenuWithPos ? closestMenuWithPos.getBoundingClientRect().top * -1 : this.offset.top;
		const leftPos = closestMenuWithPos ? closestMenuWithPos.getBoundingClientRect().left * -1 : this.offset.left + leftOffset;

		let pos = position.findAbsolute(parentRef, menuRef, "bottom");
		pos = position.addOffset(pos, topPos, leftPos);

		position.setElement(menuRef, pos);
	}
}
