import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, text } from "@storybook/addon-knobs/angular";

import { SliderModule } from "./slider.module";

storiesOf("Slider", module).addDecorator(moduleMetadata({
	imports: [SliderModule]
}))
.addDecorator(withKnobs)
.add("Basic", () => ({
	template: "<ibm-slider></ibm-slider>"
}))
.add("Advanced", () => ({
	template: `
		<ibm-slider
			[min]="min"
			[max]="max"
			[step]="step"
			[value]="value"
			[shiftMultiplier]="shiftMultiplier"
			(valueChange)="valueChange($event)">
			<span minLabel>{{minLabel}}</span>
			<span maxLabel>{{maxLabel}}</span>
			<input/>
		</ibm-slider>
	`,
	props: {
		min: number("min", 0),
		max: number("max", 100),
		step: number("step", 1),
		value: number("value", 0),
		minLabel: text("minLabel", "0"),
		maxLabel: text("maxLabel", "100"),
		shiftMultiplier: number("shiftMultiplier", 4),
		valueChange: action("Value changed")
	}
}))
.add("With NgModel", () => ({
	template: `
		<ibm-slider [(ngModel)]="model"></ibm-slider>
		<br>
		<span>model: {{model}}</span>
	`,
	props: {
		model: 0
	}
}));
