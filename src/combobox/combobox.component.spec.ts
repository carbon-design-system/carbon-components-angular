import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { StaticIconModule } from "./../icon/static-icon.module";

import { ListItem } from "./../dropdown/list-item.interface";
import { ComboBox } from "./combobox.component";
import { Pill } from "../pill-input/pill.component";
import { PillInput } from "../pill-input/pill-input.component";
import { DropdownList } from "./../dropdown/list/dropdown-list.component";
import { ScrollableList } from "./../dropdown/scrollable-list.directive";

@Component({
	template: `
	<ibm-combo-box
		placeholder="placeholder"
		[items]="items"
		(select)="onSelect($event)">
		<ibm-dropdown-list></ibm-dropdown-list>
	</ibm-combo-box>`
})
class ComboboxTestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

xdescribe("Combo box", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComboBox,
				PillInput,
				Pill,
				DropdownList,
				ComboboxTestComponent,
				ScrollableList
			],
			imports: [
				StaticIconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ComboboxTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ComboBox);
		fixture.detectChanges();
		expect(fixture.componentInstance instanceof ComboBox).toBe(true);
	});

	// it("should select an item", () => {
	// 	let itemEl = fixture.debugElement.query(By.css(".option"));
	// 	itemEl.triggerEventHandler("click", null);
	// 	expect(wrapper.selected.content).toBe("one");
	// });

	// it("should have a placeholder of 'placeholder'", () => {
	// 	let placeholder = fixture.debugElement.query(By.css(".placeholder"));
	// 	expect(placeholder.nativeElement.textContent.trim()).toBe("placeholder");
	// });

	it("should change the placeholder value", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		itemEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		let comboInput = fixture.debugElement.query(By.css("input"));
		expect(comboInput.nativeElement.value.trim()).toBe("one");
	});
});
