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
import { DocumentationModule } from "./../documentation-component/documentation.module";

@Component({
	selector: "app-pagination",
	template: `
		<ibm-pagination
			[model]="model"
			[skeleton]="skeleton"
			(selectPage)="selectPage($event)">
		</ibm-pagination>
	`
})
class PaginationStory implements OnInit {
	@Input() model = new PaginationModel();
	@Input() skeleton = false;

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
	.add("default", () => ({
		template: `
			<div style="width: 800px">
				<app-pagination [totalDataLength]="totalDataLength"></app-pagination>
			</div>
		`,
		props: {
			totalDataLength: number("totalDataLength", 105)
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

