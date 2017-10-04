import { Component } from "@angular/core";
import { chartConstant } from "./chart-demo.constant";

@Component({
	selector: "chart-demo",
	template: `
	<h1>Chart</h1>
	<h2>Bars</h2>
	<code>options.type='bars'</code>
	<p>Bar chart in a resizable container.</p>
	<code>options.containerResizable=true</code>
	<div class="resizable">
		<n-chart
			[data]="chartConstant.data"
			[option]="barOption">
		</n-chart>
	</div>

	<h2>Stacked Bars</h2>
	<code>options.type='stackedBars'</code>
	<n-chart
		[data]="chartConstant.data"
		[option]="stackedBarsOption">
	</n-chart>

	<h2>Lines</h2>
	<code>options.type='lines'</code>
	<n-chart
		[data]="chartConstant.data"
		[option]="linesOption">
	</n-chart>

	<h2>Double Axis</h2>
	<code>options.type='doubleAxis'<br></code>
	<p>Y value formatters can be added to options as functions for each metric.</p>
	<code>
		options.yFormatter: {{ '{' }} <br>
		&nbsp;&nbsp;"Click rate"(value) {{ '{' }} <br>
		&nbsp;&nbsp;&nbsp;&nbsp;return value + "%" <br>
		&nbsp;&nbsp;{{ '}' }} <br>
		{{ '}' }}
	</code>
	<n-chart
		[data]="chartConstant.doubleAxisData"
		[option]="doubleAxisOption">
	</n-chart>

	<h2>Combo</h2>
	<code>options.type='combo'</code>
	<n-chart
		[data]="chartConstant.longData"
		[option]="comboOption">
	</n-chart>
	`,
	styles: [`
		:host {
			width: 100%;
			height: 100%;
		}
		:host p {
			margin: 15px 0;
		}
		n-chart {
			width: 80%;
			height: 600px;
			margin-bottom: 20px;
		}
		.resizable {
			width: 80%;
			height: 600px;
			overflow: auto;
			resize: both;
			border: 1px solid #ECEEEF;
			padding: 10px;
			margin-bottom: 20px;
		}
		.resizable n-chart {
			width: 100%;
			height: 100%;
		}
	`]
})

export class ChartDemo {
	chartConstant = chartConstant;
	barOption = Object.assign({}, chartConstant.options, {type: "bars"});
	stackedBarsOption = Object.assign({}, chartConstant.options, {type: "stackedBars"});
	linesOption = Object.assign({}, chartConstant.options, {type: "lines"});
	doubleAxisOption = Object.assign({}, chartConstant.optionsWithFormatter, {type: "doubleAxis"});
	comboOption = Object.assign({}, chartConstant.doubleYAxisOptions, {type: "combo"});
}
