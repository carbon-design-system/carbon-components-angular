import { Component, asNativeElements, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";

import { SideNav, SideNavGroup, SideNavItem, SideNavPaneTitle, SideNavSubpanel } from "./side-nav.module";
import { TreeView, TreeViewItem, TreeViewWrapper } from "./../tree-view/tree-view.module";
import { getFocusElementList } from "./../common/tab.service";

@Component({
	selector: "test-cmp",
	template: `
	<n-side-nav [open]="true">
		<n-side-nav-group [expanded]="groupExpand" tabindex="-1">
			<span class="accordion_title">Title 1</span>
			<n-side-nav-item [selected]="panelExpand">
				<span class="side-nav-item">Subtitle 1</span>
				<n-side-nav-subpanel>
					<n-side-nav-pane-title>Subtitle 1</n-side-nav-pane-title>
					<n-tree-view [items]="demoItems"></n-tree-view>
				</n-side-nav-subpanel>
			</n-side-nav-item>
		</n-side-nav-group>
		<n-side-nav-group>
			<span class="accordion_title">Title 2</span>
		</n-side-nav-group>
		<n-side-nav-group>
			<span class="accordion_title">Title 3</span>
		</n-side-nav-group>
	</n-side-nav>
	`,
	entryComponents: [SideNav]
})
class SideNavTestComponent {
	groupExpand = false;
	panelExpand = false;
	demoItems = [
		{
			content: "Subpanel 1",
		},
		{
			content: "Subpanel 2",
		}
	];
	doSomething() {
		alert("EventEmitter works!");
	}
}

describe("Side Nav", () => {
	let fixture: ComponentFixture<SideNavTestComponent>;
	let items: Array<any>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				SideNav,
				SideNavGroup,
				SideNavItem,
				SideNavPaneTitle,
				SideNavSubpanel,
				SideNavTestComponent,
				TreeView,
				TreeViewItem,
				TreeViewWrapper
			],
			imports: [
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		expect(fixture.componentInstance instanceof SideNavTestComponent).toBe(true);
	});

	it("should be open", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("aside").classList).toContain("slide-in");
	});

	it("should expand items using default value", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		fixture.componentInstance.groupExpand = true;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("dd").classList).toContain("grow-down");
	});

	it("should expand items", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		fixture.detectChanges();
		let button = fixture.nativeElement.querySelector("button");
		button.click();
		expect(fixture.nativeElement.querySelector("dd").classList).toContain("grow-down");
	});

	it("should collapse items", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		fixture.componentInstance.groupExpand = true;
		let button = fixture.nativeElement.querySelector("button");
		button.click();
		expect(fixture.nativeElement.querySelector("dd").classList).not.toContain("grow-down");
	});

	it("should set focus on first button", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[0], "focus");
		fixture.nativeElement.querySelector("button").focus();
		expect(items[0].focus).toHaveBeenCalled();
	});

	it("should focus on the next button when pressing ArrowDown", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[2], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowDown"});
		items[0].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);
		const secondFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		secondFocus.dispatchEvent(event);
		expect(items[2].focus).toHaveBeenCalled();

	});

	it("should focus on first button when pressing ArrowDown on the last button", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[0], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowDown"});
		items[3].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[0].focus).toHaveBeenCalled();
	});

	it("should focus on the previous button when pressing ArrowUp", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[1], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowUp"});
		items[3].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);
		const secondFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		secondFocus.dispatchEvent(event);

		expect(items[1].focus).toHaveBeenCalled();
	});

	it("should focus on last button when pressing ArrowUp on the first button", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[3], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowUp"});
		items[0].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[3].focus).toHaveBeenCalled();
	});

	it("should focus on the next header when pressing ctrl + PageDown", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[2], "focus");
		fixture.detectChanges();

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "PageDown", ctrlKey: true});
		items[0].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[2].focus).toHaveBeenCalled();
	});

	it("should focus on the previous header when pressing ctrl + PageUp", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[2], "focus");
		fixture.detectChanges();

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "PageUp", ctrlKey: true});
		items[3].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[2].focus).toHaveBeenCalled();
	});

	it("should focus on the first button when pressing Home", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[0], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Home"});
		items[2].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[0].focus).toHaveBeenCalled();
	});

	it("should focus on the last button when pressing End", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		spyOn(items[3], "focus");

		const event = new KeyboardEvent("keydown", {bubbles: true, key: "End"});
		items[2].focus();

		const initFocus = fixture.debugElement.query(By.css(":focus")).nativeElement;
		initFocus.dispatchEvent(event);

		expect(items[3].focus).toHaveBeenCalled();
	});

	it("should expand and collapse subpanel on click", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		items[1].click();
		expect(fixture.nativeElement.querySelector("div").classList).toContain("slide-in");

		fixture.nativeElement.querySelector(".subpanel_heading").click();
		expect(fixture.nativeElement.querySelector("div").classList).not.toContain("slide-in");
	});

	it("should expand and collapse subpanel on enter", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: "Enter"});
		items[1].dispatchEvent(event);
		expect(fixture.nativeElement.querySelector("div").classList).toContain("slide-in");

		fixture.nativeElement.querySelector(".subpanel_heading").dispatchEvent(event);
		expect(fixture.nativeElement.querySelector("div").classList).not.toContain("slide-in");
	});

	it("should expand and collapse subpanel on Space", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		const event = new KeyboardEvent("keydown", {bubbles: true, key: " "});
		items[1].dispatchEvent(event);
		expect(fixture.nativeElement.querySelector("div").classList).toContain("slide-in");

		fixture.nativeElement.querySelector(".subpanel_heading").dispatchEvent(event);
		expect(fixture.nativeElement.querySelector("div").classList).not.toContain("slide-in");
	});

	it("should expand subpanel on ArrowRight and collapse on ArrowLeft", () => {
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		const eventOpen = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowRight"});
		items[1].dispatchEvent(eventOpen);
		expect(fixture.nativeElement.querySelector("div").classList).toContain("slide-in");

		const eventClose = new KeyboardEvent("keydown", {bubbles: true, key: "ArrowLeft"});
		fixture.nativeElement.querySelector(".subpanel_heading").dispatchEvent(eventClose);
		expect(fixture.nativeElement.querySelector("div").classList).not.toContain("slide-in");
	});

	it("should expand subpanel on init", () => {
		TestBed.overrideComponent(SideNavTestComponent, {
			set: {
				template: `
				<n-side-nav [open]="true">
					<n-side-nav-group [expanded]="true" tabindex="-1">
						<span class="accordion_title">Title 1</span>
						<n-side-nav-item [selected]="true">
							<span class="side-nav-item" >Subtitle 1</span>
							<n-side-nav-subpanel>
								<n-side-nav-pane-title>Subtitle 1</n-side-nav-pane-title>
								<n-tree-view [items]="demoItems"></n-tree-view>
							</n-side-nav-subpanel>
						</n-side-nav-item>
					</n-side-nav-group>
				</n-side-nav>
				`
			}
		});
		fixture = TestBed.createComponent(SideNavTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("div").classList).toContain("slide-in");
	});

	it("should call EventEmitter with an alert", () => {
		TestBed.overrideComponent(SideNavTestComponent, {
			set: {
				template: `
				<n-side-nav [open]="true">
					<n-side-nav-group [expanded]="true" tabindex="-1">
						<span class="accordion_title">Title 1</span>
						<n-side-nav-item (select)="doSomething()">
							<span class="side-nav-item">Subtitle 1</span>
						</n-side-nav-item>
					</n-side-nav-group>
				</n-side-nav>
				`
			}
		});
		fixture = TestBed.createComponent(SideNavTestComponent);
		items = getFocusElementList(fixture.nativeElement);
		fixture.detectChanges();
		spyOn(window, "alert");
		items[1].click();
		expect(window.alert).toHaveBeenCalledWith("EventEmitter works!");
	});
});
