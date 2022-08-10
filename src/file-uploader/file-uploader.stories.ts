/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { FileUploaderModule, FileUploader } from "./";
import { NotificationModule } from "../notification";
import { ButtonModule } from "../button";
import {
	FileUploaderStory,
	NgModelFileUploaderStory,
	DragAndDropStory,
	ReactiveFormsStory
} from "./stories";

export default {
	title: "Components/File Uploader",
	decorators: [
		moduleMetadata({
			declarations: [
				FileUploaderStory,
				NgModelFileUploaderStory,
				DragAndDropStory,
				ReactiveFormsStory
			],
			imports: [
				FileUploaderModule,
				FormsModule,
				ReactiveFormsModule,
				NotificationModule,
				ButtonModule
			]
		})
	],
	args: {
		title: "Account photo",
		description: "only .jpg and .png files. 500kb max file size.",
		buttonText: "Add files",
		disabled: false,
		multiple: true
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: "select"
		},
		buttonType: {
			options: ["primary", "secondary", "tertiary", "ghost", "danger"],
			defaultValue: "primary",
			control: "select"
		}
	},
	component: FileUploader
} as Meta;

const Template: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader.component.ts
		-->
		<app-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-file-uploader>
	`
});
export const Basic = Template.bind({});

const DragAndDropTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/drag-drop.component.ts
		-->
		<app-drop-file-uploader
			[title]="title"
			[description]="description"
			[accept]="accept"
			[multiple]="multiple"
			[dropText]="dropText"
			drop="true"
			[disabled]="disabled">
		</app-drop-file-uploader>
	`
});
export const DragAndDrop = DragAndDropTemplate.bind({});
DragAndDrop.args = {
	dropText: "Drag and drop files here or upload",
	accept: [".png", "image/jpeg"]
};

const ModelTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader-form.component.ts
		-->
		<app-ngmodel-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-ngmodel-file-uploader>
	`
});
export const NgModel = ModelTemplate.bind({});
NgModel.storyName = "Using NgModel";
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const ReactiveTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader-reactive-form.component.ts
		-->
		<app-reactive-forms
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[disabled]="disabled">
		</app-reactive-forms>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const SkeletonTemplate: Story<FileUploader> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader.component.ts
		-->
		<app-file-uploader skeleton="true"></app-file-uploader>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
