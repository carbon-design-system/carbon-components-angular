import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StaticIconModule } from "../icon/static-icon.module";
import { Pill } from "./pill.component";

describe("PillComponent", () => {
	let component: Pill;
	let fixture: ComponentFixture<Pill>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Pill],
			imports: [StaticIconModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Pill);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create a pill with a close icon", () => {
		expect(component.attrClass).toBe("pill");
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.className).toBe("pill");
		expect(el.children.length).toBe(1);
		const pillDiv = el.children[0];
		expect(pillDiv.className).toBe("bx--list-box__selection bx--list-box__selection--multi");
		expect(pillDiv.children.length).toBe(1);
		expect(pillDiv.children[0].className).toBe("close_icon bx--list-box__selection--multi");
	});

	it("should emit a remove event when doRemove is called", () => {
		const mockEvent = {
			stopPropagation() {}
		};
		component.item = {
			content: "Pill",
			selected: true
		};
		spyOn(component.remove, "emit");
		spyOn(mockEvent, "stopPropagation");
		component.doRemove(mockEvent);
		expect(component.item.selected).toBe(false);
		expect(mockEvent.stopPropagation).toHaveBeenCalled();
		expect(component.remove.emit).toHaveBeenCalled();
	});
});
