/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { RadioModule, Radio } from "./";

export default {
	title: "Components/Radio",
	decorators: [
		moduleMetadata({
			imports: [RadioModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story<Radio> = (args) => ({
	props: args,
	template: `
	<fieldset class="cds--fieldset">
		<legend class="cds--label">{{label}}</legend>
		<ibm-radio-group
			[disabled]="disabled"
			aria-label="radiogroup"
			[orientation]="orientation"
			[labelPlacement]="labelPlacement"
			[(ngModel)]="radio"
			(change)="onChange($event)">
			<ibm-radio
				value="Zero"
				[checked]="true">
				Zero
			</ibm-radio>
			<ibm-radio [value]="One">One</ibm-radio>
			<ibm-radio [value]="Two">Two</ibm-radio>
			<ibm-radio [value]="Three">Three</ibm-radio>
			<ibm-radio [value]="Four" [disabled]="true">Four</ibm-radio>
		</ibm-radio-group>
	</fieldset>
	<button (click)="disabled = !disabled">Toggle group disabled</button>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	onChange: {
		control: "Changed!"
	},
	orientation: {
		options: ["horizontal", "vertical"],
		defaultValue: "horizontal",
		control: "radio"
	},
	labelPlacement: {
		options: ["left", "right"],
		defaultValue: "right",
		control: "radio"
	}
};

const SkeletonTemplate: Story<Radio> = (args) => ({
	props: args,
	template: `
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_radio.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
