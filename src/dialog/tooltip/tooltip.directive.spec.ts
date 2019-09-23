import {
	Component,
	TemplateRef
} from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { Tooltip } from "./tooltip.component";
import { TooltipDirective } from "./tooltip.directive";
import { By } from "@angular/platform-browser";
import { DialogModule } from "./../dialog.module";
import { PlaceholderModule } from "../../placeholder/placeholder.module";

@Component({
	selector: "test-component",
	template: `
		<button ibmTooltip='Hello There' placement='bottom'>Me</button>
		<ibm-placeholder></ibm-placeholder>
	`
})
class TooltipTest { }

@Component({
	selector: "test-template-component",
	template: `
		<ng-template #customPopover>custom template</ng-template>
		<button [ibmTooltip]="customPopover">Pop over right</button>
		<ibm-placeholder></ibm-placeholder>
	`
})
class TooltipTemplateTest { }

describe("Tooltip directive", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TooltipTest, TooltipTemplateTest ],
			imports: [ DialogModule, PlaceholderModule ]
		}).compileComponents();
	}));

	it("should compile the directive", () => {
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(TooltipDirective));
		expect(directiveEl).not.toBeNull();
	});

	it("should create the tooltip component and tooltip should appear at the top", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: `
					<button ibmTooltip="Hello There" placement="top">Me</button>
					<ibm-placeholder></ibm-placeholder>
				`
			}
		});
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".bx--tooltip")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the bottom", () => {
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".tooltip--bottom")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the bottom left", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: "<button ibmTooltip='Hello There' placement='bottom-left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".tooltip--bottom-left")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the bottom right", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: "<button ibmTooltip='Hello There' placement='bottom-right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".tooltip--bottom-right")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the left", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: "<button ibmTooltip='Hello There' placement='left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".tooltip--left")).not.toBe(null);
	});

	xit("should create the tooltip component and tooltip should appear at the right", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: "<button ibmTooltip='Hello There' placement='right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TooltipTest).toBe(true);
		expect(document.querySelector(".tooltip--right")).not.toBe(null);
	});

	xit("tooltip should appear auto as default", () => {
		TestBed.overrideComponent(TooltipTest, {
			set: {
				template: "<button ibmTooltip='test content'>Pop over right</button>"
			}
		});

		const fixture = TestBed.createComponent(TooltipTest);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(document.querySelector(".tooltip").classList.contains("auto")).toBe(true);
	});

	it("tooltip should use provided custom template", () => {
		const fixture = TestBed.createComponent(TooltipTemplateTest);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(TooltipDirective));
		const directiveInstance = directiveEl.injector.get(TooltipDirective);
		expect(directiveInstance.ibmTooltip instanceof TemplateRef).toBe(true);
	});
});
