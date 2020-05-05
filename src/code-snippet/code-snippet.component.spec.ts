import { ComponentFixture, TestBed } from "@angular/core/testing";
import { I18nModule } from "../i18n/index";

import { CodeSnippet } from "./code-snippet.component";
import { CopyModule, ChevronDownModule } from "@carbon/icons-angular";

describe("CodeSnippet", () => {
	let component: CodeSnippet;
	let fixture: ComponentFixture<CodeSnippet>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodeSnippet],
			imports: [
				I18nModule,
				CopyModule,
				ChevronDownModule
			]
		});

		fixture = TestBed.createComponent(CodeSnippet);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof CodeSnippet).toBe(true);
	});
});
