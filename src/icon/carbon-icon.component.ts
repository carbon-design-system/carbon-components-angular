import { Component, Input, OnInit } from "@angular/core";
import * as icons from "carbon-icons";

@Component({
	selector: "ibm-carbon-icon",
	template: `
		<svg
			class="icon"
			[attr.fill]="fillColor"
			[attr.height]="icon?.height"
			[attr.width]="icon?.width"
			[attr.viewBox]="icon?.viewBox">
			<ng-container *ngFor="let iconPath of icon.svgData.paths">
			<path [attr.d]="iconPath.d"></path>
			</ng-container>
		</svg>
  `
})
export class CarbonIcon implements OnInit {
	/**
	* This string refers to the name of the icon.
	*/
	@Input() name: string;

	/**
	* This string refers to the color of the icon.
	*/
	@Input() fillColor: string;

	icon: any;

	ngOnInit() {
		this.createIcon();
	}

	/**
	* This method fetches the icon and its data
	*/
	createIcon() {
		this.icon = icons.default.find((icon) => {
			return icon.id === `icon--${this.name}`;
		});
	}
}
