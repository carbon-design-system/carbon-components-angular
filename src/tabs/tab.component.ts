import { Component, OnInit, Input, ContentChild, TemplateRef } from "@angular/core";

let nextId = 0;

@Component({
	selector: "cdl-tab",
	template: `
		<div [hidden]="!active">
			<ng-content></ng-content>
		</div>
	 `,
	styleUrls: ["./tabs.component.scss"]
})
export class CdlTab implements OnInit {
	@Input() heading: string | TemplateRef<any>;
	@Input() active: boolean;
	@Input() disabled: boolean;
	@Input() id: string = `cdl-tab-${nextId++}`;
	headingIsTemplate = false;

	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}
}
