import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { IconModule } from "../icon/index";
import { Select } from "./select.component";

@Component({
	template: `
		<ibm-select (valueChange)="onChange($event)" [(ngModel)]="model">
			<option value="option1"> Option 1 </option>
		</ibm-select>
		`
})
class SelectTest {
	model = null;
	value = null;
	onChange(event) {
		this.value = event;
	}
}

describe("Select", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Select,
				SelectTest
			],
			imports: [
				FormsModule,
				IconModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Select);
		expect(fixture.componentInstance instanceof Select).toBe(true);
	});

	it("should call onChange on change select and propagate the change back to the form", () => {
		fixture = TestBed.createComponent(SelectTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		let de = fixture.debugElement.query(By.css(".bx--select-input"));
		spyOn(wrapper, "onChange").and.callThrough();
		de.triggerEventHandler("change", {target: {value: "option1"}});
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
		expect(wrapper.model).toBe("option1");
		expect(wrapper.value).toBe("option1");
		expect(de.nativeElement.textContent).toContain("Option 1");
	});

	it("should set label to test", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<ibm-select label="test"></ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector(".bx--label").textContent).toEqual("test");
	});

	it("should set helperText to test", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<ibm-select helperText="test"></ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector(".bx--form__helper-text").textContent).toEqual("test");
	});

	it("should set display to inline", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<ibm-select display="inline"></ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector(".bx--select--inline")).toBeTruthy();
	});

	it("should set option to disabled", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `
				<ibm-select>
					<option value="option1" disabled> Option 1 </option>
				</ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector("option").disabled).toBe(true);
	});

	it("should display ibm-icon-warning-filled16 and display invalid text", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<ibm-select [invalid]=true invalidText="test"></ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector(".bx--select__invalid-icon")).toBeTruthy();
		expect(element.querySelector(".bx--form-requirement").textContent).toEqual("test");
	});

	it("should set class bx--skeleton", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<ibm-select [skeleton]=true></ibm-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-select")).nativeElement;
		expect(element.querySelector(".bx--skeleton")).toBeTruthy();
	});
});
