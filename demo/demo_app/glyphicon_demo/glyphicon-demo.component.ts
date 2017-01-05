import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../../src/glyphicon/glyphicon.module";

@Component({
	selector: "glyphicon-demo",
	templateUrl: "./glyphicon-demo.component.html",
	// styleUrls: ["./core-demo.component.css"]
})
export class GlyphiconDemo {
	constructor () {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}
}
