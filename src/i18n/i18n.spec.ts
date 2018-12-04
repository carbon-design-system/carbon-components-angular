import { I18n } from "./i18n.service";

const EN = require("./en.json");

let service;

describe("i18n service", () => {
	beforeEach(() => {
		service = new I18n();
	});

	it("should translate a string", done => {
		service.get("BANNER.CLOSE_BUTTON").subscribe(value => {
			expect(value).toBe(EN.BANNER.CLOSE_BUTTON);
			done();
		});
	});

	it("should update strings", done => {
		service.set({ "BANNER": { "CLOSE_BUTTON": "test" }});

		service.get("BANNER.CLOSE_BUTTON").subscribe(value => {
			expect(value).toBe("test");
			done();
		});
	});

	it("should emit updated string", () => {
		const subject = service.get("BANNER.CLOSE_BUTTON");

		const spy = spyOn(subject, "next");

		service.set({ "BANNER": { "CLOSE_BUTTON": "test" } });

		expect(spy).toHaveBeenCalled();
	});

	it("should replace variables", done => {
		service.set({ "TEST": "{{foo}} bar"});

		service.replace(service.get("TEST"), {foo: "test"}).subscribe(value => {
			expect(value).toBe("test bar");
			done();
		});
	});

	it("should replace multiple of the same variable", done => {
		service.set({ "TEST": "{{foo}} {{foo}}" });

		service.replace(service.get("TEST"), { foo: "test" }).subscribe(value => {
			expect(value).toBe("test test");
			done();
		});
	});

	it("should replace multiple variables", done => {
		service.set({ "TEST": "{{foo}} {{bar}}" });

		service.replace(service.get("TEST"), { foo: "test", bar: "asdf" }).subscribe(value => {
			expect(value).toBe("test asdf");
			done();
		});
	});
});
