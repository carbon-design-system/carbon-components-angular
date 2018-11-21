/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 */
export declare type Placement = "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-bottom" | "right-bottom";
export interface AbsolutePosition {
    top: number;
    left: number;
    position?: AbsolutePosition;
}
export declare type Offset = {
    left: number;
    top: number;
};
export declare namespace position {
    function getRelativeOffset(target: HTMLElement): Offset;
    function getAbsoluteOffset(target: HTMLElement): Offset;
    function findRelative(reference: HTMLElement, target: HTMLElement, placement: Placement): AbsolutePosition;
    function findAbsolute(reference: HTMLElement, target: HTMLElement, placement: Placement): AbsolutePosition;
    function findPosition(reference: HTMLElement, target: HTMLElement, placement: Placement, offsetFunction?: typeof getRelativeOffset): AbsolutePosition;
    /**
     * Get the dimensions of the dialog from an AbsolutePosition and a reference element
     */
    function getPlacementBox(target: HTMLElement, position: AbsolutePosition): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    function addOffset(position: AbsolutePosition, top?: number, left?: number): AbsolutePosition;
    function setElement(element: HTMLElement, position: AbsolutePosition): void;
}
export default position;
