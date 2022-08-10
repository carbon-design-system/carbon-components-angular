import { Component, OnInit } from "@angular/core";
import { Accessibility16 } from "@carbon/icons";

import { IconService } from "../";

@Component({
	selector: "app-demo-icon",
	template: `
		<!-- this just sets up the environment for the demo -->
	`
})
export class IconDemo implements OnInit {
	constructor(protected iconService: IconService) { }

	ngOnInit() {
		this.iconService.register(Accessibility16);
	}
}
