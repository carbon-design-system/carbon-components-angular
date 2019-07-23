import { ElementRef, TemplateRef } from "@angular/core";

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
	closeTrigger: "mouseout" | "mouseleave";
	/**
	 * Parameter defining the placement in which the `Dialog` appears.
	 * @type {Placement}
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
	[propName: string]: any;
}
