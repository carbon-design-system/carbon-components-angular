import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

// demo imports
import { AlertCustom } from "./alert_demo/alert-demo-custom";
import { AlertDemo } from "./alert_demo/alert-demo-component";
// import { CalendarDemo } from "./calendar_demo/calendar-demo.component";
import { ChartsDemo } from "./charts_demo/charts-demo.component";
import { CoreDemo } from "./core_demo/core-demo.component";
// import { DatepickerDemo } from "./datepicker_demo/datepicker-demo.component";
import { DropdownDemo } from "./dropdown_demo/dropdown_demo.component";
import { ErrorModalComponent } from "./modal_demo/error-modal.component";
import { FormModalComponent } from "./modal_demo/form-modal.component";
import { FormsDemo } from "./forms_demo/forms-demo.component";
import { GlyphiconDemo } from "./glyphicon_demo/glyphicon-demo.component";
import { ListViewDemo } from "./list_view_demo/list-view-demo.component";
import { ModalDemo } from "./modal_demo/modal-demo.component";
import { PopoverDemo } from "./popover_demo/popover-demo.component";
import { SampleModalComponent } from "./modal_demo/sample-modal.component";
import { SideNavDemo } from "./side_nav_demo/side-nav-demo.component";
import { TableDemo } from "./table_demo/table-demo.component";
import { TabsDemo } from "./tabs_demo/tabs_demo.component";
import { TooltipDemo } from "./tooltip_demo/tooltip-demo.component";
import { TopNavDemo } from "./top_nav_demo/top-nav-demo.component";
import { TreeViewDemo } from "./tree_view_demo/tree-view-demo.component";
import { XLModalComponent } from "./modal_demo/extra-large.component";

// component imports
import {
	TableModule,
	TabsModule,
	GlyphiconModule,
	IconService,
	PopoverModule,
	ListViewModule,
	TreeViewModule,
	DropdownModule,
	TopNavModule,
	SideNavModule,
	ModalModule,
	AlertModule,
	AlertService,
	// CalendarModule,
	CDLFormsModule,
	// DatepickerModule,
	ChartsModule
} from "./../../src";


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo,
		FormsDemo,
		GlyphiconDemo,
		PopoverDemo,
		TabsDemo,
		ListViewDemo,
		DropdownDemo,
		TopNavDemo,
		TreeViewDemo,
		DropdownDemo,
		SideNavDemo,
		ModalDemo,
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		TooltipDemo,
		AlertDemo,
		AlertCustom,
		// CalendarDemo,
		// DatepickerDemo,
		ChartsDemo
	],
	entryComponents: [
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		AlertCustom
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		TableModule,
		TabsModule,
		GlyphiconModule,
		PopoverModule,
		ListViewModule,
		TreeViewModule,
		DropdownModule,
		TopNavModule,
		SideNavModule,
		ModalModule,
		AlertModule,
		// CalendarModule,
		CDLFormsModule,
		// DatepickerModule,
		ChartsModule,
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
				path: "forms",
				component: FormsDemo
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
				path: "tree-view",
				component: TreeViewDemo
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
			},
			/*{
				path: "calendar",
				component: CalendarDemo
			},
			{
				path: "datepicker",
				component: DatepickerDemo
			},*/
			{
				path: "charts",
				component: ChartsDemo
			}
		], {
			useHash: true
		})
	],
	providers: [IconService, AlertService],
	bootstrap: [AppComponent]
})
export class AppModule { }
