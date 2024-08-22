import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	OnDestroy,
	AfterContentInit,
	TemplateRef,
	AfterContentChecked
} from "@angular/core";
import { Subscription } from "rxjs";
import { TreeViewService } from "./treeview.service";
import { EventOnNode, Node } from "./tree-node.types";

@Component({
	selector: "cds-tree-node",
	template: `
		<div
			[id]="id"
			class="cds--tree-node"
			[ngClass]="{
				'cds--tree-node--active': active,
				'cds--tree-node--disabled': disabled,
				'cds--tree-node--selected': selected,
				'cds--tree-leaf-node': !children.length,
				'cds--tree-parent-node': children.length,
				'cds--tree-node--with-icon': icon
			}"
			[attr.aria-expanded]="expanded || null"
			[attr.aria-current]="active || null"
			[attr.aria-selected]="disabled ? null : selected"
			[attr.aria-disabled]="disabled"
			role="treeitem"
			[attr.tabindex]="selected ? 0 : -1"
			(focus)="emitFocusEvent($event)"
			(blur)="emitBlurEvent($event)"
			(keydown)="navigateTree($event)">
			<div
				*ngIf="!children.length"
				class="cds--tree-node__label"
				[style.padding-inline-start.rem]="offset"
				[style.margin-inline-start.rem]="-offset"
				(click)="nodeClick($event)">
				<!-- Icon -->
				<ng-container *ngIf="icon && !isTemplate(icon)">
					<svg
						class="cds--tree-node__icon"
						[cdsIcon]="icon"
						size="16">
					</svg>
				</ng-container>
				<ng-template *ngIf="isTemplate(icon)" [ngTemplateOutlet]="icon"></ng-template>
				<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
				<ng-template
					*ngIf="isTemplate(label)"
					[ngTemplateOutlet]="label"
					[ngTemplateOutletContext]="{ $implicit: labelContext }">
				</ng-template>
			</div>
			<div
				*ngIf="children.length"
				class="cds--tree-node__label"
				[style.padding-inline-start.rem]="offset"
				[style.margin-inline-start.rem]="-offset"
				role="group"
				(click)="nodeClick($event)">
				<span
					class="cds--tree-parent-node__toggle"
					[attr.disabled]="disabled || null"
					(click)="toggleExpanded($event)">
					<svg
						class="cds--tree-parent-node__toggle-icon"
						[ngClass]="{'cds--tree-parent-node__toggle-icon--expanded' : expanded}"
						ibmIcon="caret--down"
						size="16">
					</svg>
				</span>
				<span class="cds--tree-node__label__details">
					<!-- Icon -->
					<ng-container *ngIf="icon && !isTemplate(icon)">
						<svg
							class="cds--tree-node__icon"
							[cdsIcon]="icon"
							size="16">
						</svg>
					</ng-container>
					<ng-template
						*ngIf="isTemplate(icon)"
						[ngTemplateOutlet]="icon"
						[ngTemplateOutletContext]="{ $implicit: iconContext }">
					</ng-template>
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template
						*ngIf="isTemplate(label)"
						[ngTemplateOutlet]="label"
						[ngTemplateOutletContext]="{ $implicit: labelContext }">
					</ng-template>
				</span>
			</div>
			<div
				*ngIf="expanded"
				role="group"
				class="cds--tree-node__children">
				<ng-container *ngIf="isProjected(); else notProjected">
					<ng-content></ng-content>
				</ng-container>
				<ng-template #notProjected>
					<cds-tree-node
						*ngFor="let childNode of children"
						[node]="childNode"
						[depth]="depth + 1"
						[disabled]="disabled">
					</cds-tree-node>
				</ng-template>
			</div>
		</div>
	`
})
export class TreeNodeComponent implements AfterContentChecked, OnInit, OnDestroy {
	static treeNodeCount = 0;
	@Input() id = `tree-node-${TreeNodeComponent.treeNodeCount++}`;
	@Input() active = false;
	@Input() disabled = false;
	@Input() expanded = false;
	@Input() label: string | TemplateRef<any>;
	@Input() labelContext: any;
	@Input() selected = false;
	@Input() value;
	@Input() icon: string | TemplateRef<any>;
	@Input() iconContext: any;
	@Input() children: Node[] = [];

	/**
	 * Determines the depth of the node
	 * Calculated by default when passing `Node` array to `TreeViewComponent`, manual entry required otherwise
	 */
	@Input() depth = 0;

	/**
	 * Simple way to set all attributes of Node component via node object
	 * Would simplify setting component attributes when dynamically rendering node.
	 */
	@Input() set node(node: Node) {
		this._node = node;

		this.id = node.id ?? this.id;
		this.active = node.active ?? this.active;
		this.disabled = node.disabled ?? this.disabled;
		this.expanded = node.expanded ?? this.expanded;
		this.label = node.label ?? this.label;
		this.labelContext = node.labelContext ?? this.labelContext;
		this.value = node.value ?? this.value;
		this.icon = node.icon ?? this.icon;
		this.selected = node.selected ?? this.selected;
		this.depth = node.depth ?? this.depth;
		this.children = node.children ?? this.children;
		this.iconContext = node.iconText ?? this.iconContext;
	}

	get node() {
		return this._node;
	}

	@Output() nodeFocus = new EventEmitter<EventOnNode>();
	@Output() nodeBlur = new EventEmitter<EventOnNode>();
	@Output() nodeSelect = new EventEmitter<EventOnNode>();
	@Output() nodetoggle = new EventEmitter<EventOnNode>();

	offset;
	private _node;
	private subscription: Subscription;

	constructor(private treeViewService: TreeViewService) {}

	/**
	 * Caclulate offset for margin/padding
	 */
	ngAfterContentChecked(): void {
		this.offset = this.calculateOffset();
	}

	/**
	 * Highlight the node
	 */
	ngOnInit(): void {
		// Highlight the node
		this.subscription = this.treeViewService.selectionObservable.subscribe((value: Map<string, Node>) => {
			this.selected = value.has(this.id);
			this.active = this.selected;
		});
	}

	/**
	 * Unsubscribe from subscriptions
	 */
	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	/**
	 * Selects the node and emits the event from the tree view component
	 * @param event
	 */
	nodeClick(event) {
		if (!this.disabled) {
			this.selected = true;
			this.active = true;
			event.target.parentElement.focus();
			const node = { id: this.id, label: this.label, value: this.value };
			// Passes event to all nodes to update highlighting & parent to emit
			this.treeViewService.selectNode(node);
			this.nodeSelect.emit({node, event});
		}
	}

	/**
	 * Calculate the node offset
	 * @returns Number
	 */
	calculateOffset() {
		// Parent node with icon
		if (this.children.length && this.icon) {
			return this.depth + 1 + this.depth * 0.5;
		}

		// parent node without icon
		if (this.children.length) {
			return this.depth + 1;
		}

		// leaf node with icon
		if (this.icon) {
			return this.depth + 2 + this.depth * 0.5;
		}

		return this.depth + 2.5;
	}

	emitFocusEvent(event) {
		this.nodeFocus.emit({ node: { id: this.id, label: this.label, value: this.value }, event });
	}

	emitBlurEvent(event) {
		this.nodeBlur.emit({ node: { id: this.id, label: this.label, value: this.value }, event });
	}

	/**
	 * Expand children if not disabled
	 * @param event: Event
	 */
	toggleExpanded(event) {
		if (!this.disabled) {
			this.nodetoggle.emit({ node: { id: this.id, label: this.label, value: this.value }, event });
			this.expanded = !this.expanded;
			// Prevent selection of the node
			event.stopPropagation();
		}
	}

	/**
	 * Manages the keyboard accessibility for children expansion & selection
	 */
	navigateTree(event: KeyboardEvent) {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Enter") {
			event.stopPropagation();
		}
		// Unexpand
		if (event.key === "ArrowLeft") {
			if (this.expanded && this.children) {
				this.toggleExpanded(event);
			}
		}

		if (event.key === "ArrowRight") {
			if (!this.expanded && this.children) {
				this.toggleExpanded(event);
			}
		}

		if (event.key === "Enter") {
			event.preventDefault();
			this.nodeClick(event);
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	public isProjected() {
		return this.treeViewService.contentProjected;
	}
}
