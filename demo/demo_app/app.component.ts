import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../src/glyphicon/glyphicon.module";


@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	constructor () {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}
}
