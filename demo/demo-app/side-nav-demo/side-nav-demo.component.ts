import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "app-side-nav-demo",
	template: `
	<div>
		<h1 class="p-demo-heading">Side nav</h1>
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
				<n-side-nav-group routerLink="/table" tabindex="-1">
					<div class="accordion_icon">
						<n-icon
							icon="lightbulb"
							size="md">
						</n-icon>
					</div>
					<span class="accordion_title">Understand</span>
				</n-side-nav-group>
				<n-side-nav-group [expanded]="true">
					<div class="accordion_icon">
						<n-icon
							icon="gears"
							size="md">
						</n-icon>
					</div>
					<span class="accordion_title">More</span>
					<n-side-nav-item >
						<span class="side-nav-item">Some long content here</span>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And even longer one here</span>
						<n-side-nav-subpanel>
							<n-side-nav-pane-title>And even longer one here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems"
								[template]="listTpl"
								(selected)="onSelect($event)">
							</n-tree-view>
						</n-side-nav-subpanel>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And here</span>
						<n-side-nav-subpanel>
							<n-side-nav-pane-title>And here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems2"
								[template]="listTpl"
								(selected)="onSelect($event)">
							</n-tree-view>
						</n-side-nav-subpanel>
					</n-side-nav-item>
				</n-side-nav-group>
				<n-side-nav-group>
					<div class="accordion_icon">
						<n-icon
							icon="attributes"
							size="md">
						</n-icon>
					</div>
					<span class="accordion_title">Even more</span>
					<n-side-nav-item>
						<span class="side-nav-item">To show how ellipsis gets activated</span>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And this is how ellipsis happens</span>
						<n-side-nav-subpanel>
							<n-side-nav-pane-title>And this is how ellipsis happens</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems3"
								[template]="listTpl"
								(selected)="onSelect($event)">
							</n-tree-view>
						</n-side-nav-subpanel>
					</n-side-nav-item>
					<n-side-nav-item>
						<span class="side-nav-item">And here</span>
						<n-side-nav-subpanel>
							<n-side-nav-pane-title>And here</n-side-nav-pane-title>
							<n-tree-view
								[items]="demoItems4"
								[template]="listTpl"
								(selected)="onSelect($event)">
							</n-tree-view>
						</n-side-nav-subpanel>
					</n-side-nav-item>
				</n-side-nav-group>
			</n-side-nav>
		</div>
	</div>
	`,
	styles: [`
		aside.side-nav {
			position: absolute;
		}
	`],
	encapsulation: ViewEncapsulation.None
})

export class SideNavDemo {
	topNavBadge = "Beta";
	topNavBrand = "Neutrino";
	sideNavOpen = true;

	demoItems = [
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

	demoItems2 = this.clone(this.demoItems);
	demoItems3 = this.clone(this.demoItems);
	demoItems4 = this.clone(this.demoItems);

	onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}

	onSelect(ev) {
		if (ev.item.items) {
			ev.item.opened = !ev.item.opened;
		} else {
			ev.item.selected = !ev.item.selected;
		}
	}

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}
}
