import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { Label } from "./label.component";

describe("Label", () => {
	let component: Label;
	let fixture: ComponentFixture<Label>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Label],
			imports: [],
			providers: []
		});

		fixture = TestBed.createComponent(Label);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css(".label"));
		el = de.nativeElement;
		fixture.detectChanges();
	});

	xit("should work", () => {
		expect(component instanceof Label).toBe(true);
	});
});
