import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StaticIconModule } from "../icon/static-icon.module";

import { CodeSnippet } from "./code-snippet.component";

describe("CodeSnippet", () => {
	let component: CodeSnippet;
	let fixture: ComponentFixture<CodeSnippet>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodeSnippet],
			imports: [BrowserAnimationsModule, StaticIconModule],
			providers: []
		});

		fixture = TestBed.createComponent(CodeSnippet);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof CodeSnippet).toBe(true);
	});
});
