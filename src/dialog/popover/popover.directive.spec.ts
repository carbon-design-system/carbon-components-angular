import {
	Component,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { Popover } from "./popover.component";
import { PopoverDirective } from "./popover.directive";
import { createElement } from "../../common/test";
import { By } from "@angular/platform-browser";
import { StaticIconModule } from "./../../icon/static-icon.module";

describe("Popover directive", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PopoverDirective, Popover, TestComponent],
			imports: [
				StaticIconModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});
	});

	it("popover should compile the directive", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverDirective));
		expect(directiveEl).not.toBeNull();
	});

	it("should create the popover component and popover should appear at the top", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='Hello There' placement='top'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--top")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the bottom", () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--bottom")).not.toBe(null);
	});

	xit("should create the popover component and popover should appear at the bottom left", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='Hello There' placement='bottom-left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--bottom-left")).not.toBe(null);
	});

	xit("should create the popover component and popover should appear at the bottom right", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='Hello There' placement='bottom-right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--bottom-right")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the left", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='Hello There' placement='left'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--left")).not.toBe(null);
	});

	it("should create the popover component and popover should appear at the right", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='Hello There' placement='right'>Me</button>"
			}
		});
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		let button = fixture.nativeElement.querySelector("button");

		button.click();
		fixture.detectChanges();

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
		expect(document.querySelector(".popover--right")).not.toBe(null);
	});

	xit("popover should appear auto as default", () => {
		TestBed.overrideComponent(TestComponent, {
			set: {
				template: "<button nPopover='test content'>Pop over right</button>"
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
				<button [nPopover]='customPopover'>Pop over right</button>
				`
			}
		});

		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverDirective));
		const directiveInstance = directiveEl.injector.get(PopoverDirective);

		expect(directiveInstance.nPopover instanceof TemplateRef).toBe(true);
	});
});

@Component({
	selector: "test-cmp",
	template: "<button nPopover='Hello There' placement='bottom'>Me</button>",
	entryComponents: [Popover]
})
class TestComponent {}
