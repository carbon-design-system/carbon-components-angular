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
import { Pill } from "./pill.component";
import { ListItem } from "./../dropdown/list-item.interface";


/**
 * Internal component used to render pills and the pill text input.
 * There is a sizeable chunk of logic here handling focus and keyboard state around pills.
 *
 * @export
 * @class PillInput
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-pill-input",
	template: `
		<div
			#inputWrapper
			*ngIf="type === 'multi'"
			role="textbox"
			class="pill_input_wrapper"
			[ngClass]="{
				'expand-overflow': expanded,
				focus: focus,
				disabled: disabled
			}"
			(click)="focusInput($event)">
			<span
				*ngIf="showPlaceholder"
				class="input_placeholder">
				{{ placeholder }}
			</span>
			<div
				#pillWrapper
				class="input_pills">
				<ng-container *ngFor="let pill of pills; let last = last">
					<n-pill
						[item]="pill">
						{{ pill.content }}
					</n-pill>
					<div
						#pillInput
						*ngIf="!last"
						class="input"
						contenteditable
						(keydown)="onKeydown($event)"
						(keyup)="onKeyup($event)"></div>
				</ng-container>
				<div
					#pillInput
					class="input"
					contenteditable
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)"></div>
			</div>
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
		</div>
		<input
			#singleInput
			*ngIf="type === 'single'"
			type="text"
			[disabled]="disabled"
			[placeholder]="placeholder"
			(keydown)="onKeydown($event)"
			(keyup)="onKeyup($event)"/>`
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
	public expanded = false;
	/** array of selected items */
	@Input() pills: Array<ListItem> = [];
	/** value to display when nothing is selected */
	@Input() placeholder = "";
	/** value to display when something is selected */
	@Input() displayValue = "";
	/** "single" or "multi" for single or multi select lists */
	@Input() type: "single" | "multi" = "single";
	/** "sm" | "md" | "default" | "lg"
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 */
	@Input() size: "sm" | "md" | "default" | "lg" = "md";
	/** is the input disabled. true/false */
	@Input() disabled = false;
	/** empty event to trigger an update of the selected items */
	@Output() updatePills = new EventEmitter();
	/** emitted when the user types into an input */
	@Output() search = new EventEmitter();
	/** emitted when the user presses enter and a value is present */
	@Output() submit = new EventEmitter();
	/** ViewChild of the pill wrapper */
	@ViewChild("pillWrapper") pillWrapper;
	/** ViewChild for the overall wrapper */
	@ViewChild("inputWrapper") inputWrapper;
	/** ViewChild for the single input input box */
	@ViewChild("singleInput") singleInput;
	/** List of inputs */
	@ViewChildren("pillInput") pillInputs: QueryList<any>;
	/** list of instantiated pills */
	@ViewChildren(Pill) pillInstances: QueryList<Pill>;
	// needed since matter doesn't/can't account for the host element
	@HostBinding("style.width.%") width = "100";

	/** instaniates a pill-input */
	constructor(private elementRef: ElementRef) {}

	/**
	 * Updates the pills, and subscribes to their `remove` events.
	 * Updates the displayValue and checks if it should be displayed.
	 * @param changes
	 */
	ngOnChanges(changes) {
		if (changes.pills) {
			this.pills = changes.pills.currentValue;

			setTimeout(() => {
				if (this.pillInstances) {
					this.numberMore = 0;
					let pills = this.elementRef.nativeElement.querySelectorAll(".pill");
					if (pills.length > 1) {
						for (let pill of pills) {
							if (pill.offsetTop > 30) {
								this.numberMore++;
							}
						}
					}
					this.pillInstances.forEach(item => {
						item.remove.subscribe(() => {
							this.updatePills.emit();
							this.doResize();
							if (this.numberMore === 0) { this.expanded = false; }
						});
					});
					this.doResize();
				}
			});
		}
		if (changes.displayValue) {
			if (this.type === "single" && this.singleInput) {
				this.singleInput.nativeElement.value = changes.displayValue.currentValue;
			}
			this.checkPlaceholderVisibility();
		}
	}

	/**
	 * Binds events on the view.
	 * @returns null
	 * @memberof PillInput
	 */
	ngAfterViewInit() {
		if (this.inputWrapper) {
			this.inputWrapper.nativeElement.scrollTop = 0;
		}

		// TODO: move these to methods and late bind/eager unbind
		if (this.disabled) { return; }
		// collapse input on outside click
		document.addEventListener("click", ev => {
			if (this.elementRef.nativeElement.contains(ev.target)) {
				this.setFocus(true);
			} else {
				this.setFocus(false);
			}
			this.checkPlaceholderVisibility();
		});
		// keyup here because we want to get the element the event ends on
		// **not** the element the event starts from (that would be keydown)
		document.addEventListener("keyup", ev => {
			if (!this.elementRef.nativeElement.contains(ev.target)) {
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
		if (this.pillInputs.find(input => input.nativeElement === ev.target)) {
			if (ev.target.textContent === "") {
				ev.target.textContent = "";
			}
			this.clearInputText(ev.target);
			this.setSelection(ev.target);
		} else if (this.getInputText()) {
			this.pillInputs.forEach(input => {
				if (input.nativeElement.textContent.trim() !== "") {
					this.setSelection(input.nativeElement);
				}
			});
		} else {
			if (this.pillInputs.last.nativeElement.textContent === "") {
				this.pillInputs.last.nativeElement.textContent = "";
			}
			this.setSelection(this.pillInputs.last.nativeElement);
		}
		this.inputWrapper.nativeElement.scrollTop = 0;
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
		if (this.pillInputs) {
			this.pillInputs.forEach(input => {
				if (!toSkip || input.nativeElement !== toSkip) {
					input.nativeElement.textContent = "";
				}
			});
		}
	}

	/**
	 * returns the text from an event, the textContent of the first filled pillInput, or an empty string
	 *
	 * @param ev optional event to pull text from
	 */
	public getInputText(ev = null): string {
		if (this.type === "multi") {
			if (ev) {
				return ev.target.textContent.trim();
			}
			if (this.pillInputs) {
				let text = this.pillInputs.find(input => input.nativeElement.textContent.trim() !== "");
				return text ? text.nativeElement.textContent.trim() : "";
			}
		}
		if (this.type === "single" && ev) {
			return ev.target.value.trim();
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
			// stop the window from navigating backwards
			ev.preventDefault();
			let inputIndex = this.pillInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			if (inputIndex > -1) {
				this.pills[inputIndex].selected = false;
				// - 1 because the last one doesn't get removed, so the focus doesn't leave
				if (inputIndex < this.pillInputs.length - 1) {
					this.pillInputs.toArray()[inputIndex + 1].nativeElement.focus();
				}
			}
			this.updatePills.emit();
		} else if (ev.key === "Enter") {
			ev.preventDefault();
			if (this.getInputText()) {
				let inputIndex = this.pillInputs.toArray().findIndex(input => input.nativeElement.textContent.trim() !== "");
				this.submit.emit({
					after: this.pills[inputIndex],
					value: this.getInputText()
				});
				this.clearInputText();
			}
		} else if (ev.key === "ArrowLeft") {
			let index = this.pillInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			let prevInput = this.pillInputs.toArray()[index - 1];
			if (prevInput) { prevInput.nativeElement.focus(); }
		} else if (ev.key === "ArrowRight") {
			let index = this.pillInputs.toArray().findIndex(input => input.nativeElement === ev.target);
			let nextInput = this.pillInputs.toArray()[index + 1];
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
