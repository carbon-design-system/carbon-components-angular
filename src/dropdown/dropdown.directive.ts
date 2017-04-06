import { Directive, ElementRef, Input, HostListener, AfterContentInit } from "@angular/core";
import { KeyCodes } from "./../constant/keys";

@Directive({ selector: "[dropdown]" })
export class DropdownDirective {
	@Input("dropdown") dropdownType: string = null;
	private listbox: any;
	private list: any;
	constructor(private el: ElementRef) { }

	ngAfterContentInit() {
		if (this.dropdownType === "list-view") {
			this.listbox = this.el.nativeElement.firstElementChild;
			this.listbox.setAttribute("role", "listbox");
			this.list = this.listbox.children;
		}
	}

	@HostListener("keydown", ["$event"])
	onKeyDown(evt) {
		if (evt.which === KeyCodes.TAB_KEY) {
			evt.target.click();
		}
	}
}
