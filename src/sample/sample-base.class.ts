import { Input, Output, EventEmitter } from "@angular/core";
import { SampleInterface } from "./sample.interface";

/**
 * This is a sample class used to demonstrate how a base class should be defined
 */
export class SampleBase {
	@Input() foo: SampleInterface;
	@Output() bar: EventEmitter<Object>;
	public type: "single" | "multi" = "single";
	getNextFoo(): SampleInterface { return; }
}
