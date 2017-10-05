import { AfterContentInit, Component, Input, ViewChild } from "@angular/core";

@Component({
	selector: "n-side-nav-group",
	template: `
	<dt role="heading" aria-level="1" #dt>
		<button
		[id]="accordionId"
		(click)="onClick()"
		[attr.aria-controls]="sectionId"
		[attr.aria-expanded]="expanded">
			<ng-content select=".accordion_icon"></ng-content>
			<ng-content select=".accordion_title"></ng-content>
		</button>
	</dt>
	<dd [id]="sectionId" role="region" [attr.aria-labelledby]="accordionId" #dd>
		<ul class="side-nav_menu">
			<ng-content></ng-content>
		</ul>
	</dd>
  `
})
export class SideNavGroup implements AfterContentInit {
	static sideNavGroupCount = 0;
	accordionId = "side-nav-accordion-" + SideNavGroup.sideNavGroupCount;
	sectionId = "side-nav-section-" + SideNavGroup.sideNavGroupCount;

	@Input() expanded: boolean;

	@ViewChild("dt") dt;
	@ViewChild("dd") dd;

	constructor() {
		SideNavGroup.sideNavGroupCount++;
	}

	ngAfterContentInit() {
		if (this.hasSubmenu() && this.expanded === undefined) {
			this.expanded = false;
		}
	}

	onClick() {
		if (this.expanded !== undefined) {
			this.expanded = !this.expanded;
		}

		if (this.dd.nativeElement.classList.contains("grow-down")) {
			this.dd.nativeElement.classList.remove("grow-down");
		} else {
			this.dd.nativeElement.classList.add("grow-down");
		}
	}

	hasSubmenu() {
		let ul = this.dd.nativeElement.querySelector(".side-nav_menu");
		return (ul.children && ul.children.length > 0);
	}
}
