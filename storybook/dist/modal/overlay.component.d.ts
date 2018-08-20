import { EventEmitter, ElementRef } from "@angular/core";
/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 * @export
 * @class OverlayComponent
 */
export declare class OverlayComponent {
    /**
     * To emit the event where the user selects the overlay behind the `Modal`.
     * @memberof OverlayComponent
     */
    overlaySelect: EventEmitter<{}>;
    /**
     * Maintains a reference to the view DOM element of the `OverlayComponent`.
     * @type {ElementRef}
     * @memberof OverlayComponent
     */
    overlay: ElementRef;
    /**
     * Handles the user clicking on the `OverlayComponent` which resides outside the `Modal` object.
     * @param {any} event
     * @returns null
     * @memberof OverlayComponent
     */
    overlayClick(event: any): void;
}
