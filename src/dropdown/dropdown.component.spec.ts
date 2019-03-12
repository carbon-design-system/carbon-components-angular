import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";
import { StaticIconModule } from "./../icon/static-icon.module";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ListItem } from "./list-item.interface";
import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "../i18n/i18n.module";
import { DropdownService } from "./dropdown.service";
import { PlaceholderModule } from "./../placeholder/placeholder.module";

@Component({
	template: `
	<ibm-dropdown
		placeholder="test"
		class="custom-class"
		(selected)="onSelect($event)">
		<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
	</ibm-dropdown>`
})
class DropdownTest {
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
				Dropdown,
				DropdownList,
				DropdownTest,
				ScrollableList
			],
			imports: [
				StaticIconModule,
				I18nModule,
				PlaceholderModule
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

	// it("should select an item", () => {
	// 	let itemEl = fixture.debugElement.query(By.css(".option"));
	// 	itemEl.triggerEventHandler("click", null);
	// 	fixture.detectChanges();
	// 	expect(wrapper.selected.content).toBe("one");
	// });

	xit("should change the placeholder value", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		let buttonEl = fixture.debugElement.query(By.css(".bx--list-box__label"));
		buttonEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		itemEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(buttonEl.nativeElement.textContent.trim()).toBe("one");
	});

	it("should keep custom classes on the host el", () => {
		const el = fixture.debugElement.query(By.css("ibm-dropdown"));
		expect(el.nativeElement.classList.contains("custom-class")).toBe(true);
	});
});
