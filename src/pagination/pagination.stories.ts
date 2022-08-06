/* tslint:disable variable-name */

import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import {
	PaginationModule,
	Pagination,
	PaginationModel
} from "./";

@Component({
	selector: "app-pagination",
	template: `
		<ibm-pagination
			[model]="model"
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			[showPageInput]="showPageInput"
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

// Storybook starts here
export default {
	title: "Components/Pagination",
	decorators: [
		moduleMetadata({
			imports: [
				PaginationModule,
				DocumentationModule
			],
			declarations: [
				PaginationStory
			]
		})
	],
	component: Pagination
} as Meta;

const Template: Story<Pagination> = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-pagination
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			[totalDataLength]="totalDataLength"
			[showPageInput]="showPageInput"
			[skeleton]="skeleton">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	pageInputDisabled: false,
	pageUnknown: false,
	totalDataLength: 105,
	showPageInput: true,
	skeleton: false
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_pagination.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
