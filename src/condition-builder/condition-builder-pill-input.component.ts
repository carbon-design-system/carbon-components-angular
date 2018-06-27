import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewChild,
	ViewChildren,
	QueryList,
	forwardRef,
	OnChanges,
	AfterViewInit,
	HostBinding
} from "@angular/core";
import { Pill } from "../pill-input/pill.component";
import { ListItem } from "./../dropdown/list-item.interface";


/**
 * Internal component used to render pills and the combobox text input.
 * There is a sizeable chunk of logic here handling focus and keyboard state around pills.
 *
 * @export
 * @class PillInput
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-condition-builder-pill-input",
	template: `
		<n-pill-input
		[pills]="pills"
		[placeholder]="placeholder"
		[displayValue]="displayValue"
		[size]="size"
		[disabled]="disabled"
		(updatePills)="updatePills.emit($event)"
		(search)="search.emit($event)"
		(submit)="submit.emit($event)"
		(focus)="focus.emit($event)"
		(blur)="blur.emit($event)"
		pillDirection="column"
		type="multi"></n-pill-input>`
})
export class ConditionBuilderPillInput {
	/** array of selected items */
	@Input() pills: Array<ListItem> = [];
	/** value to display when nothing is selected */
	@Input() placeholder = "";
	/** value to display when something is selected */
	@Input() displayValue = "";
	/** "sm" | "md" | "lg" */
	@Input() size: "sm" | "md" | "lg" = "md";
	/** is the input disabled. true/false */
	@Input() disabled = false;
	/** empty event to trigger an update of the selected items */
	@Output() updatePills = new EventEmitter();
	/** emitted when the user types into an input */
	@Output() search = new EventEmitter();
	/** emitted when the user presses enter and a value is present */
	@Output() submit = new EventEmitter();
	/** emitted when the component is focused */
	@Output() focus = new EventEmitter();
	/** emitted when the component looses focus */
	@Output() blur = new EventEmitter();
	// needed since matter doesn't/can't account for the host element
	// @HostBinding("style.width.%") width = "100";
}
