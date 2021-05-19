import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class ContextMenuSelectionService {
	public selectionObservable: Observable<any | any[]>;
	private selectionSubject = new ReplaySubject<any | any[]>(1);
	private value: any[] = [];

	constructor() {
		this.selectionObservable = this.selectionSubject.asObservable();
	}

	selectRadio(value: any) {
		if (!value) {
			return;
		}
		this.selectionSubject.next(value);
		this.value = [value];
	}

	selectCheckbox(value: any) {
		if (!value) {
			return;
		}
		if (this.value.includes(value)) {
			this.value = this.value.filter(v => v !== value);
		} else {
			this.value.push(value);
		}
		this.selectionSubject.next(this.value);
	}

	selectCheckboxes(value: any[]) {
		if (!value) {
			return;
		}
		this.value = value;
		this.selectionSubject.next(value);
	}
}
