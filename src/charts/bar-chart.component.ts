import {
		Component,
		ElementRef,
		Input,
		OnChanges
} from "@angular/core";

import { Config } from "./config";

import * as D3 from "d3/index";

enum ChartValues {
	origin = 0
}

@Component({
	selector: "cdl-bar-chart",
	template: `<svg></svg>`
})
export class BarChart implements OnChanges {
	@Input() config: Config;
	@Input() data: any; // TODO: a specific type will be created when the data structure is determined.

	private container;

	// chart variables
	private xScale;
	private yScale;
	private xAxis;
	private yAxis;
	private xGrid;
	private yGrid;
	private width;
	private svg;

	private yAxisWidth = 60;
	private initialized = false;

	private margin = {
		top: 20,
		bottom: 50,
		left: 20,
		right: 0
	};

	constructor(private element: ElementRef) {
		this.container = D3.select(this.element.nativeElement);
	}

	ngOnChanges(changes) {
		if (this.initialized) {
			console.log("changes", changes);
			this.populate();
		}
	}

	ngOnInit() {
		this.setup();
		this.buildSVG();
		const yMax = D3.max(this.data, (d) => {
			return d[this.config.yDomain];
		});
		this.yScale.domain([ChartValues.origin, yMax]);
		this.drawYAxis();
	}

	ngAfterContentInit() {
		console.log("runonce");
		this.populate();
		this.initialized = true;
	}

	setup() {
		this.xScale = D3.scaleBand().range([ChartValues.origin, this.config.width]);
		this.yScale = D3.scaleLinear().range([this.config.height, ChartValues.origin]);
	}

	buildSVG() {
		console.log(this.yAxisWidth);
		// lets setup our svg and general containing element
		this.svg = this.container.select("svg")
			.attr("width", this.config.width)
			.attr("height", this.config.height + this.margin.top + this.margin.bottom)
			.append("g")
			.attr("transform", `translate(0,0)`);
		// add a rect for our nice background
		this.svg.append("rect")
			.attr("class", "background")
			.attr("width", this.config.width - this.yAxisWidth)
			.attr("height", this.config.height)
			.attr("fill", "#DFE9E9")
			.attr("fill-opacity", 0.1)
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
		// add some axis containers
		// y first then x so the x .domain bar doesn't have a blue line through it
		this.svg.append("g")
			.attr("class", "y axis")
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
		this.svg.append("g")
			.attr("class", "x axis")
			.attr("transform", `translate(${this.yAxisWidth}, ${this.config.height})`);
		let grid = this.svg.append("g")
			.attr("class", "grid")
			.attr("clip-path", `url(${window.location.origin}${window.location.pathname}#clip)`);
		grid.append("g")
			.attr("class", "x grid")
			.attr("transform", `translate(${this.yAxisWidth}, ${this.config.height})`);
		grid.append("g")
			.attr("class", "y grid")
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
		// add a container for our bars
		this.svg.append("g")
			.attr("class", "bars");
		// add a clipping rect
		this.svg.append("clipPath")
			.attr("id", "clip")
			.append("rect")
			.attr("width", this.config.width)
			.attr("height", this.config.height)
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
	}

	drawXGrid() {
		this.xGrid = D3.axisBottom(this.xScale)
			.tickSizeInner(-this.config.height)
			.tickSizeOuter(0);
		let g = this.svg.select(".x.grid")
			.attr("transform", `translate(${this.yAxisWidth}, ${this.config.height})`);
		let gt = g.transition()
			.duration(this.config.animDuration)
			.ease(D3.easeLinear)
			.call(this.xGrid);
		g.selectAll("line")
			.attr("stroke", "#7CC7FF");
		g.selectAll("text").remove();
		g.select(".domain").remove();
	}

	drawXAxis() {
		this.xAxis = D3.axisBottom(this.xScale)
			.tickSizeInner(0)
			.tickSizeOuter(0);
		let g = this.svg.select(".x.axis");
		let gt = g.transition()
			.duration(this.config.animDuration)
			.ease(D3.easeLinear)
			.call(this.xAxis);
		// this is the result of quite a bit of fiddling
		//  some properties will be happy to be set and not transition
		//  some properties need to be reset in the transition so they
		//  stay put. thankfully with a carful eye we can optimize and
		//  only "reset" exactly what we need to.
		gt.selectAll("text")
			.attr("y", 9)
		g.selectAll("text")
			.attr("y", 9)
			.attr("x", -4)
			.attr("dy", ".35em")
			.attr("transform", "rotate(-45)")
			.style("text-anchor", "end")
			.attr("fill", "#586464");
		g.select(".domain")
			// .attr("transform", `translate(${this.config.barPadding}, 0)`)
			.attr("stroke", "#586464")
			.attr("stroke-width", 2);
	}

	drawYGrid() {
		this.yGrid = D3.axisLeft(this.yScale)
			.tickSizeInner(-(this.config.width - this.yAxisWidth))
			.tickSizeOuter(0)
			.ticks(this.config.yTicks);
		let g = this.svg.select(".y.grid")
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
		let gt = g.transition()
			.duration(this.config.animDuration)
			.ease(D3.easeLinear)
			.call(this.yGrid);
		g.selectAll("line")
			.attr("stroke", "#7CC7FF");
		g.selectAll("text").remove();
		g.select(".domain").remove();
	}

	drawYAxis() {
		let maxWidth = 0;
		this.yAxis = D3.axisLeft(this.yScale)
			.tickSizeInner(0)
			.tickSizeOuter(0)
			.tickPadding(10)
			.ticks(this.config.yTicks);
		let g = this.svg.select(".y.axis")
			.attr("transform", `translate(${this.yAxisWidth}, 0)`);
		let gt = g.transition()
			.duration(this.config.animDuration)
			.ease(D3.easeLinear)
			.call(this.yAxis);
		g.select(".domain").remove();
		g.selectAll("text")
			.attr("fill", "#586464")
			.each(function() {
				console.log(this.getBBox().width, this.getComputedTextLength());
				if (this.getBBox().width > maxWidth) { maxWidth = this.getBBox().width; }
			});
		console.log(g.selectAll("text").nodes());
		for (let text of g.selectAll("text").nodes()) {
			console.log(text.getBBox().width);
		}
		console.log("max", maxWidth, this.svg);
	}


	populate() {
		if (this.data) {
			// keep a reference to svg for when we need to get a different this
			let svg = this.svg;
			
			// setup the scales for our y axis based on our data
			// const yMax = D3.max(this.data, (d) => {
			// 	return d[this.config.yDomain];
			// });
			// this.yScale.domain([ChartValues.origin, yMax]);
			// this.drawYAxis();
			
			console.log("ahhh", this.yAxisWidth);
			// this.yAxisWidth = svg.select(".y.axis").node().getBBox().width;
			this.xScale = D3.scaleBand().range([ChartValues.origin, this.config.width - this.yAxisWidth]);
			// setup the scales for our x axis based on our data
			this.xScale.domain(this.data.map((d) => {
				return d[this.config.xDomain];
			}));
			this.drawXAxis();
			this.drawXGrid();
			this.drawYGrid();
			// render the bars
			// let bars = svg.select(".bars")
			// 	.attr("transform", `translate(${this.yAxisWidth}, 0)`)
			// 	.selectAll("rect")
			// 	.data(this.data, d => d[this.config.xDomain]);

			svg.selectAll(".y.axis text")
				.each(function() { console.log(this.getBBox().width, this.getComputedTextLength()); });

			// remove any data that doesn't exist
			// bars.exit().remove();

			// // add our data as rects
			// bars = bars.enter()
			// 	.append("rect")
			// 	/*.on("mouseover", function (d, i) {
			// 		svg.selectAll(".bars rect").attr("opacity", 0.5);
			// 		D3.select(this).attr("opacity", 1);
			// 		console.log(d, i, this, svg);
			// 	})
			// 	.on("mouseout", () => svg.selectAll(".bars rect").attr("opacity", 1))*/
			// 	.attr("x", (d, i) => { // data and index of the data
			// 		return this.xScale(d[this.config.xDomain]);
			// 	})
			// 	.attr("y", this.config.height)
			// 	.attr("width", (this.config.width - this.yAxisWidth) / this.data.length /*- (this.config.barPadding * 2)*/)
			// 	.attr("height", 0)
			// 	.attr("fill", this.config.colours[0])
			// 	.merge(bars);

			// // add transitions to our bars
			// bars.transition()
			// 	.duration(this.config.animDuration)
			// 	.ease(D3.easeLinear)
			// 	.attr("height", d => {
			// 		return this.config.height - this.yScale(d[this.config.yDomain]);
			// 	})
			// 	.attr("y", d => {
			// 		return this.yScale(d[this.config.yDomain]);
			// 	})
			// 	.attr("x", (d, i) => { // data and index of the data
			// 		return this.xScale(d[this.config.xDomain]);
			// 	})
			// 	.attr("width", (this.config.width - this.yAxisWidth) / this.data.length /*- (this.config.barPadding * 2)*/);
		}
	}
}
