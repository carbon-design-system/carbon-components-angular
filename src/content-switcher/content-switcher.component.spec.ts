import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { ContentSwitcher } from "./content-switcher.component";
import { ContentSwitcherModule, ContentSwitcherOption } from "./index";

@Component({
	template: `
		<cds-content-switcher (selected)="selected($event)" ariaLabel="Test">
			<button ibmContentOption name="First" id="first">First section</button>
			<button ibmContentOption name="Second" id="second">Second section</button>
			<button ibmContentOption name="Third" id="third">Third section</button>
		</cds-content-switcher>
	`
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
			declarations: [ContentSwitcherTest],
			imports: [ContentSwitcherModule]
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
});
