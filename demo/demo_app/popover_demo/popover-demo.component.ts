import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
	selector: "popover-demo",
	template: `
	<h1>Popover Demo</h1>

	<ng-template #customPopover>
		Cool content <br> another cool content <br><br><br><br><br>
	</ng-template>

	<h3>Basic Popover</h3>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="left">Pop over Left</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="top-left">Pop over Top Left</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="top">Pop over Top</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="top-right">Pop over Top Right</button>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="right">Pop over right</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="bottom-left">Pop over Bottom Left</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="bottom">Pop over Bottom</button>
	<button class="btn" cdlPopover="Hello There" title="Popover title" placement="bottom-right">Pop over Bottom Right</button>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="auto">Pop over auto position</button>

	<h3>Popover can be opened or closed manualy</h3>
	<button class="btn" [cdlPopover]="customPopover" title="Popover title" placement="right" #popOver="cdlPopover">Pop over right</button>
	<br>
	<button class="btn" (click)="popOver.close()">Close above popover</button>
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

	<h3>Popover Menu</h3>
	<button class="popover-menu-button"
		[cdlPopover]="list"
		placement="bottom-right"
		wrapperClass="popover-content-fullwidth"
		popoverMenu="true"
		title="Actions"
		[gap]="13">
		<cdl-glyphicon icon="dotdotdot_vert" size="16"></cdl-glyphicon>Menu
	</button>

	<h3>Popover Filter</h3>
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
		Filter Left
	</button>

	<button class="btn"
		[cdlPopover]="filter"
		title="Popover filter"
		placement="right"
		wrapperClass="popover-content-filter"
		popoverFilter="true">
		Filter Right
	</button>

	<h3>Popover append to body</h3>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		<button class="btn" [cdlPopover]="list" placement="right" title="Select item">Regular Pop over</button>
	</div>

	<br><br>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		<button class="btn"
			[cdlPopover]="list"
			wrapperClass="popover-content-fullwidth"
			placement="right"
			title="Select item"
			[appendToBody]="true">
			Pop over with appendToBody = true
		</button>
	</div>

	<h3>Popover flower</h3>
	<p>Developers just wanna have fun.</p>
	<button class="btn" (click)="toggleFlower()">Show</button>

	<div class="flower-wrapper" #flower>
		<div class="flower-center" cdlPopover="Loves me!" placement="top" #petal1="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" placement="top-right" #petal2="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" placement="right" #petal3="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" placement="bottom-right" #petal4="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" placement="bottom" #petal5="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" placement="bottom-left" #petal6="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me!" placement="left" #petal7="cdlPopover"></div>
		<div class="flower-center" cdlPopover="Loves me not!" placement="top-left" #petal8="cdlPopover"></div>
	</div>
	`,
	styleUrls: ["./popover-demo.component.scss"]
})

export class PopoverDemo {
	@ViewChild("popOver") popOver;
	@ViewChild("flower") flower;
	@ViewChild("petal1") petal1;
	@ViewChild("petal2") petal2;
	@ViewChild("petal3") petal3;
	@ViewChild("petal4") petal4;
	@ViewChild("petal5") petal5;
	@ViewChild("petal6") petal6;
	@ViewChild("petal7") petal7;
	@ViewChild("petal8") petal8;

	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false
		},
		{
			content: "item three",
			selected: false
		},
		{
			content: "item four",
			selected: false
		}
	];

	private demoItems1 = Array.from(this.demoItems, this.clone);

	private clone (el) {
		return Object.assign({}, el);
	}

	private open() {
		setTimeout( () => {this.popOver.open(); }, 1);
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
