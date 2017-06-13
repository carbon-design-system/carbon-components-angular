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
	selector: "cdl-pill-input",
	template: `
		<div
			class="pill-input"
			[ngClass]="{
				focus: focus
			}"
			(click)="focusInput($event)"
			[ngStyle]="{
				'height.px': moreShown?expandedHeight:null
			}">
			<div
				*ngIf="type === 'multi'"
				#pillWrapper>
				<ng-content></ng-content>
				<span
					*ngIf="empty(pills) && !focus && !getInputText()"
					class="placeholder">
					{{ placeholder }}
				</span>
				<span *ngFor="let pill of pills; let last = last">
					<cdl-pill
						[item]="pill">
						{{ pill.content }}
					</cdl-pill>
					<div
						#comboInput
						*ngIf="!last"
						style="line-height: 20px;"
						class="combo-input"
						contenteditable
						(keydown)="onKeydown($event)"
						(keyup)="onKeyup($event)">
					</div>
				</span>
				<div
					#comboInput
					*ngIf="!last"
					style="line-height: 20px;"
					class="combo-input"
					contenteditable
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)">
				</div>
			</div>
			<div *ngIf="type === 'single'">
				<span
					*ngIf="!displayValue && !focus && !getInputText()"
					class="placeholder">
					{{ placeholder }}
				</span>
				<div
					#comboInput
					style="line-height: 20px;"
					class="combo-input"
					contenteditable
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)">
					{{ displayValue }}
				</div>
			</div>
			<a
				*ngIf="!moreShown && numberMore > 0"
				class="more"
				href=""
				(click)="showMore($event)">{{ numberMore }} more</a>
			<a
				*ngIf="moreShown && numberMore > 0"
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
	public moreShown = false;
	public expandedHeight = 0;
	public numberMore = 0;
	@Input() pills: Array<ListItem> = null;
	@Input() placeholder = "";
	@Input() displayValue = "";
	@Input() type: "single" | "multi" = "single";
	@Output() removePills = new EventEmitter();
	@Output() search = new EventEmitter();
	@ViewChild("pillWrapper") pillWrapper;
	@ViewChildren("comboInput") comboInputs: QueryList<any>;
	@ViewChildren(Pill) pillInstances: QueryList<Pill>;

	constructor(public _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.pills) {
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
						this.removePills.emit();
						this.doResize();
						if (this.numberMore === 0) { this.moreShown = false; }
					});
				});
				this.doResize();
			}, 0);
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
		// collapse input on outside click
		document.addEventListener("click", ev => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.focus = false;
				this.moreShown = false;
			} else {
				this.focus = true;
			}
		});
		// keyup here because we want to get the element the event ends on
		// **not** the element the event starts from (that would be keydown)
		document.addEventListener("keyup", ev => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.focus = false;
			} else {
				this.focus = true;
			}
		});
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

	public focusInput(ev) {
		console.log(ev);
		if (this.numberMore > 0) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight + 10;
			this.moreShown = true;
		}
		if (this.comboInputs.find(input => input.nativeElement === ev.target)) {
			this.clearInputText(ev.target);
			this.setSelection(ev.target);
		} else if (this.getInputText()) {
			this.comboInputs.forEach(input => {
				if (input.nativeElement.textContent.trim() !== "") {
					this.setSelection(input.nativeElement);
				}
			});
		} else {
			this.setSelection(this.comboInputs.last.nativeElement);
		}
	}

	private setSelection(target) {
		let selectionRange = document.createRange();
		let selection = window.getSelection();
		selectionRange.selectNodeContents(target);
		selection.removeAllRanges();
		selection.addRange(selectionRange);
	}

	public showMore(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		this.moreShown = !this.moreShown;
		this.doResize();
	}

	public doResize() {
		if (this.moreShown) {
			// + 10 to accommodate weird heights, and non-actioned text
			// if we clear when we hide/close the dropdown the + 10 can be dropped
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight + 10;
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
		this.doResize();
		if (ev.key === "Escape") {
			this.moreShown = false;
		} else if (ev.key === "Backspace" && ev.target["textContent"] === "" && !this.empty(this.pills)) {
			// _sigh_ this logic will need to be more complex
			// in theory, this.pills and this.pillInstances and this.comboInputs should line up index wise
			// which would mean we could findIndex on comboInputs and set the state the same (or same + 1?)
			// entry in this.pills
			// there's also the fact that pills are in list order not selected order ...
			// but I don't think that's a big deal. It feels a little weird, but it's not
			// really unexpected
			this.pills[this.pills.length - 1].selected = false;
			this.removePills.emit();
		}
	}

	onKeyup(ev: KeyboardEvent) {
		this.clearInputText(ev.target);
		this.search.emit(this.getInputText(ev));
	}

	onBlur(ev) {
		if (!this._elementRef.nativeElement.contains(ev.target)) {
			// this.focus = false;
		}
	}
}
