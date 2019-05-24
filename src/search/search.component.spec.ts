import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Search } from "./search.component";
import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/i18n.module";
import { Search16Module } from "@carbon/icons-angular/lib/search/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

describe("Search", () => {
	let component: Search;
	let fixture: ComponentFixture<Search>;
	let inputElement: HTMLInputElement;
	let containerElement: HTMLElement;
	let clearButtonElement: HTMLButtonElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Search],
			imports: [
				FormsModule,
				I18nModule,
				Search16Module,
				Close16Module
			],
			providers: []
		})
		.overrideComponent(Search, {
			remove: {
				templateUrl: "search.component.html"
			},
			add: {
				template: require("./search.component.html")
			}
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
		containerElement = fixture.debugElement.query(By.css(".bx--search")).nativeElement;
		component.size = "lg";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--search--xl")).toEqual(true);
		component.size = "sm";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--search--sm")).toEqual(true);
	});

	it("should display clear button", () => {
		clearButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		component.value = "";
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("bx--search-close--hidden")).toEqual(true);
		component.value = "Text";
		fixture.detectChanges();
		expect(clearButtonElement.className.includes("bx--search-close--hidden")).toEqual(false);
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
		containerElement = fixture.debugElement.query(By.css(".bx--search")).nativeElement;
		component.theme = "dark";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--search--light")).toEqual(false);
		component.theme = "light";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--search--light")).toEqual(true);
	});
});
