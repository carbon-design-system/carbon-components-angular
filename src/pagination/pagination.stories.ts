import {
	Component,
	OnInit,
	Input
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, number, boolean } from "@storybook/addon-knobs/angular";

import { NFormsModule } from "..";
import { PaginationModule } from "./pagination.module";
import { PaginationModel } from "./pagination-model.class";
import { DocumentationModule } from "./../documentation-component/documentation.module";

@Component({
	selector: "app-pagination",
	template: `
		<ibm-pagination
			[model]="model"
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			[skeleton]="skeleton"
			(selectPage)="selectPage($event)">
		</ibm-pagination>
	`
})
class PaginationStory implements OnInit {
	@Input() model = new PaginationModel();
	@Input() skeleton = false;
	@Input() disabled = false;
	@Input() pageInputDisabled = false;
	@Input() pagesUnknown = false;

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
				PaginationModule,
				DocumentationModule
			],
			declarations: [
				PaginationStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div style="width: 800px">
				<app-pagination
					[disabled]="disabled"
					[pageInputDisabled]="pageInputDisabled"
					[pagesUnknown]="pagesUnknown"
					[totalDataLength]="totalDataLength">
				</app-pagination>
			</div>
		`,
		props: {
			disabled: boolean("Disabeld buttons", false),
			pageInputDisabled: boolean("Disable page input", false),
			pagesUnknown: boolean("Total number of items unknown ", false),
			totalDataLength: number("Total number of items", 105)
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<div style="width: 800px">
				<app-pagination [totalDataLength]="totalDataLength" [skeleton]="true"></app-pagination>
			</div>
		`,
		props: {
			totalDataLength: number("totalDataLength", 105)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Pagination.html"></ibm-documentation>
		`
	}));

