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
import { DropdownDemo } from "./dropdown-demo/dropdown-demo.component";
import { ErrorModalComponent } from "./modal-demo/error-modal.component";
import { FormModalComponent } from "./modal-demo/form-modal.component";
import { DrilldownModalComponent } from "./modal-demo/drilldown-modal.component";
import { FormsDemo } from "./forms-demo/forms-demo.component";
import { IconDemo } from "./icon-demo/icon-demo.component";
import { ListGroupDemo } from "./list-group-demo/list-group-demo.component";
import { ModalDemo } from "./modal-demo/modal-demo.component";
import { PopoverDemo } from "./popover-demo/popover-demo.component";
import { SampleModalComponent } from "./modal-demo/sample-modal.component";
import { TableDemo } from "./table-demo/table-demo.component";
import { TableDemoService } from "./table-demo/table-demo.service";
import { TabsDemo } from "./tabs-demo/tabs-demo.component";
import { TooltipDemo } from "./tooltip-demo/tooltip-demo.component";
import { TopNavDemo } from "./top-nav-demo/top-nav-demo.component";
import { XLModalComponent } from "./modal-demo/extra-large.component";
import { ComboboxDemo } from "./combobox-demo/combobox-demo.component";
import { ButtonMenuDemo } from "./button-menu-demo/button-menu-demo.component";
import { CalendarDemo } from "./calendar-demo/calendar-demo.component";


// component imports
import {
	BannerModule,
	BannerService,
	ButtonMenuModule,
	ComboBoxModule,
	DialogModule,
	DropdownModule,
	IconModule,
	IconService,
	ListGroupModule,
	ModalModule,
	NFormsModule,
	TableModule,
	TabsModule,
	TopNavModule,
	PillInputModule,
	CalendarModule
} from "./../../src";


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ButtonMenuDemo,
		TableDemo,
		FormsDemo,
		IconDemo,
		PopoverDemo,
		TabsDemo,
		ListGroupDemo,
		DropdownDemo,
		TopNavDemo,
		DropdownDemo,
		ModalDemo,
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		DrilldownModalComponent,
		TooltipDemo,
		BannerDemo,
		BannerCustom,
		ComboboxDemo,
		CalendarDemo
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
		BannerModule,
		BrowserAnimationsModule,
		BrowserModule,
		ButtonMenuModule,
		ComboBoxModule,
		DialogModule,
		DropdownModule,
		FormsModule,
		HttpModule,
		IconModule,
		ListGroupModule,
		ModalModule,
		NFormsModule,
		PillInputModule,
		ReactiveFormsModule,
		TableModule,
		TabsModule,
		TopNavModule,
		CalendarModule,
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
				path: "list-group",
				component: ListGroupDemo
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
				path: "modal",
				component: ModalDemo
			},
			{
				path: "button-menu",
				component: ButtonMenuDemo
			},
			{
				path: "banner",
				component: BannerDemo
			},
			{
				path: "calendar",
				component: CalendarDemo
			},
			{
				path: "combobox",
				component: ComboboxDemo
			}
		], {
			useHash: true
		}),
		TranslateModule.forRoot()
	],
	providers: [
		IconService,
		BannerService,
		TableDemoService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
