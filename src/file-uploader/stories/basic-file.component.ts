import { Component, Input } from "@angular/core";

@Component({
	selector: "app-basic-file",
	template: `<cds-file [size]="size" [fileItem]="fileItem"></cds-file>`,
})
export class BasicFileStory {
	@Input() size = "sm";

	fileItem = {
		file: new File(["foo"], "Lorem ipsum dolor sit amet.txt", { type: "text/plain" }),
		state: "edit",
	};
}
