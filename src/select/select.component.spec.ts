import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { IconModule } from "../icon/index";
import { Select } from "./select.component";

@Component({
	template: `
		<cds-select (valueChange)="onChange($event)" [(ngModel)]="model">
			<option value="option1"> Option 1 </option>
		</cds-select>
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
		let de = fixture.debugElement.query(By.css(".cds--select-input"));
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
				template: `<cds-select label="test"></cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector(".cds--label").textContent).toEqual("test");
	});

	it("should set helperText to test", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<cds-select helperText="test"></cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector(".cds--form__helper-text").textContent).toEqual("test");
	});

	it("should set display to inline", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<cds-select display="inline"></cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector(".cds--select--inline")).toBeTruthy();
	});

	it("should set option to disabled", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `
				<cds-select>
					<option value="option1" disabled> Option 1 </option>
				</cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector("option").disabled).toBe(true);
	});

	it("should display cds-icon-warning-filled16 and display invalid text", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<cds-select [invalid]=true invalidText="test"></cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector(".cds--select__invalid-icon")).toBeTruthy();
		expect(element.querySelector(".cds--form-requirement").textContent).toEqual("test");
	});

	it("should set class cds--skeleton", () => {
		fixture = TestBed.overrideComponent(SelectTest, {
			set: {
				template: `<cds-select [skeleton]=true></cds-select>`
			}
		}).createComponent(SelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-select")).nativeElement;
		expect(element.querySelector(".cds--skeleton")).toBeTruthy();
	});
});
