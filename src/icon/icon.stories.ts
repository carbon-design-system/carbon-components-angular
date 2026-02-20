/* tslint:disable variable-name */


import { moduleMetadata, Meta } from "@storybook/angular";
import { IconModule, IconDirective } from "./";
import { GridModule } from '../grid';
import { IconDemo, ManyIconDemo, ManyPictogramsDemo } from "./stories";

export default {
	title: "Components/Icon",
	decorators: [
		moduleMetadata({
			declarations: [
				IconDemo,
				ManyIconDemo,
				ManyPictogramsDemo
			],
			imports: [
				IconModule,
				GridModule
			]
		})
	],
	component: IconDirective
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<!-- app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/icon/stories/icon-demo.component.ts -->
		<app-demo-icon></app-demo-icon>
		<svg cdsIcon="accessibility" size="16" title="Hello!"></svg>
	`
});
export const Basic = Template.bind({});

const NonSVGRootTemplate = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/icon/stories/many-icons-demo.component.ts
		-->
		<app-demo-icon></app-demo-icon>
		<div cdsIcon="accessibility" size="16"></div>
	`
});
export const RootElement = NonSVGRootTemplate.bind({});
RootElement.storyName = "Non-svg root element";

const AllIconTemplate = (args) => ({
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

const AllPictogramsTemplate = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/icon/stories/pictograms-demo.component.ts
		-->
		<app-demo-many-pictograms></app-demo-many-pictograms>
	`
});
export const AllPictograms = AllPictogramsTemplate.bind({});
