import { Component, Input } from "@angular/core";

@Component({
	selector: "n-side-nav",
	template: `
    <nav class="left-nav"
    	   [ngClass]="{isOpen: open, 'left-nav-fixed': fixed}"
    	   [attr.aria-expanded]="open"
    	   role="navigation"
		   aria-label="side navigation">
			<div class="left-nav-container">
				<ng-content></ng-content>
			</div>
    </nav>
  `
})
export class SideNav {
	@Input() open = true;
	@Input() fixed = false;
}
