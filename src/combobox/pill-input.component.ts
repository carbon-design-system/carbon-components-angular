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
	forwardRef
} from "@angular/core";
import { Pill } from "./pill.component";
import { ListItem } from "./../dropdown/list-item.interface";

@Component({
	selector: "n-pill-input",
	template: `
		<div
			class="pill-input"
			role="textbox"
			[ngClass]="{
				focus: focus,
				disabled: disabled
			}"
			(click)="focusInput($event)"
			[ngStyle]="{
				'height.px': expanded?expandedHeight:null
			}">
			<div
				*ngIf="type === 'multi'"
				#pillWrapper
				class="pills-wrapper">
				<ng-content></ng-content>
				<span
					*ngIf="showPlaceholder"
					class="placeholder">
					{{ placeholder }}
				</span>
				<span
					class="pill-wrapper"
					*ngFor="let pill of pills; let last = last">
					<n-pill
						[item]="pill">
						{{ pill.content }}
					</n-pill>
					<div
						#comboInput
						class="combo-input"
						contenteditable
						(keydown)="onKeydown($event)"
						(keyup)="onKeyup($event)"></div>
				</span>
				<div
					#comboInput
					*ngIf="empty(pills)"
					class="combo-input"
					contenteditable
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)"></div>
			</div>
			<div
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
			</div>
			<a
				*ngIf="!expanded && numberMore > 0"
				class="more"
				href=""
				(click)="showMore($event)">{{ numberMore }} more</a>
			<a
				*ngIf="expanded && numberMore > 0"
				class="more"
				href=""
				(click)="showMore($event)">Hide</a>
		</div>`,
	host: {
		class: "pill-input-wrapper"
	}
})
export class PillInput {
	public focus = false;
	public expandedHeight = 0;
	public numberMore = 0;
	public showPlaceholder = true;
	@Input() expanded = false;
	@Input() pills: Array<ListItem> = [];
	@Input() placeholder = "";
	@Input() displayValue = "";
	@Input() type: "single" | "multi" = "single";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() disabled = false;
	@Output() updatePills = new EventEmitter();
	@Output() search = new EventEmitter();
	@Output() submit = new EventEmitter();
	@ViewChild("pillWrapper") pillWrapper;
	@ViewChildren("comboInput") comboInputs: QueryList<any>;
	@ViewChildren(Pill) pillInstances: QueryList<Pill>;

	constructor(private _elementRef: ElementRef) {}

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

	private checkPlaceholderVisibility(): void {
		if (this.type === "single") {
			setTimeout(() => this.showPlaceholder = !this.displayValue && !this.focus && !this.getInputText());
		} else {
			setTimeout(() => this.showPlaceholder = this.empty(this.pills) && !this.focus && !this.getInputText());
		}
	}

	public empty(array: Array<any>) {
		if (!array) {
			return true;
		}
		if (array.length === 0) {
			return true;
		}
		return false;
	}

	public setFocus(state) {
		this.focus = state;
	}

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

	private setSelection(target) {
		let selectionRange = document.createRange();
		let selection = window.getSelection();
		selectionRange.selectNodeContents(target);
		selection.removeAllRanges();
		selection.addRange(selectionRange);
		target.focus();
	}

	public showMore(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		this.expanded = !this.expanded;
		this.doResize();
	}

	public doResize() {
		if (this.expanded) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight;
		}
	}

	// clears the comboInputs
	public clearInputText(toSkip = null) {
		if (this.comboInputs) {
			this.comboInputs.forEach(input => {
				if (!toSkip || input.nativeElement !== toSkip) {
					input.nativeElement.textContent = "";
				}
			});
		}
	}

	// returns the text from an event, the textContent of the first filled comboInput, or an empty string
	public getInputText(ev = null) {
		if (ev) {
			return ev.target.textContent.trim();
		}
		if (this.comboInputs) {
			let text = this.comboInputs.find(input => input.nativeElement.textContent.trim() !== "");
			return text ? text.nativeElement.textContent.trim() : "";
		}
		return "";
	}

	onKeydown(ev: KeyboardEvent) {
		// this.doResize();
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

	onKeyup(ev: KeyboardEvent) {
		this.doResize();
		this.clearInputText(ev.target);
		this.search.emit(this.getInputText(ev));
	}
}
