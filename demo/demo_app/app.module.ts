import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

//demo imports
import { TableDemo } from "./table_demo/table-demo.component";
import { TableModule } from "./../../src/table/table.module";
import { CoreDemo } from "./core_demo/core-demo.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		TableModule,
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
			}
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
