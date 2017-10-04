import { Component, Input } from "@angular/core";

@Component({
	selector: "n-side-nav",
	template: `
	<aside class="side-nav"
		[ngClass]="{'slide-in': open, 'slide-out': !open}">
    	<nav
    	   [attr.aria-expanded]="open"
    	   role="navigation"
		   aria-label="side navigation">
			<dl class="side-nav_accordion" role="presentation">
				<ng-content></ng-content>
			</dl>
		</nav>
	</aside>
  `
})
export class SideNav {
	@Input() open = true;
}
