import { Component, Input } from "@angular/core";


/**
 * class: SideNav
 * selector: `n-side-nav`
 *
 * SideNav contains a single projection for side-nav content. Below is an example for a tree-view component.
 *
 *
 * ```html
 * <n-side-nav [open]="sideNavOpen">
 * 	<n-tree-view [items]="demoItems" [listTpl]="listTpl"> </n-tree-view>
 * </n-side-nav>
 * ```
 * @export
 * @class SideNav
 */
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
	/**
	 * Set to `true` if the navigation menu is open.
	 * @type {boolean}
	 * @memberof SideNav
	 */
	@Input() open = true;
}
