import { moduleMetadata, Meta } from "@storybook/angular";
import {
	ContentSwitcherModule,
	ContentSwitcher,
	ContentSwitcherOption
} from "./";

export default {
	title: "Components/Content Switcher",
	decorators: [
		moduleMetadata({
			imports: [ContentSwitcherModule]
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

const Template = (args) => ({
	props: args,
	template: `
		<cds-content-switcher (selected)="selected($event)">
			<button cdsContentOption name="First">First section</button>
			<button cdsContentOption name="Second">Second section</button>
			<button cdsContentOption name="Third">Third section</button>
		</cds-content-switcher>
	`
});
export const Basic = Template.bind({});
