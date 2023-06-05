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
	title: "Components/Grid/CSS",
	decorators: [
		moduleMetadata({
			imports: [GridModule]
		}),
		componentWrapperDecorator((story) => `<div class="css-grid-story">${story}</div>`)
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
			[useCssGrid]="true"
			[condensed]="condensed"
			[narrow]="narrow"
			[fullWidth]="fullWidth">
			<div cdsCol [columnNumbers]="{sm: 4}"></div>
			<div cdsCol [columnNumbers]="{sm: 4}"></div>
			<div cdsCol [columnNumbers]="{sm: 4}"></div>
			<div cdsCol [columnNumbers]="{sm: 4}"></div>
		</div>
	`
});
export const Basic = Template.bind({});

const GridStartTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[useCssGrid]="true"
			[condensed]="condensed"
			[narrow]="narrow"
			[fullWidth]="fullWidth">
			<div cdsCol [columnNumbers]="{
				sm: {span: 1, start: 4},
				md: {span: 2, start: 7},
				lg: {span: 4, start: 13}
			}">span, start</div>
			<div cdsCol [columnNumbers]="{
				sm: {span: 2, end: 5},
				md: {span: 4, end: 9},
				lg: {span: 8, end: 17}
			}">span, end</div>
			<div cdsCol [columnNumbers]="{
				sm: {start: 1, end: 4},
				md: {start: 3, end: 7},
				lg: {start: 5, end: 17}
			}">start, end</div>
		</div>
	`
});
export const GridStart = GridStartTemplate.bind({});

const ResponsiveTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[useCssGrid]="true"
			[condensed]="condensed"
			[narrow]="narrow"
			[fullWidth]="fullWidth">
			<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 6}">
				<p>Small: Span 2 of 4</p>
				<p>Medium: Span 4 of 8</p>
				<p>Large: Span 6 of 16</p>
			</div>
			<div cdsCol [columnNumbers]="{sm: 2, md: 2, lg: 3}">
				<p>Small: Span 2 of 4</p>
				<p>Medium: Span 2 of 8</p>
				<p>Large: Span 3 of 16</p>
			</div>
			<div cdsCol [columnNumbers]="{sm: 0, md: 2, lg: 3}">
				<p>Small: Span 0 of 4</p>
				<p>Medium: Span 2 of 8</p>
				<p>Large: Span 3 of 16</p>
			</div>
			<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 4}">
				<p>Small: Span 0 of 4</p>
				<p>Medium: Span 0 of 8</p>
				<p>Large: Span 4 of 16</p>
			</div>
			<div cdsCol [columnNumbers]="{sm: 25, md: 50, lg: 75}">
				<p>Small: Span 25%</p>
				<p>Medium: Span 50%</p>
				<p>Large: 75%</p>
			</div>
		</div>
	`
});
export const Responsive = ResponsiveTemplate.bind({});

const SubgridTemplate: Story<GridDirective> = (args) => ({
	props: args,
	template: `
		<div
			cdsGrid
			[useCssGrid]="true"
			[condensed]="condensed"
			[narrow]="narrow"
			[fullWidth]="fullWidth">
			<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 3}">
				<p>Small: Span 2 of 4</p>
				<p>Medium: Span 4 of 8</p>
				<p>Large: Span 3 of 16</p>
			</div>
			<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 10}">
				<p>Small: Span 2 of 4</p>
				<p>Medium: Span 2 of 8</p>
				<p>Large: Span 10 of 16</p>
				<div cdsGrid>
					<div cdsCol [columnNumbers]="{sm: 1, md: 1, lg: 2}">
						<p>sm:1</p>
						<p>md:1</p>
						<p>lg:2</p>
					</div>
					<div cdsCol [columnNumbers]="{sm: 1, md: 1, lg: 2}">
						<p>sm:1</p>
						<p>md:1</p>
						<p>lg:2</p>
					</div>
					<div cdsCol [columnNumbers]="{sm: 0, md: 1, lg: 1}">
						<p>sm:0</p>
						<p>md:1</p>
						<p>lg:1</p>
					</div>
					<div cdsCol [columnNumbers]="{sm: 0, md: 1, lg: 1}">
						<p>sm:0</p>
						<p>md:1</p>
						<p>lg:1</p>
					</div>
					<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 4}">
						<p>sm:0</p>
						<p>md:0</p>
						<p>lg:4</p>
					</div>
				</div>
			</div>
			<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 3}">
				<p>Small: Span 0 of 4</p>
				<p>Medium: Span 0 of 8</p>
				<p>Large: Span 3 of 16</p>
			</div>
		</div>
	`
});
export const Subgrid = SubgridTemplate.bind({});
