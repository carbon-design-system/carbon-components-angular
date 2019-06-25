import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { UIShellModule } from "./ui-shell.module";
import { SearchModule } from "./../search/search.module";
import { DialogModule } from "./../dialog/dialog.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("UI Shell", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIShellModule,
				SearchModule,
				DialogModule,
				DocumentationModule
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
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
							<path
								d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
								12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
								23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
								14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
								10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
								10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
						</svg>
					</ibm-header-action>
					<ibm-header-action title="action">
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
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
		`,
		props: {
			hasHamburger: boolean("Show Hamburger", true),
			expanded: action("Menu clicked")
		}
	}))
	.add("Side Navigation", () => ({
		template: `
			<ibm-sidenav>
				<ibm-sidenav-header title="Side navigation title" [options]="options">
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
				</ibm-sidenav-header>
				<ibm-sidenav-item>
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item>
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
					Link
				</ibm-sidenav-item>
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
	.add("Together", () => ({
		template: `
			<ibm-header name="[Platform]">
				<ibm-hamburger *ngIf="hasHamburger"></ibm-hamburger>
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
						<svg class="bx--navigation-menu-panel-expand-icon"
							width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
							<path
								d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
								12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
								23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
								14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
								10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
								10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
						</svg>
					</ibm-header-action>
					<ibm-header-action #secondAction title="action">
						<svg
							class="bx--navigation-menu-panel-expand-icon"
							width="20"
							height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
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
			<ibm-sidenav>
				<ibm-sidenav-header title="Side navigation title" [options]="options">
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
				</ibm-sidenav-header>
				<ibm-sidenav-item>
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
					Link
				</ibm-sidenav-item>
				<ibm-sidenav-item>
					<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
						<path
							d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
							12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
							23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
							14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
							10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
							10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
					</svg>
					Link
				</ibm-sidenav-item>
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
			<ibm-panel [expanded]="firstAction.active">
				<ibm-product-switcher header="My Products">
					<ibm-search size="sm" theme="light"></ibm-search>
					<ibm-product-switcher-list>
						<ibm-product-switcher-list-item>
							<svg icon width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
								<path
									d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
									12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
									23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
									14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
									10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
									10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
							</svg>
							One
							<ibm-overflow-menu flip="true">
								<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
								<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
							</ibm-overflow-menu>
						</ibm-product-switcher-list-item>
					</ibm-product-switcher-list>
					<ibm-product-switcher-item>
						<button class="bx--product-switcher__all-btn">View all products</button>
					</ibm-product-switcher-item>
				</ibm-product-switcher>
			</ibm-panel>
			<ibm-panel [expanded]="secondAction.active"></ibm-panel>
		`,
		props: {
			hasHamburger: boolean("Show Hamburger", true),
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
