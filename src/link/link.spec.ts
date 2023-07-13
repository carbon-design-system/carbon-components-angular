import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Link } from "./link.directive";

@Component({
	template: `<a href="https://angular.carbondesignsystem.com/" cdsLink>link</a>`
})
class TestLinkComponent {
}

@Component({
	template: `<a href="https://angular.carbondesignsystem.com/" [disabled]="1+1===2" cdsLink>link</a>`
})
class TestDisabledLinkComponent {
}

@Component({
	template: `<a href="https://angular.carbondesignsystem.com/" [inline]="true" cdsLink>link</a>`
})
class TestInlineLinkComponent {
}

describe("Link", () => {
	it("should create a Link", () => {
		TestBed.configureTestingModule({
			declarations: [TestLinkComponent, Link]
		});

		let fixture: ComponentFixture<TestLinkComponent> = TestBed.createComponent(TestLinkComponent);
		let component: TestLinkComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(Link));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.attributes["aria-disabled"]).toBeUndefined();
		expect(directiveEl.attributes["tabindex"]).toBeUndefined();
		expect(directiveEl.attributes["href"]).toBe("https://angular.carbondesignsystem.com/");
	});

	it("should create a disabled link", () => {
		TestBed.configureTestingModule({
			declarations: [TestDisabledLinkComponent, Link]
		});

		let fixture: ComponentFixture<TestDisabledLinkComponent> = TestBed.createComponent(TestDisabledLinkComponent);
		let component: TestDisabledLinkComponent = fixture.componentInstance;
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(Link));
		expect(directiveEl.attributes["aria-disabled"]).toBe("true");
		expect(directiveEl.attributes["tabindex"]).toBe("-1");
	});

	it("should create an inline link", () => {
		TestBed.configureTestingModule({
			declarations: [TestInlineLinkComponent, Link]
		});

		let fixture: ComponentFixture<TestInlineLinkComponent> = TestBed.createComponent(TestInlineLinkComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(Link));
		expect(directiveEl.nativeElement.classList.contains("cds--link--inline")).toBeTruthy();
	});
});
