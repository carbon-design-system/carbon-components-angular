import { Component, Input, ViewChild } from "@angular/core";

@Component({
	selector: "cdl-side-nav-item",
	template: `
	<div class="side-nav-item-wrapper" #item>
		<ng-content select=".side-nav-pane-sub-template"></ng-content>
		<button class="side-nav-item-button" [ngClass]="{'selected': selected}" (click)="onClick()">
			<ng-content></ng-content>
			<svg
				*ngIf="hasSubmenu()"
				class="side-nav-arrow"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path class="st0" d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
			</svg>
		</button>
		<div class="side-nav-sub-item" [ngClass]="{'hide-side-nav-sub-item': !hasSubmenu() || !selected}" #subItem>
			<ng-content select="cdl-side-nav-item"></ng-content>
		</div>
	</div>
  `,
	styleUrls: ["./side-nav-item.component.scss"]
})
export class SideNavItem {
	@Input() open = true;
	@Input() selected = false;

	@ViewChild("item") item;
	@ViewChild("subItem") subItem;

	hasSubmenu() {
		return (this.subItem.nativeElement.children && this.subItem.nativeElement.children.length > 0) || !!this.getPaneTemplateElement();
	}

	onClick() {
		// only elements that don't have pane-like children can be selected
		// those that do, show that child on click
		if (!this.getPaneTemplateElement()) {
			this.selected = !this.selected;
		} else {
			this.showPane();
		}
	}

	getPaneTemplateElement() {
		return Array.prototype.filter.call(this.item.nativeElement.children, (el) => el.classList.contains("side-nav-pane-sub-template"))[0];
	}

	showPane() {
		let pane = this.getPaneTemplateElement();
		if (pane) {
			pane.closest(".left-nav-container").classList.add("side-nav-pane-sub-template-visible");
			pane.classList.add("side-nav-pane-visible");
		}
	}
}
