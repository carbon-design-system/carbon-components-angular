import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { advancedFakeAsync, hasClass } from "../test-helpers/change-detection";

import { CodeSnippet } from "./code-snippet.component";
import { CodeSnippetModule } from "./code-snippet.module";

@Component({
	template: `
		<cds-code-snippet
			[display]="display"
			[feedbackTimeout]="feedbackTimeout">{{code}}</cds-code-snippet>
	`
})
class CodeSnippetTest {
	@ViewChild(CodeSnippet) snippet: CodeSnippet;
	display = "single";
	feedbackTimeout = 2000;
	code = "npm install carbon-components-angular";
}

describe("CodeSnippet", () => {
	let fixture: ComponentFixture<CodeSnippetTest>;
	let snippet: CodeSnippet;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodeSnippetTest],
			imports: [CodeSnippetModule]
		});

		fixture = TestBed.createComponent(CodeSnippetTest);
		fixture.detectChanges();
		snippet = fixture.componentInstance.snippet;
	});

	it("should work", () => {
		expect(snippet instanceof CodeSnippet).toBe(true);
	});

	it("should show the copied feedback once the clipboard promise resolves", fakeAsync(() => {
		spyOn(window.navigator.clipboard, "writeText").and.returnValue(Promise.resolve());

		snippet.onCopyButtonClicked();
		advancedFakeAsync(fixture);

		expect(snippet.showFeedback).toBe(true);
		expect(hasClass(fixture, "button", "cds--copy-btn--fade-in")).toBe(true);
		expect(hasClass(fixture, "button", "cds--copy-btn--animating")).toBe(true);

		// drain the feedback reset timer this handler scheduled
		advancedFakeAsync(fixture, fixture.componentInstance.feedbackTimeout);
	}));

	it("should hide the copied feedback again after the timeout", fakeAsync(() => {
		spyOn(window.navigator.clipboard, "writeText").and.returnValue(Promise.resolve());

		snippet.onCopyButtonClicked();
		advancedFakeAsync(fixture);
		expect(hasClass(fixture, "button", "cds--copy-btn--fade-in")).toBe(true);

		advancedFakeAsync(fixture, fixture.componentInstance.feedbackTimeout);

		expect(snippet.showFeedback).toBe(false);
		expect(hasClass(fixture, "button", "cds--copy-btn--fade-in")).toBe(false);
		expect(hasClass(fixture, "button", "cds--copy-btn--fade-out")).toBe(false);
	}));

	it("should show the overflow indicator when the snippet is scrolled", () => {
		const container = fixture.nativeElement.querySelector(".cds--snippet-container");
		// force a horizontal overflow so `handleScroll` has something to report
		Object.defineProperty(container, "scrollWidth", { value: 400, configurable: true });
		Object.defineProperty(container, "clientWidth", { value: 100, configurable: true });
		Object.defineProperty(container, "scrollLeft", { value: 50, configurable: true });

		container.dispatchEvent(new Event("scroll"));
		fixture.detectChanges();

		expect(snippet.hasLeft).toBe(true);
		expect(snippet.hasRight).toBe(true);
		expect(fixture.nativeElement.querySelector(".cds--snippet__overflow-indicator--left")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".cds--snippet__overflow-indicator--right")).toBeTruthy();
	});

	it("should show the overflow indicator when the window is resized", () => {
		const container = fixture.nativeElement.querySelector(".cds--snippet-container");
		Object.defineProperty(container, "scrollWidth", { value: 400, configurable: true });
		Object.defineProperty(container, "clientWidth", { value: 100, configurable: true });
		Object.defineProperty(container, "scrollLeft", { value: 0, configurable: true });

		window.dispatchEvent(new Event("resize"));
		fixture.detectChanges();

		expect(snippet.hasLeft).toBe(false);
		expect(snippet.hasRight).toBe(true);
		expect(fixture.nativeElement.querySelector(".cds--snippet__overflow-indicator--right")).toBeTruthy();
	});
});
