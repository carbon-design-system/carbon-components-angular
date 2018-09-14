import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StaticIconModule } from "../icon/static-icon.module";
import { Pill } from "./pill.component";

describe("PillComponent", () => {
	let component: Pill;
	let fixture: ComponentFixture<Pill>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Pill],
			imports: [StaticIconModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Pill);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	function setup(showCloseIcon: boolean) {
		fixture = TestBed.createComponent(Pill);
		component = fixture.componentInstance;
		component.showCloseIcon = showCloseIcon;
		fixture.detectChanges();
		return { fixture, component };
	}

	it("should create a pill with a close icon", () => {
		setup(true);
		expect(component.attrClass).toBe("pill bx--tag bx--tag--ibm");
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.className).toBe("pill bx--tag bx--tag--ibm");
		expect(el.children.length).toBe(2);
		expect(el.children[1].className).toBe("pill_close");
	});

	it("should create a pill without a close icon", () => {
		setup(false);
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.children.length).toBe(1);
	});

	it("should emit a remove event when doRemove is called", () => {
		setup(true);
		const mockEvent = {
			stopPropagation() {},
		};
		component.item = {
			content: "Pill",
			selected: true,
		};
		spyOn(component.remove, "emit");
		spyOn(mockEvent, "stopPropagation");
		component.doRemove(mockEvent);
		expect(component.item.selected).toBe(false);
		expect(mockEvent.stopPropagation).toHaveBeenCalled();
		expect(component.remove.emit).toHaveBeenCalled();
	});
});
