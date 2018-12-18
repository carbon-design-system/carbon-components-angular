import { Component } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
import { BreadcrumbItem } from "./breadcrumb-item.interface";
import { OverflowMenu } from "../dialog/overflow-menu/overflow-menu.component";

@Component({
	selector: "test-breadcrumb",
	template: `
	<ibm-breadcrumb [noTrailingSlash]="_noTrailingSlash">
		<ibm-breadcrumb-item href="#">
			Breadcrumb 1
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item href="#">
			Breadcrumb 2
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item href="#">
			Breadcrumb 3
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item href="#">
			Breadcrumb 4
		</ibm-breadcrumb-item>
		<ibm-breadcrumb-item href="#">
			Breadcrumb 5
		</ibm-breadcrumb-item>
	</ibm-breadcrumb>`,
	entryComponents: [Breadcrumb]
})
class TestBreadcrumb {
	noTrailingSlash = true;
}

@Component({
	selector: "test-breadcrumb",
	template: `
	<ibm-breadcrumb
		[noTrailingSlash]="_noTrailingSlash"
		[threshold]="_threshold"
		[items]="_items">
	</ibm-breadcrumb>`,
	entryComponents: [Breadcrumb]
})
class TestBreadcrumbModel {
	noTrailingSlash = true;
	threshold = 4;
	items = [];
}

describe("Breadcrumb", () => {
	let component: Breadcrumb;
	let fixture: ComponentFixture<Breadcrumb>;

	beforeEach(async(() => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

		TestBed.configureTestingModule({
			imports: [FormsModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [
				Breadcrumb,
				BreadcrumbItemComponent,
				TestBreadcrumb,
				TestBreadcrumbModel
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Breadcrumb);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(component).toBeTruthy();
	});

	it("should create a breadcrumb with four items and no overflow menu", () => {
		const testFixture: ComponentFixture<TestBreadcrumb> =
			TestBed.createComponent(TestBreadcrumb);
		const testComponent = testFixture.componentInstance;
		testFixture.detectChanges();

		const breadcrumbElement = testFixture.debugElement.query(By.directive(Breadcrumb));
		expect(breadcrumbElement).not.toBeNull();
		const breadcrumbItemElements = testFixture.debugElement.queryAll(By.directive(BreadcrumbItemComponent));
		expect(breadcrumbItemElements).not.toBeNull();
		expect(breadcrumbItemElements.length).toBe(5);
		const overflowMenuElement = testFixture.debugElement.query(By.directive(OverflowMenu));
		expect(overflowMenuElement).toBeNull();
	});

	it("should create a breadcrumb with five items and an overflow menu in second position", () => {
		const testFixture: ComponentFixture<TestBreadcrumbModel> =
			TestBed.createComponent(TestBreadcrumbModel);
		const testComponent = testFixture.componentInstance;
		testComponent.threshold = 4;
		testComponent.items = [
			{ content: "Breadcrumb 1", href: "#1" },
			{ content: "Breadcrumb 2", href: "#2" },
			{ content: "Breadcrumb 3", href: "#3" },
			{ content: "Breadcrumb 4", href: "#4" },
			{ content: "Breadcrumb 5", href: "#5" }
		];
		testFixture.detectChanges();

		const breadcrumbElement = testFixture.debugElement.query(By.directive(Breadcrumb));
		expect(breadcrumbElement).not.toBeNull();
		const breadcrumbItemElements = testFixture.debugElement.queryAll(By.directive(BreadcrumbItemComponent));
		expect(breadcrumbItemElements).not.toBeNull();
		expect(breadcrumbItemElements.length).toBe(4); // 4 because one is created for the overflow menu
		expect(breadcrumbItemElements[1].children[0].name).toEqual("ibm-overflow-menu");
	});
});
