import "./polyfills.ts";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./demo-app";

if (window.location.hostname === "pages.github.com") {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
