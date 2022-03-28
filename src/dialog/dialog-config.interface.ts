import { ElementRef, TemplateRef } from "@angular/core";

/**
 * An enum of the various reasons a dialog may close. For use with `CloseMeta` and `shouldClose`
 *
 * It's expected that `interaction` will be a common closure reason.
 */
export enum CloseReasons {
	/**
	 * For when the component is closed by being destroyed
	 */
	destroyed,
	/**
	 * For use in cases where the dialog closes for programmatic reasons other than destruction
	 */
	programmatic,
	/**
	 * interaction reasons will also provide a target for the interaction
	 */
	interaction,
	/**
	 * For use in cases where the dialog closes due to being hidden
	 */
	hidden
}

/**
 * Interface representing various metadata that can be passed to `shouldClose` and the `close` event
 */
export interface CloseMeta {
	reason: CloseReasons;
	target?: EventTarget;
}

/**
 * Data structure for definig properties of a `Dialog` component.
 **/
export interface DialogConfig {
	/**
	 * Title for the `Dialog` header.
	 */
	title?: string;
	/**
	 * Body content for the `Dialog`.
	 */
	content: string | TemplateRef<any>;
	/**
	 * Parameter for triggering `Dialog` display.
	 */
	trigger?: "click" | "hover" | "mouseenter";
	/**
	 * Parameter for triggering the `Dialog` close event.
	 */
	closeTrigger?: "mouseout" | "mouseleave";
	/**
	 * Callback to control the closing behaviour. return `true` to close, and `false` to prevent closing
	 */
	shouldClose?: (meta?: CloseMeta) => boolean;
	/**
	 * If true the dialog will close when hidden (by scrolling or otherwise going out of the viewport)
	 * If false the dialog will stay open until explicitly closed
	 * When true this closure method can be picked up via `CloseReasons.hidden`
	 */
	closeWhenHidden?: boolean;
	/**
	 * Parameter defining the placement in which the `Dialog` appears.
	 */
	placement?: string;
	/**
	 * Used to set the offset of the `Dialog` relative to the content it
	 * is associated to.
	 */
	gap?: number;
	/**
	 * Reference to the Parent element that links the `Dialog`.
	 */
	parentRef?: ElementRef;
	/**
	 * Set to `true` to open the dialog next to the triggering component
	 */
	appendInline?: boolean;
	/**
	 * Config object passed to the rendered component. (Optional)
	 */
	data?: Object;
	/**
	 * Additional arbitrary properties (mostly for internal/extended component use)
	 */
	[propName: string]: any;
	/**
	 * Classes to add to the dialog container
	 */
	wrapperClass?: string;
	/**
	 * This specifies any vertical and horizontal offset for the position of the dialog
	 */
	offset?: { x: number, y: number };
	/**
	 * This prevents the dialog from being toggled
	 */
	disabled?: boolean;
}
