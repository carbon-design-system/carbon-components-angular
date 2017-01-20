import {
	Component,
	Input
} from "@angular/core";
@Component({
	selector: "typeahead-highlight",
	template: `
		<span *ngFor="let match of matches; let i = index">{{match}}<span
		class="highlight" *ngIf="i < matches.length - 1">{{iSearchText[i]}}</span></span>
	`
})
export class TypeaheadHighlight {
	@Input() fullText: string;
	@Input() searchText: string;

	private matches = [];
	private iSearchText = [];

	ngOnChanges() {
		let searchTextRegex = new RegExp(this.searchText, "gi");

		if (this.fullText) {
			this.iSearchText = this.fullText.match(searchTextRegex);
			this.matches = this.fullText.split(searchTextRegex);
		}
	}
}
