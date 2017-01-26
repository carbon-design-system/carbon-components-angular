import {TestBed, ComponentFixture} from "@angular/core/testing";

export function createGenericTestComponent<T>(html: string, type: {new (...args: any[]): T}): ComponentFixture<T> {
	TestBed.overrideComponent(type, {set: {template: html}});
	const fixture = TestBed.createComponent(type);
	fixture.detectChanges();
	return fixture as ComponentFixture<T>;
}

export function createElement(height: number, width: number, marginTop: number, marginLeft: number): HTMLElement {
	let element = document.createElement("div");
	element.style.display = "inline-block";
	element.style.height = height + "px";
	element.style.width = width + "px";
	element.style.marginTop = marginTop + "px";
	element.style.marginLeft = marginLeft + "px";

	return element;
}
