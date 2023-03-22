import {
	Component,
	Input,
	OnInit
} from "@angular/core";

import { PaginationModel } from "../..";

@Component({
	selector: "app-pagination",
	template: `
		<cds-pagination-nav
			[model]="model"
			[disabled]="disabled"
			(selectPage)="selectPage($event)"
			[numOfItemsToShow]="numOfItemsToShow">
		</cds-pagination-nav>
	`
})
export class PaginationNavStory implements OnInit {
	@Input() model = new PaginationModel();
	@Input() disabled = false;
	@Input() pageInputDisabled = false;
	@Input() numOfItemsToShow = false;

	@Input() get totalDataLength() {
		return this.model.totalDataLength;
	}
	set totalDataLength(value) {
		this.model.totalDataLength = value;
	}

	ngOnInit() {
		this.model.currentPage = 1;
	}

	selectPage(page) {
		console.log("Loading page", page, "from pagination model");
		this.model.currentPage = page;
	}
}
