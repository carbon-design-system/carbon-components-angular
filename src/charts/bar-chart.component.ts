import {
		Component,
		ElementRef,
		Input,
		OnChanges,
		OnInit
} from "@angular/core";

import { Config } from "./config";

import * as D3 from "d3/index";

enum ChartValues {
	origin = 0
}

@Component({
	selector: "cdl-bar-chart",
	template: `<div [attr.id]="chartId"></div>`
})
export class BarChart implements OnInit, OnChanges  {
	@Input()
	config: Config;
	@Input()
	data: any; // TODO: a specific type will be created when the data structure is determined.

	private container;
	private chartConfig: Config;
	public chartId: string;

	// chart variables
	private xScale;
	private yScale;
	private xAxis;
	private yAxis;
	private width;
	private svg;

	constructor(private element: ElementRef) {
			this.container = D3.select(this.element.nativeElement);
	}

	ngOnInit() {
		this.chartConfig = this.config;
		this.chartId = this.chartConfig.id;
	}

	ngOnChanges() {
		this.setup();
		this.buildSVG();
		this.populate();
		this.drawXAxis();
		this.drawYAxis();
	}

	setup() {
		this.xScale = D3.scaleBand().range([ChartValues.origin, this.config.width]);
		this.yScale = D3.scaleLinear().range([this.config.height, ChartValues.origin]);
	}

	buildSVG() {
		this.container.html("");
		this.svg = this.container.append("svg")
				.attr("width", this.config.width + this.config.margin.left + this.config.margin.right)
				.attr("height", this.config.height + this.config.margin.top + this.config.margin.bottom)
				.append("g")
				.attr("transform", `translate(${this.config.margin.left},${this.config.margin.top})`);
	}

	drawXAxis() {
		this.xAxis = D3.axisBottom(this.xScale);
		this.svg.append("g")
			.attr("class", "x axis")
			.attr("transform", `translate(0,${this.config.height})`)
			.call(this.xAxis);
	}

	drawYAxis() {
		this.yAxis = D3.axisLeft(this.yScale)
			.ticks(this.config.yTicks);
		this.svg.append("g")
			.attr("class", "y axis")
			.call(this.yAxis);
	}

	populate() {
		if (this.data) {
			this.xScale.domain(this.data.map((d) => {
					return d[this.config.xDomain];
			}));

			const yMax = D3.max(this.data, (d) => {
						return d[this.config.yDomain];
				});

			this.yScale.domain([ChartValues.origin, yMax]);
			this.svg.selectAll("rect")
				.data(this.data)
				.enter()
				.append("rect")
				.attr("x", (d, i) => { // data and index of the data
							return i * (this.config.width / this.data.length);
					})
				.attr("y", (d) => {
						return this.yScale(d[this.config.yDomain]);
				})
				.attr("width", this.config.width / this.data.length - this.config.margin.left - this.config.margin.right)
				.attr("height", 0)
				.transition()
				.duration(this.config.animDuration)
				.ease(D3.easeLinear)
				.attr("height", (d) => {
						return this.config.height - this.yScale(d[this.config.yDomain]);
				})
				.attr("fill", this.config.colours[0]);
		}
	}

}
