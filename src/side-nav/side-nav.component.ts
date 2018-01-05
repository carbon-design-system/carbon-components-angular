import { Component, Input } from "@angular/core";


/**
 * `SideNav` contains a single projection for side-nav content. Below is an example for a tree-view component.
 *
 *
 * ```html
 * <n-side-nav [open]="sideNavOpen">
 * 	<n-tree-view [items]="demoItems" [listTpl]="listTpl"> </n-tree-view>
 * </n-side-nav>
 * ```
 *
 * Full `SideNav` example:
 * ```html
 * <ng-template #listTpl let-item="item">
 * 	<n-icon *ngIf="item.icon" icon="{{item.icon}}" size="md"></n-icon>
 * 	{{item.content}}
 * </ng-template>
 *
 * <n-side-nav [open]="sideNavOpen">
 * 	<n-side-nav-item routerLink="/somewhere/nice" tabindex="-1">
 * 		<n-icon
 * 			class="side-nav-glyph"
 * 			icon="lightbulb"
 * 			size="md">
 * 		</n-icon>
 * 		<span class="side-nav-item">Understand</span>
 * 	</n-side-nav-item>
 * 	<n-side-nav-item>
 * 		<n-icon
 * 			class="side-nav-glyph"
 * 			icon="attributes"
 * 			size="md">
 * 		</n-icon>
 * 		<span class="side-nav-item">Even more</span>
 * 		<n-side-nav-item>
 * 			<span class="side-nav-item">To show how ellipsis gets activated</span>
 * 		</n-side-nav-item>
 * 		<n-side-nav-item>
 * 			<span class="side-nav-item">And this is how ellipsis happens</span>
 * 			<div class="side-nav-pane-sub-template">
 * 				<n-side-nav-pane-title>And this is how ellipsis happens</n-side-nav-pane-title>
 * 				<n-tree-view
 * 					[items]="demoItems"
 * 					[template]="listTpl">
 * 				</n-tree-view>
 * 			</div>
 * 		</n-side-nav-item>
 * 		<n-side-nav-item>
 * 			<span class="side-nav-item">And here</span>
 * 			<div class="side-nav-pane-sub-template">
 * 				<n-side-nav-pane-title>And here</n-side-nav-pane-title>
 * 				<n-tree-view
 * 					[items]="demoItems2"
 * 					[template]="listTpl">
 * 				</n-tree-view>
 * 			</div>
 * 		</n-side-nav-item>
 * 	</n-side-nav-item>
 * </n-side-nav>
 * ```
 *
 * ```typescript
 * private demoItems = [
 * 	{
 * 		content: "Understand",
 * 		selected: false,
 * 		icon: "alert",
 * 		items: [
 * 			{
 * 				content: "Experience integrations",
 * 				selected: false,
 * 				items: [
 * 					{
 * 						content: "Experience integrations",
 * 						selected: false
 * 					},
 * 					{
 * 						content: "Predictive custom intelligence",
 * 						selected: false
 * 					},
 * 				]
 * 			},
 * 			{
 * 				content: "Predictive custom intelligence",
 * 				selected: false
 * 			},
 * 		]
 * 	},
 * 	{
 * 		content: "Plan",
 * 		selected: false,
 * 		icon: "alert"
 * 	},
 * 	{
 * 		content: "Design",
 * 		selected: false,
 * 		icon: "alert"
 * 	}
 * ];
 *
 * private demoItems2 = this.clone(this.demoItems);
 *
 * private clone (el) {
 * 	return JSON.parse(JSON.stringify(el));
 * }
 * ```
 *
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
