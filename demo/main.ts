import "./polyfills.ts";

import "./demo-app/typings.d";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./demo-app";

// fancy new scss
import "!style-loader!raw-loader!sass-loader!./../node_modules/@peretz/matter/scss/matter.scss";
// old scss
// import "!style-loader!raw-loader!sass-loader!./../src/core/common.scss";

if (window.location.hostname === "pages.github.ibm.com") {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
