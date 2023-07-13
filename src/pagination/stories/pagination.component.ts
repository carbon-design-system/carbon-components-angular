import {
	Component,
	Input,
	OnInit
} from "@angular/core";

import { PaginationModel } from "..";

@Component({
	selector: "app-pagination",
	template: `
		<cds-pagination
			[model]="model"
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			[showPageInput]="showPageInput"
			[skeleton]="skeleton"
			(selectPage)="selectPage($event)">
		</cds-pagination>
	`
})
export class PaginationStory implements OnInit {
	@Input() model = new PaginationModel();
	@Input() skeleton = false;
	@Input() disabled = false;
	@Input() pageInputDisabled = false;
	@Input() pagesUnknown = false;
	@Input() showPageInput = true;

	@Input() get totalDataLength() {
		return this.model.totalDataLength;
	}
	set totalDataLength(value) {
		this.model.totalDataLength = value;
	}

	ngOnInit() {
		this.model.pageLength = 10;
		this.model.currentPage = 1;
	}

	selectPage(page) {
		console.log("Loading page", page, "from pagination model");
		this.model.currentPage = page;
	}
}
