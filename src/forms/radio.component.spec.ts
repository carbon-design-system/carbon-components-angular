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

import { RadioComponent, RadioGroup } from "./radio.component";

describe("RadioGroup", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RadioComponent, RadioGroup, TestComponent],
			imports: [BrowserAnimationsModule, FormsModule],
			providers: []
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(RadioGroup));
		expect(directiveEl).not.toBeNull();
	});

	it("should select one", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(RadioGroup));
		const radioOne = fixture.debugElement.query(By.directive(RadioComponent));
		radioOne.nativeElement.querySelector("input").click();
		fixture.detectChanges();

		expect(fixture.componentInstance.radio).toBe("one");
	});
});

@Component({
	selector: "test-cmp",
	template: `
	<n-radio-group [(ngModel)]="radio">
		<n-radio *ngFor="let one of manyRadios" [value]="one"
			class="indent">Radio {{one}}
		</n-radio>
	</n-radio-group>`,
	entryComponents: [RadioComponent]
})
class TestComponent {
	manyRadios = ["one", "two", "three", "four", "five", "six"];
	radio: string;
}


describe("RadioComponent", () => {
	let component: RadioComponent;
	let fixture: ComponentFixture<RadioComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let inputElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RadioComponent],
			imports: [BrowserAnimationsModule],
			providers: []
		});

		fixture = TestBed.createComponent(RadioComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("label.radio"));
		el = de.nativeElement;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof RadioComponent).toBe(true);
	});
});
