import { Component, ElementRef, TemplateRef } from "@angular/core";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { NFormsModule } from "./../../forms/forms.module";
import { IconModule } from "./../../icon/icon.module";
import { StaticIconModule } from "./../../icon/static-icon.module";
import { DialogPlaceholderService } from "./../dialog-placeholder.service";
import { Popover } from "./popover.component";
import { PopoverDirective } from "./popover.directive";

@Component({
	selector: "test-cmp",
	template: "<button nPopover='Hello There' placement='bottom'>Me</button>",
	entryComponents: [Popover]
})
class PopoverTest {
	filter1: any;
	userData = {
		data: {}
	};
}

xdescribe("Popover directive", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PopoverDirective, Popover, PopoverTest],
			imports: [
				FormsModule,
				NFormsModule,
				IconModule,
				StaticIconModule
			],
			providers: [ DialogPlaceholderService ]
		});
	});

	it("popover should compile the directive", () => {
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverDirective));
		expect(directiveEl).not.toBeNull();
	});

	it("should create the popover component and popover should appear at the top", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='Hello There' placement='top'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--top")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the bottom", () => {
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--bottom")).not.toBe(null);
	});

	xit("should create the popover component and popover should appear at the bottom left", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='Hello There' placement='bottom-left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--bottom-left")).not.toBe(null);
	});

	xit("should create the popover component and popover should appear at the bottom right", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='Hello There' placement='bottom-right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--bottom-right")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the left", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='Hello There' placement='left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--left")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the right", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='Hello There' placement='right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(document.querySelector(".popover--right")).not.toBe(null);
	});

	xit("popover should appear auto as default", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: "<button nPopover='test content'>Pop over right</button>"
			}
		});

		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(document.querySelector(".popover").classList.contains("auto")).toBe(true);
	});

	it("popover should use provided custom template", () => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: `
				<ng-template #customPopover>custom template</ng-template>
				<button [ibmPopover]='customPopover'>Pop over right</button>
				`
			}
		});

		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverDirective));
		const directiveInstance = directiveEl.injector.get(PopoverDirective);

		expect(directiveInstance["nPopover"] instanceof TemplateRef).toBe(true);
	});

	it("popover should pass data to consumer", fakeAsync(() => {
		TestBed.overrideComponent(PopoverTest, {
			set: {
				template: `
				<ng-template #filter let-popover="popover" let-filter="data">
					<ibm-label class="first-label">
						Value
						<input type="text" [(ngModel)]="filter1" class="input-field">
					</ibm-label>
				</ng-template>

				<ng-template #filterFooter let-popover="popover" let-filter="data">
					<button class="btn--primary" (click)="filter.data = filter1; popover.doClose()">Apply</button>
				</ng-template>

				<button class="btn--icon-link"
					[ibmPopover]="filter"
					title="Popover filter"
					placement="left"
					[data]="userData"
					[footer]="filterFooter">
					<ibm-icon icon="filter" size="sm"></ibm-icon>
				</button>
				`
			}
		});

		const fixture = TestBed.createComponent(PopoverTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");
		button.click();

		tick();
		fixture.detectChanges();

		let element = fixture.debugElement.query(By.css("input")).nativeElement;
		let submitButton = fixture.debugElement.query(By.css(".btn--primary")).nativeElement;
		element.value = "test";
		element.dispatchEvent(new Event("input"));
		submitButton.click();

		tick();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof PopoverTest).toBe(true);
		expect(fixture.componentInstance.userData.data).toEqual("test");
	}));
});
