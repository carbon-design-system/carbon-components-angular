import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	Output,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

@Component({
	selector: "ibm-typeahead-list",
	template: `
		<ul
			#list
			role="listbox"
			class="bx--typeahead__menu">
			<label *ngIf="label && displayedItems.length" class="bx--label bx--typeahead__menu-label">
				{{ label }}
			</label>
			<li
				*ngFor="let item of displayedItems; let i = index;"
				[attr.selected]="currentIndex === i ? true : undefined"
				role="option"
				(click)="onSelect(item)"
				class="bx--typeahead__menu-item">
				<div
					*ngIf="!listTpl"
					class="bx--typeahead__menu-item__option"
					[innerHtml]="item">
				</div>
				<ng-template
					*ngIf="listTpl"
					[ngTemplateOutlet]="listTpl"
					[ngTemplateOutletContext]="{ item: item }">
				</ng-template>
			</li>
		</ul>
	`,
	styleUrls: ["./typeahead-list.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TypeaheadList {
	@Input() items;
	/**
	 * Optional template to brind to items in the typeahead list.
	 * ```html
	 * 	<div style="width: 400px">
	 *		<ibm-typeahead-search
	 *			autocomplete="off"
	 *			(search)="onSearch($event)"
	 *			[placeholder]="placeholder">
	 *			<ibm-typeahead-list
	 *				[items]="items"
	 *				[listTpl]="listTemplate"
	 *				[label]="listLabel">
	 *			</ibm-typeahead-list>
	 *		</ibm-typeahead-search>
	 *	</div>
	 *
	 *	<ng-template #listTemplate let-item="item">
	 *		<div class="custom-list-item">
	 *			<svg class="list-item-icon" ibmIconTime size="16"></svg>
	 *			<div [innerHtml]="item" class="bx--typeahead__menu-item__option custom-text"></div>
	 *		</div>
	 *	</ng-template>
	 * ```
	 *
	 * Items must be set as `innerHtml` in the custom template to be displayed as intended.
	 */
	@Input() listTpl;
	@Input() label;
	@Output() select: EventEmitter<string> = new EventEmitter();
	// @ts-ignore
	@ViewChild("list", { static: true }) list: ElementRef;
	/**
	 * Items which are set as the `innerHtml` of the `menu-item-options`
	 * of the typeahead list.
	 */
	displayedItems = [];
	/**
	 * Maintains the index of the focused item in the typeahead list.
	 */
	currentIndex = -1;

	onSelect(selectedItem) {
		this.select.emit(selectedItem);
	}

	doSelect() {
		if (this.currentIndex !== -1) {
			this.onSelect(this.displayedItems[this.currentIndex]);
		}
	}

	search(queryString) {
		this.currentIndex = -1;
		if (queryString) {
			// Escape regular expression special characters.
			const sanitizedQueryString = queryString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
			const match = new RegExp("(" + sanitizedQueryString + ")", "i");
			this.displayedItems = this.items
				.filter(item => item.content.toLowerCase().includes(queryString.toLowerCase()))
				.map(item => item.content.replace(match, "<strong>$1</strong>"));
		} else {
			this.displayedItems = [];
		}
	}
}
