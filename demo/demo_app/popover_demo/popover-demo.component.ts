import { Component, OnInit } from "@angular/core";

@Component({
	selector: "popover-demo",
	template: `
	<h1>Popover Demo</h1>

	<ng-template #customPopover>
		<div style="display: inline-block; width: 20px; height: 20px">
			<cdl-glyphicon icon="Alert" size="md"></cdl-glyphicon>
		</div>
		Cool content <br/> another cool content <br/><br/><br/><br/><br/>
	</ng-template>

	<h3>Basic Popover</h3>
	<button class="btn" cdlPopover="Hello There" placement="bottom">Pop over Bottom</button>
	<button class="btn" [cdlPopover]="customPopover" placement="left">Pop over Left</button>
	<button class="btn" cdlPopover="Hello There" placement="top">Pop over Top</button>
	<button class="btn" [cdlPopover]="customPopover" placement="right">Pop over right</button>
	<button class="btn" [cdlPopover]="customPopover" placement="auto">Pop over auto position</button>

	<h3>Basic Popover on hover</h3>
	<button class="btn" cdlPopover="Hello There" placement="bottom" trigger="mouseenter">Pop over Bottom</button>
	<button class="btn" [cdlPopover]="customPopover" placement="left" trigger="mouseenter">Pop over Left</button>
	<button class="btn" cdlPopover="Hello There" placement="top" trigger="mouseenter">Pop over Top</button>
	<button class="btn" [cdlPopover]="customPopover" placement="right" trigger="mouseenter">Pop over right</button>

	<h3>Popover can be close manualy</h3>
	<button class="btn" [cdlPopover]="customPopover" placement="right" #popOver="cdlPopover">Pop over right</button>
	<br/>
	<button class="btn" (click)="popOver.close()">Close above popover</button>

	<h3>Popover with list view and some extrap gap in between</h3>
	<ng-template #list>
		<div>
			<cdl-list-view [items]="demoItems" (select)="onSelect($event)"></cdl-list-view>
		</div>
	</ng-template>

	<button class="btn" [cdlPopover]="list" wrapperClass="popover-content-fullwidth" placement="right" title="Select item" [gap]="30">
		Pop over with list and some extra space
	</button>

	<button class="btn" [cdlPopover]="list" placement="right" title="Select item">Pop over with list</button>

	<h3>Popover append to body</h3>

	<div style="width: 400px; overflow: hidden; position: relative; border: solid 1px red">
		<button class="btn" [cdlPopover]="list" placement="right" title="Select item">Regular Pop over</button>
	</div>

	<br/><br/>

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
	`
})

export class PopoverDemo {
	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			disabled: true
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

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
