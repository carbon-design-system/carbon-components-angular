import { ComponentFixture, TestBed } from "@angular/core/testing";
import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";

import { CodeSnippet } from "./code-snippet.component";

describe("CodeSnippet", () => {
	let component: CodeSnippet;
	let fixture: ComponentFixture<CodeSnippet>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodeSnippet],
			imports: [
				I18nModule,
				IconModule
			]
		});

		fixture = TestBed.createComponent(CodeSnippet);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof CodeSnippet).toBe(true);
	});
});
