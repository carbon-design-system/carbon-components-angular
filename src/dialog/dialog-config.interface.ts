import { ElementRef, TemplateRef } from "@angular/core";

/**
 * Data structure for definig properties of a `Dialog` component.
 * @export
 * @interface DialogConfig
 **/
export interface DialogConfig {
	/**
	 * Title for the `Dialog` header.
	 * @type {string}
	 * @memberof DialogConfig
	 */
	title: string;
	/**
	 * Body content for the `Dialog`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof DialogConfig
	 */
	content: string | TemplateRef<any>;
	/**
	 * Parameter for triggering `Dialog` display.
	 * With the release of v2.0 the type will just be "click" or "hover".
	 * @type {("click" | "hover" | "mouseenter")}
	 * @memberof DialogConfig
	 */
	trigger: "click" | "hover" | "mouseenter";
	/**
	 * Parameter defining the placement in which the `Dialog` appears.
	 * @type {Placement}
	 * @memberof DialogConfig
	 */
	placement: any;
	/**
	 * Used to set the offset of the `Dialog` relative to the content it
	 * is associated to.
	 * @type {number}
	 * @memberof DialogConfig
	 */
	gap: number;
	/**
	 * Reference to the Parent element that links the `Dialog`.
	 * @type {ElementRef}
	 * @memberof DialogConfig
	 */
	parentRef: ElementRef;
	/**
	 * Set to `true` will append `Dialog` to body causing
	 * it to break out of containers.
	 * @type {boolean}
	 * @memberof DialogConfig
	 */
	appendToBody: boolean;
	/**
	 * Set to `true` will attempt to place
	 * `Dialog` for maximum visibility.
	 * @type {boolean | string}
	 * @memberof DialogConfig
	 */
	autoPosition: boolean;
	/**
	 * Config object passed to the rendered component. (Optional)
	 * @type {Object}
	 * @memberof DialogConfig
	 */
	data: Object;
	[propName: string]: any;
}
