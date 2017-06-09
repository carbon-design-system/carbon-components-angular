import { Component, OnInit, Input, ContentChild, TemplateRef } from "@angular/core";

let nextId = 0;

@Component({
	selector: "cdl-tab",
	template: `
		<div
			role="tabpanel"
			*ngIf="active"
			[attr.aria-labelledby]="id + '-header'">
			<ng-content></ng-content>
		</div>
	 `,
	styleUrls: ["./tabs.component.scss"],
	host: {
		"[attr.id]": "id"
	}
})
export class Tab implements OnInit {
	@Input() heading: string | TemplateRef<any>;
	@Input() active = false;
	@Input() disabled = false;
	// do we need id's?
	@Input() id = `cdl-tab-${nextId++}`;
	headingIsTemplate = false;

	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}
}
