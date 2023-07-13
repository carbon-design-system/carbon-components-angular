/* tslint:disable variable-name */

import { moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular";
import {
	GridModule,
	GridDirective,
	RowDirective,
	ColumnDirective
} from "./";

export default {
	title: "Components/Grid/Flex",
	decorators: [
		moduleMetadata({
			imports: [GridModule]
		}),
		componentWrapperDecorator((story) => `<div class="flex-grid-story">${story}</div>`)
	],
	component: GridDirective,
	subcomponents: {
		RowDirective,
		ColumnDirective
	},
	argTypes: {
		useCssGrid: {
			control: false
		}
	}
} as Meta;

const Template: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[condensed]="condensed"
			[fullWidth]="fullWidth"
			[narrow]="narrow">
			<div cdsRow>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
			</div>
		</div>
	`
});
export const Basic = Template.bind({});

const ResponsiveTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div cdsGrid [condensed]="gridCondensed">
			<div
				cdsRow
				[condensed]="rowCondensed">
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 2, md: 4, lg: 6}">
					<div class="inside">
						<p>Small: Span 2 of 4</p>
						<p>Medium: Span 4 of 8</p>
						<p>Large: Span 6 of 16</p>
					</div>
				</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 2, md: 2, lg: 3}">
					<div class="inside">
						<p>Small: Span 2 of 4</p>
						<p>Medium: Span 2 of 8</p>
						<p>Large: Span 3 of 16</p>
					</div>
				</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 0, md: 2, lg: 3}">
					<div class="inside">
						<p>Small: Span 0 of 4</p>
						<p>Medium: Span 2 of 8</p>
						<p>Large: Span 3 of 16</p>
					</div>
				</div>
			</div>
		</div>
	`
});
export const Responsive = ResponsiveTemplate.bind({});

const OffsetTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[condensed]="condensed"
			[fullWidth]="fullWidth"
			[narrow]="narrow">
			<div cdsRow>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 1}" [offsets]="{sm: 3}">
					<div class="inside">Small: Offset 3</div>
				</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 2}" [offsets]="{sm: 2}">
					<div class="inside">Small: Offset 2</div>
				</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 3}" [offsets]="{sm: 1}">
					<div class="inside">Small: Offset 1</div>
				</div>
				<div cdsCol class="custom-class-example" [columnNumbers]="{sm: 4}" [offsets]="{sm: 0}">
					<div class="inside">Small: Offset -</div>
				</div>
			</div>
		</div>
	`
});
export const Offset = OffsetTemplate.bind({});

const CondensedRowTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[condensed]="condensed"
			[fullWidth]="fullWidth"
			[narrow]="narrow">
			<div cdsRow [condensed]="true">
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
			</div>
		</div>
	`
});
export const CondensedRow = CondensedRowTemplate.bind({});

const NarrowRowTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[condensed]="condensed"
			[fullWidth]="fullWidth"
			[narrow]="narrow">
			<div cdsRow [condensed]="true" [narrow]="true">
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
				<div cdsCol class="custom-class-example">
					<div class="inside">Span 25%</div>
				</div>
			</div>
		</div>
	`
});
export const NarrowRow = NarrowRowTemplate.bind({});
