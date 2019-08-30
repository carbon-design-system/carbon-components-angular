import { EventEmitter, ElementRef } from "@angular/core";
/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 */
export declare class Overlay {
    /**
     * Classification of the modal.
     */
    theme: "default" | "danger";
    /**
     * To emit the event where the user selects the overlay behind the `Modal`.
     */
    overlaySelect: EventEmitter<{}>;
    /**
     * Maintains a reference to the view DOM element of the `Overlay`.
     */
    overlay: ElementRef;
    /**
     * Handles the user clicking on the `Overlay` which resides outside the `Modal` object.
     */
    overlayClick(event: any): void;
}
