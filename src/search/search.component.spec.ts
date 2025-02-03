import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";
import { Search } from "./search.component";

describe("Search", () => {
	let component: Search;
	let fixture: ComponentFixture<Search>;
	let inputElement: HTMLInputElement;
	let containerElement: HTMLElement;
	let clearButtonElement: HTMLButtonElement;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [Search],
			imports: [
				FormsModule,
				I18nModule,
				IconModule
			],
			providers: []
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Search);
		fixture.detectChanges();
		component = fixture.componentInstance;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Search).toBe(true);
	});

	it("should bind input value", () => {
		fixture.componentRef.setInput("value", "Text");
		fixture.detectChanges();
		expect(inputElement.value).toEqual("Text");
	});

	it("should bind input disabled", () => {
		expect(inputElement.disabled).toEqual(false);
		fixture.componentRef.setInput("disabled", true);
		fixture.detectChanges();
		expect(inputElement.disabled).toEqual(true);
	});

	it("should bind input required", () => {
		fixture.componentRef.setInput("required", true);
		fixture.detectChanges();
		expect(inputElement.required).toEqual(true);
	});

	it("should display component of the correct size", () => {
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		fixture.componentRef.setInput("size", "lg");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--lg")).toEqual(true);
		fixture.componentRef.setInput("size", "sm");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--sm")).toEqual(true);
	});

	it("should display clear button", () => {
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		fixture.componentRef.setInput("value", "");
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(true);
		fixture.componentRef.setInput("value", "Text");
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(false);
	});

	it("should clear input when clear button is clicked", () => {
		fixture.componentRef.setInput("value", "Text");
		fixture.detectChanges();
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		clearButtonElement.click();
		fixture.detectChanges();
		expect(component.value).toEqual("");
	});

	it("should clear the input when the clear button is clicked on the expandable component", () => {
		fixture.componentRef.setInput("expandable", true);
		fixture.componentRef.setInput("value", "TextToClear");
		fixture.detectChanges();
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		clearButtonElement.click();
		fixture.detectChanges();
		expect(component.value).toEqual("");
	});

	it("should clear the input when the escape key is pressed", () => {
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		fixture.componentRef.setInput("value", "TextToClear");
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(false);
		component.keyDown(new KeyboardEvent("keydown", {
			"key": "Escape"
		}));
		fixture.detectChanges();
		expect(component.value).toBe("");
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(true);
	});

	it("should clear the input and keep the expanded state open when the escape key is pressed", () => {
		fixture.componentRef.setInput("expandable", true);
		fixture.componentRef.setInput("active", true);
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		fixture.componentRef.setInput("value", "TextToClear");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--expanded")).toEqual(true);
		component.keyDown(new KeyboardEvent("keydown", {
			"key": "Escape"
		}));
		fixture.detectChanges();
		expect(component.value).toBe("");
		expect(containerElement.className.includes("cds--search--expanded")).toEqual(true);
	});

	it("should close the expandable search component when esc is pressed when content is empty", () => {
		fixture.componentRef.setInput("expandable", true);
		fixture.componentRef.setInput("active", true);
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		fixture.componentRef.setInput("value", "");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--expanded")).toEqual(true);
		component.keyDown(new KeyboardEvent("keydown", {
			"key": "Escape"
		}));
		fixture.detectChanges();
		expect(component.active).toEqual(false);
		expect(containerElement.className.includes("cds--search--expanded")).toEqual(false);
	});

	it("should have dark and light theme", () => {
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		fixture.componentRef.setInput("theme", "dark");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--light")).toEqual(false);
		fixture.componentRef.setInput("theme", "light");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--light")).toEqual(true);
	});
});
