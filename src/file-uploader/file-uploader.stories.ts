/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Meta, moduleMetadata } from "@storybook/angular";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { NotificationModule } from "../notification";
import { FileUploader, FileUploaderModule } from "./";
import {
	CustomFileIconsModule,
	DragAndDropStory,
	FileUploaderStory,
	FileUploaderWithCustomFileStory,
	NgModelFileUploaderStory,
	ReactiveFormsStory
} from "./stories";

export default {
	title: "Components/File Uploader",
	decorators: [
		moduleMetadata({
			declarations: [
				FileUploaderStory,
				FileUploaderWithCustomFileStory,
				NgModelFileUploaderStory,
				DragAndDropStory,
				ReactiveFormsStory
			],
			imports: [
				ButtonModule,
				CustomFileIconsModule,
				FileUploaderModule,
				FormsModule,
				IconModule,
				NotificationModule,
				ReactiveFormsModule
			]
		})
	],
	args: {
		title: "Account photo",
		description: "only .jpg and .png files. 500kb max file size.",
		buttonText: "Add files",
		disabled: false,
		multiple: true,
		size: "md",
		buttonType: "primary",
		fileItemSize: "lg"
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		},
		buttonType: {
			options: ["primary", "secondary", "tertiary", "ghost", "danger"],
			control: "select"
		},
		fileItemSize: {
			options: ["sm", "md", "lg"],
			control: "radio"
		}
	},
	component: FileUploader
} as Meta;

const Template = (args) => ({
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
			[fileItemSize]="fileItemSize"
			[disabled]="disabled">
		</app-file-uploader>
	`
});
export const Basic = Template.bind({});

const CustomFile = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader-custom-file.component.ts
		-->
		<app-file-uploader-with-custom-file
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[buttonType]="buttonType"
			[accept]="accept"
			[multiple]="multiple"
			[size]="size"
			[fileItemSize]="fileItemSize"
			[disabled]="disabled">
		</app-file-uploader-with-custom-file>
	`
});
export const UploaderWithCustomFile = CustomFile.bind({});
UploaderWithCustomFile.argTypes = {
	size: {
		control: false
	},
	buttonType: {
		control: false
	}
};

const DragAndDropTemplate = (args) => ({
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
			[fileItemSize]="fileItemSize"
			[disabled]="disabled">
		</app-drop-file-uploader>
	`
});
export const DragAndDrop = DragAndDropTemplate.bind({});
DragAndDrop.args = {
	dropText: "Drag and drop files here or upload",
	accept: [".png", "image/jpeg"]
};
DragAndDrop.argTypes = {
	size: {
		control: false
	},
	buttonType: {
		control: false
	}
};

const ModelTemplate = (args) => ({
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
			[fileItemSize]="fileItemSize"
			[disabled]="disabled">
		</app-ngmodel-file-uploader>
	`
});
export const NgModel = ModelTemplate.bind({});
NgModel.storyName = "Using NgModel";
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const ReactiveTemplate = (args) => ({
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
			[fileItemSize]="fileItemSize"
			[disabled]="disabled">
		</app-reactive-forms>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});
NgModel.args = {
	accept: [".png", ".jpeg"]
};

const SkeletonTemplate = (args) => ({
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
