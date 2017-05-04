import { Component, Input } from "@angular/core";

@Component({
	selector: "cdl-side-nav",
	template: `
    <aside class="left-nav"
    	   [ngClass]="{isOpen: open, 'left-nav-sticky': sticky}"
    	   [attr.aria-expanded]="open"
    	   role="complementary">
			<div class="left-nav-container">
				<ng-content></ng-content>
			</div>
    </aside>
  `,
	styleUrls: ["./side-nav.component.scss"]
})
export class SideNav {
	@Input() open = true;
	@Input() sticky = false;
}
