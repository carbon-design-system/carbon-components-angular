import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { UIShellModule } from "../ui-shell.module";
import { I18nModule } from "../../i18n";
import { SwitcherList } from "./switcher-list.component";
import { SwitcherListItem } from "./switcher-list-item.component";

@Component({
	template: `
		<cds-switcher-list>
			<cds-switcher-list-item [active]="firstActive" href="#one">Product one</cds-switcher-list-item>
			<cds-switcher-list-item [active]="secondActive" href="#two">Product two</cds-switcher-list-item>
		</cds-switcher-list>
	`,
	imports: [UIShellModule]
})
class SwitcherListTest {
	@ViewChild(SwitcherList) list: SwitcherList;
	firstActive = false;
	secondActive = false;
}

describe("SwitcherList", () => {
	let fixture: ComponentFixture<SwitcherListTest>;
	let wrapper: SwitcherListTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				SwitcherListTest,
				RouterModule.forRoot([], { initialNavigation: "disabled", useHash: true })
			]
		});

		fixture = TestBed.createComponent(SwitcherListTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.list instanceof SwitcherList).toBe(true);
		expect(fixture.debugElement.queryAll(By.directive(SwitcherListItem)).length).toBe(2);
	});

	it("should project its items and render their links", () => {
		const links = fixture.nativeElement.querySelectorAll("a.cds--switcher__item-link");
		expect(links.length).toBe(2);
		expect(links[0].textContent).toContain("Product one");
		expect(links[0].getAttribute("href")).toBe("#one");
	});

	it("should move the selected class between items", () => {
		const links = fixture.nativeElement.querySelectorAll("a.cds--switcher__item-link");
		expect(links[0].classList).not.toContain("cds--switcher__item-link--selected");

		wrapper.firstActive = true;
		fixture.detectChanges();
		expect(links[0].classList).toContain("cds--switcher__item-link--selected");

		wrapper.firstActive = false;
		wrapper.secondActive = true;
		fixture.detectChanges();

		expect(links[0].classList).not.toContain("cds--switcher__item-link--selected");
		expect(links[1].classList).toContain("cds--switcher__item-link--selected");
	});

	it("should select the item when active is set on the instance", () => {
		const items = fixture.debugElement.queryAll(By.directive(SwitcherListItem));
		const links = fixture.nativeElement.querySelectorAll("a.cds--switcher__item-link");

		items[1].componentInstance.active = true;
		fixture.detectChanges();

		expect(links[1].classList).toContain("cds--switcher__item-link--selected");
	});
});
