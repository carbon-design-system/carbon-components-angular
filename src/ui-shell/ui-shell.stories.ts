/* tslint:disable variable-name */

import { RouterModule } from "@angular/router";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { SearchModule } from "../search";
import { IconModule } from "../icon";
import { ThemeModule } from "../theme";
import { UIShellModule, NavigationItem } from "./";

import {
	BarComponent,
	FooComponent,
	HeaderFluidComponent
} from "./stories";

export default {
	title: "Components/UI Shell",
	decorators: [
		moduleMetadata({
			declarations: [
				BarComponent,
				FooComponent,
				HeaderFluidComponent
			],
			imports: [
				ThemeModule,
				UIShellModule,
				IconModule,
				SearchModule,
				RouterModule.forChild([
					{
						path: "bar",
						component: BarComponent
					},
					{
						path: "foo",
						component: FooComponent
					}
				])
			]
		})
	],
	args: {
		theme: "white"
	},
	argTypes: {
		theme: {
			options: ["white", "g10", "g90", "g100"],
			control: "radio"
		}
	}
} as Meta;

const HeaderTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-header name="[Platform]">
				<cds-hamburger *ngIf="hasHamburger" (click)="expanded($event)"></cds-hamburger>
				<cds-header-navigation>
					<cds-header-item>Catalog</cds-header-item>
					<cds-header-item isCurrentPage="true">Docs</cds-header-item>
					<cds-header-item>Support</cds-header-item>
					<cds-header-menu title="Manage">
						<cds-header-item>Link 1</cds-header-item>
						<cds-header-item>Link 2</cds-header-item>
						<cds-header-item>Link 3</cds-header-item>
					</cds-header-menu>
				</cds-header-navigation>
				<cds-header-global>
					<cds-header-action description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
					<cds-header-action description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
				</cds-header-global>
			</cds-header>
		</div>
	`
});
export const Header = HeaderTemplate.bind({});
Header.args = {
	hasHamburger: true
};
Header.argTypes = {
	expanded: {
		action: "Menu clicked!"
	}
};

const HeaderFluidTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/ui-shell/stories/header-fluid.component.ts
		-->
		<app-header-fluid [headerItems]="headerItems"></app-header-fluid>
	`
});
export const HeaderFluid = HeaderFluidTemplate.bind({});
HeaderFluid.storyName = "Header fluid items to side navigation";
HeaderFluid.args = {
	headerItems: [
		{
			type: "item",
			content: "Catalog",
			title: "Catalog"
		},
		{
			type: "item",
			content: "Docs",
			isCurrentPage: true
		},
		{
			type: "item",
			content: "Support"
		},
		{
			type: "menu",
			title: "Manage",
			menuItems: [
				{
					type: "item",
					content: "Link 1"
				},
				{
					type: "item",
					content: "Link 2"
				},
				{
					type: "item",
					content: "Link 3"
				}
			]
		}
	]
};
HeaderFluid.argTypes = {
	headerItems: {
		control: false
	},
	theme: {
		control: false
	}
};

const HeaderWithTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-header name="[Platform]" [brand]="brandTemplate">
				<cds-hamburger *ngIf="hasHamburger" (click)="expanded($event)"></cds-hamburger>
				<cds-header-navigation>
					<cds-header-item>Catalog</cds-header-item>
					<cds-header-item>Docs</cds-header-item>
					<cds-header-item>Support</cds-header-item>
					<cds-header-menu title="Manage">
						<cds-header-item>Link 1</cds-header-item>
						<cds-header-item>Link 2</cds-header-item>
						<cds-header-item>Link 3</cds-header-item>
					</cds-header-menu>
				</cds-header-navigation>
				<cds-header-global>
					<cds-header-action description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
					<cds-header-action description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
				</cds-header-global>
			</cds-header>
		</div>
		<ng-template #brandTemplate>
			<a class="cds--header__name">
				<svg cdsIcon="carbon" size="32" style="stroke:white;fill:white"></svg>
				<span class="cds--header__name--prefix">IBM</span>
				[Platform]
			</a>
		</ng-template>
	`
});
export const HeaderWithTemp = HeaderWithTemplate.bind({});
HeaderWithTemp.storyName = "Header with template";
Header.args = {
	hasHamburger: true
};
Header.argTypes = {
	expanded: {
		action: "Menu clicked!"
	}
};

const HeaderRouterTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-header name="[Platform]" [route]="['bar']">
				<cds-header-navigation>
					<cds-header-item [route]="['foo']">Catalog</cds-header-item>
					<cds-header-item [route]="['bar']">Docs</cds-header-item>
					<cds-header-item [route]="['foo']">Support</cds-header-item>
					<cds-header-menu title="Manage">
						<cds-header-item [route]="['foo']">Link 1</cds-header-item>
						<cds-header-item [route]="['bar']">Link 2</cds-header-item>
						<cds-header-item [route]="['foo']">Link 3</cds-header-item>
					</cds-header-menu>
				</cds-header-navigation>
			</cds-header>
		</div>
		<div style="margin-top: 2rem">
			<router-outlet></router-outlet>
		</div>
	`
});
export const HeaderWithRouter = HeaderRouterTemplate.bind({});
Header.argTypes = {
	expanded: {
		action: "Menu clicked!"
	}
};

const SideNavigationTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-sidenav>
				<cds-sidenav-item [active]="true">
					Link
				</cds-sidenav-item>
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-menu title="Category title">
					<svg cdsIcon="fade" icon size="16"></svg>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
		</div>
	`
});
export const SideNavigation = SideNavigationTemplate.bind({});
SideNavigation.args = {
	options: [
		{
			content: "Option 1",
			value: 1
		},
		{
			content: "Option 2",
			value: 2
		},
		{
			content: "Option 3",
			value: 3
		}
	]
};
SideNavigation.argTypes = {
	options: {
		control: false
	}
};

const SideNavigationRouterTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-sidenav>
				<cds-sidenav-item [route]="['foo']">
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-item [route]="['bar']">
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-menu title="Category title">
					<svg cdsIcon="fade" icon size="16"></svg>
					<cds-sidenav-item [route]="['foo']">Link</cds-sidenav-item>
					<cds-sidenav-item [route]="['bar']">Link</cds-sidenav-item>
					<cds-sidenav-item [route]="['foo']">Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
		</div>
		<div>
			<router-outlet></router-outlet>
		</div>
	`
});
export const SideNavigationRouter = SideNavigationRouterTemplate.bind({});
SideNavigationRouter.storyName = "Side Navigation with router";

const SidePanelTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-panel expanded="true">
				<cds-switcher-list>
					<cds-switcher-list-item [route]="['foo']">Switcher item one</cds-switcher-list-item>
					<cds-switcher-list-item [route]="['bar']">Switcher item two</cds-switcher-list-item>
					<cds-switcher-list-item [route]="['foo']">Switcher item three</cds-switcher-list-item>
					<cds-switcher-list-item [route]="['bar']">Switcher item four</cds-switcher-list-item>
				</cds-switcher-list>
			</cds-panel>
		</div>
		<div>
			<router-outlet></router-outlet>
		</div>
	`
});
export const SidePanel = SidePanelTemplate.bind({});
SidePanel.storyName = "Side Panel with router";

const TogetherTemplate: Story = (args) => ({
	props: args,
	template: `
		<div>
			<cds-header name="[Platform]">
				<cds-hamburger *ngIf="hasHamburger" [active]="active" (selected)="active = !active"></cds-hamburger>
				<cds-header-navigation>
					<cds-header-item>Catalog</cds-header-item>
					<cds-header-item>Docs</cds-header-item>
					<cds-header-item>Support</cds-header-item>
					<cds-header-menu title="Manage">
						<cds-header-item>Link 1</cds-header-item>
						<cds-header-item>Link 2</cds-header-item>
						<cds-header-item>Link 3</cds-header-item>
					</cds-header-menu>
				</cds-header-navigation>
				<cds-header-global>
					<cds-header-action #firstAction description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
					<cds-header-action [(active)]="secondAction" description="action">
						<svg cdsIcon="fade" size="20"></svg>
					</cds-header-action>
				</cds-header-global>
			</cds-header>
			<cds-sidenav [expanded]="active">
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-menu title="Category title">
					<svg cdsIcon="fade" size="16"></svg>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item [active]="hasActiveChild">Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
			<cds-panel [expanded]="firstAction.active"></cds-panel>
			<cds-panel [expanded]="secondAction">
				<cds-switcher-list>
					<cds-switcher-list-item active="true">Switcher item one</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item two</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item three</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item four</cds-switcher-list-item>
				</cds-switcher-list>
			</cds-panel>
		</div>
	`
});
export const Together = TogetherTemplate.bind({});
Together.args = {
	hasHamburger: true,
	active: true,
	secondAction: false,
	hasActiveChild: true,
	options: [
		{
			content: "Option 1",
			value: 1
		},
		{
			content: "Option 2",
			value: 2
		},
		{
			content: "Option 3",
			value: 3
		}
	]
};
Together.argTypes = {
	options: {
		control: false
	}
};

const SideNavigationRailTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-sidenav rail="true" [expanded]="false">
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-menu title="Category title">
					<svg cdsIcon="fade" icon size="16"></svg>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
		</div>
	`
});
export const SideNavigationRail = SideNavigationRailTemplate.bind({});
SideNavigationRail.args = {
	options: [
		{
			content: "Option 1",
			value: 1
		},
		{
			content: "Option 2",
			value: 2
		},
		{
			content: "Option 3",
			value: 3
		}
	]
};
SideNavigationRail.argTypes = {
	options: {
		control: false
	}
};

const ModelTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-header name="[Platform]">
				<cds-hamburger *ngIf="hasHamburger" [active]="active" (selected)="active = !active"></cds-hamburger>
				<cds-header-navigation [navigationItems]="headerItems">
				</cds-header-navigation>
				<cds-header-global>
					<cds-header-action #firstAction description="action">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							aria-hidden="true">
							<path
								d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
								12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
								23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
								14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
								10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
								10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
						</svg>
					</cds-header-action>
					<cds-header-action #secondAction description="action">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							aria-hidden="true">
							<path
								d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
								12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
								23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
								14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
								10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
								10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
						</svg>
					</cds-header-action>
				</cds-header-global>
			</cds-header>
			<cds-sidenav [navigationItems]="headerItems">
				<cds-sidenav-menu title="Category title">
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
			<cds-panel [expanded]="firstAction.active"></cds-panel>
			<cds-panel [expanded]="secondAction.active">
				<cds-switcher-list>
					<cds-switcher-list-item active="true">Switcher item one</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item two</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item three</cds-switcher-list-item>
					<cds-switcher-list-item>Switcher item four</cds-switcher-list-item>
				</cds-switcher-list>
			</cds-panel>
		</div>
		<router-outlet></router-outlet>
	`
});
export const WithModel = ModelTemplate.bind({});
SideNavigationRail.args = {
	options: [
		{
			content: "Option 1",
			value: 1
		},
		{
			content: "Option 2",
			value: 2
		},
		{
			content: "Option 3",
			value: 3
		}
	],
	headerItems: [{
		type: "item",
		route: ["foo"],
		content: "Catalog"
	},
	{
		type: "item",
		route: ["bar"],
		content: "Docs"
	},
	{
		type: "item",
		route: ["foo"],
		content: "Support"
	},
	{
		type: "menu",
		title: "Manage",
		trigger: "click",
		menuItems: [
			{
				type: "item",
				route: ["foo"],
				content: "Link 1"
			},
			{
				type: "item",
				route: ["bar"],
				content: "Link 2"
			}
		]
	}]
};
SideNavigationRail.argTypes = {
	options: {
		control: false
	},
	headerItems: {
		control: false
	}
};

const AngularRoutingTemplate: Story = (args) => ({
	props: args,
	template: `
		<div [cdsTheme]="theme">
			<cds-sidenav rail="true" [expanded]="false">
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-item>
					<svg cdsIcon="fade" size="16"></svg>
					Link
				</cds-sidenav-item>
				<cds-sidenav-menu title="Category title">
					<svg cdsIcon="fade" icon size="16"></svg>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
					<cds-sidenav-item>Link</cds-sidenav-item>
				</cds-sidenav-menu>
			</cds-sidenav>
		<div>
	`
});
export const AngularRouting = AngularRoutingTemplate.bind({});
AngularRouting.storyName = "Use angular router attributes for routing";
