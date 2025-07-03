import { Component, OnInit } from "@angular/core";
import * as Icons from "@carbon/icons";

import { IconService, ICON_SERVICE_PROVIDER } from "../";

@Component({
	selector: "app-demo-many-icon",
	template: `
		<table>
			@for (group of groupedIcons; track group) {
				<tr>
					@for (icon of group; track icon) {
						<td>
							<svg [cdsIcon]="icon.name" [size]="icon.size"></svg>
							<div>name: <code>{{icon.name}}</code></div>
							<div>size: <code>{{icon.size}}</code></div>
						</td>
					}
				</tr>
			}
		</table>
	`,
	styles: [
		`
			td {
				white-space: nowrap;
				padding: 10px 0;
			}
		`
	],
	providers: [ICON_SERVICE_PROVIDER]
})
export class ManyIconDemo implements OnInit {
	groupedIcons: any = [];

	constructor(protected iconService: IconService) { }

	ngOnInit() {
		const iconMap = new Map();
		for (const descriptor of Object.values(Icons)) {
			this.iconService.register(descriptor as any);
			if (typeof descriptor === "object" && descriptor) {
				if (!iconMap.has(descriptor["name"])) {
					iconMap.set(descriptor["name"], []);
				}
				iconMap.get(descriptor["name"]).push(descriptor);
			}
		}
		// Render after a delay to prevent page from freezing
		setTimeout(() => {
			this.groupedIcons = Array.from(iconMap.values());
		}, 1000);
	}
}
