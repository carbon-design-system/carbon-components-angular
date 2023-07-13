/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { ListModule, List } from "./";

export default {
	title: "Components/List",
	decorators: [
		moduleMetadata({
			imports: [ListModule]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: List
} as Meta;

const Template: Story<List> = (args) => ({
	props: args,
	template: `
		<p>Ordered List</p>
		<ol cdsList>
			<li cdsListItem>One</li>
			<li cdsListItem>Two</li>
			<li cdsListItem>Three</li>
		</ol>
		<p>Unordered List</p>
		<ul cdsList>
			<li cdsListItem>One</li>
			<li cdsListItem>Two</li>
			<li cdsListItem>Three</li>
		</ul>
	`
});
export const Basic = Template.bind({});

const NestingTemplate: Story<List> = (args) => ({
	props: args,
	template: `
		<p>Ordered List</p>
		<ol cdsList>
			<li cdsListItem>
				One
				<ol cdsList>
					<li cdsListItem>Nested one</li>
					<li cdsListItem>Nested two</li>
					<li cdsListItem>Nested three</li>
				</ol>
			</li>
			<li cdsListItem>Two</li>
			<li cdsListItem>Three</li>
		</ol>
		<p>Unordered List</p>
		<ul cdsList>
			<li cdsListItem>
				One
				<ul cdsList>
					<li cdsListItem>Nested one</li>
					<li cdsListItem>Nested two</li>
					<li cdsListItem>Nested three</li>
				</ul>
			</li>
			<li cdsListItem>Two</li>
			<li cdsListItem>Three</li>
		</ul>
	`
});
export const Nesting = NestingTemplate.bind({});
