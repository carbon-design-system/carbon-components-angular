import {
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
	OnDestroy,
	ViewChild,
	ElementRef
} from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 *
 */
@Component({
	selector: "ibm-slider",
	template: `
		<div class="bx--slider">
			<div
				#thumb
				class="bx--slider__thumb"
				tabindex="0"
				[ngStyle]="{'left.%': getPercentComplete() * 100}"
				(mousedown)="onMouseDown($event)"
				(keydown)="onKeyDown($event)">
			</div>
			<div
				#track
				class="bx--slider__track"
				(click)="onClick($event)">
			</div>
			<div
				class="bx--slider__filled-track"
				[ngStyle]="{transform: 'translate(0%, -50%)' + scaleX(getPercentComplete())}">
			</div>
			<input
				#range
				aria-label="slider"
				class="bx--slider__input"
				type="range"
				[step]="step"
				[min]="min"
				[max]="max"
				[value]="value">
		</div>
		<label [id]="bottomRangeId" class="bx--slider__range-label">
			<ng-content select="[minLabel]"></ng-content>
		</label>
		<label [id]="topRangeId" class="bx--slider__range-label">
			<ng-content select="[maxLabel]"></ng-content>
		</label>
		<ng-content select="input"></ng-content>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Slider,
			multi: true
		}
	]
})
export class Slider implements AfterViewInit, OnDestroy, ControlValueAccessor {
	private static count = 0;

	@Input() min = 0;
	@Input() max = 100;
	@Input() step = 1;
	@Input() set value(v) {
		if (v > this.max) {
			v = this.max;
		}

		if (v < this.min) {
			v = this.min;
		}

		this._value = v;
		this.slidAmount = this.convertToPx(v);

		if (this.input) {
			this.input.value = v;
		}

		this.propagateChange(v);
		this.valueChange.emit(v);
	}

	get value() {
		return this._value;
	}
	@Input() id = `slider-${Slider.count++}`;
	@Input() shiftMultiplier = 4;
	@Output() valueChange: EventEmitter<number> = new EventEmitter();
	@HostBinding("class.bx--slider-container") hostClass = true;
	@ViewChild("thumb") thumb: ElementRef;
	@ViewChild("track") track: ElementRef;
	@ViewChild("range") range: ElementRef;

	public bottomRangeId = `${this.id}-bottom-range`;
	public topRangeId = `${this.id}-top-range`;

	protected isMouseDown = false;
	protected eventSubscriptions: Array<Subscription> = [];
	protected slidAmount = 0;
	protected input;
	protected _value = 0;

	constructor(protected elementRef: ElementRef) {}

	ngAfterViewInit() {
		this.eventSubscriptions.push(fromEvent(document, "mousemove").subscribe(this.onMouseMove.bind(this)));
		this.eventSubscriptions.push(fromEvent(document, "mouseup").subscribe(this.onMouseUp.bind(this)));

		// set up the optional input
		this.input = this.elementRef.nativeElement.querySelector("input:not([type=range])");
		if (this.input) {
			this.input.type = "number";
			this.input.classList.add("bx--slider-text-input");
			this.input.classList.add("bx--text-input");
			this.input.setAttribute("aria-labelledby", `${this.bottomRangeId} ${this.topRangeId}`);
			this.input.value = this.value;
			this.eventSubscriptions.push(fromEvent(this.input, "change").subscribe(this.onChange.bind(this)));
			this.eventSubscriptions.push(fromEvent(this.input, "focus").subscribe(this.onFocus.bind(this)));
		}
	}

	ngOnDestroy() {
		this.eventSubscriptions.forEach(subscription => {
			subscription.unsubscribe();
		});
	}

	propagateChange = (_: any) => { };

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	onTouched: () => any = () => { };

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	writeValue(v: any) {
		this.value = v;
	}

	getPercentComplete() {
		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		return this.slidAmount / trackWidth;
	}

	scaleX(complete) {
		return `scaleX(${complete})`;
	}

	convertToValue(pxAmount) {
		// basic concept borrowed from carbon-components
		// ref: https://github.com/IBM/carbon-components/blob/43bf3abdc2f8bdaa38aa84e0f733adde1e1e8894/src/components/slider/slider.js#L147-L151
		const range = this.max - this.min;
		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		const unrounded = pxAmount / trackWidth;
		const rounded = Math.round((range * unrounded) / this.step) * this.step;
		return rounded + this.min;
	}

	convertToPx(value) {
		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		if (value >= this.max) {
			return trackWidth;
		}

		if (value <= this.min) {
			return 0;
		}

		return Math.round(trackWidth * (value / this.max));
	}

	incrementValue(multiplier = 1) {
		this.value = this.value + (this.step * multiplier);
	}

	decrementValue(multiplier = 1) {
		this.value = this.value - (this.step * multiplier);
	}

	onChange(event) {
		this.value = event.target.value;
	}

	onClick(event) {
		const trackLeft = this.track.nativeElement.getBoundingClientRect().left;
		this.value = this.convertToValue(event.clientX - trackLeft);
		console.log(event);
	}

	onFocus({target}) {
		target.select();
	}

	onMouseMove(event) {
		if (this.isMouseDown) {
			const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
			const trackLeft = this.track.nativeElement.getBoundingClientRect().left;
			if (
				event.clientX - trackLeft <= trackWidth
				&& event.clientX - trackLeft >= 0
			) {
				this.slidAmount = event.clientX - trackLeft;
			}
			this.value = this.convertToValue(this.slidAmount);
		}
	}

	onMouseDown(event) {
		event.preventDefault();
		this.thumb.nativeElement.focus();
		this.isMouseDown = true;
	}

	onMouseUp() {
		this.isMouseDown = false;
	}

	onKeyDown(event: KeyboardEvent) {
		event.preventDefault();
		const multiplier = event.shiftKey ? this.shiftMultiplier : 1;
		if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
			this.decrementValue(multiplier);
		}

		if (event.key === "ArrowRight" || event.key === "ArrowUp") {
			this.incrementValue(multiplier);
		}
	}
}
