import "./polyfills.ts";

import "./bootstrap/x1-ui-bootstrap.min.css";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./demo_app";

platformBrowserDynamic().bootstrapModule(AppModule);
