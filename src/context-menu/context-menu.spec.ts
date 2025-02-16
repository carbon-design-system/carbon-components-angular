import { Component, Input } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ContextMenuModule } from "./context-menu.module";
import { IconModule } from "../icon";
import { By } from "@angular/platform-browser";



@Component({
	template: `
		<cds-context-menu [open]="open">
			<cds-context-menu-item label="Option with icon" icon="calendar"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item type="checkbox" label="Enable magic"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-group
				type="checkbox"
				label="Selection group">
				<cds-context-menu-item type="checkbox" label="Blue"></cds-context-menu-item>
				<cds-context-menu-item type="checkbox" label="Red" [checked]="true"></cds-context-menu-item>
			</cds-context-menu-group>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item label="Radio flyout">
				<cds-context-menu>
					<cds-context-menu-group
						type="radio"
						[value]="radioGroupValue"
						(valueChange)="onRadioChange($event)">
						<cds-context-menu-item type="radio" label="Radio one" value="one"></cds-context-menu-item>
						<cds-context-menu-item type="radio" label="Radio two" value="two"></cds-context-menu-item>
					</cds-context-menu-group>
				</cds-context-menu>
			</cds-context-menu-item>
		</cds-context-menu>
	`
})
class MenuTestComponent {
	@Input() open = true;
	radioGroupValue = "one";

	onRadioChange(event) {}
}

describe("Menu", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MenuTestComponent
			],
			imports: [
				ContextMenuModule,
				IconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should remove open css class when open is set to false", () => {
		const menu = fixture.debugElement.query(By.css("cds-context-menu"));
		wrapper.open = false;
		fixture.detectChanges();
		expect(menu.nativeElement.className.includes("cds--menu--open").nativeElement).toBeFalsy();
	});

	it("Should have red checkbox checked by default", () => {
		const selectedRadio = fixture.debugElement.query(
			By.css("cds-context-menu-item[type=\"checkbox\"][label=\"Red\"]")
		);
		expect(selectedRadio.componentInstance.checked).toBeTrue();
	});

	it("Should have radio one selected by default", () => {
		const selectedRadio = fixture.debugElement.query(
			By.css("cds-context-menu-item[type=\"radio\"][value=\"one\"]")
		);
		expect(selectedRadio.componentInstance.checked).toBeTrue();
	});

	it("should emit valueChange from group when a radio item is clicked", () => {
		spyOn(wrapper, "onRadioChange");

		const radioTwo = fixture.debugElement.query(
			By.css("cds-context-menu-item[type=\"radio\"][value=\"two\"]")
		);

		radioTwo.nativeElement.click();
		fixture.detectChanges();

		expect(wrapper.onRadioChange).toHaveBeenCalledWith("two");
	});

	it("should apply appropriate attributes to the divider component", () => {
		const divider = fixture.debugElement.query(
			By.css("cds-context-menu-divider")
		);

		expect(divider.nativeElement.className.includes("cds--menu-item-divider")).toBeTrue();
		expect(divider.nativeElement.role).toEqual("separator");
	});

	it("should detect if there is a child context menu", () => {
		const flyoutElement = fixture.debugElement.query(
			By.css("cds-context-menu-item[label=\"Radio flyout\"]")
		);
		const flyoutComponent = flyoutElement.componentInstance;

		expect(flyoutComponent.childContextMenu).toBeTruthy();
		expect(flyoutComponent.hasChildren).toBeTruthy();
	});
});
