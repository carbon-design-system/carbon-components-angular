import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { HttpModule, Response, ResponseOptions, Http, BaseRequestOptions } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Icon } from "./icon.component";
import { Sprite } from "./sprite.component";
import { IconService } from "./icon.service";

@Component({
	template: `
		<n-icon></n-icon>
		<n-sprite></n-sprite>
	`
})
class TestComponent {}

function iconBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
	backend.connections.subscribe((connection: MockConnection) => {
		connection.mockRespond(new Response(new ResponseOptions({
			status: 200,
			body: `<svg></svg>`
		})));
	});
	return new Http(backend, options);
}

describe("Icon", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Icon,
				Sprite,
				TestComponent
			],
			providers: [
				{
					provide: Http,
					useFactory: iconBackendFactory,
					deps: [ MockBackend, BaseRequestOptions]
				},
				MockBackend,
				BaseRequestOptions,
				IconService
			],
			imports: [HttpModule]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Icon);
		expect(fixture.componentInstance instanceof Icon).toBe(true);
	});
});
