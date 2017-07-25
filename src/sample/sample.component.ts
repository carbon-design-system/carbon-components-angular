import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	OnInit,
	AfterViewInit,
	OnDestroy
} from "@angular/core";

import { SampleBase } from "./sample-base.class";
import { SampleInterface } from "./sample.interface";

@Component({
	selector: "n-sample",
	template: `
		<p>Hello, Neutrino!</p>
	`
})
export class Sample implements OnInit, AfterViewInit, OnDestroy {
	@Input() foo: SampleInterface;
	@Output() bar: EventEmitter<SampleInterface> = new EventEmitter<SampleInterface>();

	// instantiate services as private variables
	constructor(private _elementRef: ElementRef) {}

	ngOnInit() {
		// run setup logic that doesnt depend on the DOM and only needs to be run once here
	}

	ngAfterViewInit() {
		// run setup logic that depends on the DOM here
	}

	ngOnDestroy() {
		// clean up any event handlers or other objects that won't normally be destroyed
	}

	protected setFoo() {
		// this is some instance method that can be inherited and used by subclasses
	}

	public doBar() {
		// this is some instance method that can be used in templates
	}
}
