/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import {
	GridModule,
	GridDirective,
	RowDirective,
	ColumnDirective
} from "./";

export default {
	title: "Components/Grid",
	decorators: [
		moduleMetadata({
			imports: [GridModule, DocumentationModule]
		})
	],
	component: GridDirective,
	subcomponents: {
		RowDirective,
		ColumnDirective
	}
} as Meta;

const Template: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div ibmGrid [condensed]="gridCondensed">
			<div
				ibmRow
				[gutter]="gutter"
				[condensed]="rowCondensed">
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">First Column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Second column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Third Column</div>
			</div>
		</div>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	gutter: true,
	rowCondensed: false,
	gridCondensed: false
};

const CSSGridTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div ibmGrid [condensed]="gridCondensed">
			<div
				ibmRow
				[gutter]="gutter"
				[condensed]="rowCondensed">
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">First Column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Second column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Third Column</div>
			</div>
		</div>
	`
});
export const CssGrid = CSSGridTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_grid.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
