/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, ElementRef } from "@angular/core";
import { Dialog } from "../dialog.component";
import { position } from "@carbon/utils-position";
import { isFocusInLastItem, isFocusInFirstItem } from "./../../common/tab.service";
import { I18n } from "./../../i18n/i18n.module";
import { ExperimentalService } from "./../../experimental.module";
/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
export class OverflowMenuPane extends Dialog {
    /**
     * @param {?} elementRef
     * @param {?} i18n
     * @param {?} experimental
     */
    constructor(elementRef, i18n, experimental) {
        super(elementRef);
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.experimental = experimental;
    }
    /**
     * @return {?}
     */
    onDialogInit() {
        this.addGap["bottom"] = pos => {
            /** @type {?} */
            let offset;
            if (this.experimental.isExperimental) {
                /*
                                * 16 is half the width of the overflow menu trigger element.
                                * we also move the element by half of it's own width, since
                                * position service will try and center everything
                                */
                offset = Math.round(this.dialog.nativeElement.offsetWidth / 2) - 16;
            }
            else {
                // 60 shifts the menu right to align the arrow.
                offset = 60;
            }
            if (this.dialogConfig["flip"]) {
                return position.addOffset(pos, 0, -offset);
            }
            return position.addOffset(pos, 0, offset);
        };
        if (!this.dialogConfig["menuLabel"]) {
            this.dialogConfig["menuLabel"] = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hostkeys(event) {
        /** @type {?} */
        const listItems = this.listItems();
        switch (event.key) {
            case "Down": // IE specific value
            case "ArrowDown":
                event.preventDefault();
                if (!isFocusInLastItem(event, listItems)) {
                    /** @type {?} */
                    const index = listItems.findIndex(item => item === event.target);
                    listItems[index + 1].focus();
                }
                else {
                    listItems[0].focus();
                }
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                event.preventDefault();
                if (!isFocusInFirstItem(event, listItems)) {
                    /** @type {?} */
                    const index = listItems.findIndex(item => item === event.target);
                    listItems[index - 1].focus();
                }
                else {
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
    /**
     * @return {?}
     */
    afterDialogViewInit() {
        /** @type {?} */
        const focusElementList = this.listItems();
        focusElementList.forEach(button => {
            // Allows user to set tabindex to 0.
            if (button.getAttribute("tabindex") === null) {
                button.tabIndex = -1;
            }
        });
        focusElementList[0].tabIndex = 0;
        focusElementList[0].focus();
    }
    /**
     * @return {?}
     */
    listItems() {
        /** @type {?} */
        const selector = ".bx--overflow-menu-options__option:not([disabled]) .bx--overflow-menu-options__btn";
        return Array.from(this.elementRef.nativeElement.querySelectorAll(selector));
    }
}
OverflowMenuPane.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
OverflowMenuPane.ctorParameters = () => [
    { type: ElementRef },
    { type: I18n },
    { type: ExperimentalService }
];
OverflowMenuPane.propDecorators = {
    hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function OverflowMenuPane_tsickle_Closure_declarations() {
    /** @type {?} */
    OverflowMenuPane.prototype.elementRef;
    /** @type {?} */
    OverflowMenuPane.prototype.i18n;
    /** @type {?} */
    OverflowMenuPane.prototype.experimental;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmZsb3ctbWVudS1wYW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvb3ZlcmZsb3ctbWVudS9vdmVyZmxvdy1tZW51LXBhbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7QUEwQmxFLE1BQU0sdUJBQXdCLFNBQVEsTUFBTTs7Ozs7O0lBQzNDLFlBQXNCLFVBQXNCLEVBQVksSUFBVSxFQUFZLFlBQWlDO1FBQzlHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQURHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVksaUJBQVksR0FBWixZQUFZLENBQXFCO0tBRTlHOzs7O0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7O1lBQzdCLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTs7Ozs7O2dCQU1yQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFD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QyxDQUFDO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0gsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVTLFNBQVM7O1FBQ2xCLE1BQU0sUUFBUSxHQUFHLG9GQUFvRixDQUFDO1FBQ3RHLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ3pGOzs7WUEvR0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0VBZVQ7YUFDRDs7OztZQTlCaUMsVUFBVTtZQUluQyxJQUFJO1lBQ0osbUJBQW1COzs7dUJBd0QxQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSBcIkBjYXJib24vdXRpbHMtcG9zaXRpb25cIjtcbmltcG9ydCB7IGlzRm9jdXNJbkxhc3RJdGVtLCBpc0ZvY3VzSW5GaXJzdEl0ZW0gfSBmcm9tIFwiLi8uLi8uLi9jb21tb24vdGFiLnNlcnZpY2VcIjtcbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi8uLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBFeHBlcmltZW50YWxTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vZXhwZXJpbWVudGFsLm1vZHVsZVwiO1xuXG4vKipcbiAqIEV4dGVuZCB0aGUgYERpYWxvZ2AgY29tcG9uZW50IHRvIGNyZWF0ZSBhbiBvdmVyZmxvdyBtZW51LlxuICpcbiAqIE5vdCB1c2VkIGRpcmVjdGx5LiBTZWUgb3ZlcmZsb3ctbWVudS5jb21wb25lbnQgYW5kIG92ZXJmbG93LW1lbnUuZGlyZWN0aXZlIGZvciBtb3JlXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tb3ZlcmZsb3ctbWVudS1wYW5lXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHVsXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImRpYWxvZ0NvbmZpZy5tZW51TGFiZWxcIlxuXHRcdFx0W25nQ2xhc3NdPVwieydieC0tb3ZlcmZsb3ctbWVudS0tZmxpcCc6IGRpYWxvZ0NvbmZpZy5mbGlwfVwiXG5cdFx0XHRyb2xlPVwibWVudVwiXG5cdFx0XHQjZGlhbG9nXG5cdFx0XHRjbGFzcz1cImJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnMgYngtLW92ZXJmbG93LW1lbnUtb3B0aW9ucy0tb3BlblwiXG5cdFx0XHRyb2xlPVwibWVudVwiXG5cdFx0XHQoY2xpY2spPVwiZG9DbG9zZSgpXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiZGlhbG9nQ29uZmlnLm1lbnVMYWJlbFwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRpYWxvZ0NvbmZpZy5jb250ZW50XCJcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntvdmVyZmxvd01lbnU6IHRoaXN9XCI+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDwvdWw+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmZsb3dNZW51UGFuZSBleHRlbmRzIERpYWxvZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGkxOG46IEkxOG4sIHByb3RlY3RlZCBleHBlcmltZW50YWw6IEV4cGVyaW1lbnRhbFNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uRGlhbG9nSW5pdCgpIHtcblx0XHR0aGlzLmFkZEdhcFtcImJvdHRvbVwiXSA9IHBvcyA9PiB7XG5cdFx0XHRsZXQgb2Zmc2V0O1xuXHRcdFx0aWYgKHRoaXMuZXhwZXJpbWVudGFsLmlzRXhwZXJpbWVudGFsKSB7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdCogMTYgaXMgaGFsZiB0aGUgd2lkdGggb2YgdGhlIG92ZXJmbG93IG1lbnUgdHJpZ2dlciBlbGVtZW50LlxuXHRcdFx0XHQqIHdlIGFsc28gbW92ZSB0aGUgZWxlbWVudCBieSBoYWxmIG9mIGl0J3Mgb3duIHdpZHRoLCBzaW5jZVxuXHRcdFx0XHQqIHBvc2l0aW9uIHNlcnZpY2Ugd2lsbCB0cnkgYW5kIGNlbnRlciBldmVyeXRoaW5nXG5cdFx0XHRcdCovXG5cdFx0XHRcdG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIpIC0gMTY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyA2MCBzaGlmdHMgdGhlIG1lbnUgcmlnaHQgdG8gYWxpZ24gdGhlIGFycm93LlxuXHRcdFx0XHRvZmZzZXQgPSA2MDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmRpYWxvZ0NvbmZpZy5mbGlwKSB7XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvbi5hZGRPZmZzZXQocG9zLCAwLCAtb2Zmc2V0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwb3NpdGlvbi5hZGRPZmZzZXQocG9zLCAwLCBvZmZzZXQpO1xuXHRcdH07XG5cblx0XHRpZiAoIXRoaXMuZGlhbG9nQ29uZmlnLm1lbnVMYWJlbCkge1xuXHRcdFx0dGhpcy5kaWFsb2dDb25maWcubWVudUxhYmVsID0gdGhpcy5pMThuLmdldCgpLk9WRVJGTE9XX01FTlUuT1ZFUkZMT1c7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuXHRob3N0a2V5cyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGNvbnN0IGxpc3RJdGVtcyA9IHRoaXMubGlzdEl0ZW1zKCk7XG5cblx0XHRzd2l0Y2ggKGV2ZW50LmtleSkge1xuXHRcdFx0Y2FzZSBcIkRvd25cIjogLy8gSUUgc3BlY2lmaWMgdmFsdWVcblx0XHRcdGNhc2UgXCJBcnJvd0Rvd25cIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKCFpc0ZvY3VzSW5MYXN0SXRlbShldmVudCwgbGlzdEl0ZW1zKSkgIHtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IGxpc3RJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBldmVudC50YXJnZXQpO1xuXHRcdFx0XHRcdGxpc3RJdGVtc1tpbmRleCArIDFdLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGlzdEl0ZW1zWzBdLmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJVcFwiOiAvLyBJRSBzcGVjaWZpYyB2YWx1ZVxuXHRcdFx0Y2FzZSBcIkFycm93VXBcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKCFpc0ZvY3VzSW5GaXJzdEl0ZW0oZXZlbnQsIGxpc3RJdGVtcykpICB7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBsaXN0SXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0XHRsaXN0SXRlbXNbaW5kZXggLSAxXS5mb2N1cygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3RJdGVtc1tsaXN0SXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIkhvbWVcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGlzdEl0ZW1zWzBdLmZvY3VzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwiRW5kXCI6XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGxpc3RJdGVtc1tsaXN0SXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJFc2NcIjogLy8gSUUgc3BlY2lmaWMgdmFsdWVcblx0XHRcdGNhc2UgXCJFc2NhcGVcIjpcblx0XHRcdGNhc2UgXCJUYWJcIjpcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRoaXMuZG9DbG9zZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6IGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGFmdGVyRGlhbG9nVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgZm9jdXNFbGVtZW50TGlzdCA9IHRoaXMubGlzdEl0ZW1zKCk7XG5cdFx0Zm9jdXNFbGVtZW50TGlzdC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHQvLyBBbGxvd3MgdXNlciB0byBzZXQgdGFiaW5kZXggdG8gMC5cblx0XHRcdGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikgPT09IG51bGwpIHtcblx0XHRcdFx0YnV0dG9uLnRhYkluZGV4ID0gLTE7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9jdXNFbGVtZW50TGlzdFswXS50YWJJbmRleCA9IDA7XG5cdFx0Zm9jdXNFbGVtZW50TGlzdFswXS5mb2N1cygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGxpc3RJdGVtcygpIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IFwiLmJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnNfX29wdGlvbjpub3QoW2Rpc2FibGVkXSkgLmJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnNfX2J0blwiO1xuXHRcdHJldHVybiBBcnJheS5mcm9tPEhUTUxFbGVtZW50Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cdH1cbn1cbiJdfQ==