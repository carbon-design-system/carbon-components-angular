import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewChild,
	ViewChildren,
	ContentChildren,
	QueryList,
	forwardRef,
	OnChanges,
	AfterViewInit,
	HostBinding
} from "@angular/core";
import { Pill } from "./pill.component";
import { ListItem } from "./../dropdown/list-item.interface";

/**
 * Internal component used to render pills and the combobox text input.
 *
 * There is a sizeable chunk of logic here handling focus and keyboard state around pills.
 */
// 'height.px': expanded?expandedHeight:null
@Component({
	selector: "n-pill-input",
	template: `
		<!--<div
			class="combobox_input"
			aria-multiline="true"
			aria-autocomplete="list"
			role="textbox"
			[ngClass]="{
				focus: focus,
				disabled: disabled
			}"
			(click)="focusInput($event)"
			[ngStyle]="{
				'expand-overflow': expanded
			}">-->
			<div
				*ngIf="type === 'multi'"
				role="textbox"
				class="combobox_input">
				<div
					#pillWrapper
					class="input_pills">
					<ng-content></ng-content>
					<!--<span
						*ngIf="showPlaceholder"
						class="placeholder">
						{{ placeholder }}
					</span>-->
					<n-pill
						*ngFor="let pill of pills; let last = last"
						[item]="pill">
						{{ pill.content }}
					</n-pill>
					<div
						#comboInput
						class="input"
						contenteditable
						(keydown)="onKeydown($event)"
						(keyup)="onKeyup($event)"></div>
					<div
						#comboInput
						*ngIf="empty(pills)"
						class="input"
						contenteditable
						(keydown)="onKeydown($event)"
						(keyup)="onKeyup($event)"></div>
				</div>
			</div>
			<input
				*ngIf="type === 'single'"
				type="text"/>
			<!--<div
				*ngIf="type === 'single'"
				class="pills-wrapper">
				<span
					*ngIf="showPlaceholder"
					class="placeholder">
					{{ placeholder }}
				</span>
				<div
					#comboInput
					class="combo-input"
					contenteditable
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)">{{ displayValue }}</div>
			</div>-->
			<button
				*ngIf="!expanded && numberMore > 0"
				class="btn--link"
				href=""
				(click)="showMore($event)">{{ numberMore }} more</button>
			<button
				*ngIf="expanded && numberMore > 0"
				class="btn--link"
				href=""
				(click)="showMore($event)">Hide</button>
		<!--</div>-->`,
	host: {
		"class": "",
		role: "textbox",
		style: "width: 100%"
	}
})
export class PillInput implements OnChanges, AfterViewInit {
	/** are we focused? needed because we have a lot of inputs that could steal focus and we need to set visual focus on the wrapper */
	public focus = false;
	/** height of the expanded input */
	public expandedHeight = 0;
	/** number of pills hidden by overflow */
	public numberMore = 0;
	/** should we show the placeholder value? */
	public showPlaceholder = true;
	/** sets the expanded state (hide/show all selected pills) */
	@Input() expanded = false;
	/** array of selected items */
	@Input() pills: Array<ListItem> = [];
	/** value to display when nothing is selected */
	@Input() placeholder = "";
	/** value to display when something is selected */
	@Input() displayValue = "";
	/** "single" or "multi" for single or multi select lists */
	@Input() type: "single" | "multi" = "single";
	/** "sm"|"default"|"lg" */
	@Input() size: "sm" | "default" | "lg" = "default";
	/** is the input disabled. true/false */
	@Input() disabled = false;
	/** empty event to trigger an update of the selected items */
	@Output() updatePills = new EventEmitter();
	/** emitted when the user types into an input */
	@Output() search = new EventEmitter();
	/** emitted when the user presses enter and a value is present */
	@Output() submit = new EventEmitter();
	/** ViewChld of the pill wrapper */
	@ViewChild("pillWrapper") pillWrapper;
	/** List of inputs */
	@ViewChildren("comboInput") comboInputs: QueryList<any>;
	/** list of instantiated pills */
	@ViewChildren(Pill) pillInstances: QueryList<Pill>;

	@HostBinding("attr.class") class = "pill-input-wrapper";

	/** instaniates a pill-input */
	constructor(private _elementRef: ElementRef) {}

	/**
	 * updates the pills, and subscribes to their `remove` events
	 *
	 * updates the displayValue and checks if it should be displayed
	 *
	 * @param changes
	 */
	ngOnChanges(changes) {
		if (changes.pills) {
			this.pills = changes.pills.currentValue;
			setTimeout(() => {
				this.numberMore = 0;
				let pills = this._elementRef.nativeElement.querySelectorAll(".pill");
				for (let pill of pills) {
					if (pill.offsetTop > 30) {
						this.numberMore++;
					}
				}
				this.pillInstances.forEach(item => {
					item.remove.subscribe(_ => {
						this.updatePills.emit();
						this.doResize();
						if (this.numberMore === 0) { this.expanded = false; }
					});
				});
				this.doResize();
			}, 0);
		}
		if (changes.displayValue) {
			if (this.type === "single" && this.comboInputs) {
				this.comboInputs.first.nativeElement.textContent = changes.displayValue.currentValue;
			}
			this.checkPlaceholderVisibility();
		}
	}

	/**
	 * binds events on the view
	 */
	ngAfterViewInit() {
		if (this.type === "multi") {
			let pills = this._elementRef.nativeElement.querySelectorAll(".pill");
			for (let pill of pills) {
				if (pill.offsetTop > 30) {
					this.numberMore++;
				}
			}
		}
		// TODO: move these to methods and late bind/eager unbind
		if (this.disabled) { return; }
		// collapse input on outside click
		document.addEventListener("click", ev => {
			if (this._elementRef.nativeElement.contains(ev.target)) {
				this.setFocus(true);
			} else {
				this.setFocus(false);
			}
			this.checkPlaceholderVisibility();
		});
		// keyup here because we want to get the element the event ends on
		// **not** the element the event starts from (that would be keydown)
		document.addEventListener("keyup", ev => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.setFocus(false);
			} else {
				this.setFocus(true);
			}
			this.checkPlaceholderVisibility();
		});
		this.clearInputText();
	}

	/**
	 * Helper method to check if an array is empty
	 *
	 * @param {Array<any>} array
	 */
	public empty(array: Array<any>) {
		if (!array) {
			return true;
		}
		if (array.length === 0) {
			return true;
		}
		return false;
	}

	/**
	 * sets focus to state
	 *
	 * @param {boolean} state
	 */
	public setFocus(state: boolean) {
		this.focus = state;
	}

	/**
	 * focuses the correct input and handles clearing any unnecessary values from any other input
	 *
	 * @param ev
	 */
	public focusInput(ev) {
		if (this.disabled) { return; }
		this.setFocus(true);
		if (this.numberMore > 0) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight; /*+ 10;*/
			this.expanded = true;
		}
		if (this.comboInputs.find(input => input.nativeElement === ev.target)) {
			if (ev.target.textContent === "") {
				ev.target.textContent = "";
			}
			this.clearInputText(ev.target);
			this.setSelection(ev.target);
		} else if (this.getInputText()) {
			this.comboInputs.forEach(input => {
				if (input.nativeElement.textContent.trim() !== "") {
					this.setSelection(input.nativeElement);
				}
			});
		} else {
			if (this.comboInputs.last.nativeElement.textContent === "") {
				this.comboInputs.last.nativeElement.textContent = "";
			}
			this.setSelection(this.comboInputs.last.nativeElement);
		}
	}

	/**
	 * toggles the expanded state of the input wrapper to show all pills
	 *
	 * @param ev
	 */
	public showMore(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		this.expanded = !this.expanded;
		this.doResize();
	}

	/**
	 * sets the height of the input wrapper to the correct height for all selected pills
	 */
	public doResize() {
		if (this.expanded) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight;
		}
	}

	/**
	 * clears the content of inputs
	 *
	 * @param toSkip input element to skip clearing
	 */
	public clearInputText(toSkip = null) {
		if (this.comboInputs) {
			this.comboInputs.forEach(input => {
				if (!toSkip || input.nativeElement !== toSkip) {
					input.nativeElement.textContent = "";
				}
			});
		}
	}

	/**
	 * returns the text from an event, the textContent of the first filled comboInput, or an empty string
	 *
	 * @param ev optional event to pull text from
	 */
	public getInputText(ev = null): string {
		if (ev) {
			return ev.target.textContent.trim();
		}
		if (this.comboInputs) {
			let text = this.comboInputs.find(input => input.nativeElement.textContent.trim() !== "");
			return text ? text.nativeElement.textContent.trim() : "";
		}
		return "";
	}

	/**
	 * handles deleting pills on backspace, submitting user input on enter, and navigating the pill list with arrow left/right
	 *
	 * @param ev
	 */
	onKeydown(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.expanded = false;
		} else if (ev.key === "Backspace" && ev.target["textContent"] === "" && !this.empty(this.pills)) {
			let inputIndex = this.comboInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			if (inputIndex > -1) {
				this.pills[inputIndex].selected = false;
				// - 1 because the last one doesn't get removed, so the focus doesn't leave
				if (inputIndex < this.comboInputs.length - 1) {
					this.comboInputs.toArray()[inputIndex + 1].nativeElement.focus();
				}
			}
			this.updatePills.emit();
		} else if (ev.key === "Enter") {
			ev.preventDefault();
			if (this.getInputText()) {
				let inputIndex = this.comboInputs.toArray().findIndex(input => input.nativeElement.textContent.trim() !== "");
				this.submit.emit({
					after: this.pills[inputIndex],
					value: this.getInputText()
				});
				this.clearInputText();
			}
		} else if (ev.key === "ArrowLeft") {
			let index = this.comboInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			let prevInput = this.comboInputs.toArray()[index - 1];
			if (prevInput) { prevInput.nativeElement.focus(); }
		} else if (ev.key === "ArrowRight") {
			let index = this.comboInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			let nextInput = this.comboInputs.toArray()[index + 1];
			if (nextInput) { nextInput.nativeElement.focus(); }
		}
	}

	/** handles emmiting the search event */
	onKeyup(ev: KeyboardEvent) {
		this.doResize();
		this.clearInputText(ev.target);
		this.search.emit(this.getInputText(ev));
	}

	/**
	 * checks weather the placeholder should be displayed or not.
	 */
	private checkPlaceholderVisibility(): void {
		if (this.type === "single") {
			setTimeout(() => this.showPlaceholder = !this.displayValue && !this.focus && !this.getInputText());
		} else {
			setTimeout(() => this.showPlaceholder = this.empty(this.pills) && !this.focus && !this.getInputText());
		}
	}

	/**
	 * selects all the text in a given node
	 *
	 * @param target node to set the selection on
	 */
	private setSelection(target) {
		let selectionRange = document.createRange();
		let selection = window.getSelection();
		selectionRange.selectNodeContents(target);
		selection.removeAllRanges();
		selection.addRange(selectionRange);
		target.focus();
	}
}
