import { EventEmitter } from "@angular/core";
/**
 * [See demo](../../?path=/story/inline-loading--basic)
 *
 * <example-url>../../iframe.html?id=inline-loading--basic</example-url>
 */
export declare class InlineLoading {
    /**
     * Specify the text description for the loading state.
     */
    loadingText: any;
    /**
     * Specify the text description for the success state.
     */
    successText: any;
    /**
     * Provide a delay for the `setTimeout` for success.
     */
    successDelay: number;
    /**
     * set to `false` to stop the loading animation
     */
    isActive: boolean;
    /**
     * Returns value `true` if the component is in the success state.
     */
    /**
    * Set the component's state to match the parameter and emits onSuccess if it exits.
    */
    success: boolean;
    /**
     * Emits event after the success state is active
     */
    onSuccess: EventEmitter<any>;
    loadingClass: boolean;
    /**
     * Set to `true` if the action is completed successfully.
     */
    protected _success: boolean;
}
