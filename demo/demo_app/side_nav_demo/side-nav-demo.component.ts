import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	template: `
	<div>
		<h1>Side nav demo</h1>
		<div style="position: relative; height: 600px; margin-bottom: 50px; overflow: hidden;">
			<ng-template #listTpl let-item="item">
				<n-icon *ngIf="item.icon" icon="{{item.icon}}" size="md"></n-icon>
				{{item.content}}
			</ng-template>

			<n-top-nav
				[brand]="topNavBrand"
				[badge]="topNavBadge"
				[fixed]="false">
					<n-hamburger
						(onClick)="onClick($event)"
						[selected]="sideNavOpen"
						hamburger>
					</n-hamburger>
			</n-top-nav>

			<n-side-nav [open]="sideNavOpen">
				<n-side-nav-item routerLink="/table" tabindex="-1">
					<n-icon
						class="side-nav-glyph"
						icon="lightbulb"
						size="md">
					</n-icon>
					<span class="side-nav-item">Understand</span>
				</n-side-nav-item>
				<n-side-nav-item>
					<n-icon
						class="side-nav-glyph"
						icon="gears"
						size="md">
					</n-icon>
					<span class="side-nav-item">More</span>
					<n-side-nav-item>
						<span class="side-nav-item">Some long content here</span>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And even longer one here</span>
						<div class="side-nav-pane-sub-template">
							<n-side-nav-pane-title>And even longer one here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems"
								[template]="listTpl">
							</n-tree-view>
						</div>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And here</span>
						<div class="side-nav-pane-sub-template">
							<n-side-nav-pane-title>And here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems2"
								[template]="listTpl">
							</n-tree-view>
						</div>
					</n-side-nav-item>
				</n-side-nav-item>
				<n-side-nav-item>
					<n-icon
						class="side-nav-glyph"
						icon="attributes"
						size="md">
					</n-icon>
					<span class="side-nav-item">Even more</span>
					<n-side-nav-item>
						<span class="side-nav-item">To show how ellipsis gets activated</span>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And this is how ellipsis happens</span>
						<div class="side-nav-pane-sub-template">
							<n-side-nav-pane-title>And this is how ellipsis happens</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems3"
								[template]="listTpl">
							</n-tree-view>
						</div>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And here</span>
						<div class="side-nav-pane-sub-template">
							<n-side-nav-pane-title>And here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems4"
								[template]="listTpl">
							</n-tree-view>
						</div>
					</n-side-nav-item>
				</n-side-nav-item>
			</n-side-nav>
		</div>
	</div>
	`,
	encapsulation: ViewEncapsulation.None
})

export class SideNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";
	private sideNavOpen = true;


	private demoItems = [
		{
			content: "Understand",
			selected: false,
			icon: "alert",
			items: [
				{
					content: "Experience integrations",
					selected: false,
					items: [
						{
							content: "Experience integrations",
							selected: false
						},
						{
							content: "Predictive custom intelligence",
							selected: false
						},
					]
				},
				{
					content: "Predictive custom intelligence",
					selected: false
				},
			]
		},
		{
			content: "Plan",
			selected: false,
			icon: "alert"
		},
		{
			content: "Design",
			selected: false,
			icon: "alert"
		},
		{
			content: "Build",
			selected: false,
			icon: "alert"

		},
		{
			content: "Listen",
			selected: false,
			icon: "alert"

		},
		{
			content: "Optimize",
			selected: false,
			icon: "alert"

		}
	];

	private demoItems2 = this.clone(this.demoItems);
	private demoItems3 = this.clone(this.demoItems);
	private demoItems4 = this.clone(this.demoItems);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	private onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}
}
