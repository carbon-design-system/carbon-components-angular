import {
	Component,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Popover } from "./popover.component";
import { TooltipDirective } from "./tooltip.directive";
import { createElement } from "../common/test";
import { By } from "@angular/platform-browser";

describe("Tooltip directive", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TooltipDirective, Popover, TestComponent]
		});
	});

	it("should compile the directive", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(TooltipDirective));
		expect(directiveEl).not.toBeNull();
	});

	it("should create the popover component and popover should appear at the top", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='top'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("top")).toBe(true);
	});

	it("should create the popover component and popover should appear at the bottom", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("bottom")).toBe(true);
	});

	it("should create the popover component and popover should appear at the top left", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='top-left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("top-left")).toBe(true);
	});

	it("should create the popover component and popover should appear at the bottom left", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='bottom-left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("bottom-left")).toBe(true);
	});

	it("should create the popover component and popover should appear at the top right", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='top-right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("top-right")).toBe(true);
	});

	it("should create the popover component and popover should appear at the bottom right", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='bottom-right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("bottom-right")).toBe(true);
	});

	it("should create the popover component and popover should appear at the left", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("left")).toBe(true);
	});

	it("should create the popover component and popover should appear at the right", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='Hello There' placement='right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover")).not.toBe(null);
		expect(document.querySelector(".popover").classList.contains("right")).toBe(true);
	});

	it("popover should appear auto as default", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nTooltip='test content'>Pop over right</button>"
			}
		});

		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(document.querySelector(".popover").classList.contains("auto")).toBe(true);
	});

	it("popover should use provided custom template", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: `
				<ng-template #customPopover>custom template</ng-template>
				<button [nTooltip]='customPopover'>Pop over right</button>
				`
			}
		});

		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(TooltipDirective));
		const directiveInstance = directiveEl.injector.get(TooltipDirective);

		expect(directiveInstance.nTooltip instanceof TemplateRef).toBe(true);
	});
});

@Component({
	selector: "test-cmp",
	template: "<button nTooltip='Hello There' placement='bottom'>Me</button>",
	entryComponents: [Popover]
})
class TestComponent {}
