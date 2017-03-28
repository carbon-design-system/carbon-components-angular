import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../../src/glyphicon/glyphicon.module";

@Component({
	selector: "glyphicon-demo",
	template: `
	<h1>Glyphicon Demo</h1>

	<cdl-glyphicon icon="Alert" size="xs"></cdl-glyphicon>
	<cdl-glyphicon icon="Alert" size="sm"></cdl-glyphicon>
	<cdl-glyphicon icon="Alert" size="md"></cdl-glyphicon>
	<cdl-glyphicon icon="Alert" size="lg"></cdl-glyphicon>
	`
})
export class GlyphiconDemo {
	constructor () {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}
}
