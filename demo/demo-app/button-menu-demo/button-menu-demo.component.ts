import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "app-button-menu-demo",
	template: `
		<h1 class="p-demo-heading">Button menu</h1>

		<h2 class="p-demo-section">Primary</h2>
		<div style="width: 600px; height: 60px">
			<ibm-button-menu
			value="Save"
			size="lg"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>

			<ibm-button-menu
			value="Save"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>

			<ibm-button-menu
			value="Save"
			size="sm"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>
		</div>

		<h2 class="p-demo-section">Secondary</h2>
		<div style="width: 600px">
			<ibm-button-menu
			value="Save"
			size="lg"
			type="secondary"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>

			<ibm-button-menu
			value="Save"
			type="secondary"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>

			<ibm-button-menu
			value="Save"
			size="sm"
			type="secondary"
			(onClick)="log('Button clicked')">
				<ibm-button-menu-item (click)="log('Item 1 clicked')">
					Edit
				</ibm-button-menu-item>
				<ibm-button-menu-item (click)="log('Item 2 clicked')">
					Delete
				</ibm-button-menu-item>
			</ibm-button-menu>
		</div>

		<h2 class="p-demo-section">Append to body</h2>
		<div class="appendToBody" style="overflow-y: scroll; height: 63px; position: relative; border: solid 1px red; padding: 10px;">
			<div style="height: 100px">
				<ibm-button-menu
				value="Save"
				appendToBody="true"
				scrollableContainer=".appendToBody"
				size="lg"
				(onClick)="log('Button clicked')">
					<ibm-button-menu-item (click)="log('Item 1 clicked')">
						Edit
					</ibm-button-menu-item>
					<ibm-button-menu-item (click)="log('Item 2 clicked')">
						Delete
					</ibm-button-menu-item>
				</ibm-button-menu>
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
