import { Component, asNativeElements, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";

import { ButtonMenu, ButtonMenuItem } from "./button-menu.module";
import { html } from "d3";

@Component({
	selector: "test-cmp",
	template: `
	<n-button-menu>
		<n-button-menu-item>Edit</n-button-menu-item>
		<n-button-menu-item>Delete</n-button-menu-item>
	</n-button-menu>
	`,
	entryComponents: [ButtonMenu, ButtonMenuItem]
})
class ButtonMenuTestComponent {
	doSomething() {
		alert("EventEmitter works!");
	}
}

describe("Button Menu", () => {
	let fixture: ComponentFixture<ButtonMenuTestComponent>;
	let component: ButtonMenuTestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ButtonMenu, ButtonMenuItem, ButtonMenuTestComponent],
			imports: [
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			],
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		expect(fixture.componentInstance instanceof ButtonMenuTestComponent).toBe(true);
	});

	it("should display 'Test' on the main button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu value='Test'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector(".btn--primary").textContent).toContain("Test");
	});

	it("should create a large button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu size='lg'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("n-button-menu").className).toContain("btn-group--lg");
	});

	it("should create a small button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu size='sm'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("n-button-menu").className).toContain("btn-group--sm");
	});

	it("should create a medium button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu size='md'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("n-button-menu").className).toContain("btn-group");
	});

	it("should create a medium button on deafult", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("n-button-menu").className).toContain("btn-group");
	});

	it("should create a primary button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu type='primary'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("button").className).toContain("btn--primary");
	});

	it("should create a primary addon button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu type='primary'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		expect(fixture.debugElement.queryAll(By.css("button"))[1].nativeElement.className).toContain("btn--primary-addon");
	});

	it("should create a primary button by default", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("button").className).toContain("btn--primary");
	});

	it("should create a primary addon button by default", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		expect(fixture.debugElement.queryAll(By.css("button"))[1].nativeElement.className).toContain("btn--primary-addon");
	});

	it("should create a secondary button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu type='secondary'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("button").className).toContain("btn--secondary");
	});

	it("should create a secondary addon button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu type='secondary'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		expect(fixture.debugElement.queryAll(By.css("button"))[1].nativeElement.className).toContain("btn--secondary-addon");
	});

	it("should create a disabled button", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu disabled="true">
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("n-button-menu").getAttribute("disabled")).toEqual("true");
	});

	it("should open and close the menu on Click", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		expect(rootButton.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should open and close the menu on Enter", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Enter"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("true");

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		listItems[0].dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should open and the menu on Space", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: " "});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should open and the menu on Alt+ArrowDown and close on Alt+ArrowUp", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowDown", altKey: true});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("true");

		const event2 = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowUp", altKey: true});
		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		listItems[0].dispatchEvent(event2);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should move focus to the next item in the menu on ArrowDown", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowDown"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		spyOn(listItems[1], "focus");
		listItems[0].dispatchEvent(event);
		expect(listItems[1].focus).toHaveBeenCalled();
	});

	it("should move focus to the first item when pressing ArrowDown on the last item", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowDown"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		spyOn(listItems[0], "focus");
		listItems[1].dispatchEvent(event);
		expect(listItems[0].focus).toHaveBeenCalled();
	});

	it("should move focus to the previous item in the menu on ArrowUp", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowUp"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		spyOn(listItems[0], "focus");
		listItems[1].dispatchEvent(event);
		expect(listItems[0].focus).toHaveBeenCalled();
	});

	it("should move focus to the last item when pressing Arrowup on the first item", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowUp"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		spyOn(listItems[1], "focus");
		listItems[0].dispatchEvent(event);
		expect(listItems[1].focus).toHaveBeenCalled();
	});

	it("should close menu on escape", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Escape"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		listItems[0].dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should close menu on tab", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Tab"});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		listItems[0].dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should close menu on shift+tab", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Tab", shiftKey: true});

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		const listItems = Array.prototype.slice.call(fixture.nativeElement.querySelectorAll("[role='menuitem']"));
		listItems[0].dispatchEvent(event);
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should close menu when clicking outside of the menu", () => {
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();
		fixture.detectChanges();

		document.body.click();
		fixture.detectChanges();
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});

	it("should create the button menu list appended to body", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu appendToBody='true'>
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();

		expect(document.body.querySelector(".btn_menu").parentElement.className).toContain("dropdown");
	});

	it("should close the menu that is appendToBody when out of view", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<div class="appendToBody"
				style="overflow-y: scroll; height: 63px; position: relative;">
					<n-button-menu
					appendToBody="true"
					scrollableContainer=".appendToBody">
						<n-button-menu-item>item1</n-button-menu-item>
					</n-button-menu>
					<br><br><br><br>
				</div>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		rootButton.click();

		window.scroll(0, 1000);
		expect(rootButton.getAttribute("aria-expanded")).toEqual("false");
	});


	it("should call EventEmitter with an alert when the primary button is clicked", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu (onClick)="doSomething()">
					<n-button-menu-item>item1</n-button-menu-item>
				</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();

		spyOn(window, "alert");
		fixture.nativeElement.querySelector("button").click();

		expect(window.alert).toHaveBeenCalledWith("EventEmitter works!");
	});

	it("should call EventEmitter with an alert when the menu is closed", () => {
		TestBed.overrideComponent(ButtonMenuTestComponent, {
			set: {
				template: `
				<n-button-menu (close)="doSomething()">
						<n-button-menu-item>item1</n-button-menu-item>
					</n-button-menu>
				`
			}
		});
		fixture = TestBed.createComponent(ButtonMenuTestComponent);
		fixture.detectChanges();
		const rootButton = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;

		spyOn(window, "alert");
		rootButton.click();
		rootButton.click();

		expect(window.alert).toHaveBeenCalledWith("EventEmitter works!");
	});
});
