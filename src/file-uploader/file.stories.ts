/* tslint:disable variable-name */

import { Meta, moduleMetadata } from "@storybook/angular";

import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { FileComponent, FileUploaderModule } from "./";
import { BasicFileStory, CustomFileIconsModule, CustomFileStory } from "./stories";

export default {
	title: "Components/File",
	decorators: [
		moduleMetadata({
			declarations: [BasicFileStory, CustomFileStory],
			imports: [
				ButtonModule,
				CustomFileIconsModule,
				FileUploaderModule,
				IconModule
			]
		})
	],
	args: {
		size: "md"
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		}
	},
	component: FileComponent
} as Meta;

const BasicFileTemplate = (args) => ({
	props: args,
	size: {
		options: ["sm", "md", "lg"],
		control: "radio"
	},
	template: `
        <!--
        app-* components are for demo purposes only.
        You can create your own implementation by using the component source found at:
        https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/basic-file.component.ts
        -->
        <app-basic-file [size]="size"></app-basic-file>
    `
});
export const BasicFile = BasicFileTemplate.bind({});

const CustomFileTemplate = (args) => ({
	props: args,
	size: {
		options: ["sm", "md", "lg"],
		control: "radio"
	},
	template: `
        <!--
        app-* components are for demo purposes only.
        You can create your own implementation by using the component source found at:
        https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/custom-file.component.ts
        -->
        <app-custom-file [size]="size"></app-custom-file>
    `
});
export const CustomFile = CustomFileTemplate.bind({});
