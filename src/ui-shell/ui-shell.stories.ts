import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { UIShellModule } from "./ui-shell.module";
import { SearchModule } from "./../search/search.module";
import { DialogModule } from "./../dialog/dialog.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Carbon32Module } from "@carbon/icons-angular/lib/carbon/32";
import { Fade16Module } from "@carbon/icons-angular/lib/fade/16";
import { Fade20Module } from "@carbon/icons-angular/lib/fade/20";


@Component({
	selector: "app-bar",
	template: "<h1>bar</h1>"
})
class BarComponent { }

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
class FooComponent { }

storiesOf("Components|UI Shell", module)
	.addDecorator(
		moduleMetadata({
			declarations: [BarComponent, FooComponent],
			imports: [
				UIShellModule,
				Carbon32Module,
				Fade16Module,
				SearchModule,
				Fade16Module,
				Fade20Module,
				DialogModule,
				DocumentationModule,
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
					initialNavigation: false,
					useHash: true
				})
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Header", () => ({
		template: `
			<ibm-header name="[Platform]">
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
					<ibm-header-action title="action">
						<svg icon ibmIconFade20></svg>
					</ibm-header-action>
					<ibm-header-action title="action">
						<svg icon ibmIconFade20></svg>
					</ibm-header-action>
				</ibm-header-global>
			</ibm-header>
		`,
		props: {
			hasHamburger: boolean("Show Hamburger", true),
			expanded: action("Menu clicked")
		}
	}))
	.add("Header with template", () => ({
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
					<ibm-header-action title="action">
						<svg icon ibmIconFade20></svg>
					</ibm-header-action>
					<ibm-header-action title="action">
						<svg icon ibmIconFade20></svg>
					</ibm-header-action>
				</ibm-header-global>
			</ibm-header>

			<ng-template #brandTemplate>
				<a class="bx--header__name">
					<ibm-icon-carbon32 style="stroke:white;fill:white"></ibm-icon-carbon32>
					<span class="bx--header__name--prefix">IBM</span>
					[Platform]
				</a>
			</ng-template>
		`,
		props: {
			hasHamburger: boolean("Show Hamburger", true),
			expanded: action("Menu clicked")
		}
	}))
	.add("Header with router", () => ({
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
		`,
		props: {
			expanded: action("Menu clicked")
		}
	}))
	.add("Side Navigation", () => ({
		template: `
			<ibm-sidenav>
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-menu title="Category title">
					<svg icon ibmIconFade16></svg>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
				</ibm-sidenav-menu>
			</ibm-sidenav>
		`,
		props: {
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
		}
	}))
	.add("Side Navigation with router", () => ({
		template: `
			<ibm-sidenav>
				<ibm-sidenav-item [route]="['foo']">
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item [route]="['bar']">
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-menu title="Category title">
					<svg icon ibmIconFade16></svg>
					<ibm-sidenav-item [route]="['foo']">Link</ibm-sidenav-item>
					<ibm-sidenav-item [route]="['bar']">Link</ibm-sidenav-item>
					<ibm-sidenav-item [route]="['foo']">Link</ibm-sidenav-item>
				</ibm-sidenav-menu>
			</ibm-sidenav>
			<div>
				<router-outlet></router-outlet>
			</div>
		`
	}))
	.add("Right Panel with router", () => ({
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
	}))
	.add("Together", () => ({
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
					<ibm-header-action #firstAction title="action">
						<svg icon ibmIconFade20 ></svg>
					</ibm-header-action>
					<ibm-header-action #secondAction title="action">
						<svg icon ibmIconFade20 ></svg>
					</ibm-header-action>
				</ibm-header-global>
			</ibm-header>
			<ibm-sidenav [expanded]="active">
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-menu title="Category title">
					<svg icon ibmIconFade16></svg>
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
		`,
		props: {
			hasHamburger: boolean("Show Hamburger", true),
			active: boolean("Left panel active", true),
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
		}
	}))
	.add("Side Navigation Rail", () => ({
		template: `
			<ibm-sidenav rail="true" [expanded]="false">
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item>
					<svg icon ibmIconFade16></svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-menu title="Category title">
					<svg icon ibmIconFade16></svg>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
					<ibm-sidenav-item>Link</ibm-sidenav-item>
				</ibm-sidenav-menu>
			</ibm-sidenav>
		`,
		props: {
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
		}
	}))
	.add("Header Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Header.html"></ibm-documentation>
		`
	}))
	.add("Side Nav Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/SideNav.html"></ibm-documentation>
		`
	}));
