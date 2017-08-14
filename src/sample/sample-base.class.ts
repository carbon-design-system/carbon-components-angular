import { Input, Output, EventEmitter } from "@angular/core";
import { SampleInterface } from "./sample.interface";

/**
 * This is a sample class used to demonstrate how a base class should be defined
 */
export class SampleBase {
	/** specify input behaviour */
	@Input() foo: SampleInterface;
	/** specify output behaviour */
	@Output() bar: EventEmitter<Object>;
	/** required template types */
	public type: "single" | "multi" = "single";
	/** required methods */
	private getNextFoo(): SampleInterface { return; }
}
