import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "app-button-menu-demo",
	template: `
		<h1 class="p-demo-heading">Button menu</h1>

		<h2 class="p-demo-section">Primary</h2>
		<div style="width: 600px; height: 60px">
			<n-button-menu
			value="Save"
			size="lg"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>

			<n-button-menu
			value="Save"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>

			<n-button-menu
			value="Save"
			size="sm"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>
		</div>

		<h2 class="p-demo-section">Secondary</h2>
		<div style="width: 600px">
			<n-button-menu
			value="Save"
			size="lg"
			type="secondary"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>

			<n-button-menu
			value="Save"
			type="secondary"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>

			<n-button-menu
			value="Save"
			size="sm"
			type="secondary"
			(onClick)="log('Button clicked')">
				<n-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</n-button-menu-item>
				<n-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</n-button-menu-item>
			</n-button-menu>
		</div>

		<h2 class="p-demo-section">Append to body</h2>
		<div class="appendToBody" style="overflow-y: scroll; height: 63px; position: relative; border: solid 1px red; padding: 10px;">
			<div style="height: 100px">
				<n-button-menu
				value="Save"
				appendToBody="true"
				scrollableContainer=".appendToBody"
				size="lg"
				(onClick)="log('Button clicked')">
					<n-button-menu-item (click)="log('Item 1 clicked')">
						Edit
					</n-button-menu-item>
					<n-button-menu-item (click)="log('Item 2 clicked')">
						Delete
					</n-button-menu-item>
				</n-button-menu>
			</div>
		</div>
	`,
})
export class ButtonMenuDemo {
	constructor() {}

	log(stuff) {
		console.log(stuff);
	}
}
