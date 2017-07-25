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

@Component({
	selector: "n-sample-sub",
	template: `
		<span>Hello from a subcomponent</span>
	`,
		providers: [{provide: SampleBase, useExisting: forwardRef(() => SampleSub)}]
})
export class SampleSub implements SampleBase, OnChanges {
	@Input() foo: SampleInterface;
	@Output() bar: EventEmitter<Object>;
	public type: "single" | "multi" = "single";

	// not every component will need a constructor

	ngOnChanges(changes) {
		// for changes and initilization that must happen before anything else
	}

	getNextFoo(): SampleInterface { return; }
}
