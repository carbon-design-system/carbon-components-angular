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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo,
		GlyphiconDemo,
		PopoverDemo,
		TabsDemo,
		ListViewDemo
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
			}
		])
	],
	providers: [IconService],
	bootstrap: [AppComponent]
})
export class AppModule { }
