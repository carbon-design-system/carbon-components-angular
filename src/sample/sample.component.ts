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

/**
 * This is a sample component to demonstrate how components should be written, and can be used as a template for new components
 */
@Component({
	selector: "n-sample",
	template: `
		<p>Hello, Neutrino!</p>
		<span>{{ foo.required }}</span>
	`
})
export class Sample implements OnInit, AfterViewInit, OnDestroy {
	/** foo is an input that takes a SampleInterface */
	@Input() foo: SampleInterface;
	/** bar is an event that emits a SampleInterface */
	@Output() bar: EventEmitter<SampleInterface> = new EventEmitter<SampleInterface>();

	/**
	 * instantiate services as private variables
	 *
	 * @param {ElementRef} _elementRef
	 */
	constructor(private _elementRef: ElementRef) {}

	/** run setup logic that doesnt depend on the DOM and only needs to be run once here */
	ngOnInit() {
		//
	}

	/** run setup logic that depends on the DOM here */
	ngAfterViewInit() {
		//
	}

	/** clean up any event handlers or other objects that won't normally be destroyed */
	ngOnDestroy() {
		//
	}

	/** this is an instance method that can be used in templates */
	public doBar() {
		//
	}

	/** this is an instance method that can be inherited and used by subclasses */
	protected setFoo() {
		//
	}
}
