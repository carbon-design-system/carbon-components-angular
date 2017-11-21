import {
	Component,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Tooltip } from "./tooltip.component";
import { TooltipDirective } from "./tooltip.directive";
import { createElement } from "./../../common/test";
import { By } from "@angular/platform-browser";

describe("Tooltip directive", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TooltipDirective, Tooltip, TestComponent]
		});
	});

	it("should compile the directive", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(TooltipDirective));
		expect(directiveEl).not.toBeNull();
	});

	it("should create the tooltip component and tooltip should appear at the top", () => {
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
		expect(document.querySelector(".tooltip--top")).not.toBe(null);
	});

	it("should create the tooltip component and tooltip should appear at the bottom", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".tooltip--bottom")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the bottom left", () => {
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
		expect(document.querySelector(".tooltip--bottom-left")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the bottom right", () => {
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
		expect(document.querySelector(".tooltip--bottom-right")).not.toBe(null);
	});

	it("should create the tooltip component and tooltip should appear at the left", () => {
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
		expect(document.querySelector(".tooltip--left")).not.toBe(null);
	});

	it("should create the tooltip component and tooltip should appear at the right", () => {
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
		expect(document.querySelector(".tooltip--right")).not.toBe(null);
	});

	xit("tooltip should appear auto as default", () => {
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

		expect(document.querySelector(".tooltip").classList.contains("auto")).toBe(true);
	});

	it("tooltip should use provided custom template", () => {
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
	entryComponents: [Tooltip]
})
class TestComponent {}
