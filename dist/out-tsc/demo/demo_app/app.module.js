var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            TopNavDemo
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
            DropdownModule,
            TopNavModule,
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
                    path: "dropdown",
                    component: DropdownDemo
                },
                {
                    path: "top-nav",
                    component: TopNavDemo
                }
            ])
        ],
        providers: [IconService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../demo/demo_app/app.module.js.map