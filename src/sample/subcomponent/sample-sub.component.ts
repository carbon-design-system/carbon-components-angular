import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	OnChanges
} from "@angular/core";

import { SampleBase } from "./../sample-base.class";
import { SampleInterface } from "./../sample.interface";

/**
 * this is a sample sub-component
 */
@Component({
	selector: "n-sample-sub",
	template: `
		<span>Hello from a subcomponent</span>
	`,
		providers: [{provide: SampleBase, useExisting: forwardRef(() => SampleSub)}]
})
export class SampleSub implements SampleBase, OnChanges {
	/** input foo */
	@Input() foo: SampleInterface;
	/** bar emits an Object of some type */
	@Output() bar: EventEmitter<Object>;
	/** here's a instance variable that takes a union of "single" | "multi" */
	public type: "single" | "multi" = "single";

	// not every component will need a constructor

	/** for changes and initilization that must happen before anything else */
	ngOnChanges(changes) {
		//
	}

	/** an instance method */
	getNextFoo(): SampleInterface { return; }
}
