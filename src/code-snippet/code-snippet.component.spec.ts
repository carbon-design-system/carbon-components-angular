import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CodeSnippet } from "./code-snippet.component";

describe("CodeSnippet", () => {
	let component: CodeSnippet;
	let fixture: ComponentFixture<CodeSnippet>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				CodeSnippet
			]
		});

		fixture = TestBed.createComponent(CodeSnippet);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof CodeSnippet).toBe(true);
	});
});
