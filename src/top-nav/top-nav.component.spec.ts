import { Component, DebugElement } from "@angular/core";

import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";

import { By } from "@angular/platform-browser";

import { TopNav } from "./top-nav.component";


describe("Top Nav", () => {
	let component: TopNav;
	let fixture: ComponentFixture<TopNav>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TopNav],
			imports: [
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});

		fixture = TestBed.createComponent(TopNav);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("header.top-nav"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof TopNav).toBe(true);
	});
});
