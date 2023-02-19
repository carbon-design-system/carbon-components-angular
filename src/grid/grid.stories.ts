/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
			imports: [GridModule]
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
		<div cdsGrid [condensed]="gridCondensed">
			<div
				cdsRow
				[gutter]="gutter"
				[condensed]="rowCondensed">
				<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">First Column</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">Second column</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">Third Column</div>
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
		<div cdsGrid [condensed]="gridCondensed" [useCssGrid]="true">
			<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">First Column</div>
			<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">Second column</div>
			<div cdsCol class="custom-class-example" [columnNumbers]="{md: 2, sm: 4}">Third Column</div>
		</div>
	`
});
export const CssGrid = CSSGridTemplate.bind({});
