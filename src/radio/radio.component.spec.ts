import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	ComponentFixture,
	TestBed,
	fakeAsync,
	tick,
	async
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DebugElement, Component } from "@angular/core";
import { StaticIconModule } from "../icon/static-icon.module";

import { Radio } from "./radio.component";
import { RadioGroup } from "./radio-group.component";

describe("RadioGroup", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Radio, RadioGroup, RadioTest],
			imports: [BrowserAnimationsModule, FormsModule, StaticIconModule],
			providers: []
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(RadioGroup));
		expect(directiveEl).not.toBeNull();
	});

	it("should select one", () => {
		const fixture = TestBed.createComponent(RadioTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(RadioGroup));
		const radioOne = fixture.debugElement.query(By.directive(Radio));
		radioOne.nativeElement.querySelector("input").click();
		fixture.detectChanges();

		expect(fixture.componentInstance.radio).toBe("one");
	});
});

@Component({
	selector: "test-cmp",
	template: `
	<ibm-radio-group [(ngModel)]="radio">
		<ibm-radio *ngFor="let one of manyRadios" [value]="one"
			class="indent">Radio {{one}}
		</ibm-radio>
	</ibm-radio-group>`,
	entryComponents: [Radio]
})
class RadioTest {
	manyRadios = ["one", "two", "three", "four", "five", "six"];
	radio: string;
}


describe("RadioComponent", () => {
	let component: Radio;
	let fixture: ComponentFixture<Radio>;
	let de: DebugElement;
	let el: HTMLElement;
	let inputElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Radio],
			imports: [BrowserAnimationsModule],
			providers: []
		});

		fixture = TestBed.createComponent(Radio);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("label"));
		el = de.nativeElement;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Radio).toBe(true);
	});
});
