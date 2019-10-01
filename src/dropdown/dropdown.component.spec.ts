import { Component, asNativeElements } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ListItem } from "./list-item.interface";
import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "../i18n/i18n.module";
import { DropdownService } from "./dropdown.service";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
import { FormsModule } from "@angular/forms";

@Component({
	template: `
	<ibm-dropdown
		placeholder="test"
		class="custom-class"
		(selected)="onSelect($event)"
		[(ngModel)]="model">
		<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
	</ibm-dropdown>`
})
class DropdownTest {
	model = null;
	items = [{content: "one", id: 0, selected: false}, {content: "two", id: 1, selected: false}];
	selected: ListItem;
	onSelect() {}
}

describe("Dropdown", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Dropdown,
				DropdownList,
				DropdownTest,
				ScrollableList
			],
			imports: [
				I18nModule,
				PlaceholderModule,
				ChevronDown16Module,
				FormsModule
			],
			providers: [ DropdownService ]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Dropdown);
		expect(fixture.componentInstance instanceof Dropdown).toBe(true);
	});

	it("should expand the dropdown on click", () => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--list-box__field"));
		element.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(element.nativeElement.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should propagate the change in selected option back to the form and emit a selected event", () => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onSelect");
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-dropdown"));
		element.componentInstance.menuIsClosed = false;
		fixture.detectChanges();
		element.nativeElement.querySelector(".bx--list-box__menu-item__option").click();
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".bx--list-box__label").textContent).toEqual("one");
		expect(wrapper.onSelect).toHaveBeenCalled();
		expect(wrapper.model.content).toEqual("one");
		expect(wrapper.model.selected).toBe(true);
	});

	it("should set the placeholder text to test", () => {
		fixture = TestBed.createComponent(DropdownTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-dropdown"));
		expect(element.nativeElement.querySelector(".bx--list-box__label").textContent).toEqual("test");
	});

	it("should keep custom classes on the host el", () => {
		const el = fixture.debugElement.query(By.css("ibm-dropdown"));
		expect(el.nativeElement.classList.contains("custom-class")).toBe(true);
	});
});
