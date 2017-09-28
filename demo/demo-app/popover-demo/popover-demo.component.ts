import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
	selector: "popover-demo",
	template: `
	<h1>Popover demo</h1>

	<ng-template #customPopover>
		Cool content <br> Another cool content <br><br><br><br><br>
	</ng-template>

	<h3>Basic popover</h3>
	<div>
		Popover left
		<button class="btn--unstyled" [nPopover]="customPopover" title="Popover title" placement="left">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover top
		<button class="btn--unstyled" nPopover="Hello there" title="Popover title" placement="top">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover right
		<button class="btn--unstyled" [nPopover]="customPopover" title="Popover title" placement="right">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover right-bottom
		<button class="btn--unstyled" nPopover="Hello there" title="Popover title" placement="right-bottom">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover left-bottom
		<button class="btn--unstyled" nPopover="Hello there" title="Popover title" placement="left-bottom">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover bottom
		<button class="btn--unstyled" nPopover="Hello there" title="Popover title" placement="bottom">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover auto position
		<button class="btn--unstyled" [nPopover]="customPopover" title="Popover title" placement="right" [autoPosition]="true">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>
	<div>
		Popover right with additional data and a template
		<ng-template #dataPopoverTemplate let-data="popover.data">
			{{data | json}}
		</ng-template>
		<button class="btn--unstyled" [nPopover]="dataPopoverTemplate" title="Popover title" placement="right" [data]="{foo: 'bar'}">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>

	<h3>Popover can be opened or closed manualy</h3>
	Have a popover
	<button class="btn--unstyled" [nPopover]="customPopover" title="Popover title" placement="right" #popover="nPopover">
		<n-icon icon="info" size="16"></n-icon>
	</button>
	<br>
	<button class="btn--primary" (click)="popover.close()">Close above popover</button>
	<button class="btn--primary" (click)="this.open()">Open above popover</button>

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
	<span>
		<button class="btn--unstyled popover-menu-button"
			[nPopoverMenu]="list"
			placement="bottom-left"
			title="Actions">
			<n-icon icon="dotdotdot_vert" size="16"></n-icon>Menu left
		</button>
	</span>
	<span>
		<button class="btn--unstyled popover-menu-button"
			[nPopoverMenu]="list"
			placement="bottom-right"
			title="Actions">
			<n-icon icon="dotdotdot_vert" size="16"></n-icon>Menu right
		</button>
	</span>

	<h3>Popover filter</h3>
	<ng-template #filter>
		<n-checkbox>High</n-checkbox>
		<n-checkbox>Medium</n-checkbox>
		<n-checkbox>Low</n-checkbox>
		<n-checkbox>Danger</n-checkbox>
	</ng-template>
	<ng-template #filterFooter let-popover="popover">
		<button class="btn--primary">Apply</button>
		<button class="btn--secondary" (click)="popover.doClose()">Cancel</button>
	</ng-template>
	<span>
		Filter left
		<button class="btn--unstyled"
			[nPopover]="filter"
			title="Popover filter"
			placement="left"
			[footer]="filterFooter">
			<n-icon icon="filter" size="16"></n-icon>
		</button>
	<span>
		Filter right
		<button class="btn--unstyled"
			[nPopover]="filter"
			title="Popover filter"
			placement="right"
			[footer]="filterFooter">
			<n-icon icon="filter" size="16"></n-icon>
		</button>
	</span>

	<h3>Popover append to body</h3>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		Regular popover
		<button class="btn--unstyled" [nPopover]="customPopover" placement="right" title="Select item">
			<n-icon icon="info" size="16"></n-icon>
		</button>
	</div>

	<br><br>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		Popover with appendToBody = true
		<button class="btn--unstyled"
			[nPopover]="customPopover"
			placement="right"
			title="Select item"
			[appendToBody]="true">
			<n-icon icon="info" size="16"></n-icon>
		</button>
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
