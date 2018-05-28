import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-popover-demo",
	template: `
	<h1 class="p-demo-heading">Popover</h1>

	<ng-template #customPopover>
		Cool content <br> Another cool content <br><br><br><br><br>
	</ng-template>

	<h2 class="p-demo-section">Basic popover</h2>
	<div>
		Popover left
		<button class="btn--icon-link" [nPopover]="customPopover" title="Popover title" placement="left" (onClose)="whenClosed()">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover top
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="top">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover top-left
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="top-left">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover top-right
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="top-right">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover right
		<button class="btn--icon-link" [nPopover]="customPopover" title="Popover title" placement="right">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover right-bottom
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right-bottom">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover left-bottom
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="left-bottom">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover bottom
		<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="bottom">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover auto position
		<button class="btn--icon-link" [nPopover]="customPopover" title="Popover title" placement="right" [autoPosition]="true">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	<div>
		Popover right with additional data and a template
		<ng-template #dataPopoverTemplate let-data="popover.data">
			{{data | json}}
		</ng-template>
		<button class="btn--icon-link" [nPopover]="dataPopoverTemplate" title="Popover title" placement="right" [data]="{foo: 'bar'}">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>

	<h3 class="p-demo-variation">Event triggered popovers</h3>
	Have a popover
	<button class="btn--icon-link" [nPopover]="customPopover" title="Popover title" placement="right" #popover="nPopover">
		<n-icon icon="info" size="sm"></n-icon>
	</button>
	<br>
	<button class="btn--primary" (click)="popover.close()">Close above popover</button>
	<button class="btn--primary" (click)="this.open()">Open above popover</button>

	<ng-template #list>
		<div>
			<section class="list-group">
				<a class="menu_link" tabindex="0" href="#">
					<span class="menu_text">Settings</span>
				</a>
				<a class="menu_link" tabindex="0" href="#">
					<span class="menu_text">Save</span>
				</a>
				<a class="menu_link" tabindex="0" href="#">
					<span class="menu_text">Preferences</span>
				</a>
				<a class="menu_link" tabindex="0" href="#">
					<span class="menu_text">Delete</span>
				</a>
			</section>
		</div>
	</ng-template>

	<h2 class="p-demo-section">Popover menu</h2>
	<span>
		<button class="btn--icon-link popover-menu-button"
			[nPopoverMenu]="list"
			placement="bottom-left"
			title="Actions">
			<n-icon icon="dotdotdot_vert" size="sm"></n-icon>
			Menu left
		</button>
	</span>
	<span>
		<button class="btn--icon-link popover-menu-button"
			[nPopoverMenu]="list"
			placement="bottom-right"
			title="Actions">
			<n-icon icon="dotdotdot_vert" size="sm"></n-icon>
			Menu right
		</button>
	</span>
	<span>
		<button class="btn--icon-link popover-menu-button"
			[nPopoverMenu]="list"
			placement="bottom-left"
			title="Actions"
			wrapperClass="align-to-icon">
			<n-icon icon="dotdotdot_vert" size="sm"></n-icon>
		</button>
	</span>

	<h2 class="p-demo-section">Popover filter</h2>
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
		<button class="btn--icon-link"
			[nPopover]="filter"
			title="Popover filter"
			placement="left"
			[footer]="filterFooter">
			<n-icon icon="filter" size="sm"></n-icon>
		</button>
	<span>
		Filter right
		<button class="btn--icon-link"
			[nPopover]="filter"
			title="Popover filter"
			placement="right"
			[footer]="filterFooter">
			<n-icon icon="filter" size="sm"></n-icon>
		</button>
	</span>

	<h2 class="p-demo-section">Append to body</h2>
	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red; padding: 10px;">
		Popover with appendToBody = true
		<button class="btn--icon-link"
			[nPopover]="customPopover"
			placement="right"
			title="Select item"
			[appendToBody]="true">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</div>
	`,
	styleUrls: ["./popover-demo.component.scss"],
	encapsulation: ViewEncapsulation.None
})

export class PopoverDemo {
	@ViewChild("popover") popover;

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	open() {
		setTimeout( () => {this.popover.open(); }, 1);
	}

	whenClosed() {
		console.log("popover closed!");
	}
}
