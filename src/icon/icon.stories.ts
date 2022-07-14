/* tslint:disable variable-name */

import { Component, OnInit } from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { IconModule, IconService } from "./";
import { Accessibility16 } from "@carbon/icons";
import * as Icons from "@carbon/icons";

@Component({
	selector: "app-demo-icon",
	template: `
		<!-- this just sets up the environment for the demo -->
	`
})
class IconDemo implements OnInit {
	constructor(protected iconService: IconService) { }

	ngOnInit() {
		this.iconService.register(Accessibility16);
	}
}

@Component({
	selector: "app-demo-many-icon",
	template: `
		<table>
			<tr *ngFor="let group of groupedIcons">
				<td *ngFor="let icon of group">
					<svg [ibmIcon]="icon.name" [size]="icon.size"></svg>
					<div>name: <code>{{icon.name}}</code></div>
					<div>size: <code>{{icon.size}}</code></div>
				</td>
			</tr>
		</table>
	`,
	styles: [
		`
			td {
				white-space: nowrap;
				padding: 10px 0;
			}
		`
	]
})
class ManyIconDemo implements OnInit {
	groupedIcons: any = [];

	constructor(protected iconService: IconService) { }

	ngOnInit() {
		const iconMap = new Map();
		for (const [_, descriptor] of Object.entries(Icons)) {
			this.iconService.register(descriptor as any);
			if (typeof descriptor === "object" && descriptor) {
				if (!iconMap.has(descriptor["name"])) {
					iconMap.set(descriptor["name"], []);
				}
				iconMap.get(descriptor["name"]).push(descriptor);
			}
		}
		this.groupedIcons = Array.from(iconMap.values());
	}
}

// Story starts here
export default {
	title: "Components/Icon",
	decorators: [
		moduleMetadata({
			declarations: [
				IconDemo,
				ManyIconDemo
			],
			imports: [
				IconModule,
				DocumentationModule
			]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-demo-icon></app-demo-icon>
		<svg ibmIcon="accessibility" size="16" title="Hello!"></svg>
	`
});
export const Basic = Template.bind({});

const NonSVGRootTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-demo-icon></app-demo-icon>
		<div ibmIcon="accessibility" size="16"></div>
	`
});
export const RootElement = NonSVGRootTemplate.bind({});
RootElement.storyName = "Non-svg root element";

const AllIconTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-demo-many-icon></app-demo-many-icon>
	`
});
export const AllIcon = AllIconTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_icon.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
