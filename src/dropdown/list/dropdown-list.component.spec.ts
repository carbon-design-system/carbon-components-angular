import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { StaticIconModule } from "./../../icon/static-icon.module";

import { DropdownList } from "./dropdown-list.component";
import { ListItem } from "./../list-item.interface";
import { ScrollableList } from "./../scrollable-list.directive";

@Component({
	template: `<ibm-dropdown-list [items]="items" (select)="onSelect($event)"></ibm-dropdown-list>`
})
class DropdownListTestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<ibm-dropdown-list [items]="items" (select)="onSelect($event)" type="multi"></ibm-dropdown-list>`
})
class TestMultiComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

describe("Dropdown list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownList,
				DropdownListTestComponent,
				ScrollableList
			],
			imports: [
				StaticIconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownListTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownList);
		expect(fixture.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});
});

describe("Dropdown multi list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownList,
				TestMultiComponent,
				ScrollableList
			],
			imports: [
				StaticIconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestMultiComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownList);
		fixture.type = "multi";
		expect(fixture.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should multi select", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(1)"));
		itemEl.triggerEventHandler("click", null);
		itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(2)"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});
});
