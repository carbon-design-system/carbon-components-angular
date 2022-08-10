/* tslint:disable variable-name */

import { RouterModule } from "@angular/router";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { SearchModule } from "../search";
import { IconModule } from "../icon";
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
				UIShellModule,
				DocumentationModule,
				IconModule,
				SearchModule,
				RouterModule.forRoot([
					{
						path: "bar",
						component: BarComponent
					},
					{
						path: "foo",
						component: FooComponent
					}
				], {
					initialNavigation: "enabled",
					useHash: true
				})
			]
		})
	]
} as Meta;

const HeaderTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-header name="[Platform]">
			<ibm-hamburger *ngIf="hasHamburger" (click)="expanded($event)"></ibm-hamburger>
			<ibm-header-navigation>
				<ibm-header-item>Catalog</ibm-header-item>
				<ibm-header-item isCurrentPage="true">Docs</ibm-header-item>
				<ibm-header-item>Support</ibm-header-item>
				<ibm-header-menu title="Manage">
					<ibm-header-item>Link 1</ibm-header-item>
					<ibm-header-item>Link 2</ibm-header-item>
					<ibm-header-item>Link 3</ibm-header-item>
				</ibm-header-menu>
			</ibm-header-navigation>
			<ibm-header-global>
				<ibm-header-action description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
				<ibm-header-action description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
			</ibm-header-global>
		</ibm-header>
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
	headerItems: <NavigationItem[]>[
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
	}
};

const HeaderWithTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-header name="[Platform]" [brand]="brandTemplate">
			<ibm-hamburger *ngIf="hasHamburger" (click)="expanded($event)"></ibm-hamburger>
			<ibm-header-navigation>
				<ibm-header-item>Catalog</ibm-header-item>
				<ibm-header-item>Docs</ibm-header-item>
				<ibm-header-item>Support</ibm-header-item>
				<ibm-header-menu title="Manage">
					<ibm-header-item>Link 1</ibm-header-item>
					<ibm-header-item>Link 2</ibm-header-item>
					<ibm-header-item>Link 3</ibm-header-item>
				</ibm-header-menu>
			</ibm-header-navigation>
			<ibm-header-global>
				<ibm-header-action description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
				<ibm-header-action description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
			</ibm-header-global>
		</ibm-header>
		<ng-template #brandTemplate>
			<a class="cds--header__name">
				<svg ibmIcon="carbon" size="32" style="stroke:white;fill:white"></svg>
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
		<ibm-header name="[Platform]" [route]="['bar']">
			<ibm-header-navigation>
				<ibm-header-item [route]="['foo']">Catalog</ibm-header-item>
				<ibm-header-item [route]="['bar']">Docs</ibm-header-item>
				<ibm-header-item [route]="['foo']">Support</ibm-header-item>
				<ibm-header-menu title="Manage">
					<ibm-header-item [route]="['foo']">Link 1</ibm-header-item>
					<ibm-header-item [route]="['bar']">Link 2</ibm-header-item>
					<ibm-header-item [route]="['foo']">Link 3</ibm-header-item>
				</ibm-header-menu>
			</ibm-header-navigation>
		</ibm-header>
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
		<ibm-sidenav>
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-menu title="Category title">
				<svg ibmIcon="fade" icon size="16"></svg>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
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
		<ibm-sidenav>
			<ibm-sidenav-item [route]="['foo']">
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-item [route]="['bar']">
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-menu title="Category title">
				<svg ibmIcon="fade" icon size="16"></svg>
				<ibm-sidenav-item [route]="['foo']">Link</ibm-sidenav-item>
				<ibm-sidenav-item [route]="['bar']">Link</ibm-sidenav-item>
				<ibm-sidenav-item [route]="['foo']">Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
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
		<ibm-panel expanded="true">
			<ibm-switcher-list>
				<ibm-switcher-list-item [route]="['foo']">Switcher item one</ibm-switcher-list-item>
				<ibm-switcher-list-item [route]="['bar']">Switcher item two</ibm-switcher-list-item>
				<ibm-switcher-list-item [route]="['foo']">Switcher item three</ibm-switcher-list-item>
				<ibm-switcher-list-item [route]="['bar']">Switcher item four</ibm-switcher-list-item>
			</ibm-switcher-list>
		</ibm-panel>
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
		<ibm-header name="[Platform]">
			<ibm-hamburger *ngIf="hasHamburger" [active]="active" (selected)="active = !active"></ibm-hamburger>
			<ibm-header-navigation>
				<ibm-header-item>Catalog</ibm-header-item>
				<ibm-header-item>Docs</ibm-header-item>
				<ibm-header-item>Support</ibm-header-item>
				<ibm-header-menu title="Manage">
					<ibm-header-item>Link 1</ibm-header-item>
					<ibm-header-item>Link 2</ibm-header-item>
					<ibm-header-item>Link 3</ibm-header-item>
				</ibm-header-menu>
			</ibm-header-navigation>
			<ibm-header-global>
				<ibm-header-action #firstAction description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
				<ibm-header-action [(active)]="secondAction" description="action">
					<svg ibmIcon="fade" size="20"></svg>
				</ibm-header-action>
			</ibm-header-global>
		</ibm-header>
		<ibm-sidenav [expanded]="active">
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-menu title="Category title">
				<svg ibmIcon="fade" size="16"></svg>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item [active]="hasActiveChild">Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
		<ibm-panel [expanded]="firstAction.active"></ibm-panel>
		<ibm-panel [expanded]="secondAction">
			<ibm-switcher-list>
				<ibm-switcher-list-item active="true">Switcher item one</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item two</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item three</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item four</ibm-switcher-list-item>
			</ibm-switcher-list>
		</ibm-panel>
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
		<ibm-sidenav rail="true" [expanded]="false">
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-menu title="Category title">
				<svg ibmIcon="fade" icon size="16"></svg>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
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
		<ibm-header name="[Platform]">
			<ibm-hamburger *ngIf="hasHamburger" [active]="active" (selected)="active = !active"></ibm-hamburger>
			<ibm-header-navigation [navigationItems]="headerItems">
			</ibm-header-navigation>
			<ibm-header-global>
				<ibm-header-action #firstAction description="action">
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
				</ibm-header-action>
				<ibm-header-action #secondAction description="action">
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
				</ibm-header-action>
			</ibm-header-global>
		</ibm-header>
		<ibm-sidenav [navigationItems]="headerItems">
			<ibm-sidenav-menu title="Category title">
				<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
					<path
						d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
						12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
						23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
						14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
						10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
						10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
				</svg>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
		<ibm-panel [expanded]="firstAction.active"></ibm-panel>
		<ibm-panel [expanded]="secondAction.active">
			<ibm-switcher-list>
				<ibm-switcher-list-item active="true">Switcher item one</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item two</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item three</ibm-switcher-list-item>
				<ibm-switcher-list-item>Switcher item four</ibm-switcher-list-item>
			</ibm-switcher-list>
		</ibm-panel>
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
		<ibm-sidenav rail="true" [expanded]="false">
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-item>
				<svg ibmIcon="fade" size="16"></svg>
				Link
			</ibm-sidenav-item>
			<ibm-sidenav-menu title="Category title">
				<svg ibmIcon="fade" icon size="16"></svg>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
				<ibm-sidenav-item>Link</ibm-sidenav-item>
			</ibm-sidenav-menu>
		</ibm-sidenav>
	`
});
export const AngularRouting = AngularRoutingTemplate.bind({});
AngularRouting.storyName = "Use angular router attributes for routing";


const HeaderDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_ui_shell_header.header.html"></ibm-documentation>
	`
});
export const HeaderDocumentation = HeaderDocumentationTemplate.bind({});

const PanelDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_ui_shell_panel.panel.html"></ibm-documentation>
	`
});
export const PanelDocumentation = PanelDocumentationTemplate.bind({});

const SideNavDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_ui_shell_sidenav.sidenav.html"></ibm-documentation>
	`
});
export const SideNavDocumentation = SideNavDocumentationTemplate.bind({});
