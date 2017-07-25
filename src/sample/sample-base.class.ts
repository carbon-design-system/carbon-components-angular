import { Input, Output, EventEmitter } from "@angular/core";
import { SampleInterface } from "./sample.interface";

export class SampleBase {
	@Input() foo: SampleInterface;
	@Output() bar: EventEmitter<Object>;
	public type: "single" | "multi" = "single";
	getNextFoo(): SampleInterface { return; }
}
