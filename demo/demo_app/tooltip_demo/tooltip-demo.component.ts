import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tooltip-demo",
	template: `
	<h1>Tooltip</h1>
	<ng-template #customTooltip>
		<div style="display: inline-block; width: 20px; height: 20px">
			<cdl-glyphicon icon="Alert" size="md"></cdl-glyphicon>
		</div>
		Cool content <br/> another cool content
	</ng-template>

	<h3>Tooltip hover</h3>
	<button class="btn" cdlTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip right</button>
	<button class="btn" cdlTooltip="I am a tooltip" trigger="mouseenter" type="warning">Tooltip Top</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="bottom" trigger="mouseenter">Tooltip Bottom</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="left" trigger="mouseenter">Tooltip Left</button>

	<br/><br/><br/>

	<h3>Tooltip click</h3>
	<button class="btn" cdlTooltip="I am a tooltip" placement="right"  type="danger">Tooltip right</button>
	<button class="btn" cdlTooltip="I am a tooltip" type="warning">Tooltip Top</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="bottom">Tooltip Bottom</button>
	<button class="btn" cdlTooltip="I am a tooltip" placement="left">Tooltip Left</button>

	<br/><br/><br/>

	<h3>Tooltip click with custom template</h3>
	<button class="btn" [cdlTooltip]="customTooltip" placement="right" type="danger">Tooltip right</button>
	<button class="btn" [cdlTooltip]="customTooltip" type="warning">Tooltip Top</button>
	<button class="btn" [cdlTooltip]="customTooltip" placement="bottom">Tooltip Bottom</button>
	<button class="btn" [cdlTooltip]="customTooltip" placement="left">Tooltip Left</button>


	<br/><br/><br/>
	<h3>Tooltip for ellipsis</h3>

	<div class="ellipsis" cdlEllipsisTooltip>Tooltip for ellipsis</div>
	<br/>
	<div class="ellipsis" cdlEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
	`,
	styleUrls: ["./tooltip-demo.component.scss"]
})

export class TooltipDemo {}
