import {
	Component,
	OnInit,
	ViewContainerRef,
	ViewChild
} from "@angular/core";
import { PlaceholderService } from "./placeholder.service";

/**
 * Using a modal, dialog (Tooltip, OverflowMenu), or any other component that draws out of the normal page flow
 * in your application *requires* this component (`ibm-placeholder`).
 * It would generally be placed near the end of your root app component template
 * (app.component.ts or app.component.html) as:
 *
 * ...
 * <ibm-placeholder></ibm-placeholder>
 * ```
 *
 *
 * @export
 * @class ModalPlaceholderComponent
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-placeholder",
	template: `<div #placeholder></div>`
})
export class Placeholder implements OnInit {
	/**
	 * Maintains a reference to the view DOM element of the `ModalPlaceholderComponent`.
	 * @type {ViewContainerRef}
	 * @memberof ModalPlaceholderComponent
	 */
	@ViewChild("placeholder", { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

	/**
	 * Creates an instance of `ModalPlaceholderComponent`.
	 */
	constructor(public placeholderService: PlaceholderService) { }

	/**
	 * Initializes the component using `ModalService`.
	 */
	ngOnInit(): void {
		this.placeholderService.registerViewContainerRef(this.viewContainerRef);
	}
}
