import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { Checkbox } from "./checkbox.component";

describe("Checkbox", () => {
	let component: Checkbox;
	let fixture: ComponentFixture<Checkbox>;
	let de: DebugElement;
	let el: HTMLElement;
	let inputElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Checkbox],
			imports: [CommonModule, FormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Checkbox);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("label"));
		el = de.nativeElement;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Checkbox).toBe(true);
	});

	it("should change state", () => {
		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(true, "setting to checked");

		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(false, "setting to unchecked");
	});
});
