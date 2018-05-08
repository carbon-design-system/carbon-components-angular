import {
	Component,
	AfterContentChecked,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ElementRef,
	ViewEncapsulation,
	HostBinding,
	ChangeDetectorRef,
	OnInit
} from "@angular/core";
@Component({
	selector: "n-condition",
	template: `
	<n-static-icon
		icon="grip_vertical"
		draggable="true"
		(dragstart)="dragStart($event)"
		(dragend)="dragEnd($event)"
		size="sm"
		classList="grip">
	</n-static-icon>
	<div>
		<label [for]="id + '-attribute'">Attribute</label>
		<n-dropdown
		[(ngModel)]="state.attribute"
		[id]="id + '-attribute'"
		placeholder="Select attribute"
		(selected)="onAttributeSelected($event)">
			<n-dropdown-filter-tree
				[items]="displayAttributes"
				[id]="id + '-attribute-search'">
			</n-dropdown-filter-tree>
		</n-dropdown>
	</div>

	<div>
		<label [for]="id + '-operator'">Operator</label>
		<n-dropdown
		[(ngModel)]="state.operator"
		[id]="id + '-operator'"
		(selected)="onOperatorSelected($event)"
		placeholder="Select operator">
			<n-dropdown-list [items]="displayOperators">
			</n-dropdown-list>
		</n-dropdown>
	</div>

	<div>
		<div class="condition_builder_label_wrapper">
			<label [for]="id + '-value'">Value</label>
			<n-dropdown
			*ngIf="displayModifiers && state.value.length > 1"
			[(ngModel)]="state.modifier"
			[id]="id + '-modifier'"
			size="sm"
			(selected)="onModifierSelected($event)"
			placeholder="Select modifier">
				<n-dropdown-list [items]="displayModifiers">
				</n-dropdown-list>
			</n-dropdown>
		</div>
		<n-condition-builder-pill-input
		class="condition-builder-pill-input"
		[id]="id + '-value'"
		[pills]="state.value"
		[disabled]="disabled"
		(updatePills)="updatePills()"
		(submit)="onPillSubmit($event)"
		(focus)="inputIsFocused = true"
		(blur)="inputIsFocused = false"></n-condition-builder-pill-input>
		<p>Each value must be on a separate line.</p>
		<p *ngIf="inputIsFocused">Example:<br />Value1<br />Value2</p>
	</div>

	<button
	(click)="onAddAnd()"
	class="btn--icon-link-blue"
	type="button">
		<svg class="icon--sm">
		<use href="#addnew_circle_16"></use>
		</svg>
		<span>AND</span>
	</button>

	<button
	(click)="onAddOr()"
	class="btn--icon-link-blue"
	type="button">
		<svg class="icon--sm">
		<use href="#addnew_circle_16"></use>
		</svg>
		<span>OR</span>
	</button>

	<div class="menu_divider" role="separator"></div>

	<button
	(click)="onRemove()"
	class="btn--icon-link"
	type="button">
		<svg class="icon--sm">
		<use href="#x_circle_16"></use>
		</svg>
	</button>

	<ng-template #dottedMenu>
		<a class="menu_link" tabindex="0" (click)="onDuplicate(); dottedPopover.close();"><span class="menu_text">Duplicate</span></a>
		<a class="menu_link" tabindex="0" (click)="onMoveUp(); dottedPopover.close();"><span class="menu_text">Move up</span></a>
		<a class="menu_link" tabindex="0" (click)="onMoveDown(); dottedPopover.close();"><span class="menu_text">Move down</span></a>
		<a class="menu_link" tabindex="0" (click)="onDisable(); dottedPopover.close();"><span class="menu_text">Disable</span></a>
	</ng-template>
	<button
	class="btn--icon-link kebab_menu"
	[nPopoverMenu]="dottedMenu"
	placement="bottom-left"
	title="Actions"
	type="button"
	#dottedPopover="nPopoverMenu">
		<svg class="icon--sm">
		<use href="#dotdotdot_vert_16"></use>
		</svg>
	</button>
	`
})
export class Condition implements OnInit {
	static conditionCounter = 0;

	@Input() operators = {
		"enumerated-multi": [
			{
				content: "includes",
				selected: false,
				modifier: "both"
			},
			{
				content: "is only",
				selected: false
			},
			{
				content: "does not include",
				selected: false,
				modifier: "both"
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"enumerated-single": [
			{
				content: "is",
				selected: false,
				modifier: "any"
			},
			{
				content: "is not",
				selected: false,
				modifier: "any"
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"string": [
			{
				content: "contains",
				selected: false,
				modifier: "both"
			},
			{
				content: "starts with",
				selected: false,
				modifier: "any"
			},
			{
				content: "ends with",
				selected: false,
				modifier: "any"
			},
			{
				content: "is",
				selected: false,
				modifier: "any"
			},
			{
				content: "does not contain",
				selected: false,
				modifier: "both"
			},
			{
				content: "does not start with",
				selected: false,
				modifier: "any"
			},
			{
				content: "does not end with",
				selected: false,
				modifier: "any"
			},
			{
				content: "is not",
				selected: false,
				modifier: "any"
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"number": [
			{
				content: "greater than or equal to",
				selected: false
			},
			{
				content: "greater than",
				selected: false
			},
			{
				content: "less than or equal to",
				selected: false
			},
			{
				content: "less than",
				selected: false
			},
			{
				content: "equal to",
				selected: false
			},
			{
				content: "not equal to",
				selected: false
			},
			{
				content: "in the range of",
				selected: false
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"date": [
			{
				content: "on",
				selected: false
			},
			{
				content: "before",
				selected: false
			},
			{
				content: "after",
				selected: false
			},
			{
				content: "on or before",
				selected: false
			},
			{
				content: "on or after",
				selected: false
			},
			{
				content: "between",
				selected: false
			},
			{
				content: "not on",
				selected: false
			},
			{
				content: "in the past",
				selected: false
			},
			{
				content: "in the next",
				selected: false
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"time": [
			{
				content: "at",
				selected: false
			},
			{
				content: "before",
				selected: false
			},
			{
				content: "after",
				selected: false
			},
			{
				content: "at or before",
				selected: false
			},
			{
				content: "at or after",
				selected: false
			},
			{
				content: "between",
				selected: false
			},
			{
				content: "not at",
				selected: false
			},
			{
				content: "in the past",
				selected: false
			},
			{
				content: "in the next",
				selected: false
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		],
		"date-time": [
			{
				content: "at",
				selected: false
			},
			{
				content: "before",
				selected: false
			},
			{
				content: "after",
				selected: false
			},
			{
				content: "at or before",
				selected: false
			},
			{
				content: "at or after",
				selected: false
			},
			{
				content: "between",
				selected: false
			},
			{
				content: "not at",
				selected: false
			},
			{
				content: "in the past",
				selected: false
			},
			{
				content: "in the next",
				selected: false
			},
			{
				content: "is empty",
				selected: false
			},
			{
				content: "is not empty",
				selected: false
			},
		]
	};
	displayOperators;

	@Input() modifiers = {
		"any": [
			{
				content: "ANY",
				selected: true
			}
		],
		"all": [
			{
				content: "ALL",
				selected: true
			}
		],
		"both": [
			{
				content: "ANY",
				selected: true
			},
			{
				content: "ALL",
				selected: false
			}
		]
	};
	displayModifiers;



	@ViewChild("dottedPopover") dottedPopover;

	@Input() set state(state) {
		const tmpId = this.id;
		this._state = state || this._state;
		// keep the old id, setting state shouldn't override it
		// that would introduce problems when duplicating conditions
		// or restoring the state from DB
		this._state.id = tmpId;


		// clean the value instead
		if (!state.value) {
			this._state.value = [];
		}

		// wrapped into setTimeout to go around the `expression changed after...` error
		setTimeout(() => this.stateChange.emit(this._state), 0);
	}
	get state() {
		return this._state;
	}

	@Input() get id() {
		return this.state.id;
	}
	set id(id) {
		this.state.id = id;
	}

	@Input() get attributes() {
		return this.state.attributes;
	}
	set attributes(attrs: any[]) {
		this.state.attributes = attrs;
		this.displayAttributes = this.state.attributes;
	}


	get displayAttributes() {
		return this.state.displayAttributes;
	}
	set displayAttributes(da) {
		this.state.displayAttributes = da;
	}

	@Output() remove: EventEmitter<any> = new EventEmitter();
	@Output() addAnd: EventEmitter<any> = new EventEmitter();
	@Output() addOr: EventEmitter<any> = new EventEmitter();
	@Output() duplicate: EventEmitter<any> = new EventEmitter();
	@Output() moveUp: EventEmitter<any> = new EventEmitter();
	@Output() moveDown: EventEmitter<any> = new EventEmitter();
	@Output() attributeChange: EventEmitter<any> = new EventEmitter();
	@Output() operatorChange: EventEmitter<any> = new EventEmitter();
	@Output() modifierChange: EventEmitter<any> = new EventEmitter();
	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	@Output() stateChange: EventEmitter<any> = new EventEmitter();

	@HostBinding("attr.class") attrClass = "condition";

	inputIsFocused = false;

	private _state: any = {
		id: `condition-${Condition.conditionCounter}`,
		attributes: [],
		attribute: {},
		displayAttributes: [],
		operator: {},
		modifier: null,
		value: [] // TODO should be some kind of an object probably (with values for each operator type?)
				// right now it's [] because pills
	};

	constructor(private changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef) {
		this.id = `condition-${Condition.conditionCounter}`;
		Condition.conditionCounter++;
	}

	ngOnInit() {
		this.displayOperators = this.state.attribute ? this.operators[this.state.attribute.type] : this.operators["string"];
		this.displayModifiers =
			this.state.attribute && this.state.attribute.hasModifier ? this.modifiers[this.state.operator.modifier] : undefined;
	}

	onRemove() {
		this.remove.emit({
			done: false,
			state: this.state
		});
	}

	onAddAnd() {
		this.addAnd.emit({
			done: false,
			state: this.state
		});
	}

	onAddOr() {
		this.addOr.emit({
			done: false,
			state: this.state
		});
	}

	onDuplicate() {
		this.duplicate.emit({
			done: false,
			state: this.state
		});
	}

	onMoveUp() {
		this.moveUp.emit({
			done: false,
			state: this.state
		});
	}

	onMoveDown() {
		this.moveDown.emit({
			done: false,
			state: this.state
		});
	}

	onModifierSelected(event) {
		event.item.selected = true; // disallow deselect
		this.modifierChange.emit(event);
	}

	onAttributeSelected(event) {
		this.displayOperators = this.operators[event.item.type];
		this.state.operator = null;
		this.displayModifiers = null;

		this.attributeChange.emit(this.state);
	}

	onOperatorSelected(event) {
		if (this.state.attribute && this.state.attribute.hasModifier && event.item.modifier) {
			this.displayModifiers = this.modifiers[event.item.modifier];
			this.state.modifier = this.displayModifiers.find(modifier => modifier.selected === true) || this.displayModifiers[0];
		} else {
			this.displayModifiers = null;
		}
		this.operatorChange.emit(event);
	}

	filter(items, cb) {
		let filteredList = [];
		for (let item of items) {
			if (!item.items && cb(item)) {
				filteredList.push(Object.assign({}, item));
			}
			if (item.items) {
				let filteredItems = this.filter(item.items, cb);
				if (filteredItems.length !== 0) {
					let filteredItem = Object.assign({}, item, {
						items: filteredItems,
						opened: true
					});
					filteredList.push(filteredItem);
				}
			}
		}
		return filteredList;
	}

	dragStart(event) {
		event.dataTransfer.setData("conditionState", JSON.stringify(this.state));
		event.dataTransfer.setDragImage(this.elementRef.nativeElement, 12, 65);  // make the pointer appear at the center of drag handle
	}

	dragEnd(event) {
		if (event.dataTransfer.dropEffect !== "none") {
			// always move if not canceled
			this.onRemove();
		}
	}

	onPillSubmit(event) {
		let index = this.state.value.indexOf(event.after) + 1;
		this.state.value = [
			...this.state.value.slice(0, index),
			{content: event.value, selected: true},
			...this.state.value.slice(index)
		];
		this.state.value = this.state.value.filter(item => item.selected);

		this.valueChange.emit();
	}

	updatePills() {
		// console.log(this.state.value);
	}

	private deselectAllItems(tree) {
		tree.select = false;
		if (tree.items) {
			tree.items.forEach(item => this.deselectAllItems(item));
		}
	}
}
