import { Component, Input, HostBinding, HostListener } from "@angular/core";

@Component({
	selector: "ibm-header-menu",
	template: `
		<li
			class="bx--header__submenu"
			style="height: 100%">
			<a
				class="bx--header__menu-item bx--header__menu-title"
				href="javascript:void(0)"
				role="menuitem"
				tabindex="0"
				aria-haspopup="true"
				[attr.aria-expanded]="expanded">
				{{title}}
				<svg class="bx--header__menu-arrow" width="12" height="7" aria-hidden="true">
					<path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
				</svg>
			</a>
			<ul class="bx--header__menu" role="menu" [attr.aria-label]="title">
				<ng-content></ng-content>
			</ul>
		</li>
	`
})
export class HeaderMenu {
	@Input() title;

	expanded = false;

	@HostListener("mouseover")
	onMouseOver() {
		this.expanded = true;
	}

	@HostListener("mouseout")
	onMouseOut() {
		this.expanded = false;
	}
}
