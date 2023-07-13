import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Search } from "./search.component";
import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";

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
		component.value = "Text";
		fixture.detectChanges();
		expect(inputElement.value).toEqual("Text");
	});

	it("should bind input disabled", () => {
		expect(inputElement.disabled).toEqual(false);
		component.disabled = true;
		fixture.detectChanges();
		expect(inputElement.disabled).toEqual(true);
	});

	it("should bind input required", () => {
		component.required = true;
		fixture.detectChanges();
		expect(inputElement.required).toEqual(true);
	});

	it("should display component of the correct size", () => {
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		component.size = "lg";
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--lg")).toEqual(true);
		component.size = "sm";
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--sm")).toEqual(true);
	});

	it("should display clear button", () => {
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		component.value = "";
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(true);
		component.value = "Text";
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("cds--search-close--hidden")).toEqual(false);
	});

	it("should clear input when clear button is clicked", () => {
		component.value = "Text";
		fixture.detectChanges();
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		clearButtonElement.click();
		fixture.detectChanges();
		expect(component.value).toEqual("");
	});

	it("should have dark and light theme", () => {
		containerElement = fixture.debugElement.query(By.css(".cds--search")).nativeElement;
		component.theme = "dark";
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--light")).toEqual(false);
		component.theme = "light";
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--search--light")).toEqual(true);
	});
});
