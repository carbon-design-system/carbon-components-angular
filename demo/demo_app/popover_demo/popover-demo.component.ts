import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
	selector: "popover-demo",
	template: `
	<h1>Popover Demo</h1>

	<ng-template #customPopover>
		Cool content <br> Another cool content <br><br><br><br><br>
	</ng-template>

	<h3>Basic popover</h3>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="left">Popover left</button>
	<button class="btn" cdlPopover="Hello there" title="Popover title" placement="top">Popover top</button>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="right">Popover right</button>
	<button class="btn" cdlPopover="Hello there" title="Popover title" placement="bottom">Popover bottom</button>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="auto">Popover auto position</button>

	<h3>Popover can be opened or closed manualy</h3>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="right" #popover="cdlPopover">Popover right</button>
	<br>
	<button class="btn" (click)="popover.close()">Close above popover</button>
	<button class="btn" (click)="this.open()">Open above popover</button>

	<ng-template #list>
		<div>
			<ul class="list-view">
				<li tabindex="0"><div><span>Settings</span></div></li>
				<li tabindex="0"><div><span>Save</span></div></li>
				<li tabindex="0"><div><span>Preferences</span></div></li>
				<li tabindex="0"><div><span>Delete</span></div></li>
			</ul>
		</div>
	</ng-template>

	<h3>Popover menu</h3>
	<button class="popover-menu-button"
		[cdlPopover]="list"
		placement="bottom-right"
		wrapperClass="popover-content-fullwidth"
		popoverMenu="true"
		title="Actions"
		[gap]="13">
		<cdl-glyphicon icon="dotdotdot_vert" size="16"></cdl-glyphicon>Menu
	</button>

	<h3>Popover filter</h3>
	<ng-template #filter>
		<div class="filter-options">
			<cdl-checkbox>High</cdl-checkbox>
			<cdl-checkbox>Medium</cdl-checkbox>
			<cdl-checkbox>Low</cdl-checkbox>
			<cdl-checkbox>Danger</cdl-checkbox>
		</div>
		<div class="filter-options-buttons">
			<button class="btn">Apply</button>
			<button class="btn btn-secondary">Cancel</button>
		</div>
	</ng-template>
	<button class="btn"
		[cdlPopover]="filter"
		title="Popover filter"
		placement="left"
		wrapperClass="popover-content-filter"
		popoverFilter="true">
		Filter left
	</button>

	<button class="btn"
		[cdlPopover]="filter"
		title="Popover filter"
		placement="right"
		wrapperClass="popover-content-filter"
		popoverFilter="true">
		Filter right
	</button>

	<h3>Popover append to body</h3>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		<button class="btn" [cdlPopover]="customPopover" placement="right" title="Select item">Regular popover</button>
	</div>

	<br><br>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		<button class="btn"
			[cdlPopover]="customPopover"
			placement="right"
			title="Select item"
			[appendToBody]="true">
			Popover with appendToBody = true
		</button>
	</div>

	<h3>Popover flower</h3>
	<p>Developers just wanna have fun.</p>
	<button class="btn" (click)="toggleFlower()">Show</button>

	<div class="flower-wrapper" #flower>
		<div class="flower-center" cdlPopover="Loves me!" title="Popover title" placement="top" #petal1="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" title="Popover title" placement="top-right" #petal2="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" title="Popover title" placement="right" #petal3="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" title="Popover title" placement="bottom-right" #petal4="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" title="Popover title" placement="bottom" #petal5="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" title="Popover title" placement="bottom-left" #petal6="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" title="Popover title" placement="left" #petal7="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" title="Popover title" placement="top-left" #petal8="cdlPopover"></div>
	</div>
	`,
	styleUrls: ["./popover-demo.component.scss"]
})

export class PopoverDemo {
	@ViewChild("popover") popover;
	@ViewChild("flower") flower;
	@ViewChild("petal1") petal1;
	@ViewChild("petal2") petal2;
	@ViewChild("petal3") petal3;
	@ViewChild("petal4") petal4;
	@ViewChild("petal5") petal5;
	@ViewChild("petal6") petal6;
	@ViewChild("petal7") petal7;
	@ViewChild("petal8") petal8;

	private open() {
		setTimeout( () => {this.popover.open(); }, 1);
	}

	private toggleFlower() {
		setTimeout( () => {
			this.petal1.toggle();
			this.petal2.toggle();
			this.petal3.toggle();
			this.petal4.toggle();
			this.petal5.toggle();
			this.petal6.toggle();
			this.petal7.toggle();
			this.petal8.toggle();
		}, 1);
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
