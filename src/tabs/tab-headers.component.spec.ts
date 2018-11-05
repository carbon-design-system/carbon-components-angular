import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StaticIconModule } from "../icon/static-icon.module";

import { TabHeaders } from "./tab-headers.component";

describe("TabHeadersComponent", () => {
	let component: TabHeaders;
	let fixture: ComponentFixture<TabHeaders>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TabHeaders],
			imports: [BrowserAnimationsModule, StaticIconModule],
			providers: []
		});

		fixture = TestBed.createComponent(TabHeaders);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof TabHeaders).toBe(true);
	});
});
