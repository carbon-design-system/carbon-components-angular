import "./polyfills.ts";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./demo_app";

import "!style-loader!raw-loader!sass-loader!../src/core/_common.scss";

platformBrowserDynamic().bootstrapModule(AppModule);
