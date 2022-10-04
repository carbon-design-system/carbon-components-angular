import { FormsModule } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "carbon-components-angular/button";
import { LoadingModule } from "carbon-components-angular/loading";
import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icon/index";
import { By } from "@angular/platform-browser";
import { FileItem } from "./file-item.interface";

@Component({
	template: `
		<ibm-file-uploader
			title="title"
			description="description"
			buttonText="buttonText"
			accept=".txt"
			multiple="true"
			[(ngModel)]="files">
		</ibm-file-uploader>
	`
})
class FileUploaderTest {
	files = null;

	@ViewChild(FileUploader) uploader!: FileUploader;
}

describe("FileUploader", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				FileUploader,
				FileUploaderTest,
				FileComponent
			],
			imports: [
				FormsModule,
				CommonModule,
				ButtonModule,
				LoadingModule,
				IconModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(FileUploader);
		expect(fixture.componentInstance instanceof FileUploader).toBe(true);
	});

	it("should set title to 'title'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--file--label"));
		expect(element.nativeElement.textContent).toEqual("title");
	});

	it("should set description to 'description'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--label-description"));
		expect(element.nativeElement.textContent).toEqual("description");
	});

	it("should set buttonText to 'buttonText'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--file")).nativeElement.querySelector(".bx--btn");
		expect(element.textContent).toContain("buttonText");
	});

	it("should only accept .txt files", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-file-uploader"));
		expect(element.nativeElement.querySelector(".bx--file-input").getAttribute("accept")).toEqual(".txt");
	});

	it("should propagate the change in files back to the form", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();

		const fileItem: FileItem = {
			file: new File([""], "test-filename", {type: "text/html"}),
			state: "edit",
			uploaded: false
		};
		const testFiles = new Set().add(fileItem);
		element = fixture.debugElement.query(By.css("ibm-file-uploader"));

		element.componentInstance.value = testFiles;
		fixture.detectChanges();
		expect(wrapper.files.has(fileItem)).toBe(true);
		expect(element
			.nativeElement
			.querySelector(".bx--file-container .bx--file-filename")
			.textContent).toEqual("test-filename");
	});

	it("should set bx--file--invalid class on invalid file items", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();

		const fileItem: FileItem = {
			file: new File([""], "test-filename", {type: "text/html"}),
			state: "edit",
			uploaded: false,
			invalid: false,
			invalidText: "Invalid Text"
		};
		const testFiles = new Set().add(fileItem);
		element = fixture.debugElement.query(By.css("ibm-file-uploader"));

		element.componentInstance.value = testFiles;
		fixture.detectChanges();

		expect(element.nativeElement.querySelector(".bx--file__state-container .bx--file--invalid")).toBeTruthy();
	});

	it("should trigger change event in file upload when the same file is uploaded [#2268]", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();

		const testFiles = new Set();

		const uploaderSpy = spyOn(wrapper.uploader, "onFilesAdded").and.callThrough();
		const setDeleteSpy = spyOn(testFiles, "delete").and.callThrough();

		element = fixture.debugElement.query(By.css("ibm-file-uploader"));
		const fileInput = element.nativeElement.querySelector(
			".bx--file-input"
		);

		element.componentInstance.value = testFiles;

		// initial upload
		const dt1 = new DataTransfer();
		dt1.items.add(new File([""], "test-filename-1", { type: "text/html" }));
		dt1.items.add(new File([""], "test-filename-2", { type: "text/html" }));
		fileInput.files = dt1.files;
		fileInput.dispatchEvent(new Event("change"));

		fixture.detectChanges();

		let filenameEls = element.nativeElement.querySelectorAll(
			".bx--file-container .bx--file-filename"
		);

		expect(filenameEls.length).toBe(2);
		expect(filenameEls[0].textContent).toEqual("test-filename-1");
		expect(filenameEls[1].textContent).toEqual("test-filename-2");
		expect(uploaderSpy).toHaveBeenCalled();
		expect(setDeleteSpy).not.toHaveBeenCalled();

		uploaderSpy.calls.reset();
		setDeleteSpy.calls.reset();

		// upload same filename
		const dt2 = new DataTransfer();
		dt2.items.add(new File([""], "test-filename-1", { type: "text/html" }));
		fileInput.files = dt2.files;
		fileInput.dispatchEvent(new Event("change"));

		fixture.detectChanges();

		filenameEls = element.nativeElement.querySelectorAll(
			".bx--file-container .bx--file-filename"
		);

		expect(filenameEls.length).toBe(2);
		expect(filenameEls[0].textContent).toEqual("test-filename-2");
		expect(filenameEls[1].textContent).toEqual("test-filename-1");
		expect(uploaderSpy).toHaveBeenCalled();
		expect(setDeleteSpy).toHaveBeenCalled();
	});
});

