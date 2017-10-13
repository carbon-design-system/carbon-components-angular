// import { ElementRef } from "@angular/core";
// import { TestBed } from "@angular/core/testing";
// import { Popover } from "./popover.component";
// import {createElement} from "../../common/test";

// describe("Popover component", () => {
// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			declarations: [Popover],
// 		});
// 	});

// 	it("should create the popover component", () => {
// 		const fixture = TestBed.createComponent(Popover);

// 		expect(fixture.componentInstance instanceof Popover).toBe(true);
// 	});


// 	it("should emit a close event", () => {
// 		let element = createElement(200, 300, 100, 150);
// 		const fixture = TestBed.createComponent(Popover);

// 		fixture.componentInstance.dialogConfig = {
// 			title: "test",
// 			content: "test",
// 			trigger: "click",
// 			placement: "left",
// 			gap: 0,
// 			appendToBody: false,
// 			type: "",
// 			autoPosition: false,
// 			data: {},
// 			parentRef: new ElementRef(element)
// 		};

// 		fixture.detectChanges();

// 		spyOn(fixture.componentInstance.close, "emit");

// 		let closeButton = fixture.nativeElement.querySelector("button");

// 		closeButton.click();

// 		expect(fixture.componentInstance.close.emit).toHaveBeenCalled();
// 	});

// 	it("should add proper class according to placement", () => {
// 		const fixture = TestBed.createComponent(Popover);
// 		let element = createElement(200, 300, 100, 150);

// 		fixture.componentInstance.dialogConfig = {
// 			title: "test",
// 			content: "test",
// 			trigger: "click",
// 			placement: "left",
// 			gap: 0,
// 			appendToBody: false,
// 			type: "",
// 			autoPosition: false,
// 			data: {},
// 			parentRef: new ElementRef(element)
// 		};

// 		fixture.detectChanges();

// 		expect(fixture.nativeElement.querySelector(".popover--left")).not.toBe(null);
// 	});
// });
