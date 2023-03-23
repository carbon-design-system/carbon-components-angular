import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";

import { DropdownList } from "./dropdown-list.component";
import { ListItem } from "./../list-item.interface";
import { ScrollableList } from "./../scrollable-list.directive";
import { I18nModule } from "../../i18n/index";

@Component({
	template: `<cds-dropdown-list [items]="items" (select)="onSelect($event)"></cds-dropdown-list>`
})
class DropdownListTest {
	items = [
		<ListItem>{content: "one", selected: false},
		<ListItem>{content: "two", selected: false}
	];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<cds-dropdown-list [items]="items" (select)="onSelect($event)" type="multi"></cds-dropdown-list>`
})
class MultiTest {
	items = [
		<ListItem>{content: "one", selected: false},
		<ListItem>{content: "two", selected: false}
	];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

describe("Dropdown list", () => {
	let fixture: ComponentFixture<DropdownListTest>, wrapper: DropdownListTest;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownList,
				DropdownListTest,
				ScrollableList
			],
			imports: [
				I18nModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		let fixture2 = TestBed.createComponent(DropdownList);
		expect(fixture2.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		expect(wrapper.selected.content).toBe("one");
	});

	it("should disable a list-item", () => {
		wrapper.items = [
			<ListItem>{content: "one", selected: false},
			<ListItem>{content: "two", selected: false, disabled: false},
			<ListItem>{content: "three", selected: false, disabled: true}
		];
		fixture.detectChanges();
		const disabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item[disabled]"));
		expect(disabledEls.length).toEqual(1);
		const enabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item:not([disabled])"));
		expect(enabledEls.length).toEqual(2);
	});
});

describe("Dropdown multi list", () => {
	let fixture: ComponentFixture<MultiTest>, wrapper: MultiTest;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownList,
				MultiTest,
				ScrollableList
			],
			imports: [
				I18nModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MultiTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		let fixture2 = TestBed.createComponent(DropdownList);
		fixture2.componentInstance.type = "multi";
		expect(fixture2.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should multi select", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(1)"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(2)"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});

	it("should disable a list-item and its checkbox", () => {
		wrapper.items = [
			<ListItem>{content: "one", selected: false},
			<ListItem>{content: "two", selected: false, disabled: false},
			<ListItem>{content: "three", selected: false, disabled: true}
		];
		fixture.detectChanges();
		const disabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item[disabled]"));
		const disabledInputEls = fixture.debugElement.queryAll(By.css(".cds--checkbox[disabled]"));
		expect(disabledEls.length).toEqual(1);
		expect(disabledInputEls.length).toEqual(1);
		const enabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item:not([disabled])"));
		const enabledInputEls = fixture.debugElement.queryAll(By.css(".cds--checkbox:not([disabled])"));
		expect(enabledEls.length).toEqual(2);
		expect(enabledInputEls.length).toEqual(2);
	});
});
