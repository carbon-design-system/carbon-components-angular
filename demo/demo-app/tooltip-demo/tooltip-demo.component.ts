import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tooltip-demo",
	template: `
	<h2 class="p-demo-heading h1">Tooltip</h2>

	<ng-template #customTooltip>
		<p class="large-tooltip-number">12,100</p>
		<p class="tooltip-date">7 Sep 2016</p>
	</ng-template>

	<h3 class="p-demo-section h2">On hover</h3>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="right" trigger="mouseenter" tooltip-type="error">Tooltip right</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="top" trigger="mouseenter" tooltip-type="warning">Tooltip top</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="bottom" trigger="mouseenter">Tooltip bottom</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="left" trigger="mouseenter">Tooltip left</button>
	<br><br>

	<h3 class="p-demo-section h2">On click</h3>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="right" tooltip-type="error">Tooltip right</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="top" tooltip-type="warning">Tooltip top</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="bottom">Tooltip bottom</button>
	<button class="btn--primary" nTooltip="I am a tooltip" placement="left">Tooltip left</button>
	<br><br>

	<h3 class="p-demo-section h2">Custom template</h3>
	<button class="btn--primary" [nTooltip]="customTooltip" placement="right" tooltip-type="error">Tooltip right</button>
	<button class="btn--primary" [nTooltip]="customTooltip" placement="top" tooltip-type="warning">Tooltip top</button>
	<button class="btn--primary" [nTooltip]="customTooltip" placement="bottom">Tooltip bottom</button>
	<button class="btn--primary" [nTooltip]="customTooltip" placement="left">Tooltip left</button>
	<br><br>

	<h3 class="p-demo-section h2">Text truncation</h3>
	<p class="ellipsis" nEllipsisTooltip>Text that fits</p>
	<br>
	<p
		class="ellipsis"
		nEllipsisTooltip
		trigger="mouseenter"
		placement="right">Text that is too long to fit and needs a tooltip to display the complete text</p>
	`,
	styleUrls: ["./tooltip-demo.component.scss"]
})

export class TooltipDemo {}
