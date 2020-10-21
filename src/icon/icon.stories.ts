import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	text,
	boolean,
	select,
	number
} from "@storybook/addon-knobs/angular";

import { IconModule } from "./icon.module";
import { IconService } from "./icon.service";
import { Component, OnInit } from "@angular/core";

import { Accessibility16 } from "@carbon/icons";

import * as Icons from "@carbon/icons";

@Component({
	selector: "app-demo-icon",
	template: `
		<!-- this just sets up the environment for the demo -->
	`
})
class IconDemo implements OnInit {
	constructor(protected iconService: IconService) {}

	ngOnInit() {
		this.iconService.register(Accessibility16);
	}
}

@Component({
	selector: "app-demo-many-icon",
	template: `
		<table>
			<tr *ngFor="let group of groupedIcons">
				<td *ngFor="let icon of group">
					<svg [ibmIcon]="icon.name" [size]="icon.size"></svg>
					<div>name: <code>{{icon.name}}</code></div>
					<div>size: <code>{{icon.size}}</code></div>
				</td>
			</tr>
		</table>
	`,
	styles: [
		`
			td {
				white-space: nowrap;
				padding: 10px 0;
			}
		`
	]
})
class ManyIconDemo implements OnInit {
	groupedIcons = [];

	constructor(protected iconService: IconService) { }

	ngOnInit() {
		const iconMap = new Map();
		for (const [key, descriptor] of Object.entries(Icons)) {
			this.iconService.register(descriptor as object);
			if (!iconMap.has(descriptor["name"])) {
				iconMap.set(descriptor["name"], []);
			}
			iconMap.get(descriptor["name"]).push(descriptor);
		}
		this.groupedIcons = Array.from(iconMap.values());
	}
}

storiesOf("Components|Icon", module).addDecorator(
	moduleMetadata({
		declarations: [IconDemo, ManyIconDemo],
		imports: [IconModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-demo-icon></app-demo-icon>
			<svg ibmIcon="accessibility" size="16" title="Hello!"></svg>
		`,
		props: {

		}
	}))
	.add("With non-svg root element", () => ({
		template: `
			<app-demo-icon></app-demo-icon>
			<div ibmIcon="accessibility" size="16"></div>
		`,
		props: {

		}
	}))
	.add("All icons", () => ({
		template: `
			<app-demo-many-icon></app-demo-many-icon>
		`
	}));
