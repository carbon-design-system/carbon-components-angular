import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "combobox-demo",
	template: `
		<h1>Combobox demo</h1>
		<cdl-pill-input [pills]="demoItems2" type="multi"></cdl-pill-input>
		<br>
		<cdl-dropdown-button></cdl-dropdown-button>
		<br>
		<br>
		<cdl-pill [item]="{selected: false}">some text</cdl-pill>
		<br>
		<div style="position: relative; height: 120px;">
			<div class="dropdown-wrapper">
				<div class="dropdown-menu open" style="position: relative;">
					<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
				</div>
			</div>
		</div>
		<br>
		<div style="width: 330px;">
			<cdl-combo-box placeholder="Select one">
				<cdl-dropdown-button>
					<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
				</cdl-dropdown-button>
			</cdl-combo-box>
		</div>
		<br>
		<div style="width: 330px;">
			<cdl-combo-box placeholder="Select many" type="multi">
				<cdl-dropdown-button>
					<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
				</cdl-dropdown-button>
			</cdl-combo-box>
		</div>
		<br>
		<cdl-combo-box placeholder="Select">
			<cdl-dropdown-button>
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown-button>
		</cdl-combo-box>
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
			content: "Cathode",
			selected: false
		},
		{
			content: "Digital",
			selected: false
		}
	];

	demoItems2 = [
		{
			content: "Abacus",
			selected: true
		},
		{
			content: "Byte",
			selected: true,
		},
		{
			content: "Cathode",
			selected: true
		},
		{
			content: "Digital",
			selected: true
		}
	];

}
