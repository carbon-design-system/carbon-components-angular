import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

// demo imports
import { BannerCustom } from "./banner-demo/banner-demo-custom";
import { BannerDemo } from "./banner-demo/banner-demo-component";
import { ChartsDemo } from "./charts-demo/charts-demo.component";
import { CoreDemo } from "./core-demo/core-demo.component";
import { DropdownDemo } from "./dropdown-demo/dropdown-demo.component";
import { ErrorModalComponent } from "./modal-demo/error-modal.component";
import { FormModalComponent } from "./modal-demo/form-modal.component";
import { DrilldownModalComponent } from "./modal-demo/drilldown-modal.component";
import { FormsDemo } from "./forms-demo/forms-demo.component";
import { IconDemo } from "./icon-demo/icon-demo.component";
import { ListViewDemo } from "./list-view-demo/list-view-demo.component";
import { ModalDemo } from "./modal-demo/modal-demo.component";
import { PopoverDemo } from "./popover-demo/popover-demo.component";
import { SampleModalComponent } from "./modal-demo/sample-modal.component";
import { SideNavDemo } from "./side-nav-demo/side-nav-demo.component";
import { TableDemo } from "./table-demo/table-demo.component";
import { TabsDemo } from "./tabs-demo/tabs-demo.component";
import { TooltipDemo } from "./tooltip-demo/tooltip-demo.component";
import { TopNavDemo } from "./top-nav-demo/top-nav-demo.component";
import { TreeViewDemo } from "./tree-view-demo/tree-view-demo.component";
import { XLModalComponent } from "./modal-demo/extra-large.component";
import { ComboboxDemo } from "./combobox-demo/combobox-demo.component";

import { AppDoc } from "./doc.component";

// component imports
import {
	TableModule,
	TabsModule,
	IconModule,
	IconService,
	PopoverModule,
	ListViewModule,
	TreeViewModule,
	DropdownModule,
	TopNavModule,
	SideNavModule,
	ModalModule,
	BannerModule,
	BannerService,
	NFormsModule,
	ChartsModule,
	ComboBoxModule
} from "./../../src";


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AppDoc,
		TableDemo,
		CoreDemo,
		FormsDemo,
		IconDemo,
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
		DrilldownModalComponent,
		TooltipDemo,
		BannerDemo,
		BannerCustom,
		ChartsDemo,
		ComboboxDemo
	],
	entryComponents: [
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		DrilldownModalComponent,
		BannerCustom
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		TableModule,
		TabsModule,
		IconModule,
		PopoverModule,
		ListViewModule,
		TreeViewModule,
		DropdownModule,
		TopNavModule,
		SideNavModule,
		ModalModule,
		BannerModule,
		NFormsModule,
		ChartsModule,
		ComboBoxModule,
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
				path: "icon",
				component: IconDemo
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
				path: "banner",
				component: BannerDemo
			},
			{
				path: "charts",
				component: ChartsDemo
			},
			{
				path: "combobox",
				component: ComboboxDemo
			}
		]),
		TranslateModule.forRoot()
	],
	providers: [
		IconService,
		BannerService,
		{provide: APP_BASE_HREF, useValue : "./" }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
