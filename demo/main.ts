import "./polyfills.ts";

// for reasons that are not entirely clear, we need this in order to build the demo
import "./demo-app/typings.d";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./demo-app";

if (window.location.hostname === "pages.github.ibm.com") {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
