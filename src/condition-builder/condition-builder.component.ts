import { ConditionWrapper } from "./condition-wrapper.component";
import {
	Component,
	AfterContentChecked,
	ApplicationRef,
	Input,
	Output,
	OnInit,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation,
	HostBinding
} from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

import { Condition } from "./condition.component";
import { ListItem } from "./../dropdown/list-item.interface";
import { ConditionBuilderService } from "./condition-builder.service";


@Component({
	selector: "n-condition-builder",
	template: `
	<ng-container *ngFor="let cw of conditionWrappers; index as i">
		<ng-container
		*ngTemplateOutlet="dropArea; context: {position: 'before', index: i, isEdge: i === 0}">
		</ng-container>
		<n-condition-wrapper
		[(state)]="cw.conditionWrapper"
		[attributes]="attributes"
		[outsideOperator]="operator"
		[isFirstInList]="i === 0"
		[isLastInList]="i === conditionWrappers.length - 1"
		(remove)="remove($event)"
		(removeBracket)="removeBracket($event)"
		(addAnd)="addAnd($event)"
		(addOr)="addOr($event)"
		(duplicate)="duplicate($event)"
		(moveUp)="moveUp($event)"
		(moveDown)="moveDown($event)"
		(addAfterBracket)="addAfterBracket($event)"
		(bracketControlTopUp)="bracketControlTopUp($event)"
		(bracketControlTopDown)="bracketControlTopDown($event)"
		(bracketControlBottomUp)="bracketControlBottomUp($event)"
		(bracketControlBottomDown)="bracketControlBottomDown($event)"
		(attributeChange)="stateChange.emit(this.state)"
		(operatorChange)="stateChange.emit(this.state)"
		(modifierChange)="stateChange.emit(this.state)"
		(valueChange)="stateChange.emit(this.state)">
		</n-condition-wrapper>
		<ng-container
		*ngTemplateOutlet="dropArea; context: {position: 'after', index: i, isEdge: i === (conditionWrappers.length - 1)}">
		</ng-container>
		<div
		*ngIf="conditionWrappers.length > 1 && i < conditionWrappers.length-1"
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
				<n-static-icon icon="help" size="sm" style="display: inherit"></n-static-icon>
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
	</ng-container>
	`
})
export class ConditionBuilder implements OnInit {
	@HostBinding("attr.class") attrClass = "condition_builder";

	@Input() attributes: Array<ListItem>;
	@Input() operator: "and" | "or" | "" = "";
	@Input() set state(s) {
		// tslint:disable-next-line:triple-equals
		if (JSON.stringify(s) == JSON.stringify(this.state)) {
			return;
		}

		this.operator = s.logicalOperator;
		if (s.items) {
			this.conditionWrappers = s.items.map(item => ({conditionWrapper: this.fromPrettyState(item)}));
		}
	}
	get state() {
		const sampleItem = {
			attribute: null,
			comparativeOperator: null,
			logicalOperator: null,
			value: null,
			modifier: null,
			items: null
		};

		let retVal = JSON.parse(JSON.stringify(sampleItem));
		retVal.logicalOperator = this.operator;
		retVal.items = this.conditionWrappers ? this.conditionWrappers.map(cw => this.prettyStateOf(cw.conditionWrapper)) : null;

		return retVal;
	}


	@Input() conditionWrappers: any[];

	@Input() dropAreaIndicatorStyleInitial =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -2px; height: 3px; width: 100%; background-color: transparent");

	@Input() dropAreaIndicatorStyleDragOver =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -2px; height: 3px; width: 100%; background-color: #2d74da");

	@Output() stateChange: EventEmitter<any> = new EventEmitter();

	dropAreaStyleTopEdge =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -10px; height: 42px; width: calc(100% - 100px)");
	dropAreaStyleBottomEdge =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -33px; height: 42px; width: calc(100% - 100px)");
	dropAreaStyleNormal =
		this.sanitizer.bypassSecurityTrustStyle("position: absolute; top: -33px; height: 105px; width: calc(100% - 100px)");


	constructor(private conditionBuilderService: ConditionBuilderService, private sanitizer: DomSanitizer) {}


	ngOnInit() {
		if (!this.conditionWrappers) {
			// initialize first condition if conditions (state) not provided
			this.conditionWrappers = [
				{
					// NOTE needs the conditionWrapper object to be able to assign it to n-condition-wrapper state
					conditionWrapper: this.conditionBuilderService.getEmptyCondition(this.attributes)
				}
			];
		}

		this.stateChange.emit(this.state);
	}

	remove(event, emitStateChange = true) {
		// if it's the only condition in condition builder,
		// clear the condition to default values but don't remove it
		if (this.conditionWrappers.length <= 1) {
			// TODO reset condition
			return;
		}

		const ci = this.conditionWrappers.findIndex(cw =>
			cw.conditionWrapper.conditionState && cw.conditionWrapper.conditionState.id === event.state.id
		);

		// if found nothing to remove
		if (ci < 0) {
			return;
		}

		this.conditionWrappers.splice(ci, 1);

		if (emitStateChange) {
			this.stateChange.emit(this.state);
		}
	}


	addAnd(event) {
		this.addCondition(event, "and");

		this.stateChange.emit(this.state);
	}


	addOr(event) {
		this.addCondition(event, "or");

		this.stateChange.emit(this.state);
	}


	duplicate(event) {
		this.addCondition(event, this.operator, {
			conditionState: JSON.parse(JSON.stringify(event.state)),  // deep copy
			operator: "",
			items: null
		});

		this.stateChange.emit(this.state);
	}


	moveUp(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const ci = this.conditionWrappers.findIndex(cw =>
			cw.conditionWrapper.conditionState && cw.conditionWrapper.conditionState.id === event.state.id
		);

		if (ci === 0) {
			// needs to be moved out of bracket in parent
			return;
		}

		if (ci < 0) {
			// try find condition as first element in items
			// as in "are we parent that needs to move condition out of bracket"
			const cwi = this.conditionWrappers.findIndex(cw =>
				cw.conditionWrapper.items &&
				cw.conditionWrapper.items[0].conditionState &&
				cw.conditionWrapper.items[0].conditionState.id === event.state.id
			);

			if (cwi < 0) {
				return;
			}

			this.conditionWrappers.splice(cwi, 0, {
				conditionWrapper: this.conditionWrappers[cwi].conditionWrapper.items[0]
			});  // add it before the bracket

			this.removeFromBracket(event, this.conditionWrappers[cwi + 1].conditionWrapper);  // remove it from bracket
			event.done = true;
			return;
		}

		const tmp = this.conditionWrappers[ci];
		this.conditionWrappers.splice(ci, 1); // remove from here
		// if top wrapper has bracket, move to the end of that bracket
		if (this.conditionWrappers[ci - 1].conditionWrapper.items) {
			this.conditionWrappers[ci - 1].conditionWrapper.items.push(tmp.conditionWrapper);
		} else {
			this.conditionWrappers.splice(ci - 1, 0, tmp); // add here
		}

		event.done = true;

		this.stateChange.emit(this.state);
	}


	moveDown(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const ci = this.conditionWrappers.findIndex(cw =>
			cw.conditionWrapper.conditionState && cw.conditionWrapper.conditionState.id === event.state.id
		);

		if (ci === this.conditionWrappers.length - 1) {
			// needs to be moved out of bracket in parent
			return;
		}

		if (ci < 0) {
			// try find condition as first element in items
			// as in "are we parent that needs to move condition out of bracket"
			const cwi = this.conditionWrappers.findIndex(cw =>
				cw.conditionWrapper.items &&
				cw.conditionWrapper.items[cw.conditionWrapper.items.length - 1].conditionState &&
				cw.conditionWrapper.items[cw.conditionWrapper.items.length - 1].conditionState.id === event.state.id
			);

			if (cwi < 0) {
				return;
			}

			this.conditionWrappers.splice(cwi + 1, 0, {
				conditionWrapper: this.conditionWrappers[cwi].conditionWrapper.items[this.conditionWrappers[cwi].conditionWrapper.items.length - 1]
			});  // add it before the bracket
			this.removeFromBracket(event, this.conditionWrappers[cwi].conditionWrapper);  // remove it from bracket
			event.done = true;
			return;
		}

		const tmp = this.conditionWrappers[ci];
		this.conditionWrappers.splice(ci, 1); // remove from here
		// if top wrapper has bracket, move to the end of that bracket
		if (this.conditionWrappers[ci].conditionWrapper.items) {
			this.conditionWrappers[ci].conditionWrapper.items.push(tmp.conditionWrapper);
		} else {
			this.conditionWrappers.splice(ci + 1, 0, tmp); // add here
		}

		event.done = true;

		this.stateChange.emit(this.state);
	}


	removeFromBracket(event, wrapperState) {
		if (!wrapperState.items) {
			return;
		}

		const ci = wrapperState.items.findIndex(cw => cw.conditionState && cw.conditionState.id === event.state.id);

		if (ci < 0) {
			return;
		}

		wrapperState.items.splice(ci, 1);

		// clean if last one and take out of bracket
		if (wrapperState.items.length <= 1) {
			const item = wrapperState.items[0];
			wrapperState.conditionState = item.conditionState;
			wrapperState.attributes = item.attributes;
			wrapperState.operator = item.operator;
			wrapperState.items = item.items;
		}

		this.stateChange.emit(this.state);
	}


	addAfterBracket(wrapper) {
		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === wrapper.id);

		if (wi < 0) {
			return;
		}

		this.conditionWrappers.splice(wi + 1, 0, {
			conditionWrapper: this.conditionBuilderService.getEmptyCondition(this.attributes)
		});

		this.stateChange.emit(this.state);
	}

	bracketControlTopUp(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === event.state.id);

		if (wi <= 0) {  // not found or first, we can't do anything here for first
			return;
		}

		this.conditionWrappers[wi].conditionWrapper.items.splice(0, 0, this.conditionWrappers[wi - 1].conditionWrapper);
		this.conditionWrappers.splice(wi - 1, 1);
		event.done = true;

		this.stateChange.emit(this.state);
	}

	bracketControlTopDown(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === event.state.id);

		if (wi < 0 || this.conditionWrappers[wi].conditionWrapper.items.length <= 1) {
			return;
		}

		this.conditionWrappers.splice(wi, 0, {
			conditionWrapper: this.conditionWrappers[wi].conditionWrapper.items[0]
		});
		this.conditionWrappers[wi + 1].conditionWrapper.items.splice(0, 1);
		event.done = true;

		this.stateChange.emit(this.state);
	}

	bracketControlBottomUp(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === event.state.id);

		if (wi < 0 || this.conditionWrappers[wi].conditionWrapper.items.length <= 1) {
			return;
		}

		this.conditionWrappers.splice(wi + 1, 0, {
			conditionWrapper: this.conditionWrappers[wi].conditionWrapper.items[this.conditionWrappers[wi].conditionWrapper.items.length - 1]
		});
		this.conditionWrappers[wi].conditionWrapper.items.splice(this.conditionWrappers[wi].conditionWrapper.items.length - 1, 1);
		event.done = true;

		this.stateChange.emit(this.state);
	}

	bracketControlBottomDown(event) {
		if (event.done || !this.conditionWrappers) {
			return;
		}

		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === event.state.id);

		if (wi < 0 || wi === this.conditionWrappers.length - 1) {  // not found or last, we can't do anything here for last
			return;
		}

		this.conditionWrappers[wi].conditionWrapper.items.splice(
			this.conditionWrappers[wi].conditionWrapper.items.length,
			0,
			this.conditionWrappers[wi + 1].conditionWrapper
		);
		this.conditionWrappers.splice(wi + 1, 1);
		event.done = true;

		this.stateChange.emit(this.state);
	}


	removeBracket(wrapper) {
		const wi = this.conditionWrappers.findIndex(item => item.conditionWrapper.id === wrapper.id);

		if (wi < 0) {
			return;
		}

		// we need to wrap our conditionWrappers into object with conditionWrapper property
		// cause that's what this.conditionWrappers are (so they can be passed in to state)
		const wrappedWrappers = this.conditionWrappers[wi].conditionWrapper.items.map(item => ({conditionWrapper: item}));
		this.conditionWrappers.splice(wi, 1, ...wrappedWrappers);

		this.stateChange.emit(this.state);
	}


	changeOperator() {
		this.operator = this.operator === "and" ? "or" : "and";

		this.stateChange.emit(this.state);
	}


	addBracket(index, changeOperator = false) {
		let operator = this.operator;
		if (changeOperator) {
			operator = this.operator === "and" ? "or" : "and";
		}

		this.conditionWrappers.splice(index, 2, {
			conditionWrapper: {
				conditionState: null,
				operator,
				items: [
					this.conditionWrappers[index].conditionWrapper,
					this.conditionWrappers[index + 1].conditionWrapper
				]
			}
		});

		this.stateChange.emit(this.state);
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
		this.conditionWrappers.splice( index + (position === "before" ? 0 : 1), 0, {
				conditionWrapper: this.conditionBuilderService.getEmptyCondition(this.attributes, conditionState)
			}
		);

		this.stateChange.emit(this.state);

		event.preventDefault();
	}

	dragover(event) {
		// needed to tell browser to allow dropping
		event.preventDefault();
	}


	private addCondition(event, operator, newConditionState = this.conditionBuilderService.getEmptyCondition(this.attributes)) {
		const ci = this.conditionWrappers.findIndex(cw =>
			cw.conditionWrapper && cw.conditionWrapper.conditionState && cw.conditionWrapper.conditionState.id === event.state.id
		);

		// if not adding on this level
		if (ci < 0) {
			return;
		}

		// if there was no operator, now it's operator
		if (!this.operator) {
			this.operator = !operator ? "and" : operator;  // "and" is the default operator if nothing supplied
		}

		if (this.operator === operator || operator === "") {
			// add a condition _after_ current condition
			this.conditionWrappers.splice(ci + 1, 0, {
				conditionWrapper: newConditionState
			});
		} else {
			// needs a bracket
			this.conditionWrappers.splice(ci, 0, {
				conditionWrapper: this.conditionBuilderService.getWrapAndAdd(event, operator, this.attributes)
			});
			this.remove(event, false);
		}
	}


	private prettyStateOf(state) {
		if (!state) {
			return state; // undefined, null or whatever else
		}

		const sampleItem = {
			attribute: null,
			comparativeOperator: null,
			logicalOperator: null,
			value: null,
			modifier: null,
			items: null
		};

		let retVal = JSON.parse(JSON.stringify(sampleItem));
		retVal.logicalOperator = state.operator;

		if (state.items) {
			retVal.items = state.items.map(c => this.prettyStateOf(c));
		}

		if (state.conditionState) {
			if (state.conditionState.attribute) {
				retVal.attribute = {
					content: state.conditionState.attribute.content,
					type: state.conditionState.attribute.type
				};
			}
			if (state.conditionState.operator) {
				retVal.comparativeOperator = state.conditionState.operator.content;
			}
			if (state.conditionState.modifier) {
				retVal.modifier = state.conditionState.modifier.content;
			}
			if (state.conditionState.value) {
				retVal.value = state.conditionState.value.map(v => v.content);
			}
		}

		return retVal;
	}

	private fromPrettyState(ps) {
		if (!ps) {
			return ps; // undefined, null or whatever
		}

		let retVal = this.conditionBuilderService.getEmptyCondition(this.attributes);

		retVal.operator = ps.logicalOperator;

		if (ps.attribute) {
			retVal.conditionState.attribute = {
				content: ps.attribute.content,
				selected: true,
				type: ps.attribute.type
			};
		}
		retVal.conditionState.operator = ps.comparativeOperator ? {content: ps.comparativeOperator, selected: true} : {};
		retVal.conditionState.modifier = ps.modifier ? {content: ps.modifier, selected: true} : {};
		retVal.conditionState.value = ps.value ? ps.value.map(v => ({content: v, selected: true})) : null;

		if (ps.items) {
			retVal.conditionState = null;
			retVal.items = ps.items.map(item => this.fromPrettyState(item));
		}

		return retVal;
	}
}
