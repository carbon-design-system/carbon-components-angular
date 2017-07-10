import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "combobox-demo",
	template: `
		<h1>Combo box demo</h1>

		<h2>Single select combo box</h2>
		<div style="width: 330px;">
			<n-combo-box
				placeholder="Select or enter"
				[items]="demoItems2">
				<n-dropdown-button>
					<n-dropdown-list></n-dropdown-list>
				</n-dropdown-button>
			</n-combo-box>
		</div>

		<h2>Multi select combo box</h2>
		<div style="width: 330px;">
			<n-combo-box
				placeholder="Select or enter"
				type="multi"
				[items]="demoItems3"
				(submit)="onSubmit($event)">
				<n-dropdown-button>
					<n-dropdown-list></n-dropdown-list>
				</n-dropdown-button>
			</n-combo-box>
		</div>

		<h2>Internal component demos</h2>
		<n-pill-input [pills]="demoItems1" type="multi"></n-pill-input>
		<br>
		<div style="position: relative;">
			<n-dropdown-button></n-dropdown-button>
		</div>
		<br>
		<br>
		<n-pill [item]="{selected: false}">Some text</n-pill>
		<br>
		<div style="position: relative; z-index: 1;">
			<div class="dropdown-wrapper">
				<div class="dropdown-menu open" style="position: relative;">
					<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
				</div>
			</div>
		</div>
		<br>
		<div style="position: relative; z-index: 1;">
			<div class="dropdown-wrapper">
				<div class="dropdown-menu open" style="position: relative;">
					<n-dropdown-list [items]="demoItems1" type="multi"></n-dropdown-list>
				</div>
			</div>
		</div>
	`,
	encapsulation: ViewEncapsulation.None
})
export class ComboboxDemo {
	demoItems1 = [
		{
			content: "Abacus",
			selected: false
		},
		{
			content: "Byte",
			selected: false,
		},
		{
			content: "Computer",
			selected: false
		},
		{
			content: "Digital",
			selected: false
		}
	];
	demoItems2 = Array.from(this.demoItems1, item => Object.assign({}, item));
	demoItems3 = Array.from(this.demoItems1, item => Object.assign({}, item));
	demoItems4 = Array.from(this.demoItems1, item => Object.assign({}, item));

	onSubmit(ev) {
		ev.value.selected = true;
		this.demoItems3 = [...ev.items, ev.value];
	}
}
