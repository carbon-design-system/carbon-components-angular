import { EventEmitter, ElementRef, QueryList, OnChanges, AfterViewInit } from "@angular/core";
import { Pill } from "./pill.component";
import { ListItem } from "./../dropdown/list-item.interface";
/**
 * Internal component used to render pills and the pill text input.
 * There is a sizeable chunk of logic here handling focus and keyboard state around pills.
 *
 * @export
 * @class PillInput
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
export declare class PillInput implements OnChanges, AfterViewInit {
    private elementRef;
    /** are we focused? needed because we have a lot of inputs that could steal focus and we need to set visual focus on the wrapper */
    focusActive: boolean;
    /** height of the expanded input */
    expandedHeight: number;
    /** number of pills hidden by overflow */
    numberMore: number;
    /** should we show the placeholder value? */
    showPlaceholder: boolean;
    /** sets the expanded state (hide/show all selected pills) */
    expanded: boolean;
    /** array of selected items */
    pills: Array<ListItem>;
    /** value to display when nothing is selected */
    placeholder: string;
    /** value to display when something is selected */
    displayValue: string;
    /** "single" or "multi" for single or multi select lists */
    type: "single" | "multi";
    size: "sm" | "md" | "lg";
    /** is the input disabled. true/false */
    disabled: boolean;
    /** the direction of the pills */
    pillDirection: "row" | "column";
    /** empty event to trigger an update of the selected items */
    updatePills: EventEmitter<{}>;
    /** emitted when the user types into an input */
    search: EventEmitter<{}>;
    /** emitted when the user presses enter and a value is present */
    submit: EventEmitter<{}>;
    /** emitted when the component is focused */
    focus: EventEmitter<{}>;
    /** emitted when the component looses focus */
    blur: EventEmitter<{}>;
    /** ViewChild of the pill wrapper */
    pillWrapper: any;
    /** ViewChild for the overall wrapper */
    inputWrapper: any;
    /** ViewChild for the single input input box */
    singleInput: any;
    /** List of inputs */
    pillInputs: QueryList<any>;
    /** list of instantiated pills */
    pillInstances: QueryList<Pill>;
    width: string;
    /** instaniates a pill-input */
    constructor(elementRef: ElementRef);
    /**
     * Updates the pills, and subscribes to their `remove` events.
     * Updates the displayValue and checks if it should be displayed.
     * @param changes
     */
    ngOnChanges(changes: any): void;
    /**
     * Binds events on the view.
     * @returns null
     * @memberof PillInput
     */
    ngAfterViewInit(): void;
    /**
     * Helper method to check if an array is empty
     * @param {Array<any>} array
     */
    empty(array: Array<any>): boolean;
    /**
     * sets focus to state
     *
     * @param {boolean} state
     */
    setFocus(state: boolean): void;
    /**
     * focuses the correct input and handles clearing any unnecessary values from any other input
     *
     * @param ev
     */
    focusInput(ev: any): void;
    /**
     * toggles the expanded state of the input wrapper to show all pills
     *
     * @param ev
     */
    showMore(ev: any): void;
    /**
     * sets the height of the input wrapper to the correct height for all selected pills
     */
    doResize(): void;
    /**
     * clears the content of inputs
     *
     * @param toSkip input element to skip clearing
     */
    clearInputText(toSkip?: any): void;
    /**
     * returns the text from an event, the textContent of the first filled pillInput, or an empty string
     *
     * @param ev optional event to pull text from
     */
    getInputText(ev?: any): string;
    /**
     * handles deleting pills on backspace, submitting user input on enter, and navigating the pill list with arrow left/right
     *
     * @param ev
     */
    onKeydown(ev: KeyboardEvent): void;
    /** handles emmiting the search event */
    onKeyup(ev: KeyboardEvent): void;
    /**
     * checks weather the placeholder should be displayed or not.
     */
    private checkPlaceholderVisibility;
    /**
     * selects all the text in a given node
     *
     * @param target node to set the selection on
     */
    private setSelection;
}
