// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";

@NgModule({
	exports: [
		IconDirective
	],
	imports: [
		CommonModule,
		IconDirective
	]
})
export class IconModule {
}
