import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Tag } from "./tag.component";

describe("TagComponent", () => {
	let component: Tag;
	let fixture: ComponentFixture<Tag>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Tag]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Tag);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	function setup(tagType) {
		fixture = TestBed.createComponent(Tag);
		component = fixture.componentInstance;
		if (tagType) {
			component.type = tagType;
		}
		fixture.detectChanges();
		return { fixture, component };
	}

	it("should create a tag with an IBM class by default", () => {
		setup("");
		expect(component.attrClass).toBe("bx--tag bx--tag--ibm");
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.className).toBe("bx--tag bx--tag--ibm");
	});

	it("should create a tag with a beta class", () => {
		setup("beta");
		expect(component.attrClass).toBe("bx--tag bx--tag--beta");
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.className).toBe("bx--tag bx--tag--beta");
	});

	it("should create a tag with a third-party class", () => {
		setup("third-party");
		expect(component.attrClass).toBe("bx--tag bx--tag--third-party");
		expect(component).toBeTruthy();
		const el = fixture.nativeElement;
		expect(el.className).toBe("bx--tag bx--tag--third-party");
	});
});
