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
			(click)="focusInput()"
			[ngStyle]="{
				'height.px': moreShown?expandedHeight:null
			}">
			<div
				*ngIf="type === 'multi'"
				#pillWrapper>
				<ng-content></ng-content>
				<span
					*ngIf="empty(pills) && !focus && !getInputText()"
					style="line-height: 20px; pointer-events: none;">
					{{ placeholder }}
				</span>
				<cdl-pill
					*ngFor="let pill of pills"
					[item]="pill">
					{{ pill.content }}
				</cdl-pill>
				<div
					#comboInput
					style="line-height: 20px;"
					class="combo-input"
					contenteditable
					(focus)="focus = true"
					(blur)="onBlur()"
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)">
				</div>
			</div>
			<div *ngIf="type === 'single'">
				<span
					*ngIf="!displayValue && !focus && !getInputText()"
					style="line-height: 20px; pointer-events: none;">
					{{ placeholder }}
				</span>
				<span>{{ displayValue }}</span>
				<div
					#comboInput
					style="line-height: 20px;"
					class="combo-input"
					contenteditable
					(focus)="focus = true"
					(blur)="onBlur()"
					(keydown)="onKeydown($event)"
					(keyup)="onKeyup($event)">
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
	@ViewChild("comboInput") comboInput;
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
		document.addEventListener("click", (ev) => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.focus = false;
				this.moreShown = false;
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

	public focusInput() {
		if (this.numberMore > 0) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight + 10;
			this.moreShown = true;
			this._elementRef.nativeElement.querySelector(".combo-input").focus();
		} else {
			this._elementRef.nativeElement.querySelector(".combo-input").focus();
		}
		if (this.getInputText()) {
			let selectionRange = document.createRange();
			let selection = window.getSelection();
			selectionRange.selectNodeContents(this.comboInput.nativeElement);
			selection.removeAllRanges();
			selection.addRange(selectionRange);
		} else {
			this.comboInput.nativeElement.textContent = "";
		}
	}

	public showMore(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		// + 10 to accommodate weird heights, and non-actioned text
		// if we clear when we hide/close the dropdown the + 10 can be dropped
		this.moreShown = !this.moreShown;
		this.doResize();
	}

	public doResize() {
		if (this.moreShown) {
			this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight + 10;
		}
	}

	public getInputText() {
		if (this.comboInput) {
			return this.comboInput.nativeElement.textContent.trim();
		}
		return "";
	}

	onKeydown(ev: KeyboardEvent) {
		this.doResize();
		if (ev.key === "Escape") {
			this.moreShown = false;
		} else if (ev.key === "Backspace" && ev.target["textContent"].trim() === "" && !this.empty(this.pills)) {
			this.pills[this.pills.length - 1].selected = false;
			this.removePills.emit();
		} else {
			// let query = ev.target["textContent"].trim();
			// if (query !== "") { this.search.emit(query); }
		}
	}

	onKeyup(ev: KeyboardEvent) {
		this.search.emit(this.getInputText());
	}

	onBlur() {
		this.focus = false;
		// this.moreShown = false;
	}
}
