import { FormsModule } from "@angular/forms";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { advancedFakeAsync } from "../test-helpers/change-detection";
import { FileUploader } from "./file-uploader.component";
import { By } from "@angular/platform-browser";
import { FileItem } from "./file-item.interface";

@Component({
	template: `
		<cds-file-uploader
			title="title"
			description="description"
			buttonText="buttonText"
			accept=".txt"
			[multiple]="true"
			[(ngModel)]="files">
		</cds-file-uploader>
	`,
	imports: [FileUploader, FormsModule]
})
class FileUploaderTest {
	files = null;
}

describe("FileUploader", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FileUploaderTest
			]
		});
	});

	// ngModel needs one pass to notice the new set and a tick to hand it to the uploader
	function setFiles(next: Set<FileItem>) {
		wrapper.files = next;
		fixture.detectChanges();
		advancedFakeAsync(fixture);
	}

	function fileItem(name: string, state: "edit" | "upload" | "complete" = "edit"): FileItem {
		return {
			uploaded: false,
			state,
			file: new File(["content"], name, { type: "text/plain" })
		} as FileItem;
	}

	it("should work", () => {
		fixture = TestBed.createComponent(FileUploader);
		expect(fixture.componentInstance instanceof FileUploader).toBe(true);
	});

	it("should set title to 'title'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--file--label"));
		expect(element.nativeElement.textContent).toEqual("title");
	});

	it("should set description to 'description'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--label-description"));
		expect(element.nativeElement.textContent).toEqual("description");
	});

	it("should set buttonText to 'buttonText'", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--file")).nativeElement.querySelector(".cds--btn");
		expect(element.textContent).toContain("buttonText");
	});

	it("should only accept .txt files", () => {
		fixture = TestBed.createComponent(FileUploaderTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-file-uploader"));
		expect(element.nativeElement.querySelector(".cds--file-input").getAttribute("accept")).toEqual(".txt");
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
		element = fixture.debugElement.query(By.css("cds-file-uploader"));

		element.componentInstance.value = testFiles;
		fixture.detectChanges();
		expect(wrapper.files.has(fileItem)).toBe(true);
		const textContent = element.nativeElement.querySelector(".cds--file-container .cds--file-filename").textContent;
		expect(textContent.trim()).toEqual("test-filename");
	});

	it("should set cds--file--invalid class on invalid file items", () => {
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
		element = fixture.debugElement.query(By.css("cds-file-uploader"));

		element.componentInstance.value = testFiles;
		fixture.detectChanges();

		expect(element.nativeElement.querySelector(".cds--file__state-container .cds--file--invalid")).toBeTruthy();
	});

	it("should correctly update this.files when onFilesAdded is called", () => {
		fixture = TestBed.createComponent(FileUploader);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();

		const fileAlreadyAdded = new File([""], "test-filename-added", {type: "text/html"});
		const currentFiles = new Set().add(wrapper.createFileItem(fileAlreadyAdded));
		wrapper.files = currentFiles;
		fixture.detectChanges();
		expect(wrapper.value).toBe(currentFiles);

		const dataTransfer = new DataTransfer();
		const fileToAdd = new File(["test file"], "test-filename", {type: "text/html"});
		dataTransfer.items.add(fileToAdd);
		wrapper.fileInput.nativeElement.files = dataTransfer.files;
		fixture.detectChanges();
		wrapper.onFilesAdded();
		const filesArray: FileItem[] = Array.from(wrapper.files);
		expect(!!filesArray.find((fileItem: FileItem) => fileItem.file.name === fileToAdd.name)).toBe(true);
	});

	it("should render a file added to the existing set", fakeAsync(() => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		wrapper.files = new Set<FileItem>();
		fixture.detectChanges();
		// let ngModel hand the set down before touching it
		advancedFakeAsync(fixture);
		expect(fixture.nativeElement.querySelectorAll("cds-file").length).toBe(0);

		setFiles(new Set([fileItem("first.txt")]));

		expect(fixture.nativeElement.querySelectorAll("cds-file").length).toBe(1);
		expect(fixture.nativeElement.textContent).toContain("first.txt");
	}));

	it("should stop rendering files removed from the existing set", fakeAsync(() => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		wrapper.files = new Set<FileItem>();
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const item = fileItem("first.txt");
		setFiles(new Set([item]));
		expect(fixture.nativeElement.querySelectorAll("cds-file").length).toBe(1);

		setFiles(new Set<FileItem>());

		expect(fixture.nativeElement.querySelectorAll("cds-file").length).toBe(0);
	}));

	it("should swap the spinner for the complete icon when an upload finishes", fakeAsync(() => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		wrapper.files = new Set<FileItem>();
		fixture.detectChanges();
		// let ngModel hand the set down before touching it
		advancedFakeAsync(fixture);

		const item = fileItem("first.txt", "upload");
		setFiles(new Set([item]));
		expect(fixture.nativeElement.querySelector("cds-loading")).toBeTruthy();

		// same reason: the completed upload arrives as a new item
		advancedFakeAsync(fixture, 300);
		setFiles(new Set([{ ...item, state: "complete" }]));

		expect(fixture.nativeElement.querySelector("cds-loading")).toBeFalsy();
		expect(fixture.nativeElement.querySelector(".cds--file-complete")).toBeTruthy();
	}));

	it("should show the error text when a file turns out to be invalid", fakeAsync(() => {
		fixture = TestBed.createComponent(FileUploaderTest);
		wrapper = fixture.componentInstance;
		wrapper.files = new Set<FileItem>();
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const item = fileItem("first.txt");
		setFiles(new Set([item]));
		expect(fixture.nativeElement.querySelector(".cds--form-requirement")).toBeFalsy();

		// cds-file is OnPush and holds the item by reference, so validation has to hand
		// over a new item rather than mutating the one already rendered
		advancedFakeAsync(fixture, 200);
		setFiles(new Set([{ ...item, invalid: true, invalidText: "file too large" }]));

		expect(fixture.nativeElement.querySelector(".cds--form-requirement")).toBeTruthy();
		expect(fixture.nativeElement.textContent).toContain("file too large");
	}));
});
