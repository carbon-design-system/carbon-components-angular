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
	PaginationNav,
	PaginationModel
} from "./";

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

// Storybook starts here
export default {
	title: "Components/Pagination",
	decorators: [
		moduleMetadata({
			imports: [
				PaginationModule,
				DocumentationModule
			],
			declarations: [PaginationNavStory]
		})
	]
} as Meta;

const Template: Story<PaginationNav> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-pagination
			[disabled]="disabled"
			[totalDataLength]="totalDataLength"
			[numOfItemsToShow]="numOfItemsToShow"
			[skeleton]="skeleton">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	totalDataLength: 10,
	numOfItemsToShow: 4,
	skeleton: false
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_pagination.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
