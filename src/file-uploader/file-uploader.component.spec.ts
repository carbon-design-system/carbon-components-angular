import { FormsModule } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";
import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { CommonModule } from "@angular/common";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
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
			(filesChange)="onFilesChange($event)"
			[(ngModel)]="files">
		</ibm-file-uploader>
	`
})
class FileUploaderTest {
	files = null;
	onFilesChange(event) {}
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
				Close16Module,
				CheckmarkFilled16Module,
				WarningFilled16Module
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

	it("should propagate the change in files back to the form and call onFilesChange", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onFilesChange");
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
			.textContent)
			.toEqual("test-filename");
		expect(wrapper.onFilesChange).toHaveBeenCalled();
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
});

