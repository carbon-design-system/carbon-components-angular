import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { I18nModule } from "../i18n/i18n.module";

import { CodeSnippet } from "./code-snippet.component";
import { Copy16Module } from "@carbon/icons-angular/lib/copy/16";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";

describe("CodeSnippet", () => {
	let component: CodeSnippet;
	let fixture: ComponentFixture<CodeSnippet>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodeSnippet],
			imports: [
				BrowserAnimationsModule,
				I18nModule,
				Copy16Module,
				ChevronDown16Module
			]
		});

		fixture = TestBed.createComponent(CodeSnippet);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof CodeSnippet).toBe(true);
	});
});
