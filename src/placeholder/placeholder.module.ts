// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { Placeholder } from "./placeholder.component";
import { PLACEHOLDER_SERVICE_PROVIDER } from "./placeholder.service";

@NgModule({
	exports: [Placeholder],
	providers: [PLACEHOLDER_SERVICE_PROVIDER],
	imports: [CommonModule, Placeholder]
})
export class PlaceholderModule { }
