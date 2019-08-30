import { PlaceholderService } from "./../placeholder/placeholder.module";
import { Subscription } from "rxjs";
export declare class DropdownService {
    protected placeholderService: PlaceholderService;
    offset: {
        top?: number;
        left?: number;
    };
    /**
     * reference to the body appended menu
     */
    protected menuInstance: HTMLElement;
    /**
     * Maintains an Event Observable Subscription for tracking window resizes.
     * Window resizing is tracked if the `Dropdown` is appended to the body, otherwise it does not need to be supported.
     */
    protected resize: Subscription;
    protected _offset: {
        top: number;
        left: number;
    };
    constructor(placeholderService: PlaceholderService);
    /**
     * Appends the menu to the body, or a `ibm-placeholder` (if defined)
     *
     * @param parentRef container to position relative to
     * @param menuRef menu to be appended to body
     * @param classList any extra classes we should wrap the container with
     */
    appendToBody(parentRef: HTMLElement, menuRef: HTMLElement, classList: any): HTMLElement;
    /**
     * Reattach the dropdown menu to the parent container
     * @param hostRef container to append to
     */
    appendToDropdown(hostRef: HTMLElement): HTMLElement;
    /**
     * position an open dropdown relative to the given parentRef
     */
    updatePosition(parentRef: any): void;
    protected positionDropdown(parentRef: any, menuRef: any): void;
}
