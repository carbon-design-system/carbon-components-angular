import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "combobox-demo",
	template: `
		<h1>Combobox demo</h1>

		<h2>Single select combobox</h2>
		<div style="width: 330px;">
			<cdl-combo-box
				placeholder="Select or enter"
				[items]="demoItems2">
				<cdl-dropdown-button>
					<cdl-dropdown-list></cdl-dropdown-list>
				</cdl-dropdown-button>
			</cdl-combo-box>
		</div>

		<h2>Multi select combobox</h2>
		<div style="width: 330px;">
			<cdl-combo-box
				placeholder="Select or enter"
				type="multi"
				[items]="demoItems3"
				(submit)="onSubmit($event)">
				<cdl-dropdown-button>
					<cdl-dropdown-list></cdl-dropdown-list>
				</cdl-dropdown-button>
			</cdl-combo-box>
		</div>

		<h2>Internal component demos</h2>
		<cdl-pill-input [pills]="demoItems1" type="multi"></cdl-pill-input>
		<br>
		<cdl-dropdown-button></cdl-dropdown-button>
		<br>
		<br>
		<cdl-pill [item]="{selected: false}">Some text</cdl-pill>
		<br>
		<div style="position: relative;">
			<div class="dropdown-wrapper">
				<div class="dropdown-menu open" style="position: relative;">
					<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
				</div>
			</div>
		</div>
		<br>
		<div style="position: relative;">
			<div class="dropdown-wrapper">
				<div class="dropdown-menu open" style="position: relative;">
					<cdl-dropdown-list [items]="demoItems1" type="multi"></cdl-dropdown-list>
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
