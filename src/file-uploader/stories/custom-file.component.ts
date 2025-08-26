import { Component, Input } from "@angular/core";

@Component({
	selector: "app-custom-file",
	template: `
		<cds-file
			[size]="size"
			[fileItem]="fileItem"
			[nameTpl]="nameTpl"
			[actionsTpl]="actionsTpl"
		>
		</cds-file>

		<ng-template #nameTpl let-fileItem>
			<a href="#" cdsLink>{{ fileItem.file.name }}</a>
		</ng-template>

		<ng-template #actionsTpl>
			<button
				ibmButton="ghost"
				iconOnly="true"
				aria-label="View"
				[size]="size"
			>
				<svg ibmIcon="view" size="16"></svg>
			</button>
			<button
				ibmButton="ghost"
				iconOnly="true"
				aria-label="Download"
				[size]="size"
			>
				<svg ibmIcon="download" size="16"></svg>
			</button>
		</ng-template>
	`,
	styles: [],
})
export class CustomFileStory {
	@Input() size = "sm";

	fileItem = {
		file: new File(["foo"], "Lorem ipsum dolor sit amet.txt", {
			type: "text/plain",
		}),
		state: "edit",
	};
}
