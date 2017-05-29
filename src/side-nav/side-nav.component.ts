import { Component, Input } from "@angular/core";

@Component({
	selector: "cdl-side-nav",
	template: `
    <aside class="left-nav"
    	   [ngClass]="{isOpen: open, 'left-nav-fixed': fixed}"
    	   [attr.aria-expanded]="open"
    	   role="complementary">
			<div class="left-nav-container">
				<ng-content></ng-content>
			</div>
    </aside>
  `
})
export class SideNav {
	@Input() open = true;
	@Input() fixed = false;
}
