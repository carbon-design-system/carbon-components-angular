import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ButtonModule } from "../button";
import { IconModule, IconService } from "../icon";
import { ContainedListItem } from "./contained-list-item.component";
import Apple16 from "@carbon/icons/es/apple/16";
import Fish16 from "@carbon/icons/es/fish/16";
import { ContainedList } from "./contained-list.component";
import { ContainedListKind, ContainedListSize } from "./contained-list.enums";

@Component({
	template: `
		<ng-template #label>
	  		<h1>My contained list</h1>
		</ng-template>

		<ng-template #action>
			<ibm-icon-button
				type="button"
				kind="primary"
				align="left"
				description="Add">
				<svg class="cds--btn__icon" ibmIcon="add" size="16"></svg>
			</ibm-icon-button>
		</ng-template>

		<ng-template #icon>
			<svg ibmIcon="fish" size="16"></svg>
		</ng-template>

		<cds-contained-list [label]="label" [action]="action">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item [icon]="icon">List item with icon</cds-contained-list-item>
			<cds-contained-list-item icon="apple">List item with string ref icon</cds-contained-list-item>
			<cds-contained-list-item [action]="action">List item with action</cds-contained-list-item>
			<cds-contained-list-item #clickableListItem [clickable]="true">
				<ng-container ibmContainedListItemButton>Clickable list item</ng-container>
			</cds-contained-list-item>
		</cds-contained-list>
	`
})
class WrapperComponent {
	constructor(private iconService: IconService) {
		this.iconService.registerAll([Apple16, Fish16]);
	}
}

describe("ContainedList", () => {
	let component: ContainedList;
	let fixture: ComponentFixture<ContainedList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContainedList, ContainedListItem, WrapperComponent],
			imports: [IconModule, ButtonModule]
		}).compileComponents();

		fixture = TestBed.createComponent(ContainedList);
		component = fixture.componentInstance;
	});

	it("should set default inputs", () => {
		fixture.detectChanges();
		expect(component.action).toBeUndefined();
		expect(component.isInset).toBeFalsy();
		expect(component.kind).toBe(ContainedListKind.OnPage);
		expect(component.label).toBeUndefined();
		expect(component.size).toBe(ContainedListSize.Large);
	});

	it("should display the label when a string is provided", () => {
		const label = "My contained list";
		component.label = label;
		fixture.detectChanges();

		const labelElement = fixture.nativeElement.querySelector(".cds--contained-list__label");
		expect(labelElement.textContent.trim()).toEqual(label);
	});

	it("should have the correct isInset class", () => {
		component.isInset = true;
		fixture.detectChanges();

		const listElement: HTMLElement = fixture.nativeElement.querySelector(".cds--contained-list");
		expect(listElement).toHaveClass("cds--contained-list--inset-rulers");
	});

	it("should have the correct size class", () => {
		component.size = ContainedListSize.Small;
		fixture.detectChanges();

		const listElement: HTMLElement = fixture.nativeElement.querySelector(".cds--contained-list");
		expect(listElement).toHaveClass("cds--contained-list--sm");
	});

	it("should have the correct kind class", () => {
		component.kind = ContainedListKind.Disclosed;
		fixture.detectChanges();

		const listElement: HTMLElement = fixture.nativeElement.querySelector(".cds--contained-list");
		expect(listElement).toHaveClass("cds--contained-list--disclosed");
	});

	describe("TemplateRefs", () => {
		it("should render the label if it is a TemplateRef", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const labelRefElement = wrapperFixture.nativeElement.querySelector(".cds--contained-list .cds--contained-list__label h1");
			expect(labelRefElement.textContent.trim()).toBe("My contained list");
		});

		it("should render the action if it is a TemplateRef", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const actionElementRef = wrapperFixture.nativeElement
				.querySelector(".cds--contained-list .cds--contained-list__action ibm-icon-button");
			expect(actionElementRef).toBeTruthy();
		});
	});

	describe("ContainedListItem", () => {
		it("should render the content", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const listItemElement = wrapperFixture.debugElement.query(By.css(".cds--contained-list-item:nth-child(1)"));
			expect(listItemElement.nativeElement.textContent.trim()).toBe("List item");
		});

		it("should render the icon", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const iconElement = wrapperFixture.debugElement.query(By.css(".cds--contained-list-item:nth-child(2) svg[ibmIcon='fish']"));
			expect(iconElement).toBeTruthy();
		});

		it("should render the icon", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const iconElement = wrapperFixture.debugElement
				.query(By.css(".cds--contained-list-item:nth-child(3) svg[ng-reflect-ibm-icon='apple']"));
			expect(iconElement).toBeTruthy();
		});

		it("should render the action", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const actionElement = wrapperFixture.debugElement.query(By.css(".cds--contained-list-item:nth-child(4) ibm-icon-button"));
			expect(actionElement).toBeTruthy();
		});

		it("should render with the clickable state", () => {
			const wrapperFixture: ComponentFixture<WrapperComponent> = TestBed.createComponent(WrapperComponent);
			wrapperFixture.detectChanges();

			const clickableListItemElement = wrapperFixture.debugElement.query(By.css(".cds--contained-list-item:nth-child(5)"));
			expect(clickableListItemElement.nativeElement).toHaveClass("cds--contained-list-item--clickable");

			const buttonElement = clickableListItemElement.nativeElement.querySelector("button");
			expect(buttonElement.textContent.trim()).toBe("Clickable list item");
		});
	});
});
