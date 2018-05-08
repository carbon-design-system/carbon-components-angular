import {
	Component,
	AfterContentChecked,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation,
	HostBinding
} from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { ListItem } from "./../dropdown/list-item.interface";
import { ConditionBuilderService } from "./condition-builder.service";


@Component({
	selector: "n-condition-wrapper",
	template: `
	<n-condition
	*ngIf="state.conditionState"
	[(state)]="state.conditionState"
	[attributes]="attributes"
	(remove)="onRemove($event)"
	(addAnd)="onAddAnd($event)"
	(addOr)="onAddOr($event)"
	(duplicate)="onDuplicate($event)"
	(moveUp)="onMoveUp($event)"
	(moveDown)="onMoveDown($event)"
	(attributeChange)="attributeChange.emit($event)"
	(operatorChange)="operatorChange.emit($event)"
	(modifierChange)="modifierChange.emit($event)"
	(valueChange)="valueChange.emit($event)">
	</n-condition>

	<div *ngIf="state.items && !state.conditionState">
		<div class="condition_bracket_wrapper">
			<div class="condition_bracket_controls">
				<div class="condition_bracket_controls_top">
					<button
					*ngIf="!isFirstInList"
					(click)="onBracketControlTopUp()"
					class="btn--icon-link"
					type="button">
						<n-static-icon icon="chevron_up_circle" size="sm"></n-static-icon>
					</button>
					<button
					*ngIf="isFirstInList"
					class="btn--icon-link"
					type="button"
					disabled="">
						<n-static-icon icon="chevron_up_circle_disabled" size="sm"></n-static-icon>
					</button>
					<button
					(click)="onBracketControlTopDown()"
					class="btn--icon-link"
					type="button">
						<n-static-icon icon="chevron_down_circle" size="sm"></n-static-icon>
					</button>
				</div>
			<div class="condition_bracket_controls_bottom">
				<button
				(click)="onBracketControlBottomUp()"
				class="btn--icon-link"
				type="button">
					<n-static-icon icon="chevron_up_circle" size="sm"></n-static-icon>
				</button>
				<button
				*ngIf="!isLastInList"
				(click)="onBracketControlBottomDown()"
				class="btn--icon-link"
				type="button">
					<n-static-icon icon="chevron_down_circle" size="sm"></n-static-icon>
				</button>
				<button
				*ngIf="isLastInList"
				class="btn--icon-link"
				type="button"
				disabled="">
					<n-static-icon icon="chevron_up_circle_disabled" size="sm"></n-static-icon>
				</button>
			</div>
		</div>
		<div [ngClass]="{'condition_bracket--even': this.level % 2 == 0, 'condition_bracket--odd': this.level % 2 != 0}">
			<ng-container *ngFor="let item of state.items; index as i">
				<ng-container
				*ngTemplateOutlet="dropArea; context: {position: 'before', index: i, isEdge: i === 0}">
				</ng-container>
				<n-condition-wrapper
				[attributes]="attributes"
				[outsideOperator]="operator"
				[state]="item"
				[level]="level + 1"
				[isFirstInList]="i === 0"
				[isLastInList]="i === state.items.length - 1"
				(remove)="onRemove($event)"
				(removeBracket)="doRemoveBracket($event)"
				(addAnd)="onAddAnd($event)"
				(addOr)="onAddOr($event)"
				(duplicate)="doDuplicate($event)"
				(moveUp)="onMoveUp($event)"
				(moveDown)="onMoveDown($event)"
				(addAfterBracket)="doAddAfterBracket($event)"
				(bracketControlTopUp)="doBracketControlTopUp($event)"
				(bracketControlTopDown)="doBracketControlTopDown($event)"
				(bracketControlBottomUp)="doBracketControlBottomUp($event)"
				(bracketControlBottomDown)="doBracketControlBottomDown($event)"
				(attributeChange)="attributeChange.emit($event)"
				(operatorChange)="operatorChange.emit($event)"
				(modifierChange)="modifierChange.emit($event)"
				(valueChange)="valueChange.emit($event)">
				</n-condition-wrapper>
				<ng-container
				*ngTemplateOutlet="dropArea; context: {position: 'after', index: i, isEdge: i === (state.items.length - 1)}">
				</ng-container>
				<div
				*ngIf="state.items.length > 1 && i < state.items.length-1"
				class="condition_operator_choice">
					<ng-template #operatorChoiceMenu>
						<a
						class="menu_link"
						tabindex="0"
						(click)="addBracket(i, true); operatorChoicePopover.close();">
							<span class="menu_text">{{this.operator === "and" ? "OR" : "AND"}} (adds required bracket)</span>
						</a>
						<a
						class="menu_link"
						tabindex="0"
						(click)="changeOperator(); operatorChoicePopover.close();">
							<span class="menu_text">{{this.operator === "and" ? "OR" : "AND"}} all in group</span>
						</a>
						<a
						class="menu_link"
						tabindex="0"
						(click)="addBracket(i); operatorChoicePopover.close();">
							<span class="menu_text">Add bracket</span>
						</a>
					</ng-template>
					<button
					class="btn--link"
					[nPopoverMenu]="operatorChoiceMenu"
					appendToBody="true"
					placement="bottom-right"
					type="button"
					#operatorChoicePopover="nPopoverMenu">
						{{operator === "or" ? "OR" : "AND"}}
					</button>
					<button class="btn--icon-link" type="button">
						<n-static-icon icon="help" size="sm" style="display: inline"></n-static-icon>
					</button>
				</div>
			</ng-container>
			<button class="btn_remove_bracket" (click)="onRemoveBracket()">
				<n-static-icon icon="x" size="sm" style="display: inline"></n-static-icon>
				Remove bracket
			</button>
		</div>
		<button
		(click)="onAddAfterBracket()"
		class="btn--icon-link-blue"
		type="button">
			<n-static-icon icon="addnew_circle" size="sm" style="display: inline"></n-static-icon>
			<span>{{outsideOperator === "" ? (operator === "or" ? "AND" : "OR") : (outsideOperator === "or" ? "OR" : "AND")}}</span>
		</button>
	</div>

	<ng-template #dropArea let-position="position" let-index="index" let-isEdge="isEdge">
		<div
		*ngIf="index === 0 && position === 'before' || position === 'after'"
		style="position: relative">
			<div [style]="dropAreaIndicatorStyleInitial"></div>
			<div
			[style]="(isEdge ? (position === 'before' ? dropAreaStyleTopEdge : dropAreaStyleBottomEdge) : dropAreaStyleNormal)"
			(dragenter)="dragEnter($event)"
			(dragleave)="dragLeave($event)"
			(dragover)="dragover($event)"
			(drop)="drop($event, position, index)">
			</div>
		</div>
	</ng-template>
	`
})
export class ConditionWrapper {
	static conditionWrapperCounter = 0;

	@Input() set state(state) {
		const tmpId = this.id;
		this._state = state || this._state;
		// don't loose the id
		if (!this._state.id) {
			this._state.id = tmpId;
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
	}

	@Input() outsideOperator: "" | "and" | "or" = "";

	@Input() level = 1;

	@Input() isFirstInList = false;
	@Input() isLastInList = false;

	@Input() dropAreaIndicatorStyleInitial =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -2px; height: 3px; width: 100%; background-color: transparent");

	@Input() dropAreaIndicatorStyleDragOver =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -2px; height: 3px; width: 100%; background-color: #2d74da");

	@Output() remove: EventEmitter<any> = new EventEmitter();
	@Output() removeBracket: EventEmitter<any> = new EventEmitter();
	@Output() addAnd: EventEmitter<any> = new EventEmitter();
	@Output() addOr: EventEmitter<any> = new EventEmitter();
	@Output() duplicate: EventEmitter<any> = new EventEmitter();
	@Output() moveUp: EventEmitter<any> = new EventEmitter();
	@Output() moveDown: EventEmitter<any> = new EventEmitter();
	@Output() addAfterBracket: EventEmitter<any> = new EventEmitter();
	@Output() bracketControlTopUp: EventEmitter<any> = new EventEmitter();
	@Output() bracketControlTopDown: EventEmitter<any> = new EventEmitter();
	@Output() bracketControlBottomUp: EventEmitter<any> = new EventEmitter();
	@Output() bracketControlBottomDown: EventEmitter<any> = new EventEmitter();
	@Output() attributeChange: EventEmitter<any> = new EventEmitter();
	@Output() operatorChange: EventEmitter<any> = new EventEmitter();
	@Output() modifierChange: EventEmitter<any> = new EventEmitter();
	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	@Output() stateChange: EventEmitter<any> = new EventEmitter();

	get operator() {
		return this.state.operator;
	}
	set operator(op) {
		this.state.operator = op;
	}

	dropAreaStyleTopEdge =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -10px; height: 42px; width: calc(100% - 100px)");
	dropAreaStyleBottomEdge =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -33px; height: 42px; width: calc(100% - 100px)");
	dropAreaStyleNormal =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -33px; height: 105px; width: calc(100% - 100px)");

		private _state: any = {
		id: `condition-wrapper-${ConditionWrapper.conditionWrapperCounter}`,
		conditionState: {
			attributes: []
		},
		attributes: [],
		operator: "",
		items: null
	};

	constructor(private conditionBuilderService: ConditionBuilderService, private sanitizer: DomSanitizer) {
		this.id = `condition-wrapper-${ConditionWrapper.conditionWrapperCounter}`;
		ConditionWrapper.conditionWrapperCounter++;
	}

	onRemove(event) {
		this.doRemove(event);
		this.remove.emit(event);
	}

	doRemove(event, wrapperState = this.state) {
		if (!wrapperState.items) {
			return;
		}

		const ci = wrapperState.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci < 0) {
			return;
		}

		const removeLast = () => {
			// clean if last one and take out of bracket
			const item = wrapperState.items[0];
			wrapperState.conditionState = item.conditionState;
			wrapperState.attributes = item.attributes;
			wrapperState.operator = item.operator;
			wrapperState.items = item.items;
		};

		if (wrapperState.items.length <= 1) {
			removeLast();
		} else {
			wrapperState.items.splice(ci, 1);

			if (wrapperState.items.length <= 1) {
				removeLast();
			}
		}
	}

	onMoveUp(event) {
		this.doMoveUp(event);

		this.moveUp.emit(event);
	}

	doMoveUp(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const ci = this.state.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci === 0) {
			// needs to be moved out of bracket in parent
			return;
		}

		if (ci < 0) {
			// try find condition as first element in items
			// as in "are we parent that needs to move condition out of bracket"
			const cwi = this.state.items.findIndex(cw =>
				cw.items && cw.items[0].conditionState && cw.items[0].conditionState.id === event.state.id
			);

			if (cwi < 0) {
				return;
			}

			this.state.items.splice(cwi, 0, this.state.items[cwi].items[0]);  // add it before the bracket
			this.doRemove(event, this.state.items[cwi + 1]);  // remove it from bracket
			event.done = true;
			return;
		}

		const tmp = this.state.items[ci];
		this.state.items.splice(ci, 1); // remove from here
		// if top wrapper has bracket, move to the end of that bracket
		if (this.state.items[ci - 1].items) {
			this.state.items[ci - 1].items.push(tmp);
		} else {
			this.state.items.splice(ci - 1, 0, tmp); // add here
		}

		event.done = true;
	}

	onMoveDown(event) {
		this.doMoveDown(event);

		this.moveDown.emit(event);
	}

	doMoveDown(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const ci = this.state.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci === this.state.items.length - 1) {
			// needs to be moved out of bracket in parent
			return;
		}

		if (ci < 0) {
			// try find condition as last element in items
			// as in "are we parent that needs to move condition out of bracket"
			const cwi = this.state.items.findIndex(cw =>
				cw.items &&
				cw.items[cw.items.length - 1].conditionState &&
				cw.items[cw.items.length - 1].conditionState.id === event.state.id
			);

			if (cwi < 0) {
				return;
			}

			this.state.items.splice(cwi + 1, 0, this.state.items[cwi].items[this.state.items[cwi].items.length - 1]);  // add it after the bracket
			this.doRemove(event, this.state.items[cwi]);  // remove it from bracket
			event.done = true;
			return;
		}

		const tmp = this.state.items[ci];
		this.state.items.splice(ci, 1); // remove from here
		// if bottom wrapper has bracket, move to the start of that bracket
		if (this.state.items[ci].items) {
			this.state.items[ci].items.splice(0, 0, tmp);
		} else {
			this.state.items.splice(ci + 1, 0, tmp); // add here
		}

		event.done = true;
	}

	onAddAfterBracket() {
		this.addAfterBracket.emit(this.state);
	}

	doAddAfterBracket(wrapper) {
		const wi = this.state.items.findIndex(item => item.id === wrapper.id);

		if (wi < 0) {
			return;
		}

		this.state.items.splice(wi + 1, 0, this.conditionBuilderService.getEmptyCondition(this.attributes));
	}

	onRemoveBracket() {
		this.removeBracket.emit(this.state);
	}

	doRemoveBracket(wrapper) {
		const wi = this.state.items.findIndex(item => item.id === wrapper.id);

		if (wi < 0) {
			return;
		}

		this.state.items.splice(wi, 1, ...this.state.items[wi].items);
	}

	onAddAnd(event) {
		this.addCondition(event, "and");

		// NOTE what do we get from emitting this always?
		this.addAnd.emit(event);
	}

	onAddOr(event) {
		this.addCondition(event, "or");
		// NOTE what do we get from emitting this always?
		this.addOr.emit(event);
	}


	onDuplicate(event) {
		this.duplicate.emit(event);
	}


	doDuplicate(event) {
		if (event.done) {
			return;
		}

		const ci = this.state.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci < 0) {
			this.duplicate.emit(event);
			return;
		}

		this.addCondition(event, this.operator, {
			conditionState: JSON.parse(JSON.stringify(event.state)),  // deep copy
			operator: "",
			items: null
		});

		event.done = true;
	}


	onBracketControlTopUp() {
		this.bracketControlTopUp.emit({
			done: false,
			state: this.state
		});
	}

	doBracketControlTopUp(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const wi = this.state.items.findIndex(item => item.id === event.state.id);

		if (wi <= 0) {  // not found or first, we can't do anything here for first
			return;
		}

		this.state.items[wi].items.splice(0, 0, this.state.items[wi - 1]);
		this.state.items.splice(wi - 1, 1);
		event.done = true;
	}


	onBracketControlTopDown() {
		this.bracketControlTopDown.emit({
			done: false,
			state: this.state
		});
	}

	doBracketControlTopDown(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const wi = this.state.items.findIndex(item => item.id === event.state.id);

		if (wi < 0 || this.state.items[wi].items.length <= 1) {
			return;
		}

		this.state.items.splice(wi, 0, this.state.items[wi].items[0]);
		this.state.items[wi + 1].items.splice(0, 1);
		event.done = true;
	}


	onBracketControlBottomUp() {
		this.bracketControlBottomUp.emit({
			done: false,
			state: this.state
		});
	}

	doBracketControlBottomUp(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const wi = this.state.items.findIndex(item => item.id === event.state.id);

		if (wi < 0 || this.state.items[wi].items.length <= 1) {
			return;
		}

		this.state.items.splice(wi + 1, 0, this.state.items[wi].items[this.state.items[wi].items.length - 1]);
		this.state.items[wi].items.splice(this.state.items[wi].items.length - 1, 1);
		event.done = true;
	}


	onBracketControlBottomDown() {
		this.bracketControlBottomDown.emit({
			done: false,
			state: this.state
		});
	}

	doBracketControlBottomDown(event) {
		if (event.done || !this.state.items) {
			return;
		}

		const wi = this.state.items.findIndex(item => item.id === event.state.id);

		if (wi < 0 || wi === this.state.items.length - 1) {  // not found or last, we can't do anything here for last
			return;
		}

		this.state.items[wi].items.splice(this.state.items[wi].items.length, 0, this.state.items[wi + 1]);
		this.state.items.splice(wi + 1, 1);
		event.done = true;
	}


	changeOperator() {
		this.operator = this.operator === "and" ? "or" : "and";
	}


	addBracket(index, changeOperator = false) {
		let operator = this.operator;
		if (changeOperator) {
			operator = this.operator === "and" ? "or" : "and";
		}

		this.state.items.splice(index, 2, {
			conditionState: null,
			// attributes: attributes,
			operator,
			items: [
				this.state.items[index],
				this.state.items[index + 1]
			]
		});
	}


	dragEnter(event) {
		event.target.previousElementSibling.style.cssText =
			this.dropAreaIndicatorStyleDragOver["changingThisBreaksApplicationSecurity"] || this.dropAreaIndicatorStyleDragOver;
		event.preventDefault();
	}

	dragLeave(event) {
		event.target.previousElementSibling.style.cssText =
			this.dropAreaIndicatorStyleInitial["changingThisBreaksApplicationSecurity"] || this.dropAreaIndicatorStyleInitial;
		event.preventDefault();
	}

	drop(event, position, index) {
		const conditionState = JSON.parse(event.dataTransfer.getData("conditionState"));
		event.target.previousElementSibling.style.cssText =
			this.dropAreaIndicatorStyleInitial["changingThisBreaksApplicationSecurity"] || this.dropAreaIndicatorStyleInitial;
		this.state.items.splice(
			index + (position === "before" ? 0 : 1),
			0,
			this.conditionBuilderService.getEmptyCondition(this.attributes, conditionState)
		);
		event.preventDefault();
	}

	dragover(event) {
		// needed to tell browser to allow dropping
		event.preventDefault();
	}


	private addCondition(event, operator, newConditionState = this.conditionBuilderService.getEmptyCondition(this.attributes)) {
		if (!this.state.items) {
			return;
		}

		if (this.operator === "") {
			this.operator = operator === "" ? "and" : operator;  // "and" is the default operator if nothing supplied
		}

		const ci = this.state.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci < 0) {
			return;
		}

		if (this.operator === operator) {
			// add a condition _after_ current condition
			this.state.items.splice(ci + 1, 0, newConditionState);
		} else {
			// needs a bracket
			this.state.items.splice(ci, 0, this.conditionBuilderService.getWrapAndAdd(event, operator, this.attributes));
			this.doRemove(event);
		}
	}
}
