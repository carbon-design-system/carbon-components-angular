import { ComponentFixture, TestBed } from "@angular/core/testing";
import { I18nModule } from "../i18n/index";
import { UtilsModule } from "carbon-components-angular/utils";
import { TabHeaders } from "./tab-headers.component";

describe("TabHeadersComponent", () => {
	let component: TabHeaders;
	let fixture: ComponentFixture<TabHeaders>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TabHeaders],
			imports: [
				UtilsModule,
				I18nModule
			],
			providers: []
		});

		fixture = TestBed.createComponent(TabHeaders);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof TabHeaders).toBe(true);
	});
});
