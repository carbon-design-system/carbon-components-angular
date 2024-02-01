import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Node } from "./tree-node.types";

@Injectable()
export class TreeViewService {
	selectionObservable: Observable<any | any[]>;
	/**
	 * Variable used across all nodes and wrapper to determine if we should allow content projection
	 * or generate the tree
	 *
	 * Value is updated by passing a value to `tree` input in wrapper component.
	 */
	contentProjected = true;
	/**
	 * **Experimental**
	 */
	isMultiSelect = false;

	private selectionSubject = new ReplaySubject<Map<string, Node>>(1);

	/**
	 * Hold's list of selected nodes and preserves order
	 */
	private value = new Map();

	constructor() {
		this.selectionObservable = this.selectionSubject.asObservable();
	}

	/**
	 * Store selected node in map
	 * @param node: Node
	 */
	selectNode(node: Node) {
		if (!node) {
			return;
		}

		// Since multiselect is not enabled, we clear existing map
		if (!this.isMultiSelect) {
			this.value.clear();
		}
		this.value.set(node.id, node);
		this.selectionSubject.next(this.value);
	}
}
