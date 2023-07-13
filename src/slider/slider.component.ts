import {
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
	ViewChild,
	ElementRef,
	TemplateRef,
	ViewChildren,
	QueryList,
	ChangeDetectorRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { EventService } from "carbon-components-angular/utils";

/**
 * Used to select from ranges of values. [See here](https://www.carbondesignsystem.com/components/slider/usage) for usage information.
 *
 * [See demo](../../?path=/story/components-slider--advanced)
 *
 * The simplest possible slider usage looks something like:
 *
 * ```html
 *	<cds-slider></cds-slider>
 * ```
 *
 * That will render a slider without labels or alternative value input. Labels can be provided by
 * elements with `[minLabel]` and `[maxLabel]` attributes, and an `input` (may use the `ibmInput` directive) can be supplied
 * for use as an alternative value field.
 *
 * ex:
 *
 * ```html
 * <!-- Full example -->
 * <cds-slider>
 *		<span minLabel>0GB</span>
 *		<span maxLabel>100GB</span>
 *		<input/>
 * </cds-slider>
 *
 * <!-- with just an input -->
 * <cds-slider>
 *		<input/>
 * </cds-slider>
 *
 * <!-- with just one label -->
 * <cds-slider>
 *		<span maxLabel>Maximum</span>
 * </cds-slider>
 * ```
 *
 * Slider supports `NgModel` by default, as well as two way binding to the `value` input.
 */
@Component({
	selector: "cds-slider, ibm-slider",
	template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate">
			<label
				*ngIf="label"
				[for]="id"
				[id]="labelId"
				class="cds--label"
				[ngClass]="{'cds--label--disabled': disabled}">
				<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
				<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
			</label>
			<div class="cds--slider-container">
				<label [id]="bottomRangeId" class="cds--slider__range-label">
					<ng-content select="[minLabel]"></ng-content>
				</label>
				<div
					class="cds--slider"
					[ngClass]="{'cds--slider--disabled': disabled}">
					<ng-container *ngIf="!isRange()">
						<div
							#thumbs
							role="slider"
							[id]="id"
							[attr.aria-labelledby]="labelId"
							class="cds--slider__thumb"
							[ngStyle]="{left: getFractionComplete(value) * 100 + '%'}"
							tabindex="0"
							(mousedown)="onMouseDown($event)"
							(keydown)="onKeyDown($event)">
						</div>
					</ng-container>
					<ng-container *ngIf="isRange()">
						<div
							#thumbs
							*ngFor="let thumb of value; let i = index; trackBy: trackThumbsBy"
							role="slider"
							[id]="id + (i > 0 ? '-' + i : '')"
							[attr.aria-labelledby]="labelId"
							class="cds--slider__thumb"
							[ngStyle]="{left: getFractionComplete(thumb) * 100 + '%'}"
							tabindex="0"
							(mousedown)="onMouseDown($event, i)"
							(keydown)="onKeyDown($event, i)">
						</div>
					</ng-container>
					<div
						#track
						class="cds--slider__track"
						(click)="onClick($event)">
					</div>
					<div
						#filledTrack
						class="cds--slider__filled-track">
					</div>
					<input
						#range
						aria-label="slider"
						class="cds--slider__input"
						type="range"
						[step]="step"
						[min]="min"
						[max]="max"
						[value]="value.toString()">
				</div>
				<label [id]="topRangeId" class="cds--slider__range-label">
					<ng-content select="[maxLabel]"></ng-content>
				</label>
				<ng-content select="input"></ng-content>
			</div>
		</ng-container>

		<ng-template #skeletonTemplate>
			<label *ngIf="label" class="cds--label cds--skeleton"></label>
			<div class="cds--slider-container cds--skeleton">
				<span class="cds--slider__range-label"></span>
				<div class="cds--slider">
					<div class="cds--slider__thumb"></div>
					<div class="cds--slider__track"></div>
					<div class="cds--slider__filled-track"></div>
				</div>
				<span class="cds--slider__range-label"></span>
			</div>
		</ng-template>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Slider,
			multi: true
		}
	]
})
export class Slider implements AfterViewInit, ControlValueAccessor {
	/** Used to generate unique IDs */
	private static count = 0;

	/** The lower bound of our range */
	@Input() set min(v) {
		if (!v) { return; }
		this._min = v;
		// force the component to update
		this.value = this.value;
	}
	get min() {
		return this._min;
	}
	/** The upper bound of our range */
	@Input() set max(v) {
		if (!v) { return; }
		this._max = v;
		// force the component to update
		this.value = this.value;
	}

	get max() {
		return this._max;
	}
	/** The interval for our range */
	@Input() step = 1;
	/** Set the initial value. Available for two way binding */
	@Input() set value(v) {
		if (!v) {
			v = [this.min];
		}

		if (typeof v === "number" || typeof v === "string") {
			v = [Number(v)];
		}

		if (v[0] < this.min) {
			v[0] = this.min;
		}

		if (v[0] > this.max) {
			v[0] = this.max;
		}

		if (this.isRange()) {
			if (this._previousValue[0] !== v[0]) { // left moved
				if (v[0] > v[1] - this.step) {
					// stop the left handle if surpassing the right one
					v[0] = v[1] - this.step;
				} else if (v[0] > this.max) {
					v[0] = this.max;
				} else if (v[0] < this.min) {
					v[0] = this.min;
				}
			}

			if (this._previousValue[1] !== v[1]) { // right moved
				if (v[1] > this.max) {
					v[1] = this.max;
				} else if (v[1] < this._value[0] + this.step) {
					// stop the right handle if surpassing the left one
					v[1] = this._value[0] + this.step;
				} else if (v[1] < this.min) {
					v[1] = this.min;
				}
			}
		}

		this._previousValue = [...this._value]; // store a copy, enable detection which handle moved
		this._value = [...v]; // triggers change detection when ngModel value is an array (for range)

		if (this.isRange() && this.filledTrack) {
			this.updateTrackRangeWidth();
		} else if (this.filledTrack) {
			this.filledTrack.nativeElement.style.transform = `translate(0%, -50%) ${this.scaleX(this.getFractionComplete(v[0]))}`;
		}

		if (this.inputs && this.inputs.length) {
			this.inputs.forEach((input, index) => {
				input.value = this._value[index].toString();
			});
		}

		const valueToEmit = this.isRange() ? v : v[0];
		this.propagateChange(valueToEmit);
		this.valueChange.emit(valueToEmit);
	}

	get value() {
		if (this.isRange()) {
			return this._value;
		}
		return this._value[0];
	}

	/** Base ID for the slider. The min and max labels get IDs `${this.id}-bottom-range` and `${this.id}-top-range` respectively */
	@Input() id = `slider-${Slider.count++}`;
	/** Value used to "multiply" the `step` when using arrow keys to select values */
	@Input() shiftMultiplier = 4;
	/** Set to `true` for a loading slider */
	@Input() skeleton = false;
	/** Sets the text inside the `label` tag */
	@Input() label: string | TemplateRef<any>;
	/** Set to `true` for a slider without arrow key interactions. */
	@Input() disableArrowKeys = false;
	/** Disables the range visually and functionally */
	@Input() set disabled(v) {
		this._disabled = v;
		// for some reason `this.input` never exists here, so we have to query for it here too
		const inputs = this.getInputs();
		if (inputs && inputs.length > 0) {
			inputs.forEach(input => input.disabled = v);
		}
	}

	get disabled() {
		return this._disabled;
	}
	/** Emits every time a new value is selected */
	@Output() valueChange: EventEmitter<number | number[]> = new EventEmitter();
	@HostBinding("class.cds--form-item") hostClass = true;
	@ViewChildren("thumbs") thumbs: QueryList<ElementRef>;

	@ViewChild("track") track: ElementRef;
	@ViewChild("filledTrack") filledTrack: ElementRef;
	@ViewChild("range") range: ElementRef;

	public labelId = `${this.id}-label`;
	public bottomRangeId = `${this.id}-bottom-range`;
	public topRangeId = `${this.id}-top-range`;
	public fractionComplete = 0;

	protected isMouseDown = false;
	protected inputs: HTMLInputElement[];
	protected _min = 0;
	protected _max = 100;
	protected _value = [this.min];
	protected _previousValue = [this.min];
	protected _disabled = false;
	protected _focusedThumbIndex = 0;

	constructor(
		protected elementRef: ElementRef,
		protected eventService: EventService,
		private changeDetection: ChangeDetectorRef
	) {}

	ngAfterViewInit() {
		// bind mousemove and mouseup to the document so we don't have issues tracking the mouse
		this.eventService.onDocument("mousemove", this.onMouseMove.bind(this));
		this.eventService.onDocument("mouseup", this.onMouseUp.bind(this));

		// apply any values we got from before the view initialized
		this.changeDetection.detectChanges();

		// TODO: ontouchstart/ontouchmove/ontouchend

		// set up the optional input
		this.inputs = this.getInputs();
		if (this.inputs && this.inputs.length > 0) {
			this.inputs.forEach((input, index) => {
				input.type = "number";
				input.classList.add("cds--slider-text-input");
				input.classList.add("cds--text-input");
				input.setAttribute("aria-labelledby", `${this.bottomRangeId} ${this.topRangeId}`);

				input.value = index < this._value.length ? this._value[index].toString() : this.max.toString();
				// bind events on our optional input
				this.eventService.on(input, "change", event => this.onChange(event, index));

				if (index === 0) {
					this.eventService.on(input, "focus", this.onFocus.bind(this));
				}
			});
		}
	}

	trackThumbsBy(index: number, item: any) {
		return index;
	}

	/** Send changes back to the model */
	propagateChange = (_: any) => { };

	/** Register a change propagation function for `ControlValueAccessor` */
	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	/** Callback to notify the model when our input has been touched */
	onTouched: () => any = () => { };

	/** Register a callback to notify when our input has been touched */
	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	/** Receives a value from the model */
	writeValue(v: any) {
		this.value = v;
	}

	/**
	 * Returns the amount of "completeness" of a value as a fraction of the total track width
	 */
	getFractionComplete(value: number) {
		if (!this.track) {
			return 0;
		}

		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		return this.convertToPx(value) / trackWidth;
	}

	/** Helper function to return the CSS transform `scaleX` function */
	scaleX(complete) {
		return `scaleX(${complete})`;
	}

	/** Converts a given px value to a "real" value in our range */
	convertToValue(pxAmount) {
		// basic concept borrowed from carbon-components
		// https://github.com/carbon-design-system/carbon/blob/43bf3abdc2f8bdaa38aa84e0f733adde1e1e8894/src/components/slider/slider.js#L147-L151
		const range = this.max - this.min;
		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		const unrounded = pxAmount / trackWidth;
		const rounded = Math.round((range * unrounded) / this.step) * this.step;
		return rounded + this.min;
	}

	/** Converts a given "real" value to a px value we can update the view with */
	convertToPx(value) {
		if (!this.track) {
			return 0;
		}

		const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
		if (value >= this.max) {
			return trackWidth;
		}

		if (value <= this.min) {
			return 0;
		}

		// account for value shifting by subtracting min from value and max
		return Math.round(trackWidth * ((value - this.min) / (this.max - this.min)));
	}

	/**
	 * Increments the value by the step value, or the step value multiplied by the `multiplier` argument.
	 *
	 * @argument multiplier Defaults to `1`, multiplied with the step value.
	 */
	incrementValue(multiplier = 1, index = 0) {
		this._value[index] = this._value[index] + (this.step * multiplier);
		this.value = this.value; // run the setter
	}

	/**
	 * Decrements the value by the step value, or the step value multiplied by the `multiplier` argument.
	 *
	 * @argument multiplier Defaults to `1`, multiplied with the step value.
	 */
	decrementValue(multiplier = 1, index = 0) {
		this._value[index] = this._value[index] - (this.step * multiplier);
		this.value = this.value; // run the setter
	}

	/**
	 * Determines if the slider is in range mode.
	 */
	isRange(): boolean {
		return this._value.length > 1;
	}

	/**
	 * Range mode only.
	 * Updates the track width to span from the low thumb to the high thumb
	 */
	updateTrackRangeWidth() {
		const fraction = this.getFractionComplete(this._value[0]);
		const fraction2 = this.getFractionComplete(this._value[1]);
		this.filledTrack.nativeElement.style.transform = `translate(${fraction * 100}%, -50%) ${this.scaleX(fraction2 - fraction)}`;
	}

	/** Change handler for the optional input */
	onChange(event, index) {
		this._value[index] = Number(event.target.value);
		this.value = this.value;
	}

	/** Handles clicks on the range track, and setting the value to it's "real" equivalent */
	onClick(event) {
		if (this.disabled) { return; }
		const trackLeft = this.track.nativeElement.getBoundingClientRect().left;
		this._value[0] = this.convertToValue(event.clientX - trackLeft);
		this.value = this.value;
	}

	/** Focus handler for the optional input */
	onFocus({target}) {
		target.select();
	}

	/** Mouse move handler. Responsible for updating the value and visual selection based on mouse movement */
	onMouseMove(event) {
		if (this.disabled || !this.isMouseDown) { return; }
		const track = this.track.nativeElement.getBoundingClientRect();

		let value;

		if (
			event.clientX - track.left <= track.width
			&& event.clientX - track.left >= 0
		) {
			value = this.convertToValue(event.clientX - track.left);
		}

		// if the mouse is beyond the max, set the value to `max`
		if (event.clientX - track.left > track.width) {
			value = this.max;
		}

		// if the mouse is below the min, set the value to `min`
		if (event.clientX - track.left < 0) {
			value = this.min;
		}

		if (value !== undefined) {
			this._value[this._focusedThumbIndex] = value;
			this.value = this.value;
		}
	}

	/**
	 * Enables the `onMouseMove` handler
	 *
	 * @param {boolean} thumb If true then `thumb` is clicked down, otherwise `thumb2` is clicked down.
	 */
	onMouseDown(event, index = 0) {
		event.preventDefault();
		if (this.disabled) { return; }
		this._focusedThumbIndex = index;
		this.thumbs.toArray()[index].nativeElement.focus();
		this.isMouseDown = true;
	}

	/** Disables the `onMouseMove` handler */
	onMouseUp() {
		this.isMouseDown = false;
	}

	/**
	 * Calls `incrementValue` for ArrowRight and ArrowUp, `decrementValue` for ArrowLeft and ArrowDown.
	 *
	 * @param {boolean} thumb If true then `thumb` is pressed down, otherwise `thumb2` is pressed down.
	 */
	onKeyDown(event: KeyboardEvent, index = 0) {
		if (this.disableArrowKeys) {
			return;
		}
		const multiplier = event.shiftKey ? this.shiftMultiplier : 1;
		if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
			this.decrementValue(multiplier, index);
			this.thumbs.toArray()[index].nativeElement.focus();
			event.preventDefault();
		} else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
			this.incrementValue(multiplier, index);
			this.thumbs.toArray()[index].nativeElement.focus();
			event.preventDefault();
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/** Get optional input fields */
	protected getInputs(): HTMLInputElement[] {
		return this.elementRef.nativeElement.querySelectorAll("input:not([type=range])");
	}
}
