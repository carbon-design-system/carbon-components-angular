/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata, Meta } from "@storybook/angular";
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

const Template = (args) => ({
	props: args,
	template: `
		<cds-structured-list [condensed]="condensed">
			<cds-list-header>
				<cds-list-column nowrap="true">Column 1</cds-list-column>
				<cds-list-column nowrap="true">Column 2</cds-list-column>
				<cds-list-column>Column 3</cds-list-column>
			</cds-list-header>
			<cds-list-row>
				<cds-list-column>Row 1</cds-list-column>
				<cds-list-column nowrap="true">Row One</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
			<cds-list-row>
				<cds-list-column>Row 2</cds-list-column>
				<cds-list-column nowrap="true">Row Two</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
		</cds-structured-list>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	condensed: false
};

const SelectionTemplate = (args) => ({
	props: args,
	template: `
		<cds-structured-list
			[condensed]="condensed"
			[selection]="true"
			[(ngModel)]="valueSelected">
			<cds-list-header>
				<cds-list-column nowrap="true">Column 1</cds-list-column>
				<cds-list-column nowrap="true">Column 2</cds-list-column>
				<cds-list-column>Column 3</cds-list-column>
			</cds-list-header>
			<cds-list-row value="row1">
				<cds-list-column>Row 1</cds-list-column>
				<cds-list-column nowrap="true">Row One</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
			<cds-list-row value="row2">
				<cds-list-column>Row 2</cds-list-column>
				<cds-list-column nowrap="true">Row Two</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
			<cds-list-row value="row3">
				<cds-list-column>Row 3</cds-list-column>
				<cds-list-column nowrap="true">Row Three</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
			<cds-list-row value="row4">
				<cds-list-column>Row 4</cds-list-column>
				<cds-list-column nowrap="true">Row Four</cds-list-column>
				<cds-list-column>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc dui magna,
					finibus id tortor sed, aliquet bibendum augue.
					Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
					Pellentesque vulputate nisl a porttitor interdum.
				</cds-list-column>
			</cds-list-row>
		</cds-structured-list>
		<p>{{valueSelected}}</p>
	`
});
export const Selection = SelectionTemplate.bind({});
Selection.args = {
	...Basic.args
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-structured-list
			skeleton="true"
			[border]="border"
			[condensed]="condensed"
			[nowrap]="nowrap">
			<cds-list-header>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
			</cds-list-header>
			<cds-list-row>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
			</cds-list-row>
			<cds-list-row>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
				<cds-list-column></cds-list-column>
			</cds-list-row>
		</cds-structured-list>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
Skeleton.args = {
	...Basic.args
};
