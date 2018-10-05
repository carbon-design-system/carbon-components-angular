import {
	Component,
	OnInit,
	Input
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	number
} from "@storybook/addon-knobs/angular";

import { NFormsModule } from "..";
import { PaginationModule } from "./pagination.module";
import { PaginationModel } from "./pagination-model.class";

const en = require("./../../src/i18n/en.json");


@Component({
	selector: "app-pagination",
	template: `
		<ibm-pagination
			[model]="model"
			(selectPage)="selectPage($event)">
		</ibm-pagination>
	`
})
class PaginationStory implements OnInit {
	@Input() model = new PaginationModel();

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


storiesOf("Pagination", module).addDecorator(
		moduleMetadata({
			imports: [
				NFormsModule,
				PaginationModule
			],
			declarations: [
				PaginationStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("default", () => ({
		template: `
			<app-pagination [totalDataLength]="totalDataLength"></app-pagination>
		`,
		props: {
			totalDataLength: number("totalDataLength", 105)
		}
	}));

