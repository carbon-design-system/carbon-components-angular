import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

// demo imports
import { TableDemo } from "./table_demo/table-demo.component";
import { CoreDemo } from "./core_demo/core-demo.component";
import { GlyphiconDemo } from "./glyphicon_demo/glyphicon-demo.component";
import { PopoverDemo } from "./popover_demo/popover-demo.component";
import { TabsDemo } from "./tabs_demo/tabs_demo.component";
import { ListViewDemo } from "./list_view_demo/list-view-demo.component";
import { DropdownDemo } from "./dropdown_demo/dropdown_demo.component";
import { TopNavDemo } from "./top_nav_demo/top-nav-demo.component";
import { NestedViewDemo } from "./nested_view_demo/nested-view-demo.component";
import { TypeaheadDemo } from "./typeahead_demo/typeahead-demo.component";
import { SideNavDemo } from "./side_nav_demo/side-nav-demo.component";
import { ModalDemo } from "./modal_demo/modal-demo.component";
import { SampleModalComponent } from "./modal_demo/sample-modal.component";
import { ErrorModalComponent } from "./modal_demo/error-modal.component";
import { XLModalComponent } from "./modal_demo/extra-large.component";
import { TooltipDemo } from "./tooltip_demo/tooltip-demo.component";
import { AlertDemo } from "./alert_demo/alert-demo-component";
import { AlertCustom } from "./alert_demo/alert-demo-custom";

// component imports
import {
	TableModule,
	TabsModule,
	GlyphiconModule,
	IconService,
	PopoverModule,
	ListViewModule,
	NestedViewModule,
	DropdownModule,
	TopNavModule,
	TypeaheadModule,
	SideNavModule,
	ModalModule,
	AlertModule,
	AlertService
} from "./../..";


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
		ModalDemo,
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		TooltipDemo,
		AlertDemo,
		AlertCustom
	],
	entryComponents: [
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		AlertCustom
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
		ModalModule,
		AlertModule,
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
				path: "tooltip",
				component: TooltipDemo
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
				path: "modal",
				component: ModalDemo
			},
			{
				path: "alert",
				component: AlertDemo
			}
		], {
			useHash: true
		})
	],
	providers: [IconService, AlertService],
	bootstrap: [AppComponent]
})
export class AppModule { }
