import {
	ComponentFactoryResolver,
	ComponentRef,
	ReflectiveInjector,
	ViewContainerRef
} from "@angular/core";
import { ModalComponent } from "./modal.component";
import { Observable } from "rxjs/Rx";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Injectable } from "@angular/core";

/**
 * Singleton service used by modal-placeholder to register the container for modals to insert into.
 * Also tracks all active modals.
 *
 * @export
 * @class ModalPlaceholderService
 */
@Injectable()
export class ModalPlaceholderService {
	/**
	 * Maintain a `ViewContainerRef` to an instance of the component.
	 * @type {ViewContainerRef}
	 * @memberof ModalService
	 */
	public vcRef: ViewContainerRef;
	/**
	 * List of `Modal` components that are in existance.
	 * @type {Array<ComponentRef<any>>}
	 * @memberof ModalService
	 */
	public componentRefs = new Array<ComponentRef<any>>();

	constructor() {}

	/**
	 * Used by `ModalPlaceholderComponent` to register view-container reference.
	 * @param {ViewContainerRef} vcRef
	 * @memberof ModalService
	 */
	registerViewContainerRef(vcRef: ViewContainerRef): void {
		this.vcRef = vcRef;
	}
}
