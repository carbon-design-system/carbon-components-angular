import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tooltip-demo",
	template: `
	<h1>Tooltip</h1>
	<ng-template #customTooltip>
		<p class="large-tooltip-number">12,100</p>
		<p class="tooltip-date">7 Sep 2016</p>
	</ng-template>

	<h3>Tooltip hover</h3>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="error">Tooltip right</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="top" trigger="mouseenter" type="warning">Tooltip top</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="bottom" trigger="mouseenter">Tooltip bottom</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="left" trigger="mouseenter">Tooltip left</button>
	</span>

	<br><br><br>

	<h3>Tooltip click</h3>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="right" type="error">Tooltip right</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="top" type="warning">Tooltip top</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="bottom">Tooltip bottom</button>
	</span>
	<span>
		<button class="btn--primary" nTooltip="I am a tooltip" placement="left">Tooltip left</button>
	</span>

	<br><br><br>

	<h3>Tooltip click with custom template</h3>
	<span>
		<button class="btn--primary" [nTooltip]="customTooltip" placement="right" type="error">Tooltip right</button>
	</span>
	<span>
		<button class="btn--primary" [nTooltip]="customTooltip" placement="top" type="warning">Tooltip top</button>
	</span>
	<span>
		<button class="btn--primary" [nTooltip]="customTooltip" placement="bottom">Tooltip bottom</button>
	</span>
	<span>
		<button class="btn--primary" [nTooltip]="customTooltip" placement="left">Tooltip left</button>
	</span>

	<br><br><br>

	<h3>Tooltip for ellipsis</h3>

	<div class="ellipsis" nEllipsisTooltip>Text that fits</div>
	<br>
	<div
		class="ellipsis"
		nEllipsisTooltip
		trigger="mouseenter"
		placement="right">Text that is too long to fit and needs a tooltip to display the complete text</div>
	`,
	styleUrls: ["./tooltip-demo.component.scss"]
})

export class TooltipDemo {}
