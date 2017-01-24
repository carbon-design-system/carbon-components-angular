import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

// demo imports
import { TableDemo } from "./table_demo/table-demo.component";
import { TableModule } from "./../../src/table/table.module";
import { CoreDemo } from "./core_demo/core-demo.component";
import { GlyphiconModule, IconService } from "./../../src/glyphicon/glyphicon.module";
import { GlyphiconDemo } from "./glyphicon_demo/glyphicon-demo.component";
import { PopoverDemo } from "./popover_demo/popover-demo.component";
import { PopoverModule } from "./../../src/popover/popover.module";
import { TabsDemo } from "./tabs_demo/tabs_demo.component";
import { TabsModule } from "./../../src/tabs/tabs.module";
import { ListViewDemo } from "./list_view_demo/list-view-demo.component";
import { ListViewModule } from "./../../src/list-view/list-view.module";
import { DropdownModule } from "./../../src/dropdown/dropdown.module";
import { DropdownDemo } from "./dropdown_demo/dropdown_demo.component";
import { TopNavDemo } from "./top_nav_demo/top-nav-demo.component";
import { TopNavModule } from "./../../src/top-nav/top-nav.module";
import { NestedViewDemo } from "./nested_view_demo/nested-view-demo.component";
import { NestedViewModule } from "./../../src/nested-view/nested-view.module";
import { TypeaheadDemo } from "./typeahead_demo/typeahead-demo.component";
import { TypeaheadModule } from "./../../src/typeahead/typeahead.module";
import { SideNavDemo } from "./side_nav_demo/side-nav-demo.component";
import { SideNavModule } from "./../../src/side-nav/side-nav.module";
import { HamburgerDemo } from "./hamburger_demo/hamburger-demo.component";
import { HamburgerModule } from "./../../src/hamburger/hamburger.module";


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo,
		GlyphiconDemo,
		PopoverDemo,
		TabsDemo,
		ListViewDemo,
		DropdownDemo,
		TopNavDemo,
		NestedViewDemo,
		DropdownDemo,
		TypeaheadDemo,
		SideNavDemo,
		HamburgerDemo
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		TableModule,
		TabsModule,
		GlyphiconModule,
		PopoverModule,
		ListViewModule,
		NestedViewModule,
		DropdownModule,
		TopNavModule,
		TypeaheadModule,
		SideNavModule,
		HamburgerModule,
		RouterModule.forRoot([
			{
				path: "",
				component: HomeComponent
			},
			{
				path: "table",
				component: TableDemo
			},
			{
				path: "css",
				component: CoreDemo
			},
			{
				path: "glyphicon",
				component: GlyphiconDemo
			},
			{
				path: "popover",
				component: PopoverDemo
			},
			{
				path: "tabs",
				component: TabsDemo
			},
			{
				path: "list-view",
				component: ListViewDemo
			},
			{
				path: "nested-view",
				component: NestedViewDemo
			},
			{
				path: "dropdown",
				component: DropdownDemo
			},
			{
				path: "top-nav",
				component: TopNavDemo
			},
			{
				path: "typeahead",
				component: TypeaheadDemo
			},
			{
				path: "side-nav",
				component: SideNavDemo
			},
			{
				path: "hamburger",
				component: HamburgerDemo
			}
		], {
			useHash: true
		})
	],
	providers: [IconService],
	bootstrap: [AppComponent]
})
export class AppModule { }
