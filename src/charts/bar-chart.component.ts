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
	@Input() config: Config;
	@Input() data: any; // TODO: a specific type will be created when the data structure is determined.

	private container;
	public chartId: string;

	// chart variables
	private xScale;
	private yScale;
	private xAxis;
	private yAxis;
	private width;
	private svg;

	private TMPBARPADDING = 10;
	private initialized = false;

	constructor(private element: ElementRef) {
		this.container = D3.select(this.element.nativeElement);
	}

	ngOnInit() {
		this.chartId = this.config.id;
	}

	ngOnChanges(changes) {
		if (!this.initialized) {
			console.log("runonce");
			this.setup();
			this.buildSVG();
			this.initialized = true;
		}
		console.log("changes", changes);
		this.populate();
	}

	setup() {
		this.xScale = D3.scaleBand().range([ChartValues.origin, this.config.width]);
		this.yScale = D3.scaleLinear().range([this.config.height, ChartValues.origin]);
	}

	buildSVG() {
		// dump the placeholder div
		this.container.html("");
		// boom, svg
		this.svg = this.container.append("svg")
			.attr("width", this.config.width + this.config.margin.left + this.config.margin.right)
			.attr("height", this.config.height + this.config.margin.top + this.config.margin.bottom)
			.append("g")
			.attr("transform", `translate(0,${this.config.margin.top})`);
		// add a rect for out nice background
		this.svg.append("rect")
			.attr("width", this.config.width)
			.attr("height", this.config.height)
			.attr("fill", "#DFE9E9")
			.attr("fill-opacity", 0.1)
			.attr("transform", "translate(20,0)");
		// add some axis containers
		// y first then x so the x .domain bar doesn't have a blue line through it
		this.svg.append("g")
			.attr("class", "y axis");
		this.svg.append("g")
			.attr("class", "x axis");
		// add a container for our bars
		this.svg.append("g")
			.attr("class", "bars");
	}

	drawXAxis() {
		this.xAxis = D3.axisBottom(this.xScale)
			.tickSizeInner(-this.config.height)
			.tickSizeOuter(0);
		let g = this.svg.select(".x.axis")
			.attr("transform", `translate(${20 - this.TMPBARPADDING},${this.config.height})`)// 20 - this.TMPBARPADDING
			.call(this.xAxis);
		g.selectAll("line")
			.attr("stroke", "#7CC7FF");
		g.selectAll("text")
			.attr("y", 9)
			.attr("x", -4)
			.attr("dy", ".35em")
			.attr("transform", "rotate(-45)")
			.style("text-anchor", "end")
			.attr("fill", "#586464");
		g.select(".domain")
			.attr("transform", `translate(${this.TMPBARPADDING}, 0)`)
			.attr("stroke", "#586464")
			.attr("stroke-width", 2);
	}

	drawYAxis() {
		this.yAxis = D3.axisLeft(this.yScale)
			.tickSizeInner(-this.config.width)
			.tickSizeOuter(0)
			.ticks(this.config.yTicks);
		let g = this.svg.select(".y.axis")
			.call(this.yAxis)
			.attr("transform", "translate(20,0)");
		g.select(".domain").remove()
		g.selectAll("line")
			.attr("stroke", "#7CC7FF");
		g.selectAll("text")
			.attr("fill", "#586464")
			.attr("x", -10);
	}

	populate() {
		if (this.data) {
			// keep a reference to svg for when we need to get a different this
			let svg = this.svg;

			// setup the scales for our x/y axis based on our data
			this.xScale.domain(this.data.map((d) => {
				return d[this.config.xDomain];
			}));

			const yMax = D3.max(this.data, (d) => {
				return d[this.config.yDomain];
			});
			this.yScale.domain([ChartValues.origin, yMax]);

			//remove any old axis
			svg.selectAll(".axis .tick").remove();
			// render our axis
			this.drawYAxis();
			this.drawXAxis();

			// render the bars
			
			let bars = svg.select(".bars").selectAll("rect").data(this.data, d => d[this.config.xDomain]);
			console.log("data", this.data, this.data.length);
			bars.exit().remove();

			bars.enter()
				.append("rect")
				.on("mouseover", function (d, i) {
					svg.selectAll(".bars rect").attr("opacity", 0.5);
					D3.select(this).attr("opacity", 1);
					console.log(d, i, this, svg);
				})
				.on("mouseout", () => svg.selectAll(".bars rect").attr("opacity", 1))
				.attr("x", (d, i) => { // data and index of the data
					return i * (this.config.width / this.data.length) + 20;// 20 === left padding
				})
				.attr("y", this.config.height)
				.attr("width", this.config.width / this.data.length - (this.TMPBARPADDING*2))
				.attr("height", 0)
				.attr("fill", this.config.colours[0])
				.merge(bars)
				.transition()
				.duration(this.config.animDuration)
				.ease(D3.easeLinear)
				.attr("height", d => {
					return this.config.height - this.yScale(d[this.config.yDomain]);
				})
				.attr("y", d => {
					return this.yScale(d[this.config.yDomain]);
				})
				.attr("x", (d, i) => { // data and index of the data
					return i * (this.config.width / this.data.length) + 20;// 20 === left padding
				})
				.attr("width", this.config.width / this.data.length - (this.TMPBARPADDING*2));
		}
	}
}
