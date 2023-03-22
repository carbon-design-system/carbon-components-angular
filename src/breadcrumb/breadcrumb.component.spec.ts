import { Component } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/index";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
import { BreadcrumbItem } from "./breadcrumb-item.interface";
import { OverflowMenu } from "carbon-components-angular/dialog";

@Component({
	selector: "test-breadcrumb",
	template: `
	<cds-breadcrumb [noTrailingSlash]="noTrailingSlash">
		<cds-breadcrumb-item href="#">
			Breadcrumb 1
		</cds-breadcrumb-item>
		<cds-breadcrumb-item href="#">
			Breadcrumb 2
		</cds-breadcrumb-item>
		<cds-breadcrumb-item href="#">
			Breadcrumb 3
		</cds-breadcrumb-item>
		<cds-breadcrumb-item href="#">
			Breadcrumb 4
		</cds-breadcrumb-item>
		<cds-breadcrumb-item href="#">
			Breadcrumb 5
		</cds-breadcrumb-item>
	</cds-breadcrumb>`
})
class TestBreadcrumb {
	noTrailingSlash = true;
}

@Component({
	selector: "test-breadcrumb",
	template: `
	<cds-breadcrumb
		[noTrailingSlash]="noTrailingSlash"
		[threshold]="threshold"
		[items]="items">
	</cds-breadcrumb>`
})
class TestBreadcrumbModel {
	noTrailingSlash = true;
	threshold = 4;
	items = [];
}

describe("Breadcrumb", () => {
	let component: Breadcrumb;
	let fixture: ComponentFixture<Breadcrumb>;

	beforeEach(waitForAsync(() => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
			teardown: { destroyAfterEach: false }
		});

		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				I18nModule
			],
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
		expect(breadcrumbItemElements[1].children[0].name).toEqual("cds-overflow-menu");
	});
});
