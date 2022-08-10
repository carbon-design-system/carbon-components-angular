/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import {
	StructuredListModule,
	StructuredList,
	ListColumn,
	ListHeader,
	ListRow
} from "./";

export default {
	title: "Components/Structured List",
	decorators: [
		moduleMetadata({
			imports: [
				StructuredListModule,
				FormsModule
			]
		})
	],
	component: StructuredList,
	subcomponents: {
		ListHeader,
		ListRow,
		ListColumn
	}
} as Meta;

const Template: Story<StructuredList> = (args) => ({
	props: args,
	template: `
		<ibm-structured-list [border]="border" [condensed]="condensed" [nowrap]="nowrap">
			<ibm-list-header>
				<ibm-list-column nowrap="true">Column 1</ibm-list-column>
				<ibm-list-column nowrap="true">Column 2</ibm-list-column>
				<ibm-list-column>Column 3</ibm-list-column>
			</ibm-list-header>
			<ibm-list-row>
				<ibm-list-column>Row 1</ibm-list-column>
				<ibm-list-column nowrap="true">Row One</ibm-list-column>
				<ibm-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</ibm-list-column>
			</ibm-list-row>
			<ibm-list-row>
				<ibm-list-column>Row 2</ibm-list-column>
				<ibm-list-column nowrap="true">Row Two</ibm-list-column>
				<ibm-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</ibm-list-column>
			</ibm-list-row>
		</ibm-structured-list>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	border: false,
	condensed: false,
	nowrap: false
};

const SelectionTemplate: Story<StructuredList> = (args) => ({
	props: args,
	template: `
		<ibm-structured-list
			[border]="border"
			[condensed]="condensed"
			[nowrap]="nowrap"
			selection="true"
			[(ngModel)]="valueSelected">
			<ibm-list-header>
				<ibm-list-column nowrap="true">Column 1</ibm-list-column>
				<ibm-list-column nowrap="true">Column 2</ibm-list-column>
				<ibm-list-column>Column 3</ibm-list-column>
			</ibm-list-header>
			<ibm-list-row value="row1">
				<ibm-list-column>Row 1</ibm-list-column>
				<ibm-list-column nowrap="true">Row One</ibm-list-column>
				<ibm-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</ibm-list-column>
			</ibm-list-row>
			<ibm-list-row value="row2">
				<ibm-list-column>Row 2</ibm-list-column>
				<ibm-list-column nowrap="true">Row Two</ibm-list-column>
				<ibm-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</ibm-list-column>
			</ibm-list-row>
		</ibm-structured-list>
		<p>{{valueSelected}}</p>
	`
});
export const Selection = SelectionTemplate.bind({});
Selection.args = {
	...Basic.args
};

const SkeletonTemplate: Story<StructuredList> = (args) => ({
	props: args,
	template: `
		<ibm-structured-list
			skeleton="true"
			[border]="border"
			[condensed]="condensed"
			[nowrap]="nowrap">
			<ibm-list-header>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
			</ibm-list-header>
			<ibm-list-row>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
			</ibm-list-row>
			<ibm-list-row>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
				<ibm-list-column></ibm-list-column>
			</ibm-list-row>
		</ibm-structured-list>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
Skeleton.args = {
	...Basic.args
};
