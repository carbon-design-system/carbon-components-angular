import { Component, OnInit, Input, ContentChild, TemplateRef } from "@angular/core";

let nextId = 0;

@Component({
	selector: "cdl-tab",
	template: `
		<div *ngIf="active">
			<ng-content></ng-content>
		</div>
	 `,
	styleUrls: ["./tabs.component.scss"]
})
export class Tab implements OnInit {
	@Input() heading: string | TemplateRef<any>;
	@Input() active: boolean = false;
	@Input() disabled: boolean = false;
	// do we need id's?
	@Input() id: string = `cdl-tab-${nextId++}`;
	headingIsTemplate = false;

	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}
}
