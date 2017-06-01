import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tooltip-demo",
	template: `
	<h1>Tooltip</h1>
	<ng-template #customTooltip>
		<p class="large-tooltip-number">12.1k</p>
		<p class="tooltip-date">7 Sep 2016</p>
	</ng-template>

	<h3>Tooltip hover</h3>
	<button class="btn" cdlTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip right</button>
	<button class="btn" cdlTooltip="I am a tooltip" trigger="mouseenter" type="warning">Tooltip top</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="bottom" trigger="mouseenter">Tooltip bottom</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="left" trigger="mouseenter">Tooltip left</button>

	<br><br><br>

	<h3>Tooltip click</h3>
	<button class="btn" cdlTooltip="I am a tooltip" placement="right"  type="danger">Tooltip right</button>
	<button class="btn" cdlTooltip="I am a tooltip" type="warning">Tooltip top</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="bottom">Tooltip bottom</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="left">Tooltip left</button>

	<br><br><br>

	<h3>Tooltip click with custom template</h3>
	<button class="btn" [cdlTooltip]="customTooltip" placement="right" type="danger">Tooltip right</button>
	<button class="btn" [cdlTooltip]="customTooltip" type="warning">Tooltip top</button>
	<button class="btn" [cdlTooltip]="customTooltip" placement="bottom">Tooltip bottom</button>
	<button class="btn" [cdlTooltip]="customTooltip" placement="left">Tooltip left</button>


	<br><br><br>
	<h3>Tooltip for ellipsis</h3>

	<div class="ellipsis" cdlEllipsisTooltip>Tooltip for ellipsis</div>
	<br>
	<div class="ellipsis" cdlEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long.</div>
	`,
	styleUrls: ["./tooltip-demo.component.scss"]
})

export class TooltipDemo {}
