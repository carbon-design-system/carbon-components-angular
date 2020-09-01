import { Search } from "carbon-components-angular/search";
import { DropdownService } from "carbon-components-angular/dropdown";
import { I18n } from "carbon-components-angular/i18n";
import {
	Component,
	AfterViewInit,
	ElementRef,
	ContentChild,
	HostListener,
	OnDestroy
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TypeaheadList } from "./typeahead-list.component";

@Component({
	selector: "ibm-typeahead-search",
	templateUrl: "../search/search.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TypeaheadSearch,
			multi: true
		}
	]
})
export class TypeaheadSearch extends Search implements AfterViewInit, OnDestroy {
	@ContentChild(TypeaheadList) typeaheadList;

	constructor (protected dropdownService: DropdownService,
		protected elementRef: ElementRef,
		protected i18n: I18n
	) {
		super(elementRef, i18n);
	}

	onSearch(search: string) {
		this.typeaheadList.search(search);
		if (this.menuIsClosed) {
			this.openTypeahead();
		}
		this.value = search;
		this.doValueChange();
	}

	public openTypeahead() {
		this.menuIsClosed = false;
		this._appendToBody();
	}

	public closeTypeahead() {
		this.menuIsClosed = true;
		this.typeaheadList.currentIndex = 0;
		this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
	}

	@HostListener("document:click", ["$event"])
	clickClose() {
		this.closeTypeahead();
	}

	_appendToBody() {
		this.dropdownService.appendToBody(
			this.inputRef.nativeElement,
			this.typeaheadList.list.nativeElement,
			""
		);
	}

	/**
	 * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
	 */
	@HostListener("keydown", ["$event"])
	// "Esc", "Spacebar", "Down", and "Up" are IE specific values
	onKeyDown(event: KeyboardEvent) {
		if (!this.menuIsClosed) {
			if ((event.key === "ArrowDown" || event.key === "Down")
				&& this.typeaheadList.currentIndex + 1 < this.typeaheadList.displayedItems.length
			) {
				this.typeaheadList.currentIndex++;
			}

			if ((event.key === "ArrowUp" || event.key === "Up")
				&& this.typeaheadList.currentIndex > -1
			) {
				this.typeaheadList.currentIndex--;
			}

			if (event.key === "Enter") {
				if (this.typeaheadList.currentIndex === -1) {
					this.search.emit(this.value);
					this.doValueChange();
				} else {
					this.typeaheadList.doSelect();
				}
				this.closeTypeahead();
			}

			if ((event.key === "Escape" || event.key === "Esc") && !this.menuIsClosed) {
				this.closeTypeahead();
			}
		}
	}

	ngAfterViewInit() {
		this.typeaheadList.select.subscribe(selected => {
			this.value = selected.replaceAll(/<\/?strong>/gi, "");
			this.search.emit(this.value);
			this.doValueChange();
		});
		this.inputRef.nativeElement.addEventListener("keydown", (event) => {
			if ((event.key === "ArrowUp" || event.key === "ArrowDown")
				&& !this.menuIsClosed
			) {
				event.preventDefault();
			}
		}, false);
	}

	/**
	 * Removing the `Typeahead List` from the body if it is appended to the body.
	 */
	ngOnDestroy() {
		this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
	}
}
