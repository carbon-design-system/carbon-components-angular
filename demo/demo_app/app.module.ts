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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo,
		GlyphiconDemo,
		PopoverDemo,
		TabsDemo
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		TableModule,
		TabsModule,
		GlyphiconModule,
		PopoverModule,
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
			}
		])
	],
	providers: [IconService],
	bootstrap: [AppComponent]
})
export class AppModule { }
