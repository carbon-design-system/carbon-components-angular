import {
	Component,
	OnInit,
	Input
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, number, boolean } from "@storybook/addon-knobs/angular";

import { NFormsModule } from "..";
import { PaginationModule, PaginationNavModel } from "./index";
import { DocumentationModule } from "../documentation-component/documentation.module";

@Component({
	selector: "app-pagination",
	template: `
		<ibm-pagination-nav
			[model]="model"
			[disabled]="disabled"
			(selectPage)="selectPage($event)"
			[numOfItemsToShow]="numOfItemsToShow">
		</ibm-pagination-nav>
	`
})
class PaginationNavStory implements OnInit {
	@Input() model = new PaginationNavModel();
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

storiesOf("Components|PaginationNav", module).addDecorator(
		moduleMetadata({
			imports: [
				NFormsModule,
				PaginationModule,
				DocumentationModule
			],
			declarations: [
				PaginationNavStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div style="width: 800px">
				<app-pagination
					[disabled]="disabled"
					[totalDataLength]="totalDataLength"
					[numOfItemsToShow]="numOfItemsToShow">
				</app-pagination>
			</div>
		`,
		props: {
			disabled: boolean("Disabeld buttons", false),
			totalDataLength: number("Total number of items", 10),
			numOfItemsToShow: number("Number of items to be shown (minimum 4) (numOfItemsToShow)", 4)
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<div style="width: 800px">
				<app-pagination [totalDataLength]="totalDataLength" [skeleton]="true"></app-pagination>
			</div>
		`,
		props: {
			totalDataLength: number("totalDataLength", 10)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Pagination.html"></ibm-documentation>
		`
	}));

