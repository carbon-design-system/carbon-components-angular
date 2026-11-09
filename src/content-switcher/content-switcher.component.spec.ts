import { fakeAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { advancedFakeAsync } from "../test-helpers/change-detection";
import { ContentSwitcher } from "./content-switcher.component";
import { ContentSwitcherOption } from "./index";

@Component({
	template: `
		<cds-content-switcher (selected)="selected($event)" ariaLabel="Test">
			<button ibmContentOption name="First" id="first">First section</button>
			<button ibmContentOption name="Second" id="second">Second section</button>
			<button ibmContentOption name="Third" id="third">Third section</button>
		</cds-content-switcher>
	`,
	imports: [ContentSwitcher, ContentSwitcherOption]
})
class ContentSwitcherTest {
	selectedValue = null;
	selected(event) {
		this.selectedValue = event.name;
	}
}

describe("ContentSwitcher", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ContentSwitcherTest]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ContentSwitcher);
		expect(fixture.componentInstance instanceof ContentSwitcher).toBe(true);
	});

	it("should set arialabel to 'Test'", () => {
		fixture = TestBed.createComponent(ContentSwitcherTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-content-switcher"));
		expect(element.nativeElement.getAttribute("arialabel")).toBe("Test");
	});

	it("should set all options in the content switcher component", () => {
		fixture = TestBed.createComponent(ContentSwitcherTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-content-switcher"));
		const component = element.componentInstance;
		expect(component.options.length).toBe(3);
		component.options.forEach(option => expect(option instanceof ContentSwitcherOption).toBe(true));
	});

	it("should emit the correct value according to which button is clicked", () => {
		const click = new Event("click");
		fixture = TestBed.createComponent(ContentSwitcherTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-content-switcher"));

		const firstButton = element.nativeElement.querySelector("#first");
		const secondButton = element.nativeElement.querySelector("#second");
		const thirdButton = element.nativeElement.querySelector("#third");

		firstButton.dispatchEvent(click);
		expect(wrapper.selectedValue).toBe("First");
		secondButton.dispatchEvent(click);
		expect(wrapper.selectedValue).toBe("Second");
		thirdButton.dispatchEvent(click);
		expect(wrapper.selectedValue).toBe("Third");
	});

	it("should emit the correct value according to which button is focused on", () => {
		const focus = new Event("focus");
		fixture = TestBed.createComponent(ContentSwitcherTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-content-switcher"));

		const firstButton = element.nativeElement.querySelector("#first");
		const secondButton = element.nativeElement.querySelector("#second");
		const thirdButton = element.nativeElement.querySelector("#third");

		firstButton.dispatchEvent(focus);
		expect(wrapper.selectedValue).toBe("First");
		secondButton.dispatchEvent(focus);
		expect(wrapper.selectedValue).toBe("Second");
		thirdButton.dispatchEvent(focus);
		expect(wrapper.selectedValue).toBe("Third");
	});

	it("should unselect all other options when an option is chosen", () => {
		const click = new Event("click");
		fixture = TestBed.createComponent(ContentSwitcherTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-content-switcher"));
		const firstButton = element.nativeElement.querySelector("#first");
		const secondButton = element.nativeElement.querySelector("#second");

		firstButton.dispatchEvent(click);
		element.componentInstance.options.forEach(option => {
			if (option.name !== "First") {
				expect(option.selectedClass).toBe(false);
			} else {
				expect(option.selectedClass).toBe(true);
			}
		});

		secondButton.dispatchEvent(click);
		element.componentInstance.options.forEach(option => {
			if (option.name !== "Second") {
				expect(option.selectedClass).toBe(false);
			} else {
				expect(option.selectedClass).toBe(true);
			}
		});
	});

	it("should move the selected class and aria state to the chosen option", fakeAsync(() => {
		fixture = TestBed.createComponent(ContentSwitcherTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const first = fixture.nativeElement.querySelector("#first");
		const second = fixture.nativeElement.querySelector("#second");
		expect(first.classList).toContain("cds--content-switcher--selected");

		second.dispatchEvent(new Event("click"));
		advancedFakeAsync(fixture);

		expect(first.classList).not.toContain("cds--content-switcher--selected");
		expect(first.getAttribute("aria-selected")).toBe("false");
		expect(first.getAttribute("tabIndex")).toBe("-1");
		expect(second.classList).toContain("cds--content-switcher--selected");
		expect(second.getAttribute("aria-selected")).toBe("true");
	}));

	it("should select the first option on init", fakeAsync(() => {
		fixture = TestBed.createComponent(ContentSwitcherTest);
		fixture.detectChanges();

		const first = fixture.nativeElement.querySelector("#first");
		expect(first.classList).not.toContain("cds--content-switcher--selected");

		advancedFakeAsync(fixture);

		expect(first.classList).toContain("cds--content-switcher--selected");
		expect(first.getAttribute("aria-selected")).toBe("true");
		expect(first.getAttribute("tabIndex")).toBe("0");
	}));
});
