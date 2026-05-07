import { moduleMetadata, Meta } from "@storybook/angular";
import {
	ContentSwitcher,
	ContentSwitcherOption
} from "./";

export default {
	title: "Components/Content Switcher",
	decorators: [
		moduleMetadata({
			imports: [
				ContentSwitcher,
				ContentSwitcherOption
			]
		})
	],
	component: ContentSwitcher,
	subcomponents: {ContentSwitcherOption}
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-content-switcher
			[lowContrast]="lowContrast"
			[selectionMode]="selectionMode"
			[selectedIndex]="selectedIndex"
			(selected)="selected($event)">
			<button cdsContentOption name="First">First section</button>
			<button cdsContentOption name="Second">Second section</button>
			<button cdsContentOption name="Third">Third section</button>
		</cds-content-switcher>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	lowContrast: false,
	selectionMode: "automatic",
	selectedIndex: 0
};
Basic.argTypes = {
	selected: { action: "selected" }
};
