/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import {
	ContentSwitcherModule,
	ContentSwitcher,
	ContentSwitcherOption
} from "./";

export default {
	title: "Components/Content Switcher",
	decorators: [
		moduleMetadata({
			imports: [ContentSwitcherModule, DocumentationModule]
		})
	],
	argTypes: {
		code: {
			control: false
		}
	},
	component: ContentSwitcher,
	subcomponents: ContentSwitcherOption
} as Meta;

const Template: Story<ContentSwitcher> = (args) => ({
	props: args,
	template: `
		<ibm-content-switcher (selected)="selected($event)" [theme]="theme">
			<button ibmContentOption name="First">First section</button>
			<button ibmContentOption name="Second">Second section</button>
			<button ibmContentOption name="Third">Third section</button>
		</ibm-content-switcher>
	`
});
export const Basic = Template.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_content_switcher.contentswitcher.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
