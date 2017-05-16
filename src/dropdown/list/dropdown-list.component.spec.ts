import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { DropdownList } from "./dropdown-list.component";
import { ListItem } from "./../list-item.interface";

@Component({
	template: `<cdl-dropdown-list [items]="items" (select)="onSelect($event)"></cdl-dropdown-list>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

describe("Dropdown", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownList,
				TestComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownList);
		expect(fixture.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css(".option"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});
});
