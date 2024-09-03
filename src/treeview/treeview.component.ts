import { DOCUMENT } from "@angular/common";
import {
	Component,
	Input,
	Output,
	TemplateRef,
	EventEmitter,
	AfterViewInit,
	Inject,
	ViewChild,
	ElementRef,
	OnInit,
	OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";
import { EventOnNode, Node } from "./tree-node.types";
import { TreeViewService } from "./treeview.service";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { TreeviewModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-tree-view--basic)
 */
@Component({
	selector: "cds-tree-view",
	template: `
		<label
			*ngIf="label"
			[id]="id"
			class="cds--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template
				*ngIf="isTemplate(label)"
				[ngTemplateOutlet]="label"
				[ngTemplateOutletContext]="{ $implicit: labelContext }">
			</ng-template>
		</label>
		<div
			class="cds--tree"
			[ngClass]="{
				'cds--tree--sm': size === 'sm',
				'cds--tree--xs': size === 'xs'
			}"
			[attr.aria-label]="label ? label : null"
			[attr.aria-labelledby]="!label ? id : null"
			[attr.aria-multiselectable]="isMultiSelect || null"
			role="tree"
			(keydown)="navigateTree($event)"
			#treeWrapper>
			<ng-container *ngIf="isProjected(); else notProjected">
				<ng-content></ng-content>
			</ng-container>
			<ng-template #notProjected>
				<cds-tree-node
					*ngFor="let node of tree"
					[node]="node"
					(nodetoggle)="onNodeToggle($event)">
				</cds-tree-node>
			</ng-template>
		</div>
	`,
	providers: [TreeViewService]
})
export class TreeViewComponent implements AfterViewInit, OnInit, OnDestroy {
	/**
	 * Pass `Node[]` array to have tree view render the nodes
	 * Passing value will disregard projected content
	 */
	@Input() set tree(treeNodes: Node[]) {
		this._tree = treeNodes.map((node) => this.copyNode(node));
		this.treeViewService.contentProjected = false;
	}

	get tree() {
		return this._tree;
	}

	static treeViewCount = 0;

	@Input() id = `tree-view-${TreeViewComponent.treeViewCount++}`;
	/**
	 * Tree view label
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Optional context for label if it's a template
	 */
	@Input() labelContext: any;
	/**
	 * Specify the size of the list items in the tree
	 */
	@Input() size: "xs" | "sm" = "sm";
	/**
	 * **Experimental** - Enable to select multiple nodes
	 */
	@Input() set isMultiSelect(isMulti: boolean) {
		this.treeViewService.isMultiSelect = isMulti;
	}

	@Output() select = new EventEmitter<Node | Node[]>();
	@Output() toggle = new EventEmitter<Node>();
	@ViewChild("treeWrapper") root: ElementRef;

	private treeWalker: TreeWalker;
	private _tree: Node[] = [];
	private subscription: Subscription;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		public treeViewService: TreeViewService,
		private elementRef: ElementRef
	) {}

	/**
	 * Subscribe for node selection
	 */
	ngOnInit(): void {
		this.subscription = this.treeViewService.selectionObservable.subscribe((nodesMap: Map<string, Node>) => {
			// Get all values from the map to emit
			const nodes = [...nodesMap.values()];

			this.select.emit(this.treeViewService.isMultiSelect ? nodes : nodes[0]);
		});
		this.subscription.add(this.treeViewService.focusNodeObservable.subscribe(node => this.onNodeFocusChange(node)));
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	/**
	 * Initialize tree walker to support keyboard navigation
	 */
	ngAfterViewInit(): void {
		this.treeWalker = this.document.createTreeWalker(this.root.nativeElement, NodeFilter.SHOW_ELEMENT, {
			acceptNode: function (node: HTMLElement) {
				if (node.classList.contains(`cds--tree-node--disabled`)) {
					return NodeFilter.FILTER_REJECT;
				}
				if (node.matches(`div.cds--tree-node`)) {
					return NodeFilter.FILTER_ACCEPT;
				}
				return NodeFilter.FILTER_SKIP;
			}
		});
	}

	/**
	 * Navigate tree using tree walker
	 * @param event - KeyboardEvent
	 */
	navigateTree(event: KeyboardEvent) {
		if (event.key === "ArrowUp") {
			(this.treeWalker.previousNode() as HTMLElement)?.focus();
		}

		if (event.key === "ArrowDown") {
			(this.treeWalker.nextNode() as HTMLElement)?.focus();
		}
	}

	onNodeToggle(eventOnNode: EventOnNode) {
		if (!eventOnNode) {
			return;
		}
		this.toggle.emit(eventOnNode.node)
	}
	
	/**
	 * Node focus change
	 * @param node - Node
	 */
	onNodeFocusChange(node: Node) {
		if (!node) {
			// if for some reason the focused node is not defined we fallback on the root element of the treeview
			this.treeWalker.currentNode = this.treeWalker.root;
			return;
		}
		// Update current node based on focus change to have a better keyboard navigation experience
		this.treeWalker.currentNode = this.elementRef.nativeElement.querySelector(`#${CSS.escape(node.id)}`);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	public isProjected() {
		return this.treeViewService.contentProjected;
	}

	private copyNode(node: Node): Node {
		// making a recursive shallow copy to avoid performance issues when deeply cloning templateRefs if defined in the node
		const copiedNode = Object.assign({}, node);
		if (node.children) {
		  copiedNode.children = node.children.map(child => this.copyNode(child));
		}
		return copiedNode;
	}
}
