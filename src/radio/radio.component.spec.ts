import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DebugElement, Component } from "@angular/core";
import { advancedFakeAsync } from "../test-helpers/change-detection";

import { Radio } from "./radio.component";
import { RadioGroup } from "./radio-group.component";

@Component({
	selector: "test-component",
	template: `
	<cds-radio-group [(ngModel)]="radio" [disabled]="disabled" [name]="name">
		<cds-radio *ngFor="let one of manyRadios" [value]="one"
			class="indent">Radio {{one}}
		</cds-radio>
	</cds-radio-group>`
})
class RadioTest {
	manyRadios = ["one", "two", "three", "four", "five", "six"];
	radio: string;
	disabled = false;
	name = "test-group";
}

describe("RadioGroup", () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [Radio, RadioGroup, RadioTest],
			imports: [FormsModule]
		}).compileComponents();
	}));

	it("should work", () => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(RadioGroup));
		expect(directiveEl).not.toBeNull();
	});

	it("should select one", () => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.detectChanges();

		const radioOne = fixture.debugElement.query(By.directive(Radio));
		radioOne.triggerEventHandler("click", null);
		radioOne.nativeElement.querySelector("input").click();
		fixture.detectChanges();

		expect(fixture.componentInstance.radio).toBe("one");
	});

	it("should disable every radio when the group is disabled", fakeAsync(() => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll("input[type=radio]");
		expect(inputs.length).toBe(6);
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.disabled).toBe(true));
	}));

	it("should re-enable every radio when the group is enabled", fakeAsync(() => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		fixture.componentInstance.disabled = false;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll("input[type=radio]");
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.disabled).toBe(false));
	}));

	it("should give every radio the group name", fakeAsync(() => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll("input[type=radio]");
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.name).toBe("test-group"));
	}));

	it("should configure radios added after the group is created", fakeAsync(() => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		fixture.componentInstance.manyRadios = [...fixture.componentInstance.manyRadios, "seven"];
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll("input[type=radio]");
		expect(inputs.length).toBe(7);
		expect(inputs[6].disabled).toBe(true);
		expect(inputs[6].name).toBe("test-group");
	}));
});

describe("RadioComponent", () => {
	let component: Radio;
	let fixture: ComponentFixture<Radio>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [Radio]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Radio);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("label"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Radio).toBe(true);
	});
});
