import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingComponent, SmallLoadingComponent } from "./loading.component";

describe("Loading", () => {
	describe("LoadingComponent", () => {
		let component: LoadingComponent;
		let fixture: ComponentFixture<LoadingComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [LoadingComponent]
			}).compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(LoadingComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it("should create", () => {
			expect(component).toBeTruthy();
		});
	});

	describe("SmallLoadingComponent", () => {
		let component: SmallLoadingComponent;
		let fixture: ComponentFixture<SmallLoadingComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [SmallLoadingComponent]
			}).compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(SmallLoadingComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it("should create", () => {
			expect(component).toBeTruthy();
		});
	});
});
